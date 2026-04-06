<p align="center">
  <img src="icons/icon128.png" width="80" alt="Masquerade Spoofer">
</p>

<h1 align="center">Masquerade Spoofer</h1>

<p align="center">
  Chrome MV3 extension for full HTTP header spoofing with fingerprint consistency verification.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/manifest-v3-blue" alt="MV3">
  <img src="https://img.shields.io/badge/version-1.0.0-C2694F" alt="Version">
</p>

---

## What is this?

Most header spoofing extensions only change the User-Agent and call it a day. The problem is that modern browsers send **dozens of other headers** that reveal your real identity - Client Hints, network information, device capabilities, fetch metadata. Changing just the UA while leaving everything else intact is like wearing a mask but keeping your name tag on.

**Masquerade Spoofer** spoofs the entire header stack coherently, then tells you if your disguise has any holes.

## Features

### Header Spoofing (7 layers)

| Layer | Headers spoofed | What it hides |
|---|---|---|
| **Standard** | User-Agent, Accept-Language, Referer, Origin, DNT, Accept, Accept-Encoding | Browser identity, language, navigation source |
| **Client Hints** | Sec-Ch-Ua, Sec-Ch-Ua-Mobile, Sec-Ch-Ua-Platform, Platform-Version, Full-Version-List, Arch, Bitness, Model | Real browser brand, OS, CPU architecture, device model |
| **Fetch Metadata** | Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site | Navigation context and request origin |
| **Device & Screen** | Sec-Ch-Viewport-Width, Sec-Ch-Viewport-Height, DPR, Device-Memory | Screen resolution, pixel density, RAM |
| **Network Profile** | ECT, Downlink, RTT, Save-Data | Connection type, bandwidth, latency |
| **IP Origin** | X-Forwarded-For, X-Real-IP, CF-Connecting-IP, True-Client-IP | Geographic location via proxy headers |
| **Custom** | Any header name/value pair | Whatever else you need |

### Quick Identity Presets

20 one-click presets that fill **every field** coherently - not just the UA, but matching Client Hints, Accept format, encoding support, screen size, network speed, geographic IP, and DNT preference. One click, 100% consistency score.

**Desktop:**
- Chrome / Windows 11 / US
- Chrome / macOS / US (Apple Silicon)
- Chrome / Linux / US
- Firefox / Windows 11 / US
- Firefox / Linux / US
- Safari / macOS Sequoia / US
- Edge / Windows 11 / US

**Mobile:**
- Chrome / Pixel 9 / US (Android 15)
- Chrome / Galaxy S24 / US (Android 14)
- Safari / iPhone 16 Pro / US (iOS 18)
- Safari / iPad Pro / US (iPadOS 18)

**Regional:**
- Chrome / Windows / Germany (de-DE)
- Firefox / macOS / France (fr-FR)
- Chrome / Windows / Japan (ja-JP)
- Chrome / Android / Brazil (pt-BR, Galaxy A54)
- Safari / iPhone / UK (en-GB)
- Chrome / Windows / India (hi-IN)

**Stealth & Bots:**
- Tor Browser / Windows (ESR 115)
- Googlebot 2.1
- curl 8.7

### Device Picker

16 visual device cards with SVG illustrations. Click a device to auto-fill viewport, DPR, and memory:

Phone, iPhone, Tablet, Laptop, Desktop, 4K Monitor, Watch, Old TV, Smart TV, 4K TV, E-reader, Car, VR Headset, Game Console, Foldable, None (clear)

### 1,058 User-Agent Presets (95 categories)

Searchable modal with category headers:

- **Browsers:** Chrome (Desktop/Mobile/Tablet), Firefox (Desktop/Mobile), Safari (Desktop/Mobile), Edge, Opera, Brave, Vivaldi, Arc, Samsung Internet, DuckDuckGo, UC Browser, Yandex, Tor
- **Browser Forks:** LibreWolf, Waterfox, Pale Moon, Basilisk, SeaMonkey, Floorp, Zen, Chromium, Thorium, Iridium, Maxthon, Whale, Coc Coc, QQ, Kiwi, Bromite, Vanadium
- **Mobile Devices:** Pixel 2-9, Galaxy S7-S24/Note/Z Fold/Z Flip/A series, OnePlus, Xiaomi/Redmi/POCO, Oppo, Motorola, Nothing, Sony, ASUS ROG, Huawei, Honor, Tecno, Infinix, itel, Nokia, Fairphone, Blackview, Ulefone, Lava, iQOO
- **Legacy:** IE 6-11, BlackBerry, Windows Phone, Symbian, Palm webOS, Firefox OS, KaiOS
- **Smart Devices:** PlayStation 3-5, Xbox, Nintendo Switch/Wii/3DS, Steam Deck, Samsung/LG/Sony/Hisense/Vizio TVs, Roku, Fire TV, Apple TV, Echo Show, Nest Hub, Meta Quest, Apple Watch, Kindle
- **Cars:** Tesla, Rivian, BMW, Mercedes, Volvo, Polestar, Ford, Audi, Porsche, Toyota, Lucid, VW, NIO, BYD
- **Bots:** Googlebot, Bingbot, DuckDuckBot, Baidu, Yandex, Applebot, GPTBot, ClaudeBot, PerplexityBot, CCBot, Bytespider, Ahrefs, Semrush, Screaming Frog
- **Social:** Facebook, Twitter, LinkedIn, Discord, Slack, Telegram, WhatsApp, Reddit, Mastodon, Bluesky
- **Cloud SDKs:** AWS CLI/SDK (Python/JS/Go/Java/.NET), Azure CLI/SDK, Google Cloud SDK
- **DevOps:** Terraform, Pulumi, Ansible, Docker, Kubernetes, Helm, ArgoCD, Vault, Packer
- **CI/CD:** GitHub Actions, GitLab Runner, Jenkins, CircleCI, Renovate, Dependabot
- **IDEs:** VS Code, JetBrains (IntelliJ/PyCharm/WebStorm/GoLand/Rider), Eclipse, Sublime, Neovim, Cursor, Zed, Windsurf, GitHub Copilot
- **Office:** Outlook, Word, Excel, PowerPoint, Teams, OneDrive, SharePoint, Microsoft Graph, Power Automate, Copilot
- **Communication:** Slack, Discord, Zoom, Telegram, WhatsApp, Matrix, Mattermost, Webex
- **Databases:** MongoDB Compass/Shell, pgAdmin, DBeaver, Redis Insight, Supabase, Firebase, Prisma
- **Package Managers:** npm, yarn, pnpm, pip, Cargo, Composer, Maven, Gradle, Homebrew, apt, Snap
- **In-App:** WeChat, KakaoTalk, LINE, Snapchat, Instagram, TikTok, Facebook, LinkedIn, Pinterest, Reddit
- **CLI/Libraries:** curl, wget, HTTPie, Postman, Python requests/httpx/aiohttp/Scrapy, Node axios/got, Go, Java, Ruby, PHP, Rust, Dart, R, Elixir, Perl
- **Monitoring:** Datadog, Grafana, Prometheus, Elasticsearch, New Relic, Sentry, PagerDuty
- **Vintage:** Netscape, Mosaic, IE 3-5, Opera 5, Camino, Flock, WorldWideWeb
- ...and many more

### IP Geo-Spoofing

Country picker with 24 countries. Selecting a country auto-generates a realistic IP from that country's ISP ranges and fills all four IP headers. Randomize button for new IPs. Sync toggle keeps all four fields matched.

**Countries:** US, UK, Germany, France, Netherlands, Canada, Australia, Japan, South Korea, Brazil, India, Russia, China, Italy, Spain, Sweden, Poland, Switzerland, Singapore, Mexico, Argentina, South Africa, UAE, Turkey, Israel, Norway

### Per-Site Profile Routing

Assign different spoofing profiles to different websites. Browse Google as Chrome/Windows, Amazon as Firefox/Linux, and Twitter as Safari/iPhone - all at the same time. Site rules use higher priority declarativeNetRequest rules with domain scoping.

### Fingerprint Consistency Checker

23 automated checks with a visual score ring (0-100%). Analyzes your entire header configuration for contradictions:

- UA vs Client Hints brand match
- Non-Chromium browsers shouldn't send Client Hints
- Chromium browsers should have Client Hints
- Platform hint matches UA operating system
- Mobile flag matches UA device type
- Chrome version numbers match between UA and hints
- Accept header format matches claimed browser
- Accept-Encoding capabilities match browser
- Language matches IP geographic country
- All IP headers use the same address
- CPU architecture matches device type
- Device model appropriate for mobile/desktop
- Bitness consistent with UA
- Sec-Fetch headers coherent with each other
- Viewport size matches device type
- Pixel ratio plausible for platform
- Device memory plausible for device type
- Network ECT/downlink/RTT internally consistent
- Network speed plausible for geographic region
- IP format validation
- Overall 5-layer completeness (headers, hints, device, network, IP)

### Profiles & Management

- Multiple named profiles with create/rename/duplicate/delete
- Import/export all profiles as JSON
- Right-click context menu to toggle on/off or switch profiles
- Per-profile domain filtering (all sites, only listed, all except listed)
- Reset to defaults

## Installation

1. Download or clone this repository
2. Open `chrome://extensions/` in Chrome/Edge/Brave
3. Enable **Developer mode** (toggle in top right)
4. Click **Load unpacked** and select the extension folder
5. Pin the extension to your toolbar

## Usage

1. Click the extension icon
2. Expand **Quick Identity** and click a preset, OR configure headers manually
3. Click **Save & Apply**
4. Go to the **Active** tab to see your fingerprint consistency score
5. Click **Verify** to open httpbin.org/headers and confirm your spoofed headers

## How it works

Masquerade Spoofer uses Chrome's `declarativeNetRequest` API (MV3) to modify HTTP request headers at the network level before they leave the browser. This is more reliable than JavaScript-based injection and works on all requests including XHR, fetch, images, and subframes.

Headers are modified using a single combined rule per profile for efficiency. Site-specific rules use higher priority values with `requestDomains` conditions. The `urlFilter: "|http"` pattern ensures coverage of all HTTP and HTTPS traffic.

Client Hints can be either spoofed (set to custom values) or stripped entirely (removed from requests). Firefox and Safari never send Client Hints, so stripping them is the correct behavior when impersonating those browsers.

## Architecture

```
manifest.json          - MV3 manifest with declarativeNetRequest permissions
background.js          - Service worker: rule management, context menu, badge
popup.html             - Extension popup UI (custom window chrome)
popup.js               - UI logic: profiles, presets, consistency checker
ua-presets.js          - 1,058 User-Agent preset database
icons/                 - Extension icons (16/48/128px)
```

## Permissions

| Permission | Why |
|---|---|
| `declarativeNetRequest` | Modify HTTP request headers |
| `declarativeNetRequestFeedback` | Read active rules for the consistency checker |
| `storage` | Save profiles and settings |
| `contextMenus` | Right-click menu for quick toggle/profile switch |
| `tabs` | Open verification page (httpbin.org) |
| `<all_urls>` | Apply header modifications to all websites |

## Limitations

- **Does not spoof JavaScript APIs.** `navigator.userAgent`, `navigator.platform`, `screen.width` etc. in page JavaScript will still reflect your real browser. Use a separate JS spoofing extension or Playwright/Puppeteer for full coverage.
- **Does not spoof TLS/JA3 fingerprint.** The TLS handshake happens below the HTTP layer and cannot be modified by browser extensions.
- **Does not spoof WebRTC.** Your real IP can leak via WebRTC even with IP headers spoofed. Disable WebRTC or use a VPN.
- **IP origin headers are advisory.** The `X-Forwarded-For` family of headers is trusted by some servers but not all. Your actual TCP/IP address is still visible to the server. Use a VPN or proxy for real IP masking.
- **Client Hint stripping is detectable.** A Chromium browser that sends zero Client Hints is unusual and could itself be a fingerprint signal. The consistency checker warns about this.

## Contributing

Issues and pull requests welcome at [github.com/mthcht/Masquerade-Spoofer](https://github.com/mthcht/Masquerade-Spoofer).

## License

MIT
