const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

const BLANK = {
  name:"Default",enabled:true,
  userAgent:"",acceptLanguage:"",referer:"",origin:"",dnt:"",
  accept:"",acceptEncoding:"",
  // Client Hints
  stripHints:false,
  secChUa:"",secChUaMobile:"",secChUaPlatform:"",secChUaPlatformVersion:"",
  secChUaFullVersion:"",secChUaArch:"",secChUaBitness:"",secChUaModel:"",
  // Sec-Fetch
  secFetchDest:"",secFetchMode:"",secFetchSite:"",
  // Device / Screen
  viewportWidth:"",viewportHeight:"",dpr:"",deviceMemory:"",
  // Network
  ect:"",downlink:"",rtt:"",saveData:"",
  // IP origin
  geoCountry:"",xff:"",xRealIP:"",cfIP:"",trueClientIP:"",
  customHeaders:[],domainFilters:[],filterMode:"all"
};
const BLANK_STATE = { activeProfileId:"default", profiles:{ default:structuredClone(BLANK) }, siteRules:[] };

let state = structuredClone(BLANK_STATE);
let modalData = [];
let modalField = null;

// ── AL presets ──
const AL_PRESETS=[
  {label:"English (US)",cat:"English",value:"en-US,en;q=0.9"},{label:"English (UK)",cat:"English",value:"en-GB,en;q=0.9"},
  {label:"English (AU)",cat:"English",value:"en-AU,en;q=0.9"},{label:"English (CA)",cat:"English",value:"en-CA,en;q=0.9"},
  {label:"French",cat:"European",value:"fr-FR,fr;q=0.9,en;q=0.5"},{label:"French (CA)",cat:"European",value:"fr-CA,fr;q=0.9,en;q=0.5"},
  {label:"German",cat:"European",value:"de-DE,de;q=0.9,en;q=0.5"},{label:"Spanish",cat:"European",value:"es-ES,es;q=0.9,en;q=0.5"},
  {label:"Spanish (MX)",cat:"Americas",value:"es-MX,es;q=0.9,en;q=0.5"},{label:"Portuguese (BR)",cat:"Americas",value:"pt-BR,pt;q=0.9,en;q=0.5"},
  {label:"Italian",cat:"European",value:"it-IT,it;q=0.9,en;q=0.5"},{label:"Dutch",cat:"European",value:"nl-NL,nl;q=0.9,en;q=0.5"},
  {label:"Polish",cat:"European",value:"pl-PL,pl;q=0.9,en;q=0.5"},{label:"Czech",cat:"European",value:"cs-CZ,cs;q=0.9,en;q=0.5"},
  {label:"Russian",cat:"Slavic",value:"ru-RU,ru;q=0.9,en;q=0.5"},{label:"Ukrainian",cat:"Slavic",value:"uk-UA,uk;q=0.9,en;q=0.5"},
  {label:"Turkish",cat:"Middle East",value:"tr-TR,tr;q=0.9,en;q=0.5"},{label:"Arabic",cat:"Middle East",value:"ar-SA,ar;q=0.9,en;q=0.5"},
  {label:"Hebrew",cat:"Middle East",value:"he-IL,he;q=0.9,en;q=0.5"},{label:"Japanese",cat:"East Asia",value:"ja-JP,ja;q=0.9,en;q=0.5"},
  {label:"Chinese (Simplified)",cat:"East Asia",value:"zh-CN,zh;q=0.9,en;q=0.5"},{label:"Chinese (Traditional)",cat:"East Asia",value:"zh-TW,zh;q=0.9,en;q=0.5"},
  {label:"Korean",cat:"East Asia",value:"ko-KR,ko;q=0.9,en;q=0.5"},{label:"Hindi",cat:"South Asia",value:"hi-IN,hi;q=0.9,en;q=0.5"},
  {label:"Thai",cat:"SE Asia",value:"th-TH,th;q=0.9,en;q=0.5"},{label:"Vietnamese",cat:"SE Asia",value:"vi-VN,vi;q=0.9,en;q=0.5"},
  {label:"Indonesian",cat:"SE Asia",value:"id-ID,id;q=0.9,en;q=0.5"},{label:"Swedish",cat:"Nordic",value:"sv-SE,sv;q=0.9,en;q=0.5"},
  {label:"Norwegian",cat:"Nordic",value:"nb-NO,nb;q=0.9,en;q=0.5"},{label:"Danish",cat:"Nordic",value:"da-DK,da;q=0.9,en;q=0.5"},
  {label:"Finnish",cat:"Nordic",value:"fi-FI,fi;q=0.9,en;q=0.5"},{label:"Greek",cat:"European",value:"el-GR,el;q=0.9,en;q=0.5"},
  {label:"Romanian",cat:"European",value:"ro-RO,ro;q=0.9,en;q=0.5"},{label:"Hungarian",cat:"European",value:"hu-HU,hu;q=0.9,en;q=0.5"},
  {label:"Swahili",cat:"African",value:"sw-KE,sw;q=0.9,en;q=0.5"},
];

// ── Global Identity Presets (coherent full-stack spoofs) ──
const IDENTITIES = [
  // ── DESKTOP BROWSERS ──
  {
    label: "Chrome · Windows 11 · US", sub: "Desktop - full coverage",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    acceptLanguage: "en-US,en;q=0.9", dnt: "1",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    acceptEncoding: "gzip, deflate, br, zstd",
    secChUa: '"Chromium";v="131", "Not_A Brand";v="24", "Google Chrome";v="131"',
    secChUaMobile: "?0", secChUaPlatform: '"Windows"', secChUaPlatformVersion: '"15.0.0"',
    secChUaFullVersion: '"Chromium";v="131.0.6778.86", "Not_A Brand";v="24.0.0.0", "Google Chrome";v="131.0.6778.86"',
    secChUaArch: '"x86"', secChUaBitness: '"64"', secChUaModel: '""',
    stripHints: false, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "1920", viewportHeight: "1080", dpr: "1", deviceMemory: "16",
    ect: "4g", downlink: "50", rtt: "20", saveData: "",
    geoCountry: "US",
  },
  {
    label: "Chrome · macOS · US", sub: "Desktop - Apple Silicon",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    acceptLanguage: "en-US,en;q=0.9", dnt: "1",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    acceptEncoding: "gzip, deflate, br, zstd",
    secChUa: '"Chromium";v="131", "Not_A Brand";v="24", "Google Chrome";v="131"',
    secChUaMobile: "?0", secChUaPlatform: '"macOS"', secChUaPlatformVersion: '"14.5.0"',
    secChUaFullVersion: '"Chromium";v="131.0.6778.86", "Not_A Brand";v="24.0.0.0", "Google Chrome";v="131.0.6778.86"',
    secChUaArch: '"arm"', secChUaBitness: '"64"', secChUaModel: '""',
    stripHints: false, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "1440", viewportHeight: "900", dpr: "2", deviceMemory: "16",
    ect: "4g", downlink: "50", rtt: "20", saveData: "",
    geoCountry: "US",
  },
  {
    label: "Chrome · Linux · US", sub: "Desktop - x86_64",
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    acceptLanguage: "en-US,en;q=0.9", dnt: "1",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    acceptEncoding: "gzip, deflate, br, zstd",
    secChUa: '"Chromium";v="131", "Not_A Brand";v="24", "Google Chrome";v="131"',
    secChUaMobile: "?0", secChUaPlatform: '"Linux"', secChUaPlatformVersion: '"6.8.0"',
    secChUaFullVersion: '"Chromium";v="131.0.6778.86", "Not_A Brand";v="24.0.0.0", "Google Chrome";v="131.0.6778.86"',
    secChUaArch: '"x86"', secChUaBitness: '"64"', secChUaModel: '""',
    stripHints: false, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "1920", viewportHeight: "1080", dpr: "1", deviceMemory: "8",
    ect: "4g", downlink: "50", rtt: "20", saveData: "",
    geoCountry: "US",
  },
  {
    label: "Firefox · Windows 11 · US", sub: "Desktop - no Client Hints",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:132.0) Gecko/20100101 Firefox/132.0",
    acceptLanguage: "en-US,en;q=0.5", dnt: "1",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    acceptEncoding: "gzip, deflate, br, zstd",
    secChUa: "", secChUaMobile: "", secChUaPlatform: "", secChUaPlatformVersion: "",
    secChUaFullVersion: "", secChUaArch: "", secChUaBitness: "", secChUaModel: "",
    stripHints: true, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "1920", viewportHeight: "1080", dpr: "1", deviceMemory: "16",
    ect: "4g", downlink: "50", rtt: "20", saveData: "",
    geoCountry: "US",
  },
  {
    label: "Firefox · Linux · US", sub: "Desktop - privacy-friendly",
    userAgent: "Mozilla/5.0 (X11; Linux x86_64; rv:132.0) Gecko/20100101 Firefox/132.0",
    acceptLanguage: "en-US,en;q=0.5", dnt: "1",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    acceptEncoding: "gzip, deflate, br, zstd",
    secChUa: "", secChUaMobile: "", secChUaPlatform: "", secChUaPlatformVersion: "",
    secChUaFullVersion: "", secChUaArch: "", secChUaBitness: "", secChUaModel: "",
    stripHints: true, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "1920", viewportHeight: "1080", dpr: "1", deviceMemory: "8",
    ect: "4g", downlink: "50", rtt: "20", saveData: "",
    geoCountry: "US",
  },
  {
    label: "Safari · macOS Sequoia · US", sub: "Desktop - no hints, no zstd",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15",
    acceptLanguage: "en-US,en;q=0.9", dnt: "",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    acceptEncoding: "gzip, deflate, br",
    secChUa: "", secChUaMobile: "", secChUaPlatform: "", secChUaPlatformVersion: "",
    secChUaFullVersion: "", secChUaArch: "", secChUaBitness: "", secChUaModel: "",
    stripHints: true, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "1440", viewportHeight: "900", dpr: "2", deviceMemory: "16",
    ect: "4g", downlink: "50", rtt: "20", saveData: "",
    geoCountry: "US",
  },
  {
    label: "Edge · Windows 11 · US", sub: "Desktop - Edge-branded hints",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
    acceptLanguage: "en-US,en;q=0.9", dnt: "1",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    acceptEncoding: "gzip, deflate, br, zstd",
    secChUa: '"Chromium";v="131", "Not_A Brand";v="24", "Microsoft Edge";v="131"',
    secChUaMobile: "?0", secChUaPlatform: '"Windows"', secChUaPlatformVersion: '"15.0.0"',
    secChUaFullVersion: '"Chromium";v="131.0.6778.86", "Not_A Brand";v="24.0.0.0", "Microsoft Edge";v="131.0.2903.70"',
    secChUaArch: '"x86"', secChUaBitness: '"64"', secChUaModel: '""',
    stripHints: false, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "1920", viewportHeight: "1080", dpr: "1", deviceMemory: "16",
    ect: "4g", downlink: "50", rtt: "20", saveData: "",
    geoCountry: "US",
  },
  // ── MOBILE ──
  {
    label: "Chrome · Pixel 9 · US", sub: "Mobile Android 15",
    userAgent: "Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36",
    acceptLanguage: "en-US,en;q=0.9", dnt: "1",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    acceptEncoding: "gzip, deflate, br, zstd",
    secChUa: '"Chromium";v="131", "Not_A Brand";v="24", "Google Chrome";v="131"',
    secChUaMobile: "?1", secChUaPlatform: '"Android"', secChUaPlatformVersion: '"15.0.0"',
    secChUaFullVersion: '"Chromium";v="131.0.6778.86", "Not_A Brand";v="24.0.0.0", "Google Chrome";v="131.0.6778.86"',
    secChUaArch: '"arm"', secChUaBitness: '"64"', secChUaModel: '"Pixel 9"',
    stripHints: false, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "412", viewportHeight: "915", dpr: "2.625", deviceMemory: "8",
    ect: "4g", downlink: "10", rtt: "50", saveData: "",
    geoCountry: "US",
  },
  {
    label: "Chrome · Galaxy S24 · US", sub: "Mobile Android 14",
    userAgent: "Mozilla/5.0 (Linux; Android 14; SM-S926B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36",
    acceptLanguage: "en-US,en;q=0.9", dnt: "1",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    acceptEncoding: "gzip, deflate, br, zstd",
    secChUa: '"Chromium";v="131", "Not_A Brand";v="24", "Google Chrome";v="131"',
    secChUaMobile: "?1", secChUaPlatform: '"Android"', secChUaPlatformVersion: '"14.0.0"',
    secChUaFullVersion: '"Chromium";v="131.0.6778.86", "Not_A Brand";v="24.0.0.0", "Google Chrome";v="131.0.6778.86"',
    secChUaArch: '"arm"', secChUaBitness: '"64"', secChUaModel: '"SM-S926B"',
    stripHints: false, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "412", viewportHeight: "915", dpr: "3", deviceMemory: "8",
    ect: "4g", downlink: "10", rtt: "50", saveData: "",
    geoCountry: "US",
  },
  {
    label: "Safari · iPhone 16 Pro · US", sub: "Mobile iOS 18",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
    acceptLanguage: "en-US,en;q=0.9", dnt: "",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    acceptEncoding: "gzip, deflate, br",
    secChUa: "", secChUaMobile: "", secChUaPlatform: "", secChUaPlatformVersion: "",
    secChUaFullVersion: "", secChUaArch: "", secChUaBitness: "", secChUaModel: "",
    stripHints: true, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "393", viewportHeight: "852", dpr: "3", deviceMemory: "",
    ect: "", downlink: "", rtt: "", saveData: "",
    geoCountry: "US",
  },
  {
    label: "Safari · iPad Pro · US", sub: "Tablet iPadOS 18",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
    acceptLanguage: "en-US,en;q=0.9", dnt: "",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    acceptEncoding: "gzip, deflate, br",
    secChUa: "", secChUaMobile: "", secChUaPlatform: "", secChUaPlatformVersion: "",
    secChUaFullVersion: "", secChUaArch: "", secChUaBitness: "", secChUaModel: "",
    stripHints: true, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "1024", viewportHeight: "1366", dpr: "2", deviceMemory: "",
    ect: "", downlink: "", rtt: "", saveData: "",
    geoCountry: "US",
  },
  // ── REGIONAL IDENTITIES ──
  {
    label: "Chrome · Windows · Germany", sub: "Desktop - de-DE", wide: true,
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    acceptLanguage: "de-DE,de;q=0.9,en;q=0.5", dnt: "1",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    acceptEncoding: "gzip, deflate, br, zstd",
    secChUa: '"Chromium";v="131", "Not_A Brand";v="24", "Google Chrome";v="131"',
    secChUaMobile: "?0", secChUaPlatform: '"Windows"', secChUaPlatformVersion: '"15.0.0"',
    secChUaFullVersion: '"Chromium";v="131.0.6778.86", "Not_A Brand";v="24.0.0.0", "Google Chrome";v="131.0.6778.86"',
    secChUaArch: '"x86"', secChUaBitness: '"64"', secChUaModel: '""',
    stripHints: false, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "1920", viewportHeight: "1080", dpr: "1", deviceMemory: "16",
    ect: "4g", downlink: "50", rtt: "20", saveData: "",
    geoCountry: "DE",
  },
  {
    label: "Firefox · macOS · France", sub: "Desktop - fr-FR",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:132.0) Gecko/20100101 Firefox/132.0",
    acceptLanguage: "fr-FR,fr;q=0.9,en;q=0.5", dnt: "1",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    acceptEncoding: "gzip, deflate, br, zstd",
    secChUa: "", secChUaMobile: "", secChUaPlatform: "", secChUaPlatformVersion: "",
    secChUaFullVersion: "", secChUaArch: "", secChUaBitness: "", secChUaModel: "",
    stripHints: true, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "1440", viewportHeight: "900", dpr: "2", deviceMemory: "16",
    ect: "4g", downlink: "50", rtt: "20", saveData: "",
    geoCountry: "FR",
  },
  {
    label: "Chrome · Windows · Japan", sub: "Desktop - ja-JP",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    acceptLanguage: "ja-JP,ja;q=0.9,en;q=0.5", dnt: "1",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    acceptEncoding: "gzip, deflate, br, zstd",
    secChUa: '"Chromium";v="131", "Not_A Brand";v="24", "Google Chrome";v="131"',
    secChUaMobile: "?0", secChUaPlatform: '"Windows"', secChUaPlatformVersion: '"15.0.0"',
    secChUaFullVersion: '"Chromium";v="131.0.6778.86", "Not_A Brand";v="24.0.0.0", "Google Chrome";v="131.0.6778.86"',
    secChUaArch: '"x86"', secChUaBitness: '"64"', secChUaModel: '""',
    stripHints: false, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "1920", viewportHeight: "1080", dpr: "1", deviceMemory: "16",
    ect: "4g", downlink: "80", rtt: "15", saveData: "",
    geoCountry: "JP",
  },
  {
    label: "Chrome · Android · Brazil", sub: "Mobile - pt-BR",
    userAgent: "Mozilla/5.0 (Linux; Android 14; SM-A546B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36",
    acceptLanguage: "pt-BR,pt;q=0.9,en;q=0.5", dnt: "1",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    acceptEncoding: "gzip, deflate, br, zstd",
    secChUa: '"Chromium";v="131", "Not_A Brand";v="24", "Google Chrome";v="131"',
    secChUaMobile: "?1", secChUaPlatform: '"Android"', secChUaPlatformVersion: '"14.0.0"',
    secChUaFullVersion: '"Chromium";v="131.0.6778.86", "Not_A Brand";v="24.0.0.0", "Google Chrome";v="131.0.6778.86"',
    secChUaArch: '"arm"', secChUaBitness: '"64"', secChUaModel: '"SM-A546B"',
    stripHints: false, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "412", viewportHeight: "915", dpr: "2", deviceMemory: "4",
    ect: "4g", downlink: "5", rtt: "100", saveData: "",
    geoCountry: "BR",
  },
  {
    label: "Safari · iPhone · UK", sub: "Mobile - en-GB",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
    acceptLanguage: "en-GB,en;q=0.9", dnt: "",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    acceptEncoding: "gzip, deflate, br",
    secChUa: "", secChUaMobile: "", secChUaPlatform: "", secChUaPlatformVersion: "",
    secChUaFullVersion: "", secChUaArch: "", secChUaBitness: "", secChUaModel: "",
    stripHints: true, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "390", viewportHeight: "844", dpr: "3", deviceMemory: "",
    ect: "", downlink: "", rtt: "", saveData: "",
    geoCountry: "GB",
  },
  {
    label: "Chrome · Windows · India", sub: "Desktop - hi-IN", wide: true,
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    acceptLanguage: "hi-IN,hi;q=0.9,en-IN;q=0.8,en;q=0.5", dnt: "1",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    acceptEncoding: "gzip, deflate, br, zstd",
    secChUa: '"Chromium";v="131", "Not_A Brand";v="24", "Google Chrome";v="131"',
    secChUaMobile: "?0", secChUaPlatform: '"Windows"', secChUaPlatformVersion: '"15.0.0"',
    secChUaFullVersion: '"Chromium";v="131.0.6778.86", "Not_A Brand";v="24.0.0.0", "Google Chrome";v="131.0.6778.86"',
    secChUaArch: '"x86"', secChUaBitness: '"64"', secChUaModel: '""',
    stripHints: false, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "1920", viewportHeight: "1080", dpr: "1", deviceMemory: "8",
    ect: "4g", downlink: "10", rtt: "80", saveData: "",
    geoCountry: "IN",
  },
  // ── PRIVACY / STEALTH ──
  {
    label: "Tor Browser · Windows", sub: "ESR 115 - maximum privacy",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; rv:115.0) Gecko/20100101 Firefox/115.0",
    acceptLanguage: "en-US,en;q=0.5", dnt: "1",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    acceptEncoding: "gzip, deflate, br",
    secChUa: "", secChUaMobile: "", secChUaPlatform: "", secChUaPlatformVersion: "",
    secChUaFullVersion: "", secChUaArch: "", secChUaBitness: "", secChUaModel: "",
    stripHints: true, secFetchDest: "document", secFetchMode: "navigate", secFetchSite: "none",
    viewportWidth: "", viewportHeight: "", dpr: "", deviceMemory: "",
    ect: "", downlink: "", rtt: "", saveData: "",
    geoCountry: "",
  },
  // ── BOTS / CLI ──
  {
    label: "Googlebot", sub: "Search crawler - strips everything",
    userAgent: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    acceptLanguage: "*", dnt: "",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    acceptEncoding: "gzip, deflate, br",
    secChUa: "", secChUaMobile: "", secChUaPlatform: "", secChUaPlatformVersion: "",
    secChUaFullVersion: "", secChUaArch: "", secChUaBitness: "", secChUaModel: "",
    stripHints: true, secFetchDest: "", secFetchMode: "", secFetchSite: "",
    viewportWidth: "", viewportHeight: "", dpr: "", deviceMemory: "",
    ect: "", downlink: "", rtt: "", saveData: "",
    geoCountry: "US",
  },
  {
    label: "curl 8.7", sub: "CLI - minimal headers",
    userAgent: "curl/8.7.1",
    acceptLanguage: "", dnt: "",
    accept: "*/*",
    acceptEncoding: "gzip, deflate, br",
    secChUa: "", secChUaMobile: "", secChUaPlatform: "", secChUaPlatformVersion: "",
    secChUaFullVersion: "", secChUaArch: "", secChUaBitness: "", secChUaModel: "",
    stripHints: true, secFetchDest: "", secFetchMode: "", secFetchSite: "",
    viewportWidth: "", viewportHeight: "", dpr: "", deviceMemory: "",
    ect: "", downlink: "", rtt: "", saveData: "",
    geoCountry: "",
  },
];

// ── Country IP ranges (realistic ISP ranges per country) ──
const GEO_RANGES = [
  { code:"US", name:"United States", ranges:[[4,0,0,0],[8,0,0,0],[12,0,0,0],[15,0,0,0],[17,0,0,0],[18,0,0,0],[20,0,0,0],[23,0,0,0],[24,0,0,0],[32,0,0,0],[34,0,0,0],[35,0,0,0],[38,0,0,0],[40,0,0,0],[44,0,0,0],[45,0,0,0],[47,0,0,0],[48,0,0,0],[50,0,0,0],[52,0,0,0],[54,0,0,0],[56,0,0,0],[63,0,0,0],[64,0,0,0],[65,0,0,0],[66,0,0,0],[67,0,0,0],[68,0,0,0],[69,0,0,0],[70,0,0,0],[71,0,0,0],[72,0,0,0],[73,0,0,0],[74,0,0,0],[75,0,0,0],[76,0,0,0],[96,0,0,0],[97,0,0,0],[98,0,0,0],[99,0,0,0],[104,0,0,0],[107,0,0,0],[108,0,0,0],[128,0,0,0],[129,0,0,0],[130,0,0,0],[131,0,0,0],[132,0,0,0],[134,0,0,0],[135,0,0,0],[136,0,0,0],[137,0,0,0],[138,0,0,0],[140,0,0,0],[142,0,0,0],[143,0,0,0],[144,0,0,0],[146,0,0,0],[147,0,0,0],[148,0,0,0],[149,0,0,0],[152,0,0,0],[155,0,0,0],[156,0,0,0],[157,0,0,0],[158,0,0,0],[159,0,0,0],[160,0,0,0],[161,0,0,0],[162,0,0,0],[164,0,0,0],[165,0,0,0],[166,0,0,0],[167,0,0,0],[168,0,0,0],[169,0,0,0],[170,0,0,0],[172,0,0,0],[173,0,0,0],[174,0,0,0],[184,0,0,0],[198,0,0,0],[199,0,0,0],[204,0,0,0],[205,0,0,0],[206,0,0,0],[207,0,0,0],[208,0,0,0],[209,0,0,0],[216,0,0,0]] },
  { code:"GB", name:"United Kingdom", ranges:[[2,16,0,0],[5,0,0,0],[25,0,0,0],[31,0,0,0],[51,0,0,0],[62,0,0,0],[78,0,0,0],[80,0,0,0],[81,0,0,0],[82,0,0,0],[86,0,0,0],[87,0,0,0],[88,0,0,0],[90,0,0,0],[92,0,0,0],[109,0,0,0],[148,252,0,0],[176,24,0,0],[178,0,0,0],[185,0,0,0],[193,0,0,0],[194,0,0,0],[212,0,0,0],[213,0,0,0]] },
  { code:"DE", name:"Germany", ranges:[[2,160,0,0],[5,1,0,0],[24,128,0,0],[37,0,0,0],[46,0,0,0],[62,0,0,0],[77,0,0,0],[78,0,0,0],[79,0,0,0],[80,0,0,0],[84,0,0,0],[85,0,0,0],[87,0,0,0],[88,0,0,0],[89,0,0,0],[91,0,0,0],[92,0,0,0],[93,0,0,0],[109,0,0,0],[134,0,0,0],[141,0,0,0],[176,0,0,0],[178,0,0,0],[188,0,0,0],[193,0,0,0],[194,0,0,0],[195,0,0,0],[212,0,0,0],[213,0,0,0],[217,0,0,0]] },
  { code:"FR", name:"France", ranges:[[2,0,0,0],[5,0,0,0],[37,0,0,0],[46,0,0,0],[62,0,0,0],[77,0,0,0],[78,0,0,0],[79,0,0,0],[80,0,0,0],[81,0,0,0],[82,0,0,0],[83,0,0,0],[86,0,0,0],[88,0,0,0],[89,0,0,0],[90,0,0,0],[91,0,0,0],[92,0,0,0],[109,0,0,0],[176,0,0,0],[178,0,0,0],[185,0,0,0],[193,0,0,0],[194,0,0,0],[195,0,0,0],[212,0,0,0],[213,0,0,0],[217,0,0,0]] },
  { code:"NL", name:"Netherlands", ranges:[[2,0,0,0],[5,0,0,0],[31,0,0,0],[37,0,0,0],[46,0,0,0],[62,0,0,0],[77,0,0,0],[80,0,0,0],[82,0,0,0],[83,0,0,0],[84,0,0,0],[85,0,0,0],[86,0,0,0],[87,0,0,0],[88,0,0,0],[89,0,0,0],[92,0,0,0],[94,0,0,0],[109,0,0,0],[143,0,0,0],[145,0,0,0],[178,0,0,0],[185,0,0,0],[193,0,0,0],[194,0,0,0],[195,0,0,0],[212,0,0,0],[213,0,0,0],[217,0,0,0]] },
  { code:"CA", name:"Canada", ranges:[[24,0,0,0],[47,0,0,0],[64,0,0,0],[65,0,0,0],[66,0,0,0],[67,0,0,0],[69,0,0,0],[70,0,0,0],[72,0,0,0],[74,0,0,0],[75,0,0,0],[76,0,0,0],[96,0,0,0],[97,0,0,0],[99,0,0,0],[142,0,0,0],[174,0,0,0],[184,0,0,0],[192,0,0,0],[198,0,0,0],[199,0,0,0],[204,0,0,0],[205,0,0,0],[206,0,0,0],[207,0,0,0],[209,0,0,0]] },
  { code:"AU", name:"Australia", ranges:[[1,0,0,0],[14,0,0,0],[27,0,0,0],[43,0,0,0],[49,0,0,0],[58,0,0,0],[101,0,0,0],[103,0,0,0],[110,0,0,0],[112,0,0,0],[114,0,0,0],[116,0,0,0],[118,0,0,0],[120,0,0,0],[121,0,0,0],[122,0,0,0],[123,0,0,0],[124,0,0,0],[139,0,0,0],[144,0,0,0],[150,0,0,0],[175,0,0,0],[180,0,0,0],[182,0,0,0],[192,0,0,0],[202,0,0,0],[203,0,0,0],[210,0,0,0],[211,0,0,0]] },
  { code:"JP", name:"Japan", ranges:[[1,0,0,0],[14,0,0,0],[27,0,0,0],[36,0,0,0],[42,0,0,0],[49,0,0,0],[59,0,0,0],[60,0,0,0],[61,0,0,0],[101,0,0,0],[103,0,0,0],[106,0,0,0],[110,0,0,0],[111,0,0,0],[113,0,0,0],[114,0,0,0],[115,0,0,0],[116,0,0,0],[117,0,0,0],[118,0,0,0],[119,0,0,0],[121,0,0,0],[122,0,0,0],[123,0,0,0],[124,0,0,0],[125,0,0,0],[126,0,0,0],[133,0,0,0],[150,0,0,0],[153,0,0,0],[157,0,0,0],[160,0,0,0],[175,0,0,0],[180,0,0,0],[182,0,0,0],[183,0,0,0],[192,0,0,0],[202,0,0,0],[203,0,0,0],[210,0,0,0],[211,0,0,0],[219,0,0,0],[220,0,0,0],[221,0,0,0]] },
  { code:"KR", name:"South Korea", ranges:[[1,0,0,0],[14,0,0,0],[27,0,0,0],[39,0,0,0],[42,0,0,0],[49,0,0,0],[58,0,0,0],[59,0,0,0],[61,0,0,0],[101,0,0,0],[106,0,0,0],[110,0,0,0],[112,0,0,0],[114,0,0,0],[115,0,0,0],[116,0,0,0],[118,0,0,0],[119,0,0,0],[121,0,0,0],[122,0,0,0],[123,0,0,0],[124,0,0,0],[125,0,0,0],[175,0,0,0],[180,0,0,0],[182,0,0,0],[183,0,0,0],[192,0,0,0],[203,0,0,0],[210,0,0,0],[211,0,0,0],[218,0,0,0],[219,0,0,0],[220,0,0,0],[221,0,0,0],[222,0,0,0]] },
  { code:"BR", name:"Brazil", ranges:[[131,0,0,0],[138,0,0,0],[139,0,0,0],[143,0,0,0],[146,0,0,0],[150,0,0,0],[152,0,0,0],[164,0,0,0],[168,0,0,0],[170,0,0,0],[177,0,0,0],[179,0,0,0],[186,0,0,0],[187,0,0,0],[189,0,0,0],[191,0,0,0],[200,0,0,0],[201,0,0,0]] },
  { code:"IN", name:"India", ranges:[[1,0,0,0],[14,0,0,0],[27,0,0,0],[36,0,0,0],[42,0,0,0],[43,0,0,0],[49,0,0,0],[59,0,0,0],[61,0,0,0],[101,0,0,0],[103,0,0,0],[106,0,0,0],[110,0,0,0],[112,0,0,0],[114,0,0,0],[115,0,0,0],[116,0,0,0],[117,0,0,0],[119,0,0,0],[122,0,0,0],[123,0,0,0],[124,0,0,0],[125,0,0,0],[175,0,0,0],[180,0,0,0],[182,0,0,0],[183,0,0,0],[192,0,0,0],[202,0,0,0],[203,0,0,0],[210,0,0,0],[223,0,0,0]] },
  { code:"RU", name:"Russia", ranges:[[2,0,0,0],[5,0,0,0],[31,0,0,0],[37,0,0,0],[46,0,0,0],[62,0,0,0],[77,0,0,0],[78,0,0,0],[79,0,0,0],[80,0,0,0],[81,0,0,0],[82,0,0,0],[83,0,0,0],[85,0,0,0],[86,0,0,0],[87,0,0,0],[88,0,0,0],[89,0,0,0],[90,0,0,0],[91,0,0,0],[92,0,0,0],[93,0,0,0],[94,0,0,0],[95,0,0,0],[109,0,0,0],[176,0,0,0],[178,0,0,0],[185,0,0,0],[188,0,0,0],[193,0,0,0],[194,0,0,0],[195,0,0,0],[212,0,0,0],[213,0,0,0],[217,0,0,0]] },
  { code:"CN", name:"China", ranges:[[1,0,0,0],[14,0,0,0],[27,0,0,0],[36,0,0,0],[39,0,0,0],[42,0,0,0],[49,0,0,0],[58,0,0,0],[59,0,0,0],[60,0,0,0],[61,0,0,0],[101,0,0,0],[103,0,0,0],[106,0,0,0],[110,0,0,0],[111,0,0,0],[112,0,0,0],[113,0,0,0],[114,0,0,0],[115,0,0,0],[116,0,0,0],[117,0,0,0],[118,0,0,0],[119,0,0,0],[120,0,0,0],[121,0,0,0],[122,0,0,0],[123,0,0,0],[124,0,0,0],[125,0,0,0],[139,0,0,0],[140,0,0,0],[144,0,0,0],[150,0,0,0],[153,0,0,0],[157,0,0,0],[159,0,0,0],[171,0,0,0],[175,0,0,0],[180,0,0,0],[182,0,0,0],[183,0,0,0],[192,0,0,0],[202,0,0,0],[203,0,0,0],[210,0,0,0],[211,0,0,0],[218,0,0,0],[219,0,0,0],[220,0,0,0],[221,0,0,0],[222,0,0,0],[223,0,0,0]] },
  { code:"IT", name:"Italy", ranges:[[2,0,0,0],[5,0,0,0],[37,0,0,0],[46,0,0,0],[62,0,0,0],[77,0,0,0],[79,0,0,0],[80,0,0,0],[82,0,0,0],[83,0,0,0],[84,0,0,0],[85,0,0,0],[87,0,0,0],[88,0,0,0],[89,0,0,0],[90,0,0,0],[91,0,0,0],[92,0,0,0],[93,0,0,0],[109,0,0,0],[151,0,0,0],[176,0,0,0],[178,0,0,0],[185,0,0,0],[188,0,0,0],[193,0,0,0],[194,0,0,0],[195,0,0,0],[212,0,0,0],[213,0,0,0],[217,0,0,0]] },
  { code:"ES", name:"Spain", ranges:[[2,0,0,0],[5,0,0,0],[37,0,0,0],[46,0,0,0],[62,0,0,0],[77,0,0,0],[79,0,0,0],[80,0,0,0],[81,0,0,0],[82,0,0,0],[83,0,0,0],[84,0,0,0],[85,0,0,0],[86,0,0,0],[87,0,0,0],[88,0,0,0],[89,0,0,0],[90,0,0,0],[91,0,0,0],[92,0,0,0],[93,0,0,0],[109,0,0,0],[176,0,0,0],[178,0,0,0],[185,0,0,0],[188,0,0,0],[193,0,0,0],[194,0,0,0],[195,0,0,0],[212,0,0,0],[213,0,0,0]] },
  { code:"SE", name:"Sweden", ranges:[[2,0,0,0],[5,0,0,0],[31,0,0,0],[37,0,0,0],[46,0,0,0],[62,0,0,0],[77,0,0,0],[78,0,0,0],[79,0,0,0],[80,0,0,0],[81,0,0,0],[82,0,0,0],[83,0,0,0],[84,0,0,0],[85,0,0,0],[86,0,0,0],[87,0,0,0],[88,0,0,0],[89,0,0,0],[90,0,0,0],[91,0,0,0],[92,0,0,0],[109,0,0,0],[176,0,0,0],[178,0,0,0],[185,0,0,0],[193,0,0,0],[194,0,0,0],[195,0,0,0],[212,0,0,0],[213,0,0,0],[217,0,0,0]] },
  { code:"PL", name:"Poland", ranges:[[2,0,0,0],[5,0,0,0],[31,0,0,0],[37,0,0,0],[46,0,0,0],[62,0,0,0],[77,0,0,0],[78,0,0,0],[79,0,0,0],[80,0,0,0],[81,0,0,0],[82,0,0,0],[83,0,0,0],[84,0,0,0],[85,0,0,0],[86,0,0,0],[87,0,0,0],[88,0,0,0],[89,0,0,0],[91,0,0,0],[93,0,0,0],[109,0,0,0],[176,0,0,0],[178,0,0,0],[185,0,0,0],[188,0,0,0],[193,0,0,0],[194,0,0,0],[195,0,0,0],[212,0,0,0],[213,0,0,0],[217,0,0,0]] },
  { code:"CH", name:"Switzerland", ranges:[[2,0,0,0],[5,0,0,0],[31,0,0,0],[37,0,0,0],[46,0,0,0],[62,0,0,0],[77,0,0,0],[78,0,0,0],[80,0,0,0],[81,0,0,0],[82,0,0,0],[83,0,0,0],[84,0,0,0],[85,0,0,0],[86,0,0,0],[87,0,0,0],[88,0,0,0],[89,0,0,0],[91,0,0,0],[109,0,0,0],[176,0,0,0],[178,0,0,0],[185,0,0,0],[193,0,0,0],[194,0,0,0],[195,0,0,0],[212,0,0,0],[213,0,0,0]] },
  { code:"SG", name:"Singapore", ranges:[[1,0,0,0],[14,0,0,0],[27,0,0,0],[42,0,0,0],[49,0,0,0],[58,0,0,0],[59,0,0,0],[61,0,0,0],[101,0,0,0],[103,0,0,0],[106,0,0,0],[110,0,0,0],[112,0,0,0],[114,0,0,0],[115,0,0,0],[116,0,0,0],[118,0,0,0],[119,0,0,0],[122,0,0,0],[124,0,0,0],[175,0,0,0],[180,0,0,0],[182,0,0,0],[183,0,0,0],[192,0,0,0],[202,0,0,0],[203,0,0,0],[210,0,0,0],[219,0,0,0]] },
  { code:"MX", name:"Mexico", ranges:[[131,0,0,0],[138,0,0,0],[143,0,0,0],[148,0,0,0],[152,0,0,0],[177,0,0,0],[187,0,0,0],[189,0,0,0],[200,0,0,0],[201,0,0,0]] },
  { code:"AR", name:"Argentina", ranges:[[131,0,0,0],[138,0,0,0],[143,0,0,0],[152,0,0,0],[168,0,0,0],[170,0,0,0],[179,0,0,0],[181,0,0,0],[186,0,0,0],[190,0,0,0],[200,0,0,0],[201,0,0,0]] },
  { code:"ZA", name:"South Africa", ranges:[[41,0,0,0],[102,0,0,0],[105,0,0,0],[129,0,0,0],[137,0,0,0],[141,0,0,0],[146,0,0,0],[154,0,0,0],[155,0,0,0],[160,0,0,0],[163,0,0,0],[165,0,0,0],[168,0,0,0],[169,0,0,0],[196,0,0,0],[197,0,0,0]] },
  { code:"AE", name:"UAE", ranges:[[2,0,0,0],[5,0,0,0],[31,0,0,0],[37,0,0,0],[46,0,0,0],[62,0,0,0],[77,0,0,0],[78,0,0,0],[80,0,0,0],[82,0,0,0],[83,0,0,0],[86,0,0,0],[88,0,0,0],[89,0,0,0],[91,0,0,0],[94,0,0,0],[109,0,0,0],[176,0,0,0],[178,0,0,0],[185,0,0,0],[193,0,0,0],[194,0,0,0],[195,0,0,0],[212,0,0,0],[213,0,0,0]] },
  { code:"TR", name:"Turkey", ranges:[[5,0,0,0],[31,0,0,0],[37,0,0,0],[46,0,0,0],[62,0,0,0],[77,0,0,0],[78,0,0,0],[79,0,0,0],[81,0,0,0],[82,0,0,0],[83,0,0,0],[84,0,0,0],[85,0,0,0],[86,0,0,0],[87,0,0,0],[88,0,0,0],[89,0,0,0],[90,0,0,0],[91,0,0,0],[92,0,0,0],[93,0,0,0],[94,0,0,0],[95,0,0,0],[109,0,0,0],[176,0,0,0],[178,0,0,0],[185,0,0,0],[188,0,0,0],[193,0,0,0],[194,0,0,0],[195,0,0,0],[212,0,0,0],[213,0,0,0],[217,0,0,0]] },
  { code:"IL", name:"Israel", ranges:[[2,0,0,0],[5,0,0,0],[31,0,0,0],[37,0,0,0],[46,0,0,0],[62,0,0,0],[77,0,0,0],[79,0,0,0],[80,0,0,0],[82,0,0,0],[83,0,0,0],[84,0,0,0],[85,0,0,0],[87,0,0,0],[89,0,0,0],[91,0,0,0],[93,0,0,0],[109,0,0,0],[176,0,0,0],[178,0,0,0],[185,0,0,0],[188,0,0,0],[193,0,0,0],[194,0,0,0],[195,0,0,0],[212,0,0,0],[213,0,0,0],[217,0,0,0]] },
  { code:"NO", name:"Norway", ranges:[[2,0,0,0],[5,0,0,0],[31,0,0,0],[37,0,0,0],[46,0,0,0],[62,0,0,0],[77,0,0,0],[78,0,0,0],[79,0,0,0],[80,0,0,0],[81,0,0,0],[82,0,0,0],[83,0,0,0],[84,0,0,0],[85,0,0,0],[86,0,0,0],[88,0,0,0],[89,0,0,0],[91,0,0,0],[92,0,0,0],[109,0,0,0],[176,0,0,0],[178,0,0,0],[185,0,0,0],[193,0,0,0],[194,0,0,0],[195,0,0,0],[212,0,0,0],[213,0,0,0]] },
];

function genIP(country) {
  const geo = GEO_RANGES.find(g => g.code === country);
  if (!geo) return "";
  const base = geo.ranges[Math.floor(Math.random() * geo.ranges.length)];
  return `${base[0]}.${Math.floor(Math.random()*254)+1}.${Math.floor(Math.random()*254)+1}.${Math.floor(Math.random()*254)+1}`;
}

function fillIPFields(ip) {
  $("#i-xff").value = ip;
  $("#i-xrip").value = ip;
  $("#i-cfip").value = ip;
  $("#i-tcip").value = ip;
}

// ── Device presets with SVG icons ──
const DEVICE_PRESETS = [
  {
    name: "Phone", res: "412×915",
    vw:"412",vh:"915",dpr:"2.625",dm:"8",
    svg: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="8" y="2" width="12" height="24" rx="2.5"/><line x1="12" y1="23" x2="16" y2="23"/></svg>`
  },
  {
    name: "iPhone", res: "393×852",
    vw:"393",vh:"852",dpr:"3",dm:"",
    svg: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="8" y="2" width="12" height="24" rx="3.5"/><line x1="12.5" y1="4" x2="15.5" y2="4"/></svg>`
  },
  {
    name: "Tablet", res: "1024×1366",
    vw:"1024",vh:"1366",dpr:"2",dm:"4",
    svg: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="4" y="3" width="20" height="22" rx="2"/><circle cx="14" cy="22" r="1"/></svg>`
  },
  {
    name: "Laptop", res: "1440×900",
    vw:"1440",vh:"900",dpr:"2",dm:"16",
    svg: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="5" y="4" width="18" height="13" rx="1.5"/><path d="M2 20h24l-2 4H4z"/></svg>`
  },
  {
    name: "Desktop", res: "1920×1080",
    vw:"1920",vh:"1080",dpr:"1",dm:"16",
    svg: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="22" height="15" rx="1.5"/><line x1="14" y1="18" x2="14" y2="22"/><line x1="9" y1="22" x2="19" y2="22"/></svg>`
  },
  {
    name: "4K Monitor", res: "3840×2160",
    vw:"3840",vh:"2160",dpr:"1.5",dm:"32",
    svg: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="2" y="3" width="24" height="14" rx="1.5"/><line x1="14" y1="17" x2="14" y2="21"/><line x1="8" y1="21" x2="20" y2="21"/><text x="14" y="12" text-anchor="middle" font-size="5" fill="currentColor" stroke="none" font-weight="700">4K</text></svg>`
  },
  {
    name: "Watch", res: "198×242",
    vw:"198",vh:"242",dpr:"2",dm:"1",
    svg: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="8" y="6" width="12" height="16" rx="4"/><line x1="12" y1="6" x2="12" y2="3"/><line x1="16" y1="6" x2="16" y2="3"/><line x1="12" y1="22" x2="12" y2="25"/><line x1="16" y1="22" x2="16" y2="25"/></svg>`
  },
  {
    name: "Old TV", res: "640×480",
    vw:"640",vh:"480",dpr:"1",dm:"",
    svg: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="6" width="22" height="16" rx="2"/><line x1="10" y1="3" x2="14" y2="6"/><line x1="18" y1="3" x2="14" y2="6"/><circle cx="22" cy="14" r="1"/><line x1="8" y1="22" x2="8" y2="24"/><line x1="20" y1="22" x2="20" y2="24"/></svg>`
  },
  {
    name: "Smart TV", res: "1920×1080",
    vw:"1920",vh:"1080",dpr:"1",dm:"2",
    svg: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="2" y="4" width="24" height="15" rx="1"/><path d="M8 19v2h12v-2"/><line x1="10" y1="21" x2="18" y2="21"/></svg>`
  },
  {
    name: "4K TV", res: "3840×2160",
    vw:"3840",vh:"2160",dpr:"1",dm:"2",
    svg: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="2" y="4" width="24" height="15" rx="1"/><path d="M10 19l-2 4h12l-2-4"/><text x="14" y="13" text-anchor="middle" font-size="5" fill="currentColor" stroke="none" font-weight="700">4K</text></svg>`
  },
  {
    name: "E-reader", res: "1072×1448",
    vw:"1072",vh:"1448",dpr:"1",dm:"1",
    svg: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="7" y="2" width="14" height="24" rx="2"/><line x1="10" y1="8" x2="18" y2="8"/><line x1="10" y1="11" x2="18" y2="11"/><line x1="10" y1="14" x2="16" y2="14"/></svg>`
  },
  {
    name: "Car", res: "1280×720",
    vw:"1280",vh:"720",dpr:"1.5",dm:"2",
    svg: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="8" width="22" height="12" rx="2"/><circle cx="8" cy="22" r="2"/><circle cx="20" cy="22" r="2"/><path d="M6 8l2-4h12l2 4"/></svg>`
  },
  {
    name: "VR Headset", res: "2064×2208",
    vw:"2064",vh:"2208",dpr:"1",dm:"8",
    svg: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="2" y="8" width="24" height="12" rx="4"/><circle cx="10" cy="14" r="3"/><circle cx="18" cy="14" r="3"/><path d="M13 14h2"/></svg>`
  },
  {
    name: "Game Console", res: "1920×1080",
    vw:"1920",vh:"1080",dpr:"1",dm:"8",
    svg: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 10c-2 0-3 2-3 5s1 5 3 5h4l2-2h6l2 2h4c2 0 3-2 3-5s-1-5-3-5z"/><circle cx="9" cy="14" r="1.5"/><circle cx="19" cy="13" r="1"/><circle cx="21" cy="15" r="1"/></svg>`
  },
  {
    name: "Foldable", res: "884×2120",
    vw:"884",vh:"2120",dpr:"2.625",dm:"8",
    svg: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="5" y="2" width="18" height="24" rx="2.5"/><line x1="14" y1="2" x2="14" y2="26" stroke-dasharray="2 2"/></svg>`
  },
  {
    name: "None", res: "clear",
    vw:"",vh:"",dpr:"",dm:"",
    svg: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="6" y1="6" x2="22" y2="22"/><line x1="22" y1="6" x2="6" y2="22"/></svg>`
  },
];

function renderDevices() {
  const grid = $("#devGrid");
  grid.innerHTML = "";
  for (const d of DEVICE_PRESETS) {
    const card = document.createElement("div");
    card.className = "dev-card";
    card.innerHTML = `${d.svg}<span class="dev-name">${d.name}</span><span class="dev-res">${d.res}</span>`;
    card.addEventListener("click", () => {
      $("#i-vw").value = d.vw;
      $("#i-vh").value = d.vh;
      $("#i-dpr").value = d.dpr;
      $("#i-dm").value = d.dm;
      toast(d.vw ? `${d.name} screen applied` : "Screen cleared");
    });
    grid.appendChild(card);
  }
}

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("state", r => {
    if (r.state) state = { ...BLANK_STATE, ...r.state };
    renderProfiles();
    fillForm();
    updateStatus();
    renderIdentities();
    renderDevices();
    populateGeo();
  });

  // Geo country picker
  function populateGeo() {
    const sel = $("#i-geo");
    for (const g of GEO_RANGES) {
      const o = document.createElement("option");
      o.value = g.code; o.textContent = g.name;
      sel.appendChild(o);
    }
  }

  // Geo picker change - auto generate IP
  $("#i-geo").addEventListener("change", () => {
    const code = $("#i-geo").value;
    if (!code) return;
    const ip = genIP(code);
    fillIPFields(ip);
  });

  // Randomize button
  $("#randomizeIP").addEventListener("click", () => {
    const code = $("#i-geo").value;
    if (!code) { toast("Pick a country first"); return; }
    const ip = genIP(code);
    fillIPFields(ip);
    toast("IP randomized");
  });

  // Sync IP fields
  const ipFields = ["#i-xff","#i-xrip","#i-cfip","#i-tcip"];
  ipFields.forEach(sel => {
    $(sel).addEventListener("input", () => {
      if ($("#syncIPs").checked) {
        const val = $(sel).value;
        ipFields.forEach(s => { if (s !== sel) $(s).value = val; });
      }
    });
  });

  // Collapsible identity panel
  $("#idToggle").addEventListener("click", () => {
    const body = $("#idBody");
    const arrow = $("#idArrow");
    const isOpen = body.classList.toggle("open");
    arrow.textContent = isOpen ? "▾" : "▸";
  });

  // Tabs
  $$(".tabs button").forEach(b => b.addEventListener("click", () => {
    $$(".tabs button").forEach(x => x.classList.remove("on"));
    $$(".pane").forEach(x => x.classList.remove("on"));
    b.classList.add("on");
    $(`#p-${b.dataset.t}`).classList.add("on");
    if (b.dataset.t === "active") showActive();
    if (b.dataset.t === "sites") renderSiteRules();
  }));

  // Power toggle - immediate
  $("#pwr").addEventListener("change", () => {
    prof().enabled = $("#pwr").checked;
    collectAndSave();
  });

  // Profile
  $("#profSel").addEventListener("change", () => {
    collectForm();
    state.activeProfileId = $("#profSel").value;
    chrome.storage.local.set({ state }, () => { fillForm(); updateStatus(); });
  });
  $("#pNew").addEventListener("click", newProf);
  $("#pRen").addEventListener("click", renProf);
  $("#pDup").addEventListener("click", dupProf);
  $("#pDel").addEventListener("click", delProf);

  // Add rows
  $("#chAdd").addEventListener("click", () => { addCH("",""); updN(); });
  $("#domAdd").addEventListener("click", () => { addDom(""); updN(); });

  // Site rules
  $("#addSiteRule").addEventListener("click", addSiteRule);

  // Filter mode
  $$(".fmode button").forEach(b => b.addEventListener("click", () => {
    $$(".fmode button").forEach(x => x.classList.remove("on"));
    b.classList.add("on");
  }));

  // Presets modal
  $("#pickUA").addEventListener("click", () => openModal(UA_PRESETS, "i-ua"));
  $("#pickAL").addEventListener("click", () => openModal(AL_PRESETS, "i-al"));
  $("#mClose").addEventListener("click", closeModal);
  $("#mbg").addEventListener("click", e => { if (e.target === $("#mbg")) closeModal(); });
  $("#mSearch").addEventListener("input", renderModalList);

  // Detect current UA
  $("#detectUA").addEventListener("click", () => {
    $("#i-ua").value = navigator.userAgent;
    toast("Current UA filled");
  });

  // Strip Client Hints toggle
  $("#stripHints").addEventListener("change", () => {
    $("#hintsFields").classList.toggle("disabled", $("#stripHints").checked);
  });

  // Verify spoofing
  $("#verifyBtn").addEventListener("click", () => {
    chrome.tabs.create({ url: "https://httpbin.org/headers" });
  });

  // Footer
  $("#saveBtn").addEventListener("click", collectAndSave);
  $("#revertBtn").addEventListener("click", revert);

  // IO
  $("#expBtn").addEventListener("click", doExport);
  $("#impBtn").addEventListener("click", () => $("#impFile").click());
  $("#impFile").addEventListener("change", doImport);
  $("#nukBtn").addEventListener("click", doReset);
  $("#ghRepo").addEventListener("click", () => chrome.tabs.create({ url: "https://github.com/mthcht/Masquerade-Spoofer" }));
  $("#ghIssue").addEventListener("click", () => chrome.tabs.create({ url: "https://github.com/mthcht/Masquerade-Spoofer/issues" }));
  $("#ghContrib").addEventListener("click", () => chrome.tabs.create({ url: "https://github.com/mthcht/Masquerade-Spoofer/pulls" }));
});

// ── Helpers ──
function prof() { return state.profiles[state.activeProfileId] || Object.values(state.profiles)[0]; }
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }
function esc(s) { return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function toast(msg) {
  const t = $("#toast"); t.textContent = msg;
  t.classList.add("on"); setTimeout(() => t.classList.remove("on"), 1500);
}

// ── Render profiles (only the dropdown) ──
function renderProfiles() {
  const sel = $("#profSel"); sel.innerHTML = "";
  for (const [id, p] of Object.entries(state.profiles)) {
    const o = document.createElement("option");
    o.value = id; o.textContent = p.name;
    if (id === state.activeProfileId) o.selected = true;
    sel.appendChild(o);
  }
}

// ── Identity presets grid ──
function renderIdentities() {
  const grid = $("#idGrid");
  grid.innerHTML = "";
  for (const id of IDENTITIES) {
    const btn = document.createElement("button");
    btn.className = "id-btn" + (id.wide ? " wide" : "");
    btn.innerHTML = `${esc(id.label)}<span class="id-sub">${esc(id.sub)}</span>`;
    btn.addEventListener("click", () => applyIdentity(id));
    grid.appendChild(btn);
  }
}

function applyIdentity(id) {
  // Standard headers
  $("#i-ua").value = id.userAgent || "";
  $("#i-al").value = id.acceptLanguage || "";
  $("#i-accept").value = id.accept || "";
  $("#i-ae").value = id.acceptEncoding || "";
  $("#i-ref").value = "";
  $("#i-ori").value = "";
  $("#i-dnt").value = id.dnt || "";

  // Client Hints
  $("#stripHints").checked = !!id.stripHints;
  $("#hintsFields").classList.toggle("disabled", !!id.stripHints);
  $("#i-scu").value = id.secChUa || "";
  $("#i-scum").value = id.secChUaMobile || "";
  $("#i-scup").value = id.secChUaPlatform || "";
  $("#i-scupv").value = id.secChUaPlatformVersion || "";
  $("#i-scufv").value = id.secChUaFullVersion || "";
  $("#i-scua").value = id.secChUaArch || "";
  $("#i-scub").value = id.secChUaBitness || "";
  $("#i-scumod").value = id.secChUaModel || "";

  // Sec-Fetch
  $("#i-sfd").value = id.secFetchDest || "";
  $("#i-sfm").value = id.secFetchMode || "";
  $("#i-sfs").value = id.secFetchSite || "";

  // Device / Screen
  $("#i-vw").value = id.viewportWidth || "";
  $("#i-vh").value = id.viewportHeight || "";
  $("#i-dpr").value = id.dpr || "";
  $("#i-dm").value = id.deviceMemory || "";

  // Network
  $("#i-ect").value = id.ect || "";
  $("#i-dl").value = id.downlink || "";
  $("#i-rtt").value = id.rtt || "";
  $("#i-sd").value = id.saveData || "";

  // IP / Geo - auto-generate IP if country is set
  if (id.geoCountry) {
    $("#i-geo").value = id.geoCountry;
    const ip = genIP(id.geoCountry);
    if (ip) fillIPFields(ip);
  } else {
    $("#i-geo").value = "";
    fillIPFields("");
  }

  toast("Identity loaded - hit Save");
}

// ── Fill form once (on load or profile switch only!) ──
function fillForm() {
  const p = prof();
  $("#pwr").checked = p.enabled;
  $("#i-ua").value = p.userAgent || "";
  $("#i-al").value = p.acceptLanguage || "";
  $("#i-ref").value = p.referer || "";
  $("#i-ori").value = p.origin || "";
  $("#i-dnt").value = p.dnt || "";
  $("#i-accept").value = p.accept || "";
  $("#i-ae").value = p.acceptEncoding || "";

  // Client Hints
  $("#stripHints").checked = !!p.stripHints;
  $("#hintsFields").classList.toggle("disabled", !!p.stripHints);
  $("#i-scu").value = p.secChUa || "";
  $("#i-scum").value = p.secChUaMobile || "";
  $("#i-scup").value = p.secChUaPlatform || "";
  $("#i-scupv").value = p.secChUaPlatformVersion || "";
  $("#i-scufv").value = p.secChUaFullVersion || "";
  $("#i-scua").value = p.secChUaArch || "";
  $("#i-scub").value = p.secChUaBitness || "";
  $("#i-scumod").value = p.secChUaModel || "";

  // Sec-Fetch
  $("#i-sfd").value = p.secFetchDest || "";
  $("#i-sfm").value = p.secFetchMode || "";
  $("#i-sfs").value = p.secFetchSite || "";

  // Device / Screen
  $("#i-vw").value = p.viewportWidth || "";
  $("#i-vh").value = p.viewportHeight || "";
  $("#i-dpr").value = p.dpr || "";
  $("#i-dm").value = p.deviceMemory || "";

  // Network
  $("#i-ect").value = p.ect || "";
  $("#i-dl").value = p.downlink || "";
  $("#i-rtt").value = p.rtt || "";
  $("#i-sd").value = p.saveData || "";

  // IP origin
  $("#i-geo").value = p.geoCountry || "";
  $("#i-xff").value = p.xff || "";
  $("#i-xrip").value = p.xRealIP || "";
  $("#i-cfip").value = p.cfIP || "";
  $("#i-tcip").value = p.trueClientIP || "";

  $("#chBox").innerHTML = "";
  (p.customHeaders || []).forEach(h => addCH(h.name, h.value));

  $$(".fmode button").forEach(b => b.classList.toggle("on", b.dataset.m === (p.filterMode || "all")));
  $("#domBox").innerHTML = "";
  (p.domainFilters || []).forEach(d => addDom(d));
  updN();
  renderSiteRules();
}
function collectForm() {
  const p = prof();
  p.enabled = $("#pwr").checked;
  p.userAgent = $("#i-ua").value.trim();
  p.acceptLanguage = $("#i-al").value.trim();
  p.referer = $("#i-ref").value.trim();
  p.origin = $("#i-ori").value.trim();
  p.dnt = $("#i-dnt").value;
  p.accept = $("#i-accept").value.trim();
  p.acceptEncoding = $("#i-ae").value.trim();

  // Client Hints
  p.stripHints = $("#stripHints").checked;
  p.secChUa = $("#i-scu").value.trim();
  p.secChUaMobile = $("#i-scum").value;
  p.secChUaPlatform = $("#i-scup").value.trim();
  p.secChUaPlatformVersion = $("#i-scupv").value.trim();
  p.secChUaFullVersion = $("#i-scufv").value.trim();
  p.secChUaArch = $("#i-scua").value.trim();
  p.secChUaBitness = $("#i-scub").value;
  p.secChUaModel = $("#i-scumod").value.trim();

  // Sec-Fetch
  p.secFetchDest = $("#i-sfd").value;
  p.secFetchMode = $("#i-sfm").value;
  p.secFetchSite = $("#i-sfs").value;

  // Device / Screen
  p.viewportWidth = $("#i-vw").value.trim();
  p.viewportHeight = $("#i-vh").value.trim();
  p.dpr = $("#i-dpr").value;
  p.deviceMemory = $("#i-dm").value;

  // Network
  p.ect = $("#i-ect").value;
  p.downlink = $("#i-dl").value.trim();
  p.rtt = $("#i-rtt").value.trim();
  p.saveData = $("#i-sd").value;

  // IP origin
  p.geoCountry = $("#i-geo").value;
  p.xff = $("#i-xff").value.trim();
  p.xRealIP = $("#i-xrip").value.trim();
  p.cfIP = $("#i-cfip").value.trim();
  p.trueClientIP = $("#i-tcip").value.trim();

  p.customHeaders = [...$$("#chBox .row")].map(r => ({
    name: r.querySelector(".cn").value.trim(),
    value: r.querySelector(".cv").value.trim()
  })).filter(h => h.name);
  const fm = document.querySelector(".fmode button.on");
  p.filterMode = fm ? fm.dataset.m : "all";
  p.domainFilters = [...$$(".di")].map(i => i.value.trim()).filter(Boolean);
}

function collectAndSave() {
  collectForm();
  chrome.storage.local.set({ state }, () => {
    toast("Applied");
    updateStatus();
  });
}

function revert() {
  chrome.storage.local.get("state", r => {
    if (r.state) state = { ...BLANK_STATE, ...r.state };
    renderProfiles(); fillForm(); updateStatus(); toast("Reverted");
  });
}

// ── Dynamic rows ──
function addCH(n, v) {
  const r = document.createElement("div"); r.className = "row";
  r.innerHTML = `<input type="text" class="cn" placeholder="X-Custom-Header" value="${esc(n)}"><input type="text" class="cv" placeholder="value" value="${esc(v)}"><button class="rdel">×</button>`;
  r.querySelector(".rdel").onclick = () => { r.remove(); updN(); };
  $("#chBox").appendChild(r);
}
function addDom(v) {
  const r = document.createElement("div"); r.className = "row";
  r.innerHTML = `<input type="text" class="di" placeholder="example.com" value="${esc(v)}"><button class="rdel">×</button>`;
  r.querySelector(".rdel").onclick = () => { r.remove(); updN(); };
  $("#domBox").appendChild(r);
}
function updN() {
  $("#chN").textContent = $$("#chBox .row").length;
  $("#domN").textContent = $$("#domBox .row").length;
}

// ── Site rules (per-domain profile routing) ──
function renderSiteRules() {
  const box = $("#siteRulesBox");
  box.innerHTML = "";
  for (let i = 0; i < (state.siteRules || []).length; i++) {
    const sr = state.siteRules[i];
    const profName = state.profiles[sr.profileId]?.name || "???";
    const row = document.createElement("div");
    row.className = "site-rule";
    row.innerHTML = `<span class="sr-domain">${esc(sr.domain)}</span><span class="sr-profile">${esc(profName)}</span><button class="rdel" data-idx="${i}">×</button>`;
    row.querySelector(".rdel").addEventListener("click", () => {
      state.siteRules.splice(i, 1);
      chrome.storage.local.set({ state }, () => { renderSiteRules(); toast("Rule removed - hit Save"); });
    });
    box.appendChild(row);
  }
  // Populate profile dropdown for new rule
  const sel = $("#newSiteProfile");
  sel.innerHTML = "";
  for (const [id, p] of Object.entries(state.profiles)) {
    const o = document.createElement("option");
    o.value = id; o.textContent = p.name;
    sel.appendChild(o);
  }
}

function addSiteRule() {
  const domain = $("#newSiteDomain").value.trim();
  const profileId = $("#newSiteProfile").value;
  if (!domain) { toast("Enter a domain"); return; }
  if (!profileId) { toast("Select a profile"); return; }
  if (!state.siteRules) state.siteRules = [];
  // Replace existing rule for same domain
  state.siteRules = state.siteRules.filter(r => r.domain !== domain);
  state.siteRules.push({ domain, profileId });
  $("#newSiteDomain").value = "";
  chrome.storage.local.set({ state }, () => { renderSiteRules(); toast("Site rule added - hit Save"); });
}

// ── Status bar (reflects real rule state) ──
async function updateStatus() {
  try {
    const rules = await chrome.declarativeNetRequest.getDynamicRules();
    const bar = $("#statusBar");
    const txt = $("#statusText");
    const tbst = $("#tbStatus");
    const p = prof();

    if (!p.enabled) {
      bar.className = "status-strip";
      txt.textContent = "Spoofing disabled";
      tbst.className = "tb-status off"; tbst.textContent = "OFF";
    } else if (rules.length === 0) {
      bar.className = "status-strip";
      txt.textContent = "No headers configured";
      tbst.className = "tb-status off"; tbst.textContent = "IDLE";
    } else {
      const hdrs = rules.reduce((a, r) => a.concat(r.action.requestHeaders || []), []);
      const setCount = hdrs.filter(h => h.operation === "set").length;
      const rmCount = hdrs.filter(h => h.operation === "remove").length;
      const scope = p.filterMode === "all" ? "all sites" : p.filterMode === "only" ? (p.domainFilters||[]).length + " site(s)" : "all except " + (p.domainFilters||[]).length;
      let msg = [];
      if (setCount) msg.push(`${setCount} spoofed`);
      if (rmCount) msg.push(`${rmCount} stripped`);
      bar.className = "status-strip live";
      const srCount = (state.siteRules || []).length;
      const srMsg = srCount > 0 ? ` + ${srCount} site rule${srCount > 1 ? "s" : ""}` : "";
      txt.textContent = `${msg.join(", ")} · ${scope}${srMsg}`;
      tbst.className = "tb-status on"; tbst.textContent = rules.length > 1 ? `${rules.length}P` : (setCount + rmCount) + " HDR";
    }
  } catch {
    $("#statusBar").className = "status-strip";
    $("#statusText").textContent = "Unable to check";
    $("#tbStatus").className = "tb-status off"; $("#tbStatus").textContent = "ERR";
  }
}

// ── Active rules tab ──
async function showActive() {
  const rules = await chrome.declarativeNetRequest.getDynamicRules();
  const box = $("#activeBox");
  if (!rules.length) {
    // Still show checker even with no rules
    let html = '';
    const checks = runConsistencyChecks();
    const total = checks.length;
    const passes = checks.filter(c => c.ok).length;
    const score = total > 0 ? Math.round((passes / total) * 100) : 0;
    const circ = 2 * Math.PI * 17;
    const offset = circ - (score / 100) * circ;
    const scoreColor = score >= 80 ? "#4CAF50" : score >= 50 ? "#F0A030" : "#C2694F";
    html += `<div class="check-score"><svg class="score-ring" viewBox="0 0 42 42"><circle class="bg" cx="21" cy="21" r="17"/><circle class="fg" cx="21" cy="21" r="17" stroke="${scoreColor}" stroke-dasharray="${circ.toFixed(1)}" stroke-dashoffset="${offset.toFixed(1)}" transform="rotate(-90 21 21)"/></svg><div class="score-label"><div class="num" style="color:${scoreColor}">${score}%</div><div class="txt">${passes}/${total} checks passed</div></div></div>`;
    for (const c of checks) { const cls = c.ok ? "pass" : (c.sev === "warn" ? "warn" : "fail"); html += `<div class="check-card ${cls}"><b>${c.ok ? "✓" : c.sev === "warn" ? "⚠" : "✗"} ${esc(c.name)}</b><br>${esc(c.msg)}</div>`; }
    html += '<div class="empty-msg" style="margin-top:10px">No active rules - configure headers and save</div>';
    box.innerHTML = html;
    return;
  }

  let html = '';

  // ── Fingerprint score FIRST ──
  const checks = runConsistencyChecks();
  const total = checks.length;
  const passes = checks.filter(c => c.ok).length;
  const score = total > 0 ? Math.round((passes / total) * 100) : 0;
  const circ = 2 * Math.PI * 17;
  const offset = circ - (score / 100) * circ;
  const scoreColor = score >= 80 ? "#4CAF50" : score >= 50 ? "#F0A030" : "#C2694F";

  html += `<div class="check-score"><svg class="score-ring" viewBox="0 0 42 42"><circle class="bg" cx="21" cy="21" r="17"/><circle class="fg" cx="21" cy="21" r="17" stroke="${scoreColor}" stroke-dasharray="${circ.toFixed(1)}" stroke-dashoffset="${offset.toFixed(1)}" transform="rotate(-90 21 21)"/></svg><div class="score-label"><div class="num" style="color:${scoreColor}">${score}%</div><div class="txt">${passes}/${total} checks passed</div></div></div>`;

  for (const c of checks) {
    const cls = c.ok ? "pass" : (c.sev === "warn" ? "warn" : "fail");
    html += `<div class="check-card ${cls}"><b>${c.ok ? "✓" : c.sev === "warn" ? "⚠" : "✗"} ${esc(c.name)}</b><br>${esc(c.msg)}</div>`;
  }

  // ── Then active headers ──
  html += '<div class="sec-h" style="margin-top:12px">Active headers</div>';
  const hdrs = rules.reduce((a, r) => a.concat(r.action.requestHeaders || []), []);
  const setHdrs = hdrs.filter(h => h.operation === "set");
  const rmHdrs = hdrs.filter(h => h.operation === "remove");
  for (const h of setHdrs) {
    html += `<div class="hdr-chip"><b>${esc(h.header)}</b><span title="${esc(h.value)}">${esc(h.value)}</span></div>`;
  }
  if (rmHdrs.length) {
    html += '<div class="sec-h" style="margin-top:8px">Stripped</div>';
    for (const h of rmHdrs) {
      html += `<div class="hdr-chip" style="border-color:#E0A89C"><b style="color:#B54A3A">${esc(h.header)}</b><span style="color:#B54A3A">removed</span></div>`;
    }
  }

  // Scope info
  const cond = rules[0]?.condition;
  if (cond?.requestDomains) html += `<div style="margin-top:8px;font-size:10px;color:#8B7560">Scope: only ${cond.requestDomains.join(", ")}</div>`;
  else if (cond?.excludedRequestDomains) html += `<div style="margin-top:8px;font-size:10px;color:#8B7560">Scope: all except ${cond.excludedRequestDomains.join(", ")}</div>`;
  else html += `<div style="margin-top:8px;font-size:10px;color:#8B7560">Scope: all sites</div>`;

  const sr = state.siteRules || [];
  if (sr.length > 0) {
    html += `<div style="margin-top:6px;font-size:10px;color:#C2694F;font-weight:600">${sr.length} site-specific rule${sr.length > 1 ? "s" : ""}</div>`;
    for (const r of sr) {
      const pName = state.profiles[r.profileId]?.name || "???";
      html += `<div style="font-size:10px;color:#8B7560;margin-left:8px">${esc(r.domain)} ← ${esc(pName)}</div>`;
    }
  }

  box.innerHTML = html;
}

// ── Consistency analysis engine ──
function runConsistencyChecks() {
  const p = prof();
  const checks = [];
  const ua = (p.userAgent || "").toLowerCase();
  const isChromium = ua.includes("chrome") || ua.includes("chromium");
  const isFirefox = ua.includes("firefox") && !ua.includes("seamonkey");
  const isSafari = ua.includes("safari") && !isChromium;
  const isEdge = ua.includes("edg/") || ua.includes("edga/") || ua.includes("edgios/");
  const isMobileUA = ua.includes("mobile") || ua.includes("android") || ua.includes("iphone") || ua.includes("ipod");
  const isBot = ua.includes("bot") || ua.includes("crawler") || ua.includes("spider") || ua.includes("curl") || ua.includes("wget");

  // ── 1. UA configured ──
  checks.push({
    name: "User-Agent set",
    ok: !!p.userAgent,
    msg: p.userAgent ? "User-Agent is configured" : "No UA - your real browser identity is fully exposed",
    sev: "fail"
  });

  if (!p.userAgent) return checks; // no point checking further

  // ── 2. Client Hints vs UA brand ──
  if (!p.stripHints && p.secChUa) {
    const hl = p.secChUa.toLowerCase();
    let ok = true, msg = "Browser brand consistent between UA and Client Hints";
    if (isChromium && !isEdge && !hl.includes("chrome") && !hl.includes("chromium")) { ok = false; msg = "UA is Chrome-based but Sec-Ch-Ua missing Chrome/Chromium brand"; }
    if (isEdge && !hl.includes("edge")) { ok = false; msg = "UA is Edge but Sec-Ch-Ua missing Edge brand"; }
    if (isFirefox) { ok = false; msg = "Firefox never sends Sec-Ch-Ua - strip hints or clear this field"; }
    if (isSafari) { ok = false; msg = "Safari never sends Sec-Ch-Ua - strip hints or clear this field"; }
    checks.push({ name: "UA ↔ Hints brand", ok, msg, sev: "fail" });
  }

  // ── 3. Non-Chromium should strip hints ──
  if (!p.stripHints && (isFirefox || isSafari || isBot)) {
    const hasAnyHint = p.secChUa || p.secChUaMobile || p.secChUaPlatform;
    checks.push({
      name: "Hints stripped for non-Chromium",
      ok: !hasAnyHint,
      msg: hasAnyHint
        ? `${isFirefox ? "Firefox" : isSafari ? "Safari" : "Bots"} never send Client Hints - enable "Strip all" or clear hint fields`
        : "No Client Hints set for non-Chromium UA - correct",
      sev: "fail"
    });
  }

  // ── 4. Chromium UA missing hints ──
  if (isChromium && !isBot) {
    const hasHints = p.stripHints || p.secChUa;
    checks.push({
      name: "Chromium hints present",
      ok: !!hasHints,
      msg: hasHints
        ? (p.stripHints ? "Hints stripped - unusual for Chromium but won't break" : "Client Hints configured for Chromium UA")
        : "Chromium browsers always send Sec-Ch-Ua - leaving it blank while UA says Chrome is a mismatch",
      sev: p.stripHints ? "warn" : "fail"
    });
  }

  // ── 5. Platform consistency ──
  if (p.secChUaPlatform) {
    const pl = p.secChUaPlatform.toLowerCase();
    let ok = true, msg = "OS consistent between UA and platform hint";
    if (ua.includes("windows") && !pl.includes("windows")) { ok = false; msg = "UA says Windows but platform hint doesn't"; }
    else if (ua.includes("macintosh") && !pl.includes("macos")) { ok = false; msg = "UA says macOS but platform hint doesn't"; }
    else if (ua.includes("x11") && !ua.includes("android") && !pl.includes("linux") && !pl.includes("chrome")) { ok = false; msg = "UA says Linux but platform hint doesn't"; }
    else if (ua.includes("android") && !pl.includes("android")) { ok = false; msg = "UA says Android but platform hint doesn't"; }
    else if ((ua.includes("iphone") || ua.includes("ipad")) && !pl.includes("ios")) { ok = false; msg = "UA says iOS but platform hint doesn't"; }
    checks.push({ name: "UA ↔ Platform", ok, msg, sev: "fail" });
  }

  // ── 6. Mobile flag ──
  if (p.secChUaMobile) {
    const hintMobile = p.secChUaMobile === "?1";
    const ok = isMobileUA === hintMobile;
    checks.push({
      name: "Mobile flag",
      ok,
      msg: ok ? "Mobile hint matches UA" : `UA is ${isMobileUA ? "mobile" : "desktop"} but Sec-Ch-Ua-Mobile=${p.secChUaMobile}`,
      sev: "fail"
    });
  }

  // ── 7. Version coherence (UA version vs hint version) ──
  if (p.secChUa && p.userAgent) {
    const uaVerMatch = ua.match(/chrome\/(\d+)/);
    const hintVerMatch = p.secChUa.match(/Chromium";v="(\d+)/i) || p.secChUa.match(/Chrome";v="(\d+)/i);
    if (uaVerMatch && hintVerMatch) {
      const uaVer = parseInt(uaVerMatch[1]);
      const hintVer = parseInt(hintVerMatch[1]);
      const ok = Math.abs(uaVer - hintVer) <= 2;
      checks.push({
        name: "Version numbers",
        ok,
        msg: ok ? `UA Chrome/${uaVer} matches hint v${hintVer}` : `UA says Chrome/${uaVer} but hint says v${hintVer} - versions should match`,
        sev: "fail"
      });
    }
  }

  // ── 8. Accept header browser match ──
  if (p.accept) {
    const hasAvif = p.accept.includes("image/avif");
    const hasWebp = p.accept.includes("image/webp");
    const hasSigned = p.accept.includes("signed-exchange");
    let ok = true, msg = "Accept header plausible";
    if (isChromium && (!hasAvif || !hasWebp || !hasSigned)) { ok = false; msg = "Chrome Accept should include image/avif, image/webp, and signed-exchange"; }
    if (isFirefox && (hasAvif || hasSigned)) { ok = false; msg = "Firefox navigation Accept doesn't include image/avif or signed-exchange"; }
    if (isSafari && (hasAvif || hasSigned)) { ok = false; msg = "Safari Accept doesn't include image/avif or signed-exchange"; }
    checks.push({ name: "Accept format", ok, msg, sev: "warn" });
  }

  // ── 9. Accept-Encoding ──
  if (p.acceptEncoding) {
    const hasZstd = p.acceptEncoding.includes("zstd");
    const hasBr = p.acceptEncoding.includes("br");
    let ok = true, msg = "Accept-Encoding plausible";
    if (isSafari && hasZstd) { ok = false; msg = "Safari doesn't support zstd"; }
    if (isChromium && !hasZstd) { msg = "Modern Chrome includes zstd - consider adding it"; ok = false; }
    if (!hasBr && (isChromium || isFirefox || isSafari)) { msg = "All modern browsers support Brotli (br) - missing it is suspicious"; ok = false; }
    checks.push({ name: "Accept-Encoding", ok, msg, sev: "warn" });
  }

  // ── 10. Language vs geo IP ──
  if (p.acceptLanguage && p.geoCountry) {
    const lang = p.acceptLanguage.toLowerCase().slice(0, 2);
    const geoLang = {US:"en",GB:"en",CA:"en",AU:"en",DE:"de",FR:"fr",NL:"nl",JP:"ja",KR:"ko",BR:"pt",IN:"hi",RU:"ru",CN:"zh",IT:"it",ES:"es",SE:"sv",PL:"pl",CH:"de",SG:"en",MX:"es",AR:"es",ZA:"en",AE:"ar",TR:"tr",IL:"he",NO:"nb"};
    const expected = geoLang[p.geoCountry];
    if (expected) {
      const ok = lang === expected || lang === "en";
      checks.push({ name: "Language ↔ IP geo", ok, msg: ok ? "Language plausible for IP country" : `Language "${lang}" unusual for ${p.geoCountry} (expected "${expected}" or "en")`, sev: "warn" });
    }
  }

  // ── 11. IP headers sync ──
  const ipVals = [p.xff, p.xRealIP, p.cfIP, p.trueClientIP].filter(Boolean);
  if (ipVals.length > 1) {
    const unique = new Set(ipVals);
    checks.push({ name: "IP headers synced", ok: unique.size <= 1, msg: unique.size <= 1 ? "All IP headers match" : "Different IPs across headers - servers will flag this", sev: "warn" });
  }

  // ── 12. Architecture ──
  if (p.secChUaArch) {
    const al = p.secChUaArch.toLowerCase();
    let ok = true, msg = "Architecture plausible";
    if (ua.includes("macintosh") && al.includes("x86")) { ok = false; msg = "macOS + x86 is rare now - Apple Silicon Macs use ARM"; }
    if (isMobileUA && al.includes("x86")) { ok = false; msg = "Mobile devices use ARM, not x86"; }
    if (ua.includes("win64") && al.includes("arm")) { ok = false; msg = "Win64 UA with ARM arch - uncommon, most Windows is x86"; }
    checks.push({ name: "Architecture", ok, msg, sev: "warn" });
  }

  // ── 13. Model field (should be empty for desktop, set for mobile) ──
  if (p.secChUaModel !== undefined && p.userAgent) {
    const model = (p.secChUaModel || "").replace(/"/g, "").trim();
    let ok = true, msg = "Model field appropriate";
    if (isMobileUA && !model) { msg = "Mobile UA but no device model set - most mobile Chrome sends a model"; ok = false; }
    if (!isMobileUA && model) { msg = "Desktop UA with a device model - desktops send empty model"; ok = false; }
    if (model && ua.includes("pixel") && !model.toLowerCase().includes("pixel")) { msg = "UA mentions Pixel but model doesn't match"; ok = false; }
    if (model && ua.includes("sm-") && !model.toLowerCase().includes("sm-")) { msg = "UA mentions Samsung model but Sec-Ch-Ua-Model doesn't match"; ok = false; }
    checks.push({ name: "Device model", ok, msg, sev: "warn" });
  }

  // ── 14. Bitness ──
  if (p.secChUaBitness) {
    const bits = p.secChUaBitness.replace(/"/g, "");
    let ok = true, msg = "Bitness plausible";
    if (isMobileUA && bits === "32") { msg = "Most modern phones are 64-bit - 32 is suspicious"; ok = false; }
    if (ua.includes("win64") && bits === "32") { msg = "UA says Win64 but bitness says 32"; ok = false; }
    checks.push({ name: "Bitness", ok, msg, sev: "warn" });
  }

  // ── 15. Sec-Fetch consistency ──
  if (p.secFetchDest || p.secFetchMode || p.secFetchSite) {
    let ok = true, msg = "Sec-Fetch headers plausible";
    if (p.secFetchDest === "document" && p.secFetchMode !== "navigate") { ok = false; msg = "Sec-Fetch-Dest=document usually pairs with Mode=navigate"; }
    if (p.secFetchMode === "navigate" && p.secFetchDest !== "document") { ok = false; msg = "Sec-Fetch-Mode=navigate usually pairs with Dest=document"; }
    if (isBot && (p.secFetchDest || p.secFetchMode)) { ok = false; msg = "Bots/CLI tools don't send Sec-Fetch headers - clear them"; }
    checks.push({ name: "Sec-Fetch coherence", ok, msg, sev: "warn" });
  }

  // ── 16. IP set but no geo ──
  if (ipVals.length > 0 && !p.geoCountry) {
    checks.push({ name: "Geo country selected", ok: false, msg: "IP headers are set but no country selected - use the country picker for realistic IPs", sev: "warn" });
  }

  // ── 17. IP format validation ──
  if (p.xff) {
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    const ok = ipRegex.test(p.xff.split(",")[0].trim());
    checks.push({ name: "IP format valid", ok, msg: ok ? "IP address format is valid" : "IP address format looks invalid - use dotted quad (e.g. 203.0.113.42)", sev: "fail" });
  }

  // ── 18. Screen size vs device type ──
  if (p.viewportWidth) {
    const vw = parseInt(p.viewportWidth);
    let ok = true, msg = "Viewport plausible";
    if (isMobileUA && vw > 600) { ok = false; msg = `Mobile UA but viewport ${vw}px wide - phones are typically 360-430px`; }
    if (!isMobileUA && !isBot && vw < 800) { ok = false; msg = `Desktop UA but viewport only ${vw}px wide - desktops are typically 1280-1920px`; }
    checks.push({ name: "Viewport size", ok, msg, sev: "warn" });
  }

  // ── 19. DPR vs device type ──
  if (p.dpr) {
    const dpr = parseFloat(p.dpr);
    let ok = true, msg = "DPR plausible";
    if (ua.includes("windows") && dpr > 2) { ok = false; msg = "Windows rarely has DPR > 2 - most are 1 or 1.25-1.5"; }
    if (isMobileUA && dpr === 1) { ok = false; msg = "Modern phones always have DPR >= 2"; }
    checks.push({ name: "Pixel ratio", ok, msg, sev: "warn" });
  }

  // ── 20. Device-Memory vs device type ──
  if (p.deviceMemory) {
    const dm = parseInt(p.deviceMemory);
    let ok = true, msg = "Device memory plausible";
    if (isMobileUA && dm > 16) { ok = false; msg = "Phones don't have 32GB RAM"; }
    if (!isMobileUA && dm <= 2) { ok = false; msg = "Desktop with 2GB RAM is extremely unusual"; }
    checks.push({ name: "Device memory", ok, msg, sev: "warn" });
  }

  // ── 21. Network profile coherence ──
  if (p.ect && p.downlink) {
    const dl = parseFloat(p.downlink);
    const rtt = parseInt(p.rtt || "0");
    let ok = true, msg = "Network profile coherent";
    if (p.ect === "4g" && dl < 1) { ok = false; msg = "ECT=4g but downlink < 1 Mbps - inconsistent"; }
    if (p.ect === "3g" && dl > 20) { ok = false; msg = "ECT=3g but downlink > 20 Mbps - 3G is much slower"; }
    if (p.ect === "2g" && dl > 1) { ok = false; msg = "ECT=2g but downlink > 1 Mbps - 2G is very slow"; }
    if (p.ect === "4g" && rtt > 500) { ok = false; msg = "ECT=4g but RTT > 500ms - 4G latency is typically 20-100ms"; }
    if (isMobileUA && dl > 100 && p.ect === "4g") { msg = "Mobile on 4G with 100+ Mbps is possible but uncommon"; ok = false; }
    checks.push({ name: "Network coherence", ok, msg, sev: "warn" });
  }

  // ── 22. Network vs geo plausibility ──
  if (p.ect && p.geoCountry) {
    const fastCountries = ["US","GB","DE","FR","NL","JP","KR","SE","NO","CH","SG","CA","AU"];
    const slowCountries = ["IN","BR","ZA","MX","AR"];
    const dl = parseFloat(p.downlink || "0");
    let ok = true, msg = "Network speed plausible for region";
    if (slowCountries.includes(p.geoCountry) && dl > 100) { ok = false; msg = `${dl} Mbps is unusually fast for ${p.geoCountry} - typical mobile is 5-20 Mbps`; }
    checks.push({ name: "Network vs geo", ok, msg, sev: "warn" });
  }

  // ── 23. Overall completeness ──
  const filled = [p.userAgent, p.acceptLanguage, p.accept, p.acceptEncoding].filter(Boolean).length;
  const hintsCovered = p.stripHints || (p.secChUa && p.secChUaPlatform && p.secChUaMobile);
  const deviceCovered = isBot || isSafari || isFirefox || (p.viewportWidth && p.dpr);
  const networkCovered = isBot || isSafari || isFirefox || p.ect;
  const ipCovered = !!p.xff;
  const parts = [filled >= 3, hintsCovered, deviceCovered, networkCovered, ipCovered].filter(Boolean).length;
  checks.push({
    name: "Spoof completeness",
    ok: parts >= 4,
    msg: parts >= 4
      ? `${parts}/5 layers covered (headers, hints, device, network, IP)`
      : `${parts}/5 layers - missing: ${[filled<3?"core headers":"",!hintsCovered?"client hints":"",!deviceCovered?"device info":"",!networkCovered?"network profile":"",!ipCovered?"IP origin":""].filter(Boolean).join(", ")}`,
    sev: "warn"
  });

  return checks;
}

// ── Profiles ──
function newProf() {
  const name = prompt("Profile name:"); if (!name) return;
  collectForm();
  const id = uid();
  state.profiles[id] = { ...structuredClone(BLANK), name };
  state.activeProfileId = id;
  chrome.storage.local.set({ state }, () => { renderProfiles(); fillForm(); });
}
function renProf() {
  const name = prompt("Rename:", prof().name); if (!name) return;
  prof().name = name;
  chrome.storage.local.set({ state }, renderProfiles);
}
function dupProf() {
  collectForm();
  const id = uid();
  state.profiles[id] = structuredClone(prof());
  state.profiles[id].name += " (copy)";
  state.activeProfileId = id;
  chrome.storage.local.set({ state }, () => { renderProfiles(); fillForm(); });
}
function delProf() {
  if (Object.keys(state.profiles).length <= 1) return toast("Can't delete last profile");
  delete state.profiles[state.activeProfileId];
  state.activeProfileId = Object.keys(state.profiles)[0];
  chrome.storage.local.set({ state }, () => { renderProfiles(); fillForm(); updateStatus(); });
}

// ── Preset modal (separate overlay, doesn't touch form DOM) ──
function openModal(presets, fieldId) {
  modalData = presets;
  modalField = fieldId;
  $("#mSearch").value = "";
  $("#mbg").classList.add("on");
  renderModalList();
  setTimeout(() => $("#mSearch").focus(), 60);
}
function closeModal() { $("#mbg").classList.remove("on"); }

function renderModalList() {
  const q = ($("#mSearch").value || "").toLowerCase();
  const groups = {};
  let total = 0;
  for (const p of modalData) {
    const c = p.cat || "Other";
    if (q && !p.label.toLowerCase().includes(q) && !c.toLowerCase().includes(q) && !p.value.toLowerCase().includes(q)) continue;
    if (!groups[c]) groups[c] = [];
    groups[c].push(p);
    total++;
  }
  $("#mCnt").textContent = total + " / " + modalData.length;

  const frag = document.createDocumentFragment();
  let any = false;
  for (const [cat, items] of Object.entries(groups)) {
    any = true;
    const h = document.createElement("div"); h.className = "mdl-cat";
    h.textContent = cat + " (" + items.length + ")";
    frag.appendChild(h);
    for (const p of items) {
      const d = document.createElement("div"); d.className = "mdl-it";
      const t = p.value.length > 68 ? p.value.slice(0,65) + "…" : p.value;
      d.innerHTML = esc(p.label) + `<span class="v">${esc(t)}</span>`;
      d.addEventListener("click", () => {
        $(`#${modalField}`).value = p.value;
        closeModal();
      });
      frag.appendChild(d);
    }
  }
  if (!any) {
    const e = document.createElement("div"); e.className = "mdl-none";
    e.textContent = "No matches found";
    frag.appendChild(e);
  }
  const body = $("#mBody");
  body.innerHTML = "";
  body.appendChild(frag);
}

// ── IO ──
function doExport() {
  collectForm();
  const b = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(b); a.download = "header-spoofer.json";
  a.click(); URL.revokeObjectURL(a.href); toast("Exported");
}
function doImport(e) {
  const file = e.target.files[0]; if (!file) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const d = JSON.parse(r.result);
      if (!d.profiles) throw 0;
      state = { ...BLANK_STATE, ...d };
      chrome.storage.local.set({ state }, () => { renderProfiles(); fillForm(); updateStatus(); toast("Imported"); });
    } catch { toast("Invalid file"); }
  };
  r.readAsText(file); e.target.value = "";
}
function doReset() {
  if (!confirm("Reset ALL profiles and settings?")) return;
  state = structuredClone(BLANK_STATE);
  chrome.storage.local.set({ state }, () => { renderProfiles(); fillForm(); updateStatus(); toast("Reset"); });
}
