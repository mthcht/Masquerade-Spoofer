// ── Default state ──
const DFLT = {
  name: "Default", enabled: true,
  userAgent: "", acceptLanguage: "", referer: "", origin: "", dnt: "",
  customHeaders: [], domainFilters: [], filterMode: "all"
};
const DFLT_STATE = {
  activeProfileId: "default",
  profiles: { default: structuredClone(DFLT) },
  siteRules: []
};

let state = structuredClone(DFLT_STATE);

// ── Lifecycle ──
chrome.runtime.onInstalled.addListener(() => loadState(() => { applyRules(); rebuildMenu(); }));
chrome.runtime.onStartup.addListener(() => loadState(() => { applyRules(); rebuildMenu(); }));
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.state) {
    state = mergeState(changes.state.newValue);
    applyRules();
    rebuildMenu();
  }
});

function loadState(cb) {
  chrome.storage.local.get("state", r => {
    state = r.state ? mergeState(r.state) : structuredClone(DFLT_STATE);
    if (!r.state) chrome.storage.local.set({ state });
    cb();
  });
}

function mergeState(s) {
  const out = { ...DFLT_STATE, ...s };
  // Ensure at least one profile exists
  if (!out.profiles || !Object.keys(out.profiles).length) {
    out.profiles = { default: structuredClone(DFLT) };
    out.activeProfileId = "default";
  }
  if (!out.profiles[out.activeProfileId]) {
    out.activeProfileId = Object.keys(out.profiles)[0];
  }
  return out;
}

function getProfile() {
  return state.profiles[state.activeProfileId] || Object.values(state.profiles)[0];
}

// ── Apply rules (SINGLE combined rule for all headers) ──
const ALL_TYPES = [
  "main_frame","sub_frame","stylesheet","script","image","font","object",
  "xmlhttprequest","ping","csp_report","media","websocket","webtransport",
  "webbundle","other"
];

async function applyRules() {
  const existing = await chrome.declarativeNetRequest.getDynamicRules();
  const removeIds = existing.map(r => r.id);

  const defaultProfile = getProfile();
  if (!defaultProfile || !defaultProfile.enabled) {
    await chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: removeIds, addRules: [] });
    setBadge(false);
    return;
  }

  const rules = [];
  let ruleId = 1;
  let totalHeaders = 0;

  // ── Site-specific rules (higher priority) ──
  const siteRules = (state.siteRules || []).filter(sr => sr.domain && state.profiles[sr.profileId]);
  const siteRuleDomains = siteRules.map(sr => sr.domain);

  for (const sr of siteRules) {
    const siteProfile = state.profiles[sr.profileId];
    if (!siteProfile.enabled) continue;
    const headers = buildHeaders(siteProfile);
    if (headers.length === 0) continue;
    rules.push({
      id: ruleId++,
      priority: 2,  // higher than default
      action: { type: "modifyHeaders", requestHeaders: headers },
      condition: { resourceTypes: ALL_TYPES, requestDomains: [sr.domain] }
    });
    totalHeaders += headers.length;
  }

  // ── Default profile rule (lower priority, excludes site-rule domains) ──
  const defaultHeaders = buildHeaders(defaultProfile);
  if (defaultHeaders.length > 0) {
    const condition = { resourceTypes: ALL_TYPES };

    // Combine profile's own domain filter with site-rule exclusions
    const ownDomains = (defaultProfile.domainFilters || []).map(d => d.trim()).filter(Boolean);
    const allExcluded = [...new Set([...siteRuleDomains])];

    if (defaultProfile.filterMode === "only" && ownDomains.length > 0) {
      // Only apply to these domains, minus site-rule domains
      const filtered = ownDomains.filter(d => !siteRuleDomains.includes(d));
      if (filtered.length > 0) condition.requestDomains = filtered;
      else { /* no domains left */ }
    } else if (defaultProfile.filterMode === "except" && ownDomains.length > 0) {
      condition.excludedRequestDomains = [...new Set([...ownDomains, ...siteRuleDomains])];
    } else {
      // All domains - but exclude site-rule domains
      if (allExcluded.length > 0) condition.excludedRequestDomains = allExcluded;
    }

    if (!condition.requestDomains) {
      condition.urlFilter = "|http";
    }

    rules.push({
      id: ruleId++,
      priority: 1,
      action: { type: "modifyHeaders", requestHeaders: defaultHeaders },
      condition
    });
    totalHeaders += defaultHeaders.length;
  }

  try {
    await chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: removeIds, addRules: rules });
    setBadge(true);
  } catch (err) {
    console.error("Rule apply failed:", err);
    setBadge(false);
  }
}

// ── Extract headers from a profile config ──
function buildHeaders(cfg) {
  const headers = [];
  const setMap = [
    ["User-Agent", cfg.userAgent], ["Accept-Language", cfg.acceptLanguage],
    ["Referer", cfg.referer], ["Origin", cfg.origin], ["DNT", cfg.dnt],
    ["Accept", cfg.accept], ["Accept-Encoding", cfg.acceptEncoding],
  ];
  for (const [h, v] of setMap) {
    if (v) headers.push({ header: h, operation: "set", value: v });
  }

  if (cfg.stripHints) {
    const hintHeaders = [
      "Sec-Ch-Ua","Sec-Ch-Ua-Mobile","Sec-Ch-Ua-Platform",
      "Sec-Ch-Ua-Platform-Version","Sec-Ch-Ua-Full-Version-List",
      "Sec-Ch-Ua-Arch","Sec-Ch-Ua-Bitness","Sec-Ch-Ua-Model",
      "Sec-Ch-Ua-Wow64","Sec-Ch-Ua-Form-Factor",
      "Sec-Ch-Prefers-Color-Scheme","Sec-Ch-Prefers-Reduced-Motion"
    ];
    for (const h of hintHeaders) headers.push({ header: h, operation: "remove" });
  } else {
    const hintMap = [
      ["Sec-Ch-Ua", cfg.secChUa], ["Sec-Ch-Ua-Mobile", cfg.secChUaMobile],
      ["Sec-Ch-Ua-Platform", cfg.secChUaPlatform], ["Sec-Ch-Ua-Platform-Version", cfg.secChUaPlatformVersion],
      ["Sec-Ch-Ua-Full-Version-List", cfg.secChUaFullVersion], ["Sec-Ch-Ua-Arch", cfg.secChUaArch],
      ["Sec-Ch-Ua-Bitness", cfg.secChUaBitness], ["Sec-Ch-Ua-Model", cfg.secChUaModel],
    ];
    for (const [h, v] of hintMap) { if (v) headers.push({ header: h, operation: "set", value: v }); }
  }

  const fetchMap = [["Sec-Fetch-Dest",cfg.secFetchDest],["Sec-Fetch-Mode",cfg.secFetchMode],["Sec-Fetch-Site",cfg.secFetchSite]];
  for (const [h,v] of fetchMap) { if (v) headers.push({ header: h, operation: "set", value: v }); }

  // Device / Screen hints
  const devMap = [["Sec-Ch-Viewport-Width",cfg.viewportWidth],["Sec-Ch-Viewport-Height",cfg.viewportHeight],["Sec-Ch-DPR",cfg.dpr],["DPR",cfg.dpr],["Device-Memory",cfg.deviceMemory]];
  for (const [h,v] of devMap) { if (v) headers.push({ header: h, operation: "set", value: v }); }

  // Network Information hints
  const netMap = [["ECT",cfg.ect],["Downlink",cfg.downlink],["RTT",cfg.rtt],["Save-Data",cfg.saveData]];
  for (const [h,v] of netMap) { if (v) headers.push({ header: h, operation: "set", value: v }); }

  const ipMap = [["X-Forwarded-For",cfg.xff],["X-Real-IP",cfg.xRealIP],["CF-Connecting-IP",cfg.cfIP],["True-Client-IP",cfg.trueClientIP]];
  for (const [h,v] of ipMap) { if (v) headers.push({ header: h, operation: "set", value: v }); }

  for (const ch of (cfg.customHeaders || [])) {
    if (ch.name && ch.value) headers.push({ header: ch.name, operation: "set", value: ch.value });
  }
  return headers;
}

function setBadge(active) {
  chrome.action.setBadgeText({ text: active ? "ON" : "" });
  chrome.action.setBadgeBackgroundColor({ color: "#C2694F" });
  chrome.action.setTitle({ title: active ? "Masquerade Spoofer - Active" : "Masquerade Spoofer - OFF" });
}

// ── Context menu (with proper async) ──
let menuLock = false;
async function rebuildMenu() {
  if (menuLock) return;
  menuLock = true;
  try {
    await new Promise(r => chrome.contextMenus.removeAll(r));
    const p = getProfile();
    chrome.contextMenus.create({
      id: "hsp_toggle",
      title: p.enabled ? "✓ Spoofing ON" : "✗ Spoofing OFF",
      contexts: ["action"]
    });
    chrome.contextMenus.create({ id: "hsp_sep", type: "separator", contexts: ["action"] });
    for (const [id, prof] of Object.entries(state.profiles)) {
      chrome.contextMenus.create({
        id: "hsp_prof_" + id,
        title: (id === state.activeProfileId ? "● " : "○ ") + prof.name,
        contexts: ["action"]
      });
    }
  } catch (e) { /* ignore race conditions */ }
  menuLock = false;
}

chrome.contextMenus.onClicked.addListener(info => {
  if (info.menuItemId === "hsp_toggle") {
    getProfile().enabled = !getProfile().enabled;
    chrome.storage.local.set({ state });
  } else if (info.menuItemId.startsWith("hsp_prof_")) {
    state.activeProfileId = info.menuItemId.replace("hsp_prof_", "");
    chrome.storage.local.set({ state });
  }
});

// ── Message handler for popup queries ──
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "getRules") {
    chrome.declarativeNetRequest.getDynamicRules().then(rules => {
      sendResponse({ rules });
    });
    return true; // async
  }
  if (msg.type === "getProfile") {
    sendResponse({ profile: getProfile(), state });
    return false;
  }
});
