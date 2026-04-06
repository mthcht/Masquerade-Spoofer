const UA_PRESETS = [
  // ═══════════════════════════════════════════════════════════════
  //  CHROME - DESKTOP
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome 131 - Windows 11", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" },
  { label: "Chrome 130 - Windows 11", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36" },
  { label: "Chrome 129 - Windows 11", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36" },
  { label: "Chrome 128 - Windows 11", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36" },
  { label: "Chrome 126 - Windows 11", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36" },
  { label: "Chrome 124 - Windows 11", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" },
  { label: "Chrome 122 - Windows 11", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36" },
  { label: "Chrome 120 - Windows 11", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" },
  { label: "Chrome 118 - Windows 11", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36" },
  { label: "Chrome 115 - Windows 10", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36" },
  { label: "Chrome 114 - Windows 10", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.199 Safari/537.36" },
  { label: "Chrome 110 - Windows 10", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36" },
  { label: "Chrome 109 - Windows 10", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36" },
  { label: "Chrome 105 - Windows 10", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36" },
  { label: "Chrome 100 - Windows 10", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36" },
  { label: "Chrome 96 - Windows 10", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36" },
  { label: "Chrome 90 - Windows 10", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36" },
  { label: "Chrome 85 - Windows 10", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36" },
  { label: "Chrome 80 - Windows 10", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36" },
  { label: "Chrome 70 - Windows 10", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36" },
  { label: "Chrome 60 - Windows 10", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36" },
  { label: "Chrome 50 - Windows 10", cat: "Chrome Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36" },
  { label: "Chrome 131 - macOS Sequoia", cat: "Chrome Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" },
  { label: "Chrome 130 - macOS Sonoma", cat: "Chrome Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36" },
  { label: "Chrome 124 - macOS", cat: "Chrome Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" },
  { label: "Chrome 120 - macOS", cat: "Chrome Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" },
  { label: "Chrome 110 - macOS", cat: "Chrome Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36" },
  { label: "Chrome 100 - macOS", cat: "Chrome Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36" },
  { label: "Chrome 131 - Linux x64", cat: "Chrome Desktop", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" },
  { label: "Chrome 130 - Linux x64", cat: "Chrome Desktop", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36" },
  { label: "Chrome 124 - Linux x64", cat: "Chrome Desktop", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" },
  { label: "Chrome 110 - Linux x64", cat: "Chrome Desktop", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36" },
  { label: "Chrome 131 - ChromeOS", cat: "Chrome Desktop", value: "Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" },
  { label: "Chrome 130 - ChromeOS", cat: "Chrome Desktop", value: "Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36" },
  { label: "Chrome 120 - ChromeOS", cat: "Chrome Desktop", value: "Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" },
  { label: "Chrome - macOS ARM (Apple Silicon)", cat: "Chrome Desktop", value: "Mozilla/5.0 (Macintosh; ARM Mac OS X 14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" },
  { label: "Chrome - FreeBSD", cat: "Chrome Desktop", value: "Mozilla/5.0 (X11; FreeBSD amd64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  CHROME - MOBILE
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome 131 - Pixel 9 Pro (Android 15)", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 15; Pixel 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 131 - Pixel 9 (Android 15)", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Pixel 8 (Android 14)", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Pixel 8 Pro (Android 14)", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Pixel 7a (Android 14)", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; Pixel 7a) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 124 - Pixel 7 (Android 14)", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 120 - Pixel 6 (Android 14)", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 131 - Samsung Galaxy S24 Ultra", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 131 - Samsung Galaxy S24+", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; SM-S926B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Samsung Galaxy S24", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; SM-S921B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Samsung Galaxy S23 Ultra", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Samsung Galaxy S23", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; SM-S911B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 124 - Samsung Galaxy S22", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; SM-S901B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 120 - Samsung Galaxy S21", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 13; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Samsung Galaxy A54", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; SM-A546B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Samsung Galaxy A34", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; SM-A346B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Samsung Galaxy A15", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; SM-A156B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Samsung Galaxy Z Fold5", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; SM-F946B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Samsung Galaxy Z Flip5", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; SM-F731B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 131 - OnePlus 12", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; CPH2581) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - OnePlus 11", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; CPH2449) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - OnePlus Nord 3", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; CPH2491) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Xiaomi 14", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; 23127PN0CC) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Xiaomi 13 Pro", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; 2210132C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Xiaomi Redmi Note 13 Pro", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; 23090RA98G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - POCO F5", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; 23049PCD8G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Oppo Find X7 Ultra", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; PHZ110) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Oppo Reno 11", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; CPH2603) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Motorola Edge 40 Pro", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; motorola edge 40 pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Motorola Moto G84", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; moto g84 5G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Nothing Phone (2)", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; A065) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Sony Xperia 1 V", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; XQ-DQ72) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - ASUS ROG Phone 8", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; ASUS_AI2401) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Huawei P60 Pro", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 12; MNA-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 120 - LG Velvet", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 13; LM-G900N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Realme GT5 Pro", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; RMX3888) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Vivo X100 Pro", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; V2324A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Google Pixel Fold", cat: "Chrome Mobile", value: "Mozilla/5.0 (Linux; Android 14; Pixel Fold) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome - iOS iPhone 15 Pro", cat: "Chrome Mobile", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/131.0.0.0 Mobile/15E148 Safari/604.1" },
  { label: "Chrome - iOS iPhone 14", cat: "Chrome Mobile", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/130.0.0.0 Mobile/15E148 Safari/604.1" },
  { label: "Chrome - iOS iPad Pro", cat: "Chrome Mobile", value: "Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/131.0.0.0 Mobile/15E148 Safari/604.1" },

  // ═══════════════════════════════════════════════════════════════
  //  CHROME - TABLET
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome 131 - Samsung Galaxy Tab S9 Ultra", cat: "Chrome Tablet", value: "Mozilla/5.0 (Linux; Android 14; SM-X910) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" },
  { label: "Chrome 130 - Samsung Galaxy Tab S9+", cat: "Chrome Tablet", value: "Mozilla/5.0 (Linux; Android 14; SM-X810) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36" },
  { label: "Chrome 130 - Samsung Galaxy Tab A9", cat: "Chrome Tablet", value: "Mozilla/5.0 (Linux; Android 14; SM-X110) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36" },
  { label: "Chrome 130 - Pixel Tablet", cat: "Chrome Tablet", value: "Mozilla/5.0 (Linux; Android 14; Pixel Tablet) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36" },
  { label: "Chrome 130 - Lenovo Tab P12 Pro", cat: "Chrome Tablet", value: "Mozilla/5.0 (Linux; Android 13; Lenovo TB-Q706F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36" },
  { label: "Chrome 130 - Xiaomi Pad 6", cat: "Chrome Tablet", value: "Mozilla/5.0 (Linux; Android 14; 23073RPBFG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36" },
  { label: "Chrome 120 - Amazon Fire HD 10", cat: "Chrome Tablet", value: "Mozilla/5.0 (Linux; Android 11; KFTRWI) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  FIREFOX - DESKTOP
  // ═══════════════════════════════════════════════════════════════
  { label: "Firefox 132 - Windows 11", cat: "Firefox Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:132.0) Gecko/20100101 Firefox/132.0" },
  { label: "Firefox 131 - Windows 11", cat: "Firefox Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0" },
  { label: "Firefox 130 - Windows 11", cat: "Firefox Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:130.0) Gecko/20100101 Firefox/130.0" },
  { label: "Firefox 128 - Windows 11", cat: "Firefox Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0" },
  { label: "Firefox 125 - Windows 10", cat: "Firefox Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0" },
  { label: "Firefox 120 - Windows 10", cat: "Firefox Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0" },
  { label: "Firefox 115 - Windows (ESR)", cat: "Firefox Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:115.0) Gecko/20100101 Firefox/115.0" },
  { label: "Firefox 110 - Windows", cat: "Firefox Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:110.0) Gecko/20100101 Firefox/110.0" },
  { label: "Firefox 102 - Windows (ESR)", cat: "Firefox Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0" },
  { label: "Firefox 100 - Windows", cat: "Firefox Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:100.0) Gecko/20100101 Firefox/100.0" },
  { label: "Firefox 91 - Windows (ESR)", cat: "Firefox Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0" },
  { label: "Firefox 90 - Windows", cat: "Firefox Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0" },
  { label: "Firefox 78 - Windows (ESR)", cat: "Firefox Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0" },
  { label: "Firefox 68 - Windows (ESR)", cat: "Firefox Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0" },
  { label: "Firefox 132 - macOS", cat: "Firefox Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:132.0) Gecko/20100101 Firefox/132.0" },
  { label: "Firefox 131 - macOS", cat: "Firefox Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:131.0) Gecko/20100101 Firefox/131.0" },
  { label: "Firefox 125 - macOS", cat: "Firefox Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:125.0) Gecko/20100101 Firefox/125.0" },
  { label: "Firefox 115 - macOS (ESR)", cat: "Firefox Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:115.0) Gecko/20100101 Firefox/115.0" },
  { label: "Firefox 132 - Linux", cat: "Firefox Desktop", value: "Mozilla/5.0 (X11; Linux x86_64; rv:132.0) Gecko/20100101 Firefox/132.0" },
  { label: "Firefox 131 - Linux", cat: "Firefox Desktop", value: "Mozilla/5.0 (X11; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0" },
  { label: "Firefox 131 - Ubuntu", cat: "Firefox Desktop", value: "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0" },
  { label: "Firefox 131 - Fedora", cat: "Firefox Desktop", value: "Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0" },
  { label: "Firefox 115 - Linux (ESR)", cat: "Firefox Desktop", value: "Mozilla/5.0 (X11; Linux x86_64; rv:115.0) Gecko/20100101 Firefox/115.0" },
  { label: "Firefox - Linux aarch64 (ARM)", cat: "Firefox Desktop", value: "Mozilla/5.0 (X11; Linux aarch64; rv:131.0) Gecko/20100101 Firefox/131.0" },
  { label: "Firefox - FreeBSD", cat: "Firefox Desktop", value: "Mozilla/5.0 (X11; FreeBSD amd64; rv:115.0) Gecko/20100101 Firefox/115.0" },

  // ═══════════════════════════════════════════════════════════════
  //  FIREFOX - MOBILE
  // ═══════════════════════════════════════════════════════════════
  { label: "Firefox 132 - Android (phone)", cat: "Firefox Mobile", value: "Mozilla/5.0 (Android 15; Mobile; rv:132.0) Gecko/132.0 Firefox/132.0" },
  { label: "Firefox 131 - Android (phone)", cat: "Firefox Mobile", value: "Mozilla/5.0 (Android 14; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0" },
  { label: "Firefox 125 - Android (phone)", cat: "Firefox Mobile", value: "Mozilla/5.0 (Android 14; Mobile; rv:125.0) Gecko/125.0 Firefox/125.0" },
  { label: "Firefox 132 - Android (tablet)", cat: "Firefox Mobile", value: "Mozilla/5.0 (Android 14; Tablet; rv:132.0) Gecko/132.0 Firefox/132.0" },
  { label: "Firefox Focus - Android", cat: "Firefox Mobile", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/131.0 Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Firefox - iOS iPhone", cat: "Firefox Mobile", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/132.0 Mobile/15E148 Safari/605.1.15" },
  { label: "Firefox - iOS iPad", cat: "Firefox Mobile", value: "Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/132.0 Mobile/15E148 Safari/605.1.15" },
  { label: "Firefox Focus - iOS", cat: "Firefox Mobile", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/132.0 Mobile/15E148 Safari/605.1.15" },

  // ═══════════════════════════════════════════════════════════════
  //  SAFARI - DESKTOP
  // ═══════════════════════════════════════════════════════════════
  { label: "Safari 18.0 - macOS Sequoia", cat: "Safari Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15" },
  { label: "Safari 17.5 - macOS Sonoma", cat: "Safari Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15" },
  { label: "Safari 17.4 - macOS Sonoma", cat: "Safari Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15" },
  { label: "Safari 17.0 - macOS Ventura", cat: "Safari Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15" },
  { label: "Safari 16.6 - macOS Ventura", cat: "Safari Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15" },
  { label: "Safari 16.0 - macOS Monterey", cat: "Safari Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15" },
  { label: "Safari 15.6 - macOS Monterey", cat: "Safari Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Safari/605.1.15" },
  { label: "Safari 15.0 - macOS Big Sur", cat: "Safari Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Safari/605.1.15" },
  { label: "Safari 14.1 - macOS Catalina", cat: "Safari Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15" },
  { label: "Safari 13.1 - macOS Catalina", cat: "Safari Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Safari/605.1.15" },

  // ═══════════════════════════════════════════════════════════════
  //  SAFARI - MOBILE (iOS / iPadOS)
  // ═══════════════════════════════════════════════════════════════
  { label: "Safari - iPhone 16 Pro Max (iOS 18)", cat: "Safari Mobile", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1" },
  { label: "Safari - iPhone 15 Pro (iOS 18)", cat: "Safari Mobile", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1" },
  { label: "Safari - iPhone 15 (iOS 17.5)", cat: "Safari Mobile", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1" },
  { label: "Safari - iPhone 14 Pro (iOS 17.4)", cat: "Safari Mobile", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1" },
  { label: "Safari - iPhone 14 (iOS 17)", cat: "Safari Mobile", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1" },
  { label: "Safari - iPhone 13 (iOS 16.6)", cat: "Safari Mobile", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1" },
  { label: "Safari - iPhone 12 (iOS 16)", cat: "Safari Mobile", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1" },
  { label: "Safari - iPhone SE (iOS 15.8)", cat: "Safari Mobile", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.8 Mobile/15E148 Safari/604.1" },
  { label: "Safari - iPhone (iOS 15)", cat: "Safari Mobile", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1" },
  { label: "Safari - iPhone (iOS 14)", cat: "Safari Mobile", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1" },
  { label: "Safari - iPad Pro M2 (iPadOS 18)", cat: "Safari Mobile", value: "Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1" },
  { label: "Safari - iPad Air M2 (iPadOS 17.5)", cat: "Safari Mobile", value: "Mozilla/5.0 (iPad; CPU OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1" },
  { label: "Safari - iPad mini (iPadOS 17)", cat: "Safari Mobile", value: "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1" },
  { label: "Safari - iPad (Desktop mode)", cat: "Safari Mobile", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15" },
  { label: "Safari - iPod Touch (iOS 15)", cat: "Safari Mobile", value: "Mozilla/5.0 (iPod touch; CPU iPhone OS 15_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.8 Mobile/15E148 Safari/604.1" },

  // ═══════════════════════════════════════════════════════════════
  //  EDGE - DESKTOP
  // ═══════════════════════════════════════════════════════════════
  { label: "Edge 131 - Windows 11", cat: "Edge Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0" },
  { label: "Edge 130 - Windows 11", cat: "Edge Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0" },
  { label: "Edge 128 - Windows 11", cat: "Edge Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0" },
  { label: "Edge 124 - Windows", cat: "Edge Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0" },
  { label: "Edge 120 - Windows", cat: "Edge Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0" },
  { label: "Edge 110 - Windows", cat: "Edge Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.0.0" },
  { label: "Edge 131 - macOS", cat: "Edge Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0" },
  { label: "Edge 130 - macOS", cat: "Edge Desktop", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0" },
  { label: "Edge 131 - Linux", cat: "Edge Desktop", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0" },
  { label: "Edge (Legacy) - Windows 10", cat: "Edge Desktop", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19041" },

  // ═══════════════════════════════════════════════════════════════
  //  EDGE - MOBILE
  // ═══════════════════════════════════════════════════════════════
  { label: "Edge - Android (Samsung S24)", cat: "Edge Mobile", value: "Mozilla/5.0 (Linux; Android 14; SM-S926B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 EdgA/131.0.0.0" },
  { label: "Edge - Android (Pixel 8)", cat: "Edge Mobile", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 EdgA/131.0.0.0" },
  { label: "Edge - iOS iPhone", cat: "Edge Mobile", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 EdgiOS/131.0.0.0 Mobile/15E148 Safari/605.1.15" },
  { label: "Edge - iOS iPad", cat: "Edge Mobile", value: "Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 EdgiOS/131.0.0.0 Mobile/15E148 Safari/605.1.15" },

  // ═══════════════════════════════════════════════════════════════
  //  OPERA
  // ═══════════════════════════════════════════════════════════════
  { label: "Opera 115 - Windows 11", cat: "Opera", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 OPR/115.0.0.0" },
  { label: "Opera 114 - Windows", cat: "Opera", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 OPR/114.0.0.0" },
  { label: "Opera 114 - macOS", cat: "Opera", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 OPR/114.0.0.0" },
  { label: "Opera 114 - Linux", cat: "Opera", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 OPR/114.0.0.0" },
  { label: "Opera 100 - Windows", cat: "Opera", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 OPR/100.0.0.0" },
  { label: "Opera GX - Windows", cat: "Opera", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 OPR/115.0.0.0 (Edition GX)" },
  { label: "Opera GX - macOS", cat: "Opera", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 OPR/115.0.0.0 (Edition GX)" },
  { label: "Opera Mobile - Android", cat: "Opera", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36 OPR/83.0.0.0" },
  { label: "Opera Mini - Android", cat: "Opera", value: "Opera/9.80 (Android; Opera Mini/83.0.2254/191.264; U; en) Presto/2.12.423 Version/12.16" },
  { label: "Opera Mini - iOS", cat: "Opera", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) OPiOS/16.0.14.0 Mobile/15E148 Safari/9537.53" },
  { label: "Opera (Presto) 12 - Windows", cat: "Opera", value: "Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.18" },

  // ═══════════════════════════════════════════════════════════════
  //  BRAVE
  // ═══════════════════════════════════════════════════════════════
  { label: "Brave 1.71 - Windows 11", cat: "Brave", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Brave/1.71" },
  { label: "Brave 1.70 - Windows", cat: "Brave", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Brave/1.70" },
  { label: "Brave 1.71 - macOS", cat: "Brave", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Brave/1.71" },
  { label: "Brave 1.71 - Linux", cat: "Brave", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Brave/1.71" },
  { label: "Brave - Android", cat: "Brave", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Brave/1.71" },
  { label: "Brave - iOS", cat: "Brave", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1 Brave/1.71" },

  // ═══════════════════════════════════════════════════════════════
  //  VIVALDI
  // ═══════════════════════════════════════════════════════════════
  { label: "Vivaldi 6.9 - Windows", cat: "Vivaldi", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Vivaldi/6.9.3447.54" },
  { label: "Vivaldi 6.9 - macOS", cat: "Vivaldi", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Vivaldi/6.9.3447.54" },
  { label: "Vivaldi 6.9 - Linux", cat: "Vivaldi", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Vivaldi/6.9.3447.54" },
  { label: "Vivaldi 6.7 - Windows", cat: "Vivaldi", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Vivaldi/6.7.3329.41" },
  { label: "Vivaldi - Android", cat: "Vivaldi", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36 Vivaldi/6.9" },

  // ═══════════════════════════════════════════════════════════════
  //  ARC BROWSER
  // ═══════════════════════════════════════════════════════════════
  { label: "Arc - macOS", cat: "Arc", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Arc/1.73.0" },
  { label: "Arc - Windows", cat: "Arc", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Arc/1.73.0" },

  // ═══════════════════════════════════════════════════════════════
  //  SAMSUNG INTERNET
  // ═══════════════════════════════════════════════════════════════
  { label: "Samsung Internet 26 - Galaxy S24 Ultra", cat: "Samsung Internet", value: "Mozilla/5.0 (Linux; Android 14; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/26.0 Chrome/122.0.0.0 Mobile Safari/537.36" },
  { label: "Samsung Internet 25 - Galaxy S24", cat: "Samsung Internet", value: "Mozilla/5.0 (Linux; Android 14; SM-S926B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/25.0 Chrome/121.0.0.0 Mobile Safari/537.36" },
  { label: "Samsung Internet 25 - Galaxy S23", cat: "Samsung Internet", value: "Mozilla/5.0 (Linux; Android 14; SM-S911B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/25.0 Chrome/121.0.0.0 Mobile Safari/537.36" },
  { label: "Samsung Internet 24 - Galaxy S22", cat: "Samsung Internet", value: "Mozilla/5.0 (Linux; Android 14; SM-S901B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/24.0 Chrome/117.0.0.0 Mobile Safari/537.36" },
  { label: "Samsung Internet 23 - Galaxy A54", cat: "Samsung Internet", value: "Mozilla/5.0 (Linux; Android 14; SM-A546B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.36" },
  { label: "Samsung Internet 20 - Galaxy S21", cat: "Samsung Internet", value: "Mozilla/5.0 (Linux; Android 13; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/20.0 Chrome/106.0.0.0 Mobile Safari/537.36" },
  { label: "Samsung Internet - Galaxy Tab S9", cat: "Samsung Internet", value: "Mozilla/5.0 (Linux; Android 14; SM-X810) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/25.0 Chrome/121.0.0.0 Safari/537.36" },
  { label: "Samsung Internet - Galaxy Z Fold5", cat: "Samsung Internet", value: "Mozilla/5.0 (Linux; Android 14; SM-F946B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/25.0 Chrome/121.0.0.0 Mobile Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  UC BROWSER
  // ═══════════════════════════════════════════════════════════════
  { label: "UC Browser 16.5 - Android", cat: "UC Browser", value: "Mozilla/5.0 (Linux; U; Android 14; en-US; Pixel 8 Build/UQ1A.240205.002) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 UCBrowser/16.5.6.1016 Mobile Safari/537.36" },
  { label: "UC Browser 15 - Android", cat: "UC Browser", value: "Mozilla/5.0 (Linux; U; Android 13; en-US; SM-A536B Build/TP1A.220624.014) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 UCBrowser/15.5.6.1016 Mobile Safari/537.36" },
  { label: "UC Browser - iOS", cat: "UC Browser", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X; en-US) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/21F90 UCBrowser/16.5.6.1016 Mobile" },
  { label: "UC Browser - Windows", cat: "UC Browser", value: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 UCBrowser/13.4.2.1307 Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  YANDEX BROWSER
  // ═══════════════════════════════════════════════════════════════
  { label: "Yandex 24 - Windows", cat: "Yandex Browser", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 YaBrowser/24.10.0.0 Safari/537.36" },
  { label: "Yandex 24 - macOS", cat: "Yandex Browser", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 YaBrowser/24.10.0.0 Safari/537.36" },
  { label: "Yandex - Android", cat: "Yandex Browser", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 YaBrowser/24.10.0.0 Mobile Safari/537.36" },
  { label: "Yandex - iOS", cat: "Yandex Browser", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 YaBrowser/24.10.0.0 Mobile/15E148 Safari/604.1" },

  // ═══════════════════════════════════════════════════════════════
  //  TOR BROWSER
  // ═══════════════════════════════════════════════════════════════
  { label: "Tor 13.5 - Windows", cat: "Tor Browser", value: "Mozilla/5.0 (Windows NT 10.0; rv:115.0) Gecko/20100101 Firefox/115.0" },
  { label: "Tor 13.5 - Linux", cat: "Tor Browser", value: "Mozilla/5.0 (X11; Linux x86_64; rv:115.0) Gecko/20100101 Firefox/115.0" },
  { label: "Tor 13.5 - macOS", cat: "Tor Browser", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:115.0) Gecko/20100101 Firefox/115.0" },
  { label: "Tor (older ESR 102)", cat: "Tor Browser", value: "Mozilla/5.0 (Windows NT 10.0; rv:102.0) Gecko/20100101 Firefox/102.0" },

  // ═══════════════════════════════════════════════════════════════
  //  DuckDuckGo BROWSER
  // ═══════════════════════════════════════════════════════════════
  { label: "DuckDuckGo - Android", cat: "DuckDuckGo", value: "Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.0.0 Mobile DuckDuckGo/5 Safari/537.36" },
  { label: "DuckDuckGo - iOS", cat: "DuckDuckGo", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 DuckDuckGo/7 Safari/604.1" },
  { label: "DuckDuckGo - macOS", cat: "DuckDuckGo", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 DuckDuckGo/7 Safari/605.1.15" },
  { label: "DuckDuckGo - Windows", cat: "DuckDuckGo", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) DuckDuckGo/0.78 Chrome/128.0.0.0 Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  WATERFOX / PALE MOON / BASILISK / SEAMONKEY / K-MELEON
  // ═══════════════════════════════════════════════════════════════
  { label: "Waterfox G6 - Windows", cat: "Gecko Forks", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0 Waterfox/6.0.18" },
  { label: "Waterfox G6 - Linux", cat: "Gecko Forks", value: "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0 Waterfox/6.0.18" },
  { label: "Pale Moon 33 - Windows", cat: "Gecko Forks", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:115.0) Gecko/20100101 Goanna/6.6 Firefox/115.0 PaleMoon/33.2.1" },
  { label: "Pale Moon 33 - Linux", cat: "Gecko Forks", value: "Mozilla/5.0 (X11; Linux x86_64; rv:115.0) Gecko/20100101 Goanna/6.6 Firefox/115.0 PaleMoon/33.2.1" },
  { label: "Basilisk - Windows", cat: "Gecko Forks", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Goanna/6.4 Firefox/68.0 Basilisk/20240418" },
  { label: "SeaMonkey 2.53 - Windows", cat: "Gecko Forks", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0 SeaMonkey/2.53.18.2" },
  { label: "SeaMonkey 2.53 - Linux", cat: "Gecko Forks", value: "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0 SeaMonkey/2.53.18.2" },
  { label: "K-Meleon 76 - Windows", cat: "Gecko Forks", value: "Mozilla/5.0 (Windows NT 10.0; rv:68.0) Gecko/20100101 K-Meleon/76.4.8" },
  { label: "LibreWolf - Windows", cat: "Gecko Forks", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0" },
  { label: "LibreWolf - Linux", cat: "Gecko Forks", value: "Mozilla/5.0 (X11; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0" },
  { label: "Mullvad Browser - Windows", cat: "Gecko Forks", value: "Mozilla/5.0 (Windows NT 10.0; rv:115.0) Gecko/20100101 Firefox/115.0" },
  { label: "Floorp - Windows", cat: "Gecko Forks", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0 Floorp/11.19.1" },
  { label: "Zen Browser - Linux", cat: "Gecko Forks", value: "Mozilla/5.0 (X11; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0" },

  // ═══════════════════════════════════════════════════════════════
  //  CHROMIUM FORKS (Misc)
  // ═══════════════════════════════════════════════════════════════
  { label: "Chromium 131 - Linux", cat: "Chromium Forks", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chromium/131.0.0.0 Chrome/131.0.0.0 Safari/537.36" },
  { label: "Ungoogled Chromium - Windows", cat: "Chromium Forks", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" },
  { label: "Thorium - Windows", cat: "Chromium Forks", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Thorium/128.0.6613.189" },
  { label: "Iridium - Linux", cat: "Chromium Forks", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Iridium/2024.04" },
  { label: "Maxthon 7 - Windows", cat: "Chromium Forks", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Maxthon/7.2.2.2000" },
  { label: "Avant Browser - Windows", cat: "Chromium Forks", value: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Avant/1.2.13.116" },
  { label: "Comodo Dragon - Windows", cat: "Chromium Forks", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Dragon/120.0.0.0" },
  { label: "SRWare Iron - Windows", cat: "Chromium Forks", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Iron/120.0.0.0" },
  { label: "Slimjet - Windows", cat: "Chromium Forks", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Slimjet/42.0.5.0" },
  { label: "Falkon - Linux", cat: "Chromium Forks", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Falkon/24.08.1 QtWebEngine/6.7.2 Chrome/118.0.5993.220 Safari/537.36" },
  { label: "Whale - Windows (Naver)", cat: "Chromium Forks", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Whale/4.28.212.9 Safari/537.36" },
  { label: "Whale - macOS (Naver)", cat: "Chromium Forks", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Whale/4.28.212.9 Safari/537.36" },
  { label: "Coc Coc - Windows", cat: "Chromium Forks", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/130.0.290 Chrome/124.0.0.0 Safari/537.36" },
  { label: "QQ Browser - Windows", cat: "Chromium Forks", value: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.289 Safari/537.36 QQBrowser/13.5.6312.400" },
  { label: "Sogou Explorer - Windows", cat: "Chromium Forks", value: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 SE 2.X MetaSr 1.0" },
  { label: "360 Secure Browser - Windows", cat: "Chromium Forks", value: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 QIHU 360SE" },
  { label: "Epic Privacy Browser - Windows", cat: "Chromium Forks", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Epic/1.0" },
  { label: "Kiwi Browser - Android", cat: "Chromium Forks", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36 Kiwi Chrome/124.0.0.0" },
  { label: "Puffin - Android", cat: "Chromium Forks", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8 Build/UP1A.230905.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36 Puffin/10.1.0.51631" },

  // ═══════════════════════════════════════════════════════════════
  //  LEGACY IE / TRIDENT
  // ═══════════════════════════════════════════════════════════════
  { label: "IE 11 - Windows 10", cat: "Legacy IE", value: "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko" },
  { label: "IE 11 - Windows 8.1", cat: "Legacy IE", value: "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko" },
  { label: "IE 11 - Windows 7", cat: "Legacy IE", value: "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko" },
  { label: "IE 10 - Windows 8", cat: "Legacy IE", value: "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)" },
  { label: "IE 9 - Windows 7", cat: "Legacy IE", value: "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)" },
  { label: "IE 8 - Windows XP", cat: "Legacy IE", value: "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)" },
  { label: "IE 7 - Windows Vista", cat: "Legacy IE", value: "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)" },
  { label: "IE 6 - Windows XP", cat: "Legacy IE", value: "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)" },

  // ═══════════════════════════════════════════════════════════════
  //  OLDER WINDOWS COMBOS
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome 109 - Windows 8.1", cat: "Older Windows", value: "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36" },
  { label: "Chrome 109 - Windows 7", cat: "Older Windows", value: "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36" },
  { label: "Chrome 49 - Windows XP", cat: "Older Windows", value: "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36" },
  { label: "Chrome 73 - Windows Vista", cat: "Older Windows", value: "Mozilla/5.0 (Windows NT 6.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36" },
  { label: "Firefox 52 - Windows XP", cat: "Older Windows", value: "Mozilla/5.0 (Windows NT 5.1; rv:52.0) Gecko/20100101 Firefox/52.0" },
  { label: "Firefox - Windows 2000", cat: "Older Windows", value: "Mozilla/5.0 (Windows NT 5.0; rv:36.0) Gecko/20100101 Firefox/36.0" },

  // ═══════════════════════════════════════════════════════════════
  //  GAME CONSOLES
  // ═══════════════════════════════════════════════════════════════
  { label: "PlayStation 5", cat: "Game Consoles", value: "Mozilla/5.0 (PlayStation 5 4.02) AppleWebKit/605.1.15 (KHTML, like Gecko)" },
  { label: "PlayStation 4 (11.02)", cat: "Game Consoles", value: "Mozilla/5.0 (PlayStation 4 11.02) AppleWebKit/605.1.15 (KHTML, like Gecko)" },
  { label: "PlayStation 4 (9.60)", cat: "Game Consoles", value: "Mozilla/5.0 (PlayStation 4 9.60) AppleWebKit/605.1.15 (KHTML, like Gecko)" },
  { label: "PlayStation Vita", cat: "Game Consoles", value: "Mozilla/5.0 (PlayStation Vita 3.73) AppleWebKit/537.73 (KHTML, like Gecko) Silk/3.2" },
  { label: "Xbox Series X/S", cat: "Game Consoles", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; Xbox; Xbox Series X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edge/44.18363.8131" },
  { label: "Xbox One", cat: "Game Consoles", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edge/44.18363.8131" },
  { label: "Nintendo Switch", cat: "Game Consoles", value: "Mozilla/5.0 (Nintendo Switch; WifiWebAuthApplet) AppleWebKit/606.4 (KHTML, like Gecko) NF/6.0.1.15.4 NintendoBrowser/5.1.0.20393" },
  { label: "Nintendo Wii U", cat: "Game Consoles", value: "Mozilla/5.0 (Nintendo WiiU) AppleWebKit/536.30 (KHTML, like Gecko) NX/3.0.4.2.12 NintendoBrowser/4.3.1.11264.US" },
  { label: "Nintendo 3DS", cat: "Game Consoles", value: "Mozilla/5.0 (New Nintendo 3DS like iPhone) AppleWebKit/536.30 (KHTML, like Gecko) NX/3.0.0.5.22 Mobile NintendoBrowser/1.11.10166.EU" },
  { label: "Steam Deck (Linux)", cat: "Game Consoles", value: "Mozilla/5.0 (X11; Linux x86_64; Valve Steam GameOverlay) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" },
  { label: "Steam Client (Windows)", cat: "Game Consoles", value: "Mozilla/5.0 (Windows; U; Windows NT 10.0; en-US; Valve Steam Client/default) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  SMART TVs / STREAMING
  // ═══════════════════════════════════════════════════════════════
  { label: "Samsung Tizen TV 7.0", cat: "Smart TVs", value: "Mozilla/5.0 (SMART-TV; LINUX; Tizen 7.0) AppleWebKit/537.36 (KHTML, like Gecko) 94.0.4606.31/7.0 TV Safari/537.36" },
  { label: "Samsung Tizen TV 6.5", cat: "Smart TVs", value: "Mozilla/5.0 (SMART-TV; LINUX; Tizen 6.5) AppleWebKit/537.36 (KHTML, like Gecko) 85.0.4183.93/6.5 TV Safari/537.36" },
  { label: "Samsung Tizen TV 5.0", cat: "Smart TVs", value: "Mozilla/5.0 (SMART-TV; LINUX; Tizen 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/5.0 TV Safari/537.36" },
  { label: "LG WebOS TV 6.0", cat: "Smart TVs", value: "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.128 Safari/537.36 WebAppManager" },
  { label: "LG WebOS TV 5.0", cat: "Smart TVs", value: "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36 WebAppManager" },
  { label: "LG NetCast TV", cat: "Smart TVs", value: "Mozilla/5.0 (Unknown; Linux armv7l) AppleWebKit/537.1+ (KHTML, like Gecko) Safari/537.1+ LG Browser/8.00.00" },
  { label: "Apple TV", cat: "Smart TVs", value: "AppleTV11,1/11.1" },
  { label: "Roku 4640X", cat: "Smart TVs", value: "Roku4640X/DVP-7.70 (297.70E04154A)" },
  { label: "Roku Ultra (2024)", cat: "Smart TVs", value: "Roku/DVP-14.5 (4902RW)" },
  { label: "Amazon Fire TV Stick 4K", cat: "Smart TVs", value: "Mozilla/5.0 (Linux; Android 11; AFTSSS Build/NS6296) AppleWebKit/537.36 (KHTML, like Gecko) Silk/100.6.1 like Chrome/100.0.4896.127 Safari/537.36" },
  { label: "Amazon Fire TV Cube", cat: "Smart TVs", value: "Mozilla/5.0 (Linux; Android 11; AFTKA Build/NS6296) AppleWebKit/537.36 (KHTML, like Gecko) Silk/100.6.1 like Chrome/100.0.4896.127 Safari/537.36" },
  { label: "Google TV / Chromecast", cat: "Smart TVs", value: "Mozilla/5.0 (Linux; Android 14; Chromecast HD) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 CrKey/1.56.500000" },
  { label: "Android TV (Shield)", cat: "Smart TVs", value: "Mozilla/5.0 (Linux; Android 12; SHIELD Android TV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" },
  { label: "Sony Bravia (Android TV)", cat: "Smart TVs", value: "Mozilla/5.0 (Linux; Android 12; BRAVIA 4K UR1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36" },
  { label: "Hisense VIDAA TV", cat: "Smart TVs", value: "Mozilla/5.0 (Linux; VIDAA; HISENSE 50A6K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" },
  { label: "TCL Roku TV", cat: "Smart TVs", value: "Roku/DVP-14.0 (43S455)" },
  { label: "Vizio SmartCast TV", cat: "Smart TVs", value: "Mozilla/5.0 (Linux; SmartTV; VIZIO SmartCast) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  E-READERS
  // ═══════════════════════════════════════════════════════════════
  { label: "Kindle Paperwhite (Silk)", cat: "E-readers", value: "Mozilla/5.0 (Linux; Android 11; KFTRWI) AppleWebKit/537.36 (KHTML, like Gecko) Silk/100.6.1 like Chrome/100.0.4896.127 Safari/537.36" },
  { label: "Kindle Fire HD 10", cat: "E-readers", value: "Mozilla/5.0 (Linux; Android 11; KFONWI) AppleWebKit/537.36 (KHTML, like Gecko) Silk/100.6.1 like Chrome/100.0.4896.127 Mobile Safari/537.36" },
  { label: "Kindle Fire 7", cat: "E-readers", value: "Mozilla/5.0 (Linux; Android 11; KFMUWI) AppleWebKit/537.36 (KHTML, like Gecko) Silk/100.6.1 like Chrome/100.0.4896.127 Mobile Safari/537.36" },
  { label: "Kindle (experimental browser)", cat: "E-readers", value: "Mozilla/5.0 (X11; U; Linux armv7l like Android; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/533.2+ Kindle/3.0+" },
  { label: "Kobo eReader", cat: "E-readers", value: "Mozilla/5.0 (Linux; U; Android 2.0; en-us;) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 (Kobo Touch 3.21.08770)" },

  // ═══════════════════════════════════════════════════════════════
  //  WEARABLES / VR / AR
  // ═══════════════════════════════════════════════════════════════
  { label: "Apple Watch (watchOS)", cat: "Wearables / VR", value: "Mozilla/5.0 (Watch; Apple Watch 10,5; watchOS 11.0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0" },
  { label: "Meta Quest 3 (Browser)", cat: "Wearables / VR", value: "Mozilla/5.0 (X11; Linux x86_64; Quest 3) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0 SamsungBrowser/4.0 Chrome/124.0.0.0 Mobile VR Safari/537.36" },
  { label: "Meta Quest 2 (Browser)", cat: "Wearables / VR", value: "Mozilla/5.0 (X11; Linux x86_64; Quest 2) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/32.0 SamsungBrowser/4.0 Chrome/120.0.0.0 Mobile VR Safari/537.36" },
  { label: "Apple Vision Pro", cat: "Wearables / VR", value: "Mozilla/5.0 (iPad; CPU OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1" },
  { label: "Google Glass", cat: "Wearables / VR", value: "Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; Glass 1 Build/KRT16S) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.94 Mobile Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  SEARCH ENGINE BOTS
  // ═══════════════════════════════════════════════════════════════
  { label: "Googlebot 2.1 (Desktop)", cat: "Search Bots", value: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" },
  { label: "Googlebot (Smartphone)", cat: "Search Bots", value: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" },
  { label: "Googlebot-Image", cat: "Search Bots", value: "Googlebot-Image/1.0" },
  { label: "Googlebot-Video", cat: "Search Bots", value: "Googlebot-Video/1.0" },
  { label: "Googlebot-News", cat: "Search Bots", value: "Googlebot-News" },
  { label: "Google AdsBot (Desktop)", cat: "Search Bots", value: "AdsBot-Google (+http://www.google.com/adsbot.html)" },
  { label: "Google AdsBot (Mobile)", cat: "Search Bots", value: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)" },
  { label: "Google Storebot", cat: "Search Bots", value: "Mozilla/5.0 (X11; Linux x86_64; Storebot-Google/1.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" },
  { label: "Google-InspectionTool", cat: "Search Bots", value: "Mozilla/5.0 (compatible; Google-InspectionTool/1.0)" },
  { label: "Google Mediapartners", cat: "Search Bots", value: "Mediapartners-Google" },
  { label: "Google FeedFetcher", cat: "Search Bots", value: "FeedFetcher-Google; (+http://www.google.com/feedfetcher.html)" },
  { label: "Bingbot 2.0 (Desktop)", cat: "Search Bots", value: "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)" },
  { label: "Bingbot 2.0 (Mobile)", cat: "Search Bots", value: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)" },
  { label: "Bing AdIdxBot", cat: "Search Bots", value: "Mozilla/5.0 (compatible; adidxbot/2.0; +http://www.bing.com/bingbot.htm)" },
  { label: "Yahoo Slurp", cat: "Search Bots", value: "Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)" },
  { label: "DuckDuckBot 1.1", cat: "Search Bots", value: "DuckDuckBot/1.1; (+http://duckduckgo.com/duckduckbot.html)" },
  { label: "Baidu Spider", cat: "Search Bots", value: "Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)" },
  { label: "Baidu Spider (Mobile)", cat: "Search Bots", value: "Mozilla/5.0 (Linux; U; Android 4.1; en-us) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 Baiduspider/2.0" },
  { label: "Yandex Bot 3.0", cat: "Search Bots", value: "Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)" },
  { label: "Yandex Images", cat: "Search Bots", value: "Mozilla/5.0 (compatible; YandexImages/3.0; +http://yandex.com/bots)" },
  { label: "Sogou Spider", cat: "Search Bots", value: "Sogou web spider/4.0 (+http://www.sogou.com/docs/help/webmasters.htm)" },
  { label: "Naver Yeti Bot", cat: "Search Bots", value: "Mozilla/5.0 (compatible; Yeti/1.1; +http://naver.me/spd)" },
  { label: "Seznam Bot", cat: "Search Bots", value: "Mozilla/5.0 (compatible; SeznamBot/4.0; +http://napoveda.seznam.cz/seznambot-intro/)" },
  { label: "Qwant Bot", cat: "Search Bots", value: "Mozilla/5.0 (compatible; Qwantify/1.0; +https://www.qwant.com/)" },
  { label: "Mojeek Bot", cat: "Search Bots", value: "Mozilla/5.0 (compatible; MojeekBot/0.11; +https://www.mojeek.com/bot.html)" },
  { label: "PetalBot (Huawei)", cat: "Search Bots", value: "Mozilla/5.0 (compatible; PetalBot;+https://webmaster.petalsearch.com/site/petalbot)" },
  { label: "Applebot", cat: "Search Bots", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15 (Applebot/0.1; +http://www.apple.com/go/applebot)" },
  { label: "Internet Archive (ia_archiver)", cat: "Search Bots", value: "Mozilla/5.0 (compatible; archive.org_bot; +http://www.archive.org/details/archive.org_bot)" },

  // ═══════════════════════════════════════════════════════════════
  //  SOCIAL MEDIA BOTS
  // ═══════════════════════════════════════════════════════════════
  { label: "Facebook ExternalHit", cat: "Social Bots", value: "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)" },
  { label: "Facebook Catalog", cat: "Social Bots", value: "facebookcatalog/1.0" },
  { label: "Twitter Bot", cat: "Social Bots", value: "Twitterbot/1.0" },
  { label: "LinkedIn Bot", cat: "Social Bots", value: "LinkedInBot/1.0 (compatible; Mozilla/5.0; Apache-HttpClient +http://www.linkedin.com)" },
  { label: "Pinterest Bot", cat: "Social Bots", value: "Pinterest/0.2 (+http://www.pinterest.com/)" },
  { label: "Slack Bot", cat: "Social Bots", value: "Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)" },
  { label: "Slack Image Proxy", cat: "Social Bots", value: "Slack-ImgProxy (+https://api.slack.com/robots)" },
  { label: "Discord Bot", cat: "Social Bots", value: "Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)" },
  { label: "Telegram Bot", cat: "Social Bots", value: "TelegramBot (like TwitterBot)" },
  { label: "WhatsApp", cat: "Social Bots", value: "WhatsApp/2.23.20.0" },
  { label: "Reddit Bot", cat: "Social Bots", value: "Mozilla/5.0 (compatible; redditbot/1.0; +http://www.reddit.com/feedback)" },
  { label: "Mastodon Bot", cat: "Social Bots", value: "http.rb/5.1.1 (Mastodon/4.2.0; +https://mastodon.social/)" },
  { label: "Bluesky Bot", cat: "Social Bots", value: "Bluesky Cardyb/1.0" },
  { label: "Signal Link Preview", cat: "Social Bots", value: "WhatsApp/2.0 (compatible; Signal Link Preview)" },
  { label: "Skype URL Preview", cat: "Social Bots", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/604.1 (KHTML, like Gecko; Skype URL Preview)" },
  { label: "Viber Bot", cat: "Social Bots", value: "Viber" },
  { label: "Line Bot", cat: "Social Bots", value: "facebookexternalhit/1.1 (line-poker/1.0)" },
  { label: "Snapchat Bot", cat: "Social Bots", value: "Mozilla/5.0 (compatible; Snapchat/1.0; +https://www.snapchat.com/)" },

  // ═══════════════════════════════════════════════════════════════
  //  SEO / MONITORING TOOLS
  // ═══════════════════════════════════════════════════════════════
  { label: "Ahrefs Bot 7.0", cat: "SEO Tools", value: "Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)" },
  { label: "Semrush Bot 7", cat: "SEO Tools", value: "Mozilla/5.0 (compatible; SemrushBot/7~bl; +http://www.semrush.com/bot.html)" },
  { label: "Moz DotBot", cat: "SEO Tools", value: "Mozilla/5.0 (compatible; DotBot/1.2; +https://opensiteexplorer.org/dotbot; help@moz.com)" },
  { label: "Majestic MJ12bot", cat: "SEO Tools", value: "Mozilla/5.0 (compatible; MJ12bot/v1.4.8; http://mj12bot.com/)" },
  { label: "Screaming Frog SEO Spider", cat: "SEO Tools", value: "Screaming Frog SEO Spider/20.2" },
  { label: "UptimeRobot", cat: "SEO Tools", value: "Mozilla/5.0 (compatible; UptimeRobot/2.0; http://www.uptimerobot.com/)" },
  { label: "Pingdom Bot", cat: "SEO Tools", value: "Pingdom.com_bot_version_1.4_(http://www.pingdom.com/)" },
  { label: "GTmetrix Bot", cat: "SEO Tools", value: "Mozilla/5.0 (X11; Linux x86_64; GTmetrix; +https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" },
  { label: "DataForSEO Bot", cat: "SEO Tools", value: "Mozilla/5.0 (compatible; DataForSeoBot/1.0; +https://dataforseo.com/dataforseo-bot)" },
  { label: "SpyFu Bot", cat: "SEO Tools", value: "Mozilla/5.0 (compatible; spyfu; +http://www.spyfu.com/)" },
  { label: "SiteAudit Crawler", cat: "SEO Tools", value: "Mozilla/5.0 (compatible; SiteAuditBot/0.97; +http://www.semrush.com/bot.html)" },

  // ═══════════════════════════════════════════════════════════════
  //  AI / LLM BOTS
  // ═══════════════════════════════════════════════════════════════
  { label: "GPTBot (OpenAI)", cat: "AI Bots", value: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)" },
  { label: "ChatGPT-User", cat: "AI Bots", value: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ChatGPT-User/1.0; +https://openai.com/bot)" },
  { label: "OAI-SearchBot", cat: "AI Bots", value: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot)" },
  { label: "Google-Extended (Gemini)", cat: "AI Bots", value: "Mozilla/5.0 (compatible; Google-Extended)" },
  { label: "ClaudeBot (Anthropic)", cat: "AI Bots", value: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)" },
  { label: "Claude-Web (Anthropic)", cat: "AI Bots", value: "Claude-Web/1.0 (+https://anthropic.com)" },
  { label: "PerplexityBot", cat: "AI Bots", value: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)" },
  { label: "Cohere AI", cat: "AI Bots", value: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; cohere-ai)" },
  { label: "CCBot (Common Crawl)", cat: "AI Bots", value: "CCBot/2.0 (https://commoncrawl.org/faq/)" },
  { label: "Bytespider (ByteDance)", cat: "AI Bots", value: "Mozilla/5.0 (compatible; Bytespider; spider-feedback@bytedance.com) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0" },
  { label: "Meta-ExternalAgent", cat: "AI Bots", value: "Mozilla/5.0 (compatible; Meta-ExternalAgent/1.0; +https://developers.facebook.com/docs/sharing/webmasters/web_code_yaml)" },
  { label: "Amazonbot", cat: "AI Bots", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (Amazonbot/0.1; +https://developer.amazon.com/support/amazonbot)" },
  { label: "YouBot (You.com)", cat: "AI Bots", value: "Mozilla/5.0 (compatible; YouBot/1.0; +https://about.you.com/youbot)" },
  { label: "Diffbot", cat: "AI Bots", value: "Mozilla/5.0 (compatible; Diffbot/0.1; +http://www.diffbot.com)" },
  { label: "Timpibot", cat: "AI Bots", value: "Mozilla/5.0 (compatible; Timpibot/0.9; +https://www.timpi.io)" },
  { label: "Friendlycrawler (Brave)", cat: "AI Bots", value: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Friendlycrawler/1.0; +https://about.brave.com/search/)" },
  { label: "Webz.io", cat: "AI Bots", value: "Mozilla/5.0 (compatible; webzio/1.0; +https://webz.io)" },

  // ═══════════════════════════════════════════════════════════════
  //  CLI / HTTP LIBRARIES
  // ═══════════════════════════════════════════════════════════════
  { label: "curl 8.7", cat: "CLI / Libraries", value: "curl/8.7.1" },
  { label: "curl 7.88", cat: "CLI / Libraries", value: "curl/7.88.1" },
  { label: "curl 7.68 (Ubuntu 20.04)", cat: "CLI / Libraries", value: "curl/7.68.0" },
  { label: "Wget 1.21", cat: "CLI / Libraries", value: "Wget/1.21.4" },
  { label: "Wget 1.20", cat: "CLI / Libraries", value: "Wget/1.20.3 (linux-gnu)" },
  { label: "HTTPie 3.2", cat: "CLI / Libraries", value: "HTTPie/3.2.3" },
  { label: "Postman 7.37", cat: "CLI / Libraries", value: "PostmanRuntime/7.37.3" },
  { label: "Insomnia 9.3", cat: "CLI / Libraries", value: "insomnia/9.3.2" },
  { label: "Python Requests 2.32", cat: "CLI / Libraries", value: "python-requests/2.32.3" },
  { label: "Python Requests 2.31", cat: "CLI / Libraries", value: "python-requests/2.31.0" },
  { label: "Python Requests 2.28", cat: "CLI / Libraries", value: "python-requests/2.28.2" },
  { label: "Python urllib3 2.2", cat: "CLI / Libraries", value: "python-urllib3/2.2.1" },
  { label: "Python aiohttp 3.9", cat: "CLI / Libraries", value: "Python/3.12 aiohttp/3.9.5" },
  { label: "Python httpx 0.27", cat: "CLI / Libraries", value: "python-httpx/0.27.0" },
  { label: "Python Scrapy 2.11", cat: "CLI / Libraries", value: "Scrapy/2.11.2 (+https://scrapy.org)" },
  { label: "Node.js Axios 1.7", cat: "CLI / Libraries", value: "axios/1.7.2" },
  { label: "Node.js Axios 1.6", cat: "CLI / Libraries", value: "axios/1.6.8" },
  { label: "Node.js node-fetch", cat: "CLI / Libraries", value: "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)" },
  { label: "Node.js undici", cat: "CLI / Libraries", value: "undici" },
  { label: "Node.js got", cat: "CLI / Libraries", value: "got (https://github.com/sindresorhus/got)" },
  { label: "Go net/http 2.0", cat: "CLI / Libraries", value: "Go-http-client/2.0" },
  { label: "Go net/http 1.1", cat: "CLI / Libraries", value: "Go-http-client/1.1" },
  { label: "Java 21 HttpClient", cat: "CLI / Libraries", value: "Java/21.0.2" },
  { label: "Java 17 HttpClient", cat: "CLI / Libraries", value: "Java/17.0.10" },
  { label: "Java 11 HttpClient", cat: "CLI / Libraries", value: "Java/11.0.22" },
  { label: "Java Apache HttpClient 5", cat: "CLI / Libraries", value: "Apache-HttpClient/5.3 (Java/21.0.2)" },
  { label: "Java OkHttp 4.12", cat: "CLI / Libraries", value: "okhttp/4.12.0" },
  { label: "Ruby Net::HTTP", cat: "CLI / Libraries", value: "Ruby" },
  { label: "Ruby Faraday", cat: "CLI / Libraries", value: "Faraday v2.9.0" },
  { label: "PHP cURL 8.3", cat: "CLI / Libraries", value: "PHP/8.3.6" },
  { label: "PHP Guzzle 7", cat: "CLI / Libraries", value: "GuzzleHttp/7" },
  { label: "C# .NET HttpClient", cat: "CLI / Libraries", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; .NET CLR 8.0)" },
  { label: "Rust reqwest 0.12", cat: "CLI / Libraries", value: "reqwest/0.12.5" },
  { label: "Dart http 1.2", cat: "CLI / Libraries", value: "Dart/3.4 (dart:io)" },
  { label: "Swift URLSession", cat: "CLI / Libraries", value: "MyApp/1.0 CFNetwork/1496.0.7 Darwin/23.5.0" },
  { label: "Kotlin Ktor", cat: "CLI / Libraries", value: "Ktor client" },
  { label: "Deno fetch", cat: "CLI / Libraries", value: "Deno/1.45.0" },
  { label: "PowerShell Invoke-WebRequest", cat: "CLI / Libraries", value: "Mozilla/5.0 (Windows NT 10.0; Microsoft Windows 10.0.19045; en-US) PowerShell/7.4.5" },

  // ═══════════════════════════════════════════════════════════════
  //  EMAIL CLIENTS
  // ═══════════════════════════════════════════════════════════════
  { label: "Apple Mail - macOS", cat: "Email Clients", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko)" },
  { label: "Apple Mail - iOS", cat: "Email Clients", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)" },
  { label: "Outlook - Windows", cat: "Email Clients", value: "Microsoft Office/16.0 (Windows NT 10.0; Microsoft Outlook 16.0; Pro)" },
  { label: "Outlook - macOS", cat: "Email Clients", value: "Microsoft Office/16.0 (Macintosh; Intel Mac OS X 10.15; Microsoft Outlook 16.0)" },
  { label: "Thunderbird 115", cat: "Email Clients", value: "Mozilla/5.0 (X11; Linux x86_64; rv:115.0) Gecko/20100101 Thunderbird/115.9.0" },
  { label: "Thunderbird 128 - Windows", cat: "Email Clients", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Thunderbird/128.0" },
  { label: "Gmail Image Proxy", cat: "Email Clients", value: "Mozilla/5.0 (Windows NT 5.1; rv:11.0) Gecko Firefox/11.0 (via ggpht.com GoogleImageProxy)" },

  // ═══════════════════════════════════════════════════════════════
  //  TEXT-BASED / TERMINAL BROWSERS
  // ═══════════════════════════════════════════════════════════════
  { label: "Lynx 2.9", cat: "Text Browsers", value: "Lynx/2.9.0dev.12 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/3.7.1" },
  { label: "Lynx 2.8.9", cat: "Text Browsers", value: "Lynx/2.8.9rel.1 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/1.1.1" },
  { label: "Links 2.29", cat: "Text Browsers", value: "Links (2.29; Linux x86_64; GNU C 12; text)" },
  { label: "Links 2.28", cat: "Text Browsers", value: "Links (2.28; Linux x86_64; GNU C 11; text)" },
  { label: "w3m 0.5.3", cat: "Text Browsers", value: "w3m/0.5.3+git20230121" },
  { label: "ELinks 0.16", cat: "Text Browsers", value: "ELinks/0.16.1.1 (textmode; Linux x86_64)" },
  { label: "Browsh", cat: "Text Browsers", value: "Mozilla/5.0 (X11; Linux x86_64; rv:115.0) Gecko/20100101 Firefox/115.0 Browsh/1.8.0" },

  // ═══════════════════════════════════════════════════════════════
  //  ELECTRON / WEBVIEW APPS
  // ═══════════════════════════════════════════════════════════════
  { label: "Electron 32 App - Windows", cat: "Electron / Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) myapp/1.0.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Electron 32 App - macOS", cat: "Electron / Apps", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) myapp/1.0.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Electron 32 App - Linux", cat: "Electron / Apps", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) myapp/1.0.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "VS Code Desktop (Electron)", cat: "Electron / Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.94.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Slack Desktop (Electron)", cat: "Electron / Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Slack/4.39.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Discord Desktop (Electron)", cat: "Electron / Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.311 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Spotify Desktop (CEF)", cat: "Electron / Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Spotify/1.2.26.1187.g36b715a1 Safari/537.36" },
  { label: "Notion Desktop", cat: "Electron / Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Notion/3.14.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Obsidian Desktop", cat: "Electron / Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) obsidian/1.6.7 Chrome/124.0.0.0 Electron/30.0.0 Safari/537.36" },
  { label: "Android WebView", cat: "Electron / Apps", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8 Build/UQ1A.240205.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "iOS WKWebView", cat: "Electron / Apps", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148" },
  { label: "Facebook In-App - Android", cat: "Electron / Apps", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8 Build/UQ1A.240205.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/450.0.0.40.109;]" },
  { label: "Facebook In-App - iOS", cat: "Electron / Apps", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBAV/450.0.0.40.109;FBBV/570892858;FBDV/iPhone15,3;FBMD/iPhone;FBSN/iOS;FBSV/17.5;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5]" },
  { label: "Instagram In-App - iOS", cat: "Electron / Apps", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 320.0.0.0.0 (iPhone15,3; iOS 17_5; en_US)" },
  { label: "TikTok In-App - iOS", cat: "Electron / Apps", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 musical_ly_34.8.0 JsSdk/2.0 NetType/WIFI Channel/App Store ByteLocale/en Region/US ByteFullLocale/en" },
  { label: "Twitter/X In-App - iOS", cat: "Electron / Apps", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/21F90 Twitter for iPhone/10.20" },
  { label: "LinkedIn In-App - iOS", cat: "Electron / Apps", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [LinkedInApp]" },

  // ═══════════════════════════════════════════════════════════════
  //  SPECIAL / MISC
  // ═══════════════════════════════════════════════════════════════
  { label: "WebKit (Generic)", cat: "Misc", value: "Mozilla/5.0 (Unknown; Linux x86_64) AppleWebKit/538.1 (KHTML, like Gecko) Safari/538.1" },
  { label: "Headless Chrome", cat: "Misc", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.0.0 Safari/537.36" },
  { label: "PhantomJS", cat: "Misc", value: "Mozilla/5.0 (Unknown; Linux x86_64) AppleWebKit/538.1 (KHTML, like Gecko) PhantomJS/2.1.1 Safari/538.1" },
  { label: "Puppeteer", cat: "Misc", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.0.0 Safari/537.36" },
  { label: "Playwright Chromium", cat: "Misc", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" },
  { label: "Googlebot rendering engine", cat: "Misc", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 (compatible; Googlebot/2.1)" },
  { label: "RSS reader (Feedly)", cat: "Misc", value: "Feedly/1.0 (+http://www.feedly.com/fetcher.html; like FeedFetcher-Google)" },
  { label: "RSS reader (Feedbin)", cat: "Misc", value: "Feedbin feed-id:1234567 - 1 subscriber" },
  { label: "RSS reader (Inoreader)", cat: "Misc", value: "Mozilla/5.0 (compatible; Inoreader; +https://www.inoreader.com)" },
  { label: "Validator (W3C)", cat: "Misc", value: "W3C_Validator/1.3 http://validator.w3.org/services" },
  { label: "PageSpeed Insights", cat: "Misc", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Chrome/131.0.0.0 Safari/537.36" },
  { label: "Lighthouse", cat: "Misc", value: "Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 Chrome-Lighthouse" },
  { label: "WebPageTest", cat: "Misc", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 PTST/231201.140653" },
  { label: "Cloudflare Always Online", cat: "Misc", value: "Mozilla/5.0 (compatible; CloudFlare-AlwaysOnline/1.0; +http://www.cloudflare.com/always-online)" },
  { label: "Empty (blank UA)", cat: "Misc", value: " " },

  // ═══════════════════════════════════════════════════════════════
  //  HONOR DEVICES
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome 131 - Honor Magic6 Pro", cat: "Honor", value: "Mozilla/5.0 (Linux; Android 14; BVL-AN00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Honor 90", cat: "Honor", value: "Mozilla/5.0 (Linux; Android 13; REA-NX9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Honor X9b", cat: "Honor", value: "Mozilla/5.0 (Linux; Android 14; ALI-NX3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Honor 200 Pro", cat: "Honor", value: "Mozilla/5.0 (Linux; Android 14; PNA-LX2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Honor Magic V2", cat: "Honor", value: "Mozilla/5.0 (Linux; Android 14; MGA-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  TECNO / INFINIX / ITEL
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome 130 - Tecno Camon 30 Pro", cat: "Tecno / Infinix", value: "Mozilla/5.0 (Linux; Android 14; TECNO CK8n) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Tecno Spark 20 Pro+", cat: "Tecno / Infinix", value: "Mozilla/5.0 (Linux; Android 14; TECNO KJ7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Tecno Pova 6 Pro", cat: "Tecno / Infinix", value: "Mozilla/5.0 (Linux; Android 14; TECNO LH8n) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Tecno Phantom V Fold", cat: "Tecno / Infinix", value: "Mozilla/5.0 (Linux; Android 13; TECNO AD8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Infinix Note 40 Pro", cat: "Tecno / Infinix", value: "Mozilla/5.0 (Linux; Android 14; Infinix X6837) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Infinix Zero 30", cat: "Tecno / Infinix", value: "Mozilla/5.0 (Linux; Android 13; Infinix X6731) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Infinix Hot 40 Pro", cat: "Tecno / Infinix", value: "Mozilla/5.0 (Linux; Android 14; Infinix X6837B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 124 - itel S24", cat: "Tecno / Infinix", value: "Mozilla/5.0 (Linux; Android 14; itel S666LN) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  ZTE / NOKIA / FAIRPHONE / TCL / CAT
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome 130 - ZTE Blade V50", cat: "ZTE / Nokia / Other", value: "Mozilla/5.0 (Linux; Android 14; ZTE 8055N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - ZTE Axon 60 Ultra", cat: "ZTE / Nokia / Other", value: "Mozilla/5.0 (Linux; Android 14; ZTE A2024P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Nokia G42", cat: "ZTE / Nokia / Other", value: "Mozilla/5.0 (Linux; Android 14; Nokia G42 5G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Nokia X30", cat: "ZTE / Nokia / Other", value: "Mozilla/5.0 (Linux; Android 13; Nokia X30 5G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Fairphone 5", cat: "ZTE / Nokia / Other", value: "Mozilla/5.0 (Linux; Android 14; FP5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 124 - Fairphone 4", cat: "ZTE / Nokia / Other", value: "Mozilla/5.0 (Linux; Android 13; FP4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 120 - CAT S75", cat: "ZTE / Nokia / Other", value: "Mozilla/5.0 (Linux; Android 13; S75) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - TCL 50 XE", cat: "ZTE / Nokia / Other", value: "Mozilla/5.0 (Linux; Android 14; T609K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Alcatel 3L", cat: "ZTE / Nokia / Other", value: "Mozilla/5.0 (Linux; Android 12; 5029Y) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  OLDER GOOGLE PIXEL
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome 120 - Pixel 5", cat: "Pixel (Older)", value: "Mozilla/5.0 (Linux; Android 14; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 110 - Pixel 4a", cat: "Pixel (Older)", value: "Mozilla/5.0 (Linux; Android 13; Pixel 4a) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 100 - Pixel 4 XL", cat: "Pixel (Older)", value: "Mozilla/5.0 (Linux; Android 13; Pixel 4 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36" },
  { label: "Chrome 96 - Pixel 3a", cat: "Pixel (Older)", value: "Mozilla/5.0 (Linux; Android 12; Pixel 3a) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36" },
  { label: "Chrome 90 - Pixel 3", cat: "Pixel (Older)", value: "Mozilla/5.0 (Linux; Android 12; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36" },
  { label: "Chrome 80 - Pixel 2 XL", cat: "Pixel (Older)", value: "Mozilla/5.0 (Linux; Android 11; Pixel 2 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Mobile Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  OLDER SAMSUNG FLAGSHIPS
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome 120 - Galaxy S20 FE", cat: "Samsung (Older)", value: "Mozilla/5.0 (Linux; Android 13; SM-G780G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 110 - Galaxy S10+", cat: "Samsung (Older)", value: "Mozilla/5.0 (Linux; Android 12; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 100 - Galaxy S9", cat: "Samsung (Older)", value: "Mozilla/5.0 (Linux; Android 10; SM-G960F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36" },
  { label: "Chrome 90 - Galaxy S8", cat: "Samsung (Older)", value: "Mozilla/5.0 (Linux; Android 9; SM-G950F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36" },
  { label: "Chrome 80 - Galaxy S7", cat: "Samsung (Older)", value: "Mozilla/5.0 (Linux; Android 8.0.0; SM-G930F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Mobile Safari/537.36" },
  { label: "Chrome 130 - Galaxy Note 20 Ultra", cat: "Samsung (Older)", value: "Mozilla/5.0 (Linux; Android 13; SM-N986B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 120 - Galaxy Note 10+", cat: "Samsung (Older)", value: "Mozilla/5.0 (Linux; Android 12; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 100 - Galaxy Note 9", cat: "Samsung (Older)", value: "Mozilla/5.0 (Linux; Android 10; SM-N960F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36" },
  { label: "Chrome 130 - Galaxy M54", cat: "Samsung (Older)", value: "Mozilla/5.0 (Linux; Android 14; SM-M546B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Galaxy F15", cat: "Samsung (Older)", value: "Mozilla/5.0 (Linux; Android 14; SM-E156B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  LEGACY MOBILE (BlackBerry / Windows Phone / Symbian / Palm)
  // ═══════════════════════════════════════════════════════════════
  { label: "BlackBerry 10 Browser", cat: "Legacy Mobile", value: "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.35+ (KHTML, like Gecko) Version/10.3.3.2205 Mobile Safari/537.35+" },
  { label: "BlackBerry PlayBook", cat: "Legacy Mobile", value: "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML, like Gecko) Version/7.2.1.0 Safari/536.2+" },
  { label: "BlackBerry Bold 9900", cat: "Legacy Mobile", value: "Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+" },
  { label: "BlackBerry Curve 8520", cat: "Legacy Mobile", value: "BlackBerry8520/5.0.0.900 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/613" },
  { label: "Windows Phone 8.1 - IE 11", cat: "Legacy Mobile", value: "Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 930) like Gecko" },
  { label: "Windows Phone 10 - Edge", cat: "Legacy Mobile", value: "Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; Lumia 950 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Mobile Safari/537.36 Edge/15.15254" },
  { label: "Windows Phone 8 - IE 10", cat: "Legacy Mobile", value: "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)" },
  { label: "Nokia Symbian S60", cat: "Legacy Mobile", value: "Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.019; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124" },
  { label: "Nokia N9 (MeeGo)", cat: "Legacy Mobile", value: "Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13" },
  { label: "Nokia Asha 501", cat: "Legacy Mobile", value: "Mozilla/5.0 (Nokia; Series40; NokiaAsha501) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13" },
  { label: "Palm webOS 2.2", cat: "Legacy Mobile", value: "Mozilla/5.0 (webOS/2.2.4; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) webOSBrowser/221.56 Safari/534.6 Pre/3.0" },
  { label: "Firefox OS 2.6", cat: "Legacy Mobile", value: "Mozilla/5.0 (Mobile; rv:44.0) Gecko/44.0 Firefox/44.0" },

  // ═══════════════════════════════════════════════════════════════
  //  KAIOS / FEATURE PHONES
  // ═══════════════════════════════════════════════════════════════
  { label: "KaiOS 3.0 - JioPhone", cat: "KaiOS", value: "Mozilla/5.0 (Mobile; LYF/F300B/LYF-F300B-001-02-15-130718-i; Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/3.0" },
  { label: "KaiOS 2.5 - Nokia 8110 4G", cat: "KaiOS", value: "Mozilla/5.0 (Mobile; Nokia_8110_4G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.2.2" },
  { label: "KaiOS 2.5 - Alcatel Go Flip", cat: "KaiOS", value: "Mozilla/5.0 (Mobile; ALCATELOneTouch4044O; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5" },
  { label: "Nokia Series 40 (Java)", cat: "KaiOS", value: "Nokia6300/2.0 (07.20) Profile/MIDP-2.0 Configuration/CLDC-1.1" },

  // ═══════════════════════════════════════════════════════════════
  //  HUAWEI (HarmonyOS / EMUI)
  // ═══════════════════════════════════════════════════════════════
  { label: "HarmonyOS 4 - Huawei Mate 60 Pro", cat: "Huawei", value: "Mozilla/5.0 (Linux; HarmonyOS 4.0; ALN-AL10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/15.0.4.302 Mobile Safari/537.36" },
  { label: "HarmonyOS 4 - Huawei P60 Pro", cat: "Huawei", value: "Mozilla/5.0 (Linux; HarmonyOS 4.0; MNA-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/15.0.4.302 Mobile Safari/537.36" },
  { label: "EMUI - Huawei P40 Pro", cat: "Huawei", value: "Mozilla/5.0 (Linux; Android 12; ELS-NX9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 HuaweiBrowser/13.0.5.303 Mobile Safari/537.36" },
  { label: "EMUI - Huawei P30 Pro", cat: "Huawei", value: "Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 HuaweiBrowser/12.0.3.314 Mobile Safari/537.36" },
  { label: "HarmonyOS - Huawei MatePad", cat: "Huawei", value: "Mozilla/5.0 (Linux; HarmonyOS 4.0; BAH4-W09) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/15.0 Safari/537.36" },
  { label: "Huawei Browser - PC", cat: "Huawei", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/15.0 Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  CAR / AUTOMOTIVE BROWSERS
  // ═══════════════════════════════════════════════════════════════
  { label: "Tesla Model S/3/X/Y", cat: "Car Browsers", value: "Mozilla/5.0 (X11; GNU/Linux) AppleWebKit/601.1 (KHTML, like Gecko) Tesla QtCarBrowser Safari/601.1" },
  { label: "Tesla Browser (older)", cat: "Car Browsers", value: "Mozilla/5.0 (X11; Linux) AppleWebKit/534.34 (KHTML, like Gecko) QtCarBrowser Safari/534.34" },
  { label: "Rivian R1T/R1S", cat: "Car Browsers", value: "Mozilla/5.0 (Linux; Android 10; Rivian) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36" },
  { label: "BMW ConnectedDrive", cat: "Car Browsers", value: "Mozilla/5.0 (Linux; Android) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36 BMW GroupBrowser" },
  { label: "Mercedes-Benz MBUX", cat: "Car Browsers", value: "Mozilla/5.0 (Linux; Automotive; MBUX) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36" },
  { label: "Volvo Sensus", cat: "Car Browsers", value: "Mozilla/5.0 (Linux; Automotive; Volvo Sensus) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" },
  { label: "Apple CarPlay WebView", cat: "Car Browsers", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 CarPlay" },
  { label: "Android Auto WebView", cat: "Car Browsers", value: "Mozilla/5.0 (Linux; Android 14; Automotive) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" },
  { label: "Polestar Browser", cat: "Car Browsers", value: "Mozilla/5.0 (Linux; Android 11; Polestar 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36" },
  { label: "Ford SYNC 4", cat: "Car Browsers", value: "Mozilla/5.0 (Linux; Automotive; Ford SYNC4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  SMART DISPLAYS / IOT
  // ═══════════════════════════════════════════════════════════════
  { label: "Echo Show 15", cat: "Smart Displays", value: "Mozilla/5.0 (Linux; Android 11; AEOBP Build/RD2A.211001.002) AppleWebKit/537.36 (KHTML, like Gecko) Silk/100.6.1 like Chrome/100.0.4896.127 Safari/537.36" },
  { label: "Echo Show 10", cat: "Smart Displays", value: "Mozilla/5.0 (Linux; Android 9; AEOBC Build/PI) AppleWebKit/537.36 (KHTML, like Gecko) Silk/100.6.1 like Chrome/100.0.4896.127 Safari/537.36" },
  { label: "Echo Show 5", cat: "Smart Displays", value: "Mozilla/5.0 (Linux; Android 7.1.2; AEOBP Build/PI) AppleWebKit/537.36 (KHTML, like Gecko) Silk/100.6.1 like Chrome/100.0.4896.127 Mobile Safari/537.36" },
  { label: "Google Nest Hub Max", cat: "Smart Displays", value: "Mozilla/5.0 (Linux; Android 12; Nest Hub Max) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 CrKey/1.56.500000" },
  { label: "Google Nest Hub (2nd gen)", cat: "Smart Displays", value: "Mozilla/5.0 (Linux; Android 12; Nest Hub) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 CrKey/1.56.500000" },
  { label: "Meta Portal", cat: "Smart Displays", value: "Mozilla/5.0 (Linux; Android 10; Portal Build/Portal) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36" },
  { label: "Samsung Smart Fridge", cat: "Smart Displays", value: "Mozilla/5.0 (Linux; Tizen 5.5; Samsung Family Hub) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.0 Chrome/87.0.4280.141 Safari/537.36" },
  { label: "Raspberry Pi (Chromium)", cat: "Smart Displays", value: "Mozilla/5.0 (X11; Linux aarch64) AppleWebKit/537.36 (KHTML, like Gecko) Chromium/120.0.0.0 Chrome/120.0.0.0 Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  LINUX DESKTOP BROWSERS
  // ═══════════════════════════════════════════════════════════════
  { label: "GNOME Web (Epiphany)", cat: "Linux Browsers", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15 Epiphany/46.0" },
  { label: "Konqueror 22 - KDE", cat: "Linux Browsers", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.21 (KHTML, like Gecko) Konqueror/22.12.3 Safari/537.21" },
  { label: "Midori 11", cat: "Linux Browsers", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15 Midori/11.0" },
  { label: "Midori (Electron)", cat: "Linux Browsers", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Midori/11.4 Chrome/120.0.0.0 Electron/28.0.0 Safari/537.36" },
  { label: "Dillo 3.0", cat: "Linux Browsers", value: "Dillo/3.0.5" },
  { label: "NetSurf 3.11", cat: "Linux Browsers", value: "NetSurf/3.11 (Linux; x86_64)" },
  { label: "surf (suckless)", cat: "Linux Browsers", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/605.1.15 (KHTML, like Gecko) surf/2.1 Safari/605.1.15" },
  { label: "qutebrowser 3.2", cat: "Linux Browsers", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) QtWebEngine/6.7.2 Chrome/118.0.5993.220 Safari/537.36 qutebrowser/3.2.0" },
  { label: "Nyxt 3.11", cat: "Linux Browsers", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15 Nyxt/3.11.7" },
  { label: "Otter Browser", cat: "Linux Browsers", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Otter/1.0.03 Chrome/87.0.4280.144 Safari/537.36" },
  { label: "Min Browser", cat: "Linux Browsers", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Min/1.31.0 Chrome/120.0.0.0 Electron/28.0.0 Safari/537.36" },
  { label: "Luakit", cat: "Linux Browsers", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/605.1.15 (KHTML, like Gecko) luakit" },

  // ═══════════════════════════════════════════════════════════════
  //  GAME LAUNCHERS / OVERLAYS
  // ═══════════════════════════════════════════════════════════════
  { label: "Epic Games Launcher", cat: "Game Launchers", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) EpicGamesLauncher/16.4.0 UnrealEngine/5.3.0 Chrome/120.0.0.0 Safari/537.36" },
  { label: "GOG Galaxy 2.0", cat: "Game Launchers", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) GalaxyClient/2.0.70.18 Chrome/91.0.4472.164 Electron/13.6.9 Safari/537.36" },
  { label: "Battle.net Desktop", cat: "Game Launchers", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) BattleNet/2.23.3.35507 Chrome/102.0.5005.167 Electron/19.1.9 Safari/537.36" },
  { label: "EA App Desktop", cat: "Game Launchers", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) EADesktop/13.123.0.5769 Chrome/114.0.0.0 Electron/25.9.8 Safari/537.36" },
  { label: "Steam Big Picture", cat: "Game Launchers", value: "Mozilla/5.0 (Windows; U; Windows NT 10.0; en-US; Valve Steam GameOverlay/1706830851) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" },
  { label: "Ubisoft Connect", cat: "Game Launchers", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) UbisoftConnect/155.0.0.12003 Chrome/102.0.5005.167 Electron/19.1.9 Safari/537.36" },
  { label: "GeForce NOW", cat: "Game Launchers", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) GeForceNOW/2.0.60.148 Chrome/120.0.0.0 Electron/28.0.0 Safari/537.36" },
  { label: "Xbox Game Bar", cat: "Game Launchers", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Xbox/2310.1001.5.0" },

  // ═══════════════════════════════════════════════════════════════
  //  MORE DESKTOP APPS (Electron/CEF)
  // ═══════════════════════════════════════════════════════════════
  { label: "Microsoft Teams", cat: "More Desktop Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Teams/24213.1103.3029.3655 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Zoom Desktop", cat: "More Desktop Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.5304.110 ZoomWebKit/537.36 Safari/537.36" },
  { label: "Figma Desktop", cat: "More Desktop Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Figma/124.5.2 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "1Password Desktop", cat: "More Desktop Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) 1Password/8.10.36 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Bitwarden Desktop", cat: "More Desktop Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Bitwarden/2024.10.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "WhatsApp Desktop", cat: "More Desktop Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) WhatsApp/2.2344.5.0 Chrome/120.0.0.0 Electron/28.0.0 Safari/537.36" },
  { label: "Telegram Desktop", cat: "More Desktop Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) TelegramDesktop/5.5.1 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Signal Desktop", cat: "More Desktop Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Signal/7.28.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Postman Desktop App", cat: "More Desktop Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Postman/11.16.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "GitKraken Desktop", cat: "More Desktop Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) GitKraken/10.3.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Todoist Desktop", cat: "More Desktop Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Todoist/9.5.2 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Linear Desktop", cat: "More Desktop Apps", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Linear/1.0.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Twitch Desktop", cat: "More Desktop Apps", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Twitch/1.0.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  IN-APP BROWSERS (WeChat / KakaoTalk / LINE / etc.)
  // ═══════════════════════════════════════════════════════════════
  { label: "WeChat - Android", cat: "In-App Browsers", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8 Build/UQ1A.240205.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.0.0 Mobile Safari/537.36 MicroMessenger/8.0.47.2560" },
  { label: "WeChat - iOS", cat: "In-App Browsers", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.47" },
  { label: "WeChat Mini Program", cat: "In-App Browsers", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.47 miniProgram/wx12345" },
  { label: "KakaoTalk - Android", cat: "In-App Browsers", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.0.0 Mobile Safari/537.36;KAKAOTALK 2410620" },
  { label: "KakaoTalk - iOS", cat: "In-App Browsers", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 KAKAOTALK 10.8.2" },
  { label: "LINE - Android", cat: "In-App Browsers", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.0.0 Mobile Safari/537.36 Line/14.17.0" },
  { label: "LINE - iOS", cat: "In-App Browsers", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari Line/14.17.0" },
  { label: "Snapchat - iOS", cat: "In-App Browsers", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Snapchat/13.10.0.42 (iPhone15,3; iOS 17.5; gzip)" },
  { label: "Snapchat - Android", cat: "In-App Browsers", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.0.0 Mobile Safari/537.36 Snapchat/13.10.0.42" },
  { label: "Pinterest - iOS", cat: "In-App Browsers", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [Pinterest/iOS]" },
  { label: "Reddit - iOS", cat: "In-App Browsers", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Reddit/Version 2024.35.0/Build 1734988/iOS Version 17.5" },
  { label: "Alipay - Android", cat: "In-App Browsers", value: "Mozilla/5.0 (Linux; U; Android 14; zh-CN; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 Nebula AlipayDefined" },
  { label: "Baidu App - Android", cat: "In-App Browsers", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8 Build/UQ1A.240205.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.0.0 Mobile Safari/537.36 baiduboxapp/13.55.0.12" },

  // ═══════════════════════════════════════════════════════════════
  //  CDN / INFRASTRUCTURE / SECURITY BOTS
  // ═══════════════════════════════════════════════════════════════
  { label: "Cloudflare Diagnostics", cat: "Infrastructure Bots", value: "Mozilla/5.0 (compatible; CloudFlare/1.0; +http://www.cloudflare.com/)" },
  { label: "Fastly Cache", cat: "Infrastructure Bots", value: "Mozilla/5.0 (compatible; Fastly)" },
  { label: "Akamai Bot", cat: "Infrastructure Bots", value: "Mozilla/5.0 (compatible; AkamaiGhost/1.0)" },
  { label: "AWS Health Check", cat: "Infrastructure Bots", value: "ELB-HealthChecker/2.0" },
  { label: "Azure Traffic Manager", cat: "Infrastructure Bots", value: "Microsoft-Azure-Traffic-Manager-Probe/1.0" },
  { label: "Google Cloud Health Check", cat: "Infrastructure Bots", value: "GoogleHC/1.0" },
  { label: "Stripe Webhook", cat: "Infrastructure Bots", value: "Stripe/1.0 (+https://stripe.com/docs/webhooks)" },
  { label: "PayPal IPN", cat: "Infrastructure Bots", value: "PayPal IPN ( https://www.paypal.com/cgi-bin/webscr?cmd=p/acc/ipn-info-outside )" },
  { label: "GitHub Webhooks", cat: "Infrastructure Bots", value: "GitHub-Hookshot/dc5ae56" },
  { label: "GitLab Webhooks", cat: "Infrastructure Bots", value: "GitLab/16.11" },
  { label: "Nessus Scanner", cat: "Infrastructure Bots", value: "Mozilla/5.0 (compatible; Nessus XMLRPC; nessus.org)" },
  { label: "Qualys Scanner", cat: "Infrastructure Bots", value: "Mozilla/5.0 (compatible; Qualys; +https://www.qualys.com/)" },
  { label: "Sucuri SiteCheck", cat: "Infrastructure Bots", value: "Mozilla/5.0 (compatible; SucuriSiteCheck/1.0; +https://sitecheck.sucuri.net)" },
  { label: "Detectify Scanner", cat: "Infrastructure Bots", value: "Mozilla/5.0 (compatible; Detectify; +https://detectify.com)" },
  { label: "Let's Encrypt Validation", cat: "Infrastructure Bots", value: "Mozilla/5.0 (compatible; Let's Encrypt validation server; +https://www.letsencrypt.org)" },
  { label: "Datadog Synthetics", cat: "Infrastructure Bots", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Datadog/Synthetics" },
  { label: "New Relic Synthetics", cat: "Infrastructure Bots", value: "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0; NewRelicPinger/1.0)" },
  { label: "Zapier Webhook", cat: "Infrastructure Bots", value: "Zapier Platform Core/15.x.x" },
  { label: "Make (Integromat)", cat: "Infrastructure Bots", value: "Make/2.0 (https://www.make.com)" },
  { label: "n8n Webhook", cat: "Infrastructure Bots", value: "n8n" },

  // ═══════════════════════════════════════════════════════════════
  //  FEED READERS (MORE)
  // ═══════════════════════════════════════════════════════════════
  { label: "Feedly", cat: "Feed Readers", value: "Feedly/1.0 (+http://www.feedly.com/fetcher.html; like FeedFetcher-Google)" },
  { label: "NewsBlur", cat: "Feed Readers", value: "NewsBlur Feed Fetcher - 1 subscriber - https://newsblur.com" },
  { label: "Miniflux", cat: "Feed Readers", value: "Miniflux/2.1.3 (+https://miniflux.app/)" },
  { label: "FreshRSS", cat: "Feed Readers", value: "FreshRSS/1.24.1 (Linux; https://freshrss.org)" },
  { label: "Tiny Tiny RSS", cat: "Feed Readers", value: "Tiny Tiny RSS/24.10 (http://tt-rss.org/)" },
  { label: "NetNewsWire", cat: "Feed Readers", value: "NetNewsWire (RSS Reader; https://netnewswire.com/)" },
  { label: "Reeder (iOS/macOS)", cat: "Feed Readers", value: "Reeder/5 CFNetwork/1496.0.7 Darwin/23.5.0" },
  { label: "Flipboard Proxy", cat: "Feed Readers", value: "Mozilla/5.0 (compatible; FlipboardProxy/1.2; +http://flipboard.com/browserproxy)" },
  { label: "Apple News Bot", cat: "Feed Readers", value: "AppleNewsBot/1.0 (+https://developer.apple.com/go/applebot)" },

  // ═══════════════════════════════════════════════════════════════
  //  PDF RENDERERS / DOCUMENT TOOLS
  // ═══════════════════════════════════════════════════════════════
  { label: "wkhtmltopdf", cat: "PDF / Doc Tools", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.34 (KHTML, like Gecko) wkhtmltopdf Safari/534.34" },
  { label: "Prince XML", cat: "PDF / Doc Tools", value: "Prince/15.1 (https://www.princexml.com/)" },
  { label: "WeasyPrint", cat: "PDF / Doc Tools", value: "WeasyPrint/62.3 (https://weasyprint.org/)" },
  { label: "Apache Tika", cat: "PDF / Doc Tools", value: "Apache-Tika/2.9.2" },
  { label: "Pandoc", cat: "PDF / Doc Tools", value: "pandoc/3.3" },

  // ═══════════════════════════════════════════════════════════════
  //  WEB ARCHIVE / CRAWLER BOTS
  // ═══════════════════════════════════════════════════════════════
  { label: "Internet Archive (Heritrix)", cat: "Archive Bots", value: "Mozilla/5.0 (compatible; heritrix/3.4.0 +http://archive.org)" },
  { label: "HTTrack 3.0", cat: "Archive Bots", value: "Mozilla/4.5 (compatible; HTTrack 3.0x; Windows 98)" },
  { label: "GNU Wget2", cat: "Archive Bots", value: "wget2/2.1.0" },
  { label: "Apache Nutch", cat: "Archive Bots", value: "Mozilla/5.0 (compatible; Nutch/1.20; +http://nutch.apache.org/)" },
  { label: "StormCrawler", cat: "Archive Bots", value: "Mozilla/5.0 (compatible; StormCrawler; +http://stormcrawler.net/)" },
  { label: "Colly (Go scraper)", cat: "Archive Bots", value: "colly - https://github.com/gocolly/colly/v2" },
  { label: "Shopify Bot", cat: "Archive Bots", value: "Shopify/1.0 (+https://www.shopify.com/)" },

  // ═══════════════════════════════════════════════════════════════
  //  MEDIA PLAYERS / STREAMING APPS
  // ═══════════════════════════════════════════════════════════════
  { label: "VLC 3.0 - Desktop", cat: "Media Players", value: "VLC/3.0.21 LibVLC/3.0.21" },
  { label: "VLC - Android", cat: "Media Players", value: "VLC for Android/3.6.0-beta-1 (Android 14; Pixel 8)" },
  { label: "mpv 0.38", cat: "Media Players", value: "mpv 0.38.0" },
  { label: "Kodi 21 (Omega)", cat: "Media Players", value: "Kodi/21.0 (X11; Linux x86_64) App_Bitness/64" },
  { label: "Plex Media Server", cat: "Media Players", value: "PlexMediaServer/1.40.5.8921" },
  { label: "Jellyfin Server", cat: "Media Players", value: "Jellyfin/10.9.11" },
  { label: "Sonos Controller", cat: "Media Players", value: "Linux UPnP/1.0 Sonos/79.1-53320 (ZPS22)" },
  { label: "iTunes/Apple Music", cat: "Media Players", value: "iTunes/12.12.10 (Windows; Microsoft Windows 10.0.19045)" },
  { label: "Windows Media Player", cat: "Media Players", value: "Windows-Media-Player/12.0.19041.3636" },
  { label: "Spotify - Android", cat: "Media Players", value: "Spotify/8.9.10.616 Android/34 (Pixel8)" },
  { label: "YouTube - Android", cat: "Media Players", value: "com.google.android.youtube/19.34.37 (Linux; U; Android 14; Pixel 8) gzip" },
  { label: "YouTube - iOS", cat: "Media Players", value: "com.google.ios.youtube/19.34.2 (iPhone15,3; U; CPU iOS 17_5 like Mac OS X)" },
  { label: "Netflix - Android", cat: "Media Players", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8 Build/UQ1A.240205.002) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.0.0 Mobile Safari/537.36 Netflix/9.0.0" },

  // ═══════════════════════════════════════════════════════════════
  //  MORE CLI / TEST TOOLS
  // ═══════════════════════════════════════════════════════════════
  { label: "xh (HTTPie alt)", cat: "More CLI Tools", value: "xh/0.22.2" },
  { label: "aria2c", cat: "More CLI Tools", value: "aria2/1.37.0" },
  { label: "Siege Load Tester", cat: "More CLI Tools", value: "Mozilla/5.0 (pc-x86_64-linux-gnu) Siege/4.1.7" },
  { label: "Apache Benchmark (ab)", cat: "More CLI Tools", value: "ApacheBench/2.3" },
  { label: "k6 Load Test", cat: "More CLI Tools", value: "k6/0.52.0 (https://k6.io/)" },
  { label: "Locust Load Test", cat: "More CLI Tools", value: "python-requests/2.31.0 locust/2.28.0" },
  { label: "Cypress Test Runner", cat: "More CLI Tools", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Cypress/13.14.2" },
  { label: "Perl LWP", cat: "More CLI Tools", value: "libwww-perl/6.77" },
  { label: "R httr2", cat: "More CLI Tools", value: "httr2/1.0.1 r-curl/5.2.1 libcurl/8.6.0" },
  { label: "PHP WordPress", cat: "More CLI Tools", value: "WordPress/6.6.1; https://example.com" },
  { label: "Drupal", cat: "More CLI Tools", value: "Drupal/10 (+https://www.drupal.org)" },

  // ═══════════════════════════════════════════════════════════════
  //  VINTAGE / HISTORICAL BROWSERS
  // ═══════════════════════════════════════════════════════════════
  { label: "Netscape Navigator 9", cat: "Vintage", value: "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.12) Gecko/20080219 Firefox/2.0.0.12 Navigator/9.0.0.6" },
  { label: "Netscape Navigator 4.8", cat: "Vintage", value: "Mozilla/4.8 [en] (Windows NT 5.0; U)" },
  { label: "Netscape Communicator 4.7", cat: "Vintage", value: "Mozilla/4.7 [en] (Win98; I)" },
  { label: "Mozilla Suite 1.7", cat: "Vintage", value: "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.13) Gecko/20060414" },
  { label: "IE 5.5 - Windows ME", cat: "Vintage", value: "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90)" },
  { label: "IE 5.0 - Windows 2000", cat: "Vintage", value: "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)" },
  { label: "IE 4.0 - Windows 95", cat: "Vintage", value: "Mozilla/4.0 (compatible; MSIE 4.01; Windows 95)" },
  { label: "IE 3.0 - Windows 95", cat: "Vintage", value: "Mozilla/2.0 (compatible; MSIE 3.02; Windows 95)" },
  { label: "Mosaic 3.0", cat: "Vintage", value: "NCSA_Mosaic/3.0 (Windows;32bit)" },
  { label: "Opera 5.0", cat: "Vintage", value: "Opera/5.0 (Windows 2000; U) [en]" },
  { label: "Opera 7.54", cat: "Vintage", value: "Opera/7.54 (Windows NT 5.1; U) [en]" },
  { label: "iCab 3.0 - Mac OS 9", cat: "Vintage", value: "iCab/3.0.5 (Macintosh; U; PPC Mac OS)" },
  { label: "OmniWeb 5 - macOS", cat: "Vintage", value: "Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-US) AppleWebKit/525.18 (KHTML, like Gecko, Safari/525.20) OmniWeb/v622.8.0.112941" },
  { label: "Camino 2.1 - macOS", cat: "Vintage", value: "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en; rv:1.9.0.19) Gecko/2010111021 Camino/2.0.6 (MultiLang) (like Firefox/3.0.19)" },
  { label: "Flock 2.6", cat: "Vintage", value: "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2) Gecko/20100115 Firefox/3.6 Flock/2.6.0" },
  { label: "RockMelt", cat: "Vintage", value: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.7 (KHTML, like Gecko) RockMelt/0.16.91.483 Chrome/16.0.912.77 Safari/535.7" },
  { label: "WorldWideWeb (first browser ever)", cat: "Vintage", value: "WorldWideWeb (NEXT)" },
  { label: "Cyberdog 2.0 (Apple)", cat: "Vintage", value: "Cyberdog/2.0 (Macintosh; 68k)" },
  { label: "HotJava 3.0 (Sun)", cat: "Vintage", value: "HotJava/3.0 (OS/400; en)" },
  { label: "Amaya 11.4 (W3C)", cat: "Vintage", value: "amaya/11.4.4 libwww/5.4.1" },

  // ═══════════════════════════════════════════════════════════════
  //  REGIONAL / NICHE BROWSERS
  // ═══════════════════════════════════════════════════════════════
  { label: "Ecosia - Android", cat: "Regional Browsers", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36 Ecosia android@130.0.0.0" },
  { label: "Ecosia - iOS", cat: "Regional Browsers", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1 Ecosia ios@9.3.0" },
  { label: "Silk Browser (Kindle)", cat: "Regional Browsers", value: "Mozilla/5.0 (Linux; Android 11; KFTRWI) AppleWebKit/537.36 (KHTML, like Gecko) Silk/100.6.1 like Chrome/100.0.4896.127 Safari/537.36" },
  { label: "Baidu Browser - Android", cat: "Regional Browsers", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 baidubrowser/7.51" },
  { label: "QQ Browser - Android", cat: "Regional Browsers", value: "Mozilla/5.0 (Linux; U; Android 14; zh-cn; Pixel 8 Build/UQ1A.240205.002) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 MQQBrowser/15.2" },
  { label: "Naver Whale - Android", cat: "Regional Browsers", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36 Whale/4.0.0.0" },
  { label: "Phoenix Browser - Android", cat: "Regional Browsers", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36 PHX/12.5" },
  { label: "Via Browser - Android", cat: "Regional Browsers", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36 Via/5.9.0" },
  { label: "Dolphin Browser - Android", cat: "Regional Browsers", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36 Dolfin/1.0" },
  { label: "Fennec F-Droid - Android", cat: "Regional Browsers", value: "Mozilla/5.0 (Android 14; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0" },
  { label: "Bromite - Android", cat: "Regional Browsers", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36" },
  { label: "Vanadium (GrapheneOS)", cat: "Regional Browsers", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  ACCESSIBILITY (same UA, labeled for reference)
  // ═══════════════════════════════════════════════════════════════
  { label: "JAWS + Chrome - Windows", cat: "Accessibility", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" },
  { label: "NVDA + Firefox - Windows", cat: "Accessibility", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0" },
  { label: "VoiceOver + Safari - macOS", cat: "Accessibility", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15" },
  { label: "TalkBack + Chrome - Android", cat: "Accessibility", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  XIAOMI - REDMI SERIES (BUDGET)
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome 131 - Redmi Note 13 Pro+ 5G", cat: "Xiaomi Redmi", value: "Mozilla/5.0 (Linux; Android 14; 23090RA98G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Redmi Note 13", cat: "Xiaomi Redmi", value: "Mozilla/5.0 (Linux; Android 14; 23028RNCAG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Redmi Note 12 Pro", cat: "Xiaomi Redmi", value: "Mozilla/5.0 (Linux; Android 13; 22101316G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Redmi Note 11 Pro", cat: "Xiaomi Redmi", value: "Mozilla/5.0 (Linux; Android 13; 2201116SG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Redmi 13C", cat: "Xiaomi Redmi", value: "Mozilla/5.0 (Linux; Android 14; 2310ARA4FG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Redmi 12", cat: "Xiaomi Redmi", value: "Mozilla/5.0 (Linux; Android 14; 23053RN02A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 124 - Redmi A3", cat: "Xiaomi Redmi", value: "Mozilla/5.0 (Linux; Android 14; 24027RN4DG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Redmi K70 Pro", cat: "Xiaomi Redmi", value: "Mozilla/5.0 (Linux; Android 14; 23113RKC6C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  XIAOMI - POCO SERIES
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome 130 - POCO F6 Pro", cat: "Xiaomi POCO", value: "Mozilla/5.0 (Linux; Android 14; 24069PC21G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - POCO F5", cat: "Xiaomi POCO", value: "Mozilla/5.0 (Linux; Android 14; 23049PCD8G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - POCO X6 Pro", cat: "Xiaomi POCO", value: "Mozilla/5.0 (Linux; Android 14; 23122PCD1G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - POCO M6 Pro", cat: "Xiaomi POCO", value: "Mozilla/5.0 (Linux; Android 14; 23090RA98I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 124 - POCO C65", cat: "Xiaomi POCO", value: "Mozilla/5.0 (Linux; Android 14; 2407FPN8EG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  SAMSUNG - GALAXY A SERIES (EXTENSIVE)
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome 131 - Galaxy A55 5G", cat: "Samsung Galaxy A", value: "Mozilla/5.0 (Linux; Android 14; SM-A556B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Galaxy A35 5G", cat: "Samsung Galaxy A", value: "Mozilla/5.0 (Linux; Android 14; SM-A356B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Galaxy A25 5G", cat: "Samsung Galaxy A", value: "Mozilla/5.0 (Linux; Android 14; SM-A256B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Galaxy A16", cat: "Samsung Galaxy A", value: "Mozilla/5.0 (Linux; Android 14; SM-A166B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Galaxy A05s", cat: "Samsung Galaxy A", value: "Mozilla/5.0 (Linux; Android 13; SM-A057F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 124 - Galaxy A53 5G", cat: "Samsung Galaxy A", value: "Mozilla/5.0 (Linux; Android 14; SM-A536B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 120 - Galaxy A33 5G", cat: "Samsung Galaxy A", value: "Mozilla/5.0 (Linux; Android 14; SM-A336B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 110 - Galaxy A23", cat: "Samsung Galaxy A", value: "Mozilla/5.0 (Linux; Android 13; SM-A235F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 100 - Galaxy A13", cat: "Samsung Galaxy A", value: "Mozilla/5.0 (Linux; Android 12; SM-A135F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36" },
  { label: "Chrome 100 - Galaxy A12", cat: "Samsung Galaxy A", value: "Mozilla/5.0 (Linux; Android 12; SM-A127F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36" },
  { label: "Chrome 90 - Galaxy A51", cat: "Samsung Galaxy A", value: "Mozilla/5.0 (Linux; Android 12; SM-A515F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36" },
  { label: "Chrome 90 - Galaxy A71", cat: "Samsung Galaxy A", value: "Mozilla/5.0 (Linux; Android 12; SM-A715F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  RUGGED / ULTRA-BUDGET PHONES
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome 130 - Blackview BV9300 Pro", cat: "Rugged Phones", value: "Mozilla/5.0 (Linux; Android 13; BV9300Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Blackview BL8800 Pro", cat: "Rugged Phones", value: "Mozilla/5.0 (Linux; Android 12; BL8800Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Ulefone Armor 24", cat: "Rugged Phones", value: "Mozilla/5.0 (Linux; Android 14; Armor_24) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Doogee S100 Pro", cat: "Rugged Phones", value: "Mozilla/5.0 (Linux; Android 13; S100Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 124 - Oukitel WP30 Pro", cat: "Rugged Phones", value: "Mozilla/5.0 (Linux; Android 13; WP30Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - AGM Glory G1S", cat: "Rugged Phones", value: "Mozilla/5.0 (Linux; Android 12; G1S) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Cubot KingKong AX", cat: "Rugged Phones", value: "Mozilla/5.0 (Linux; Android 13; KingKongAX) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Unihertz Tank 3", cat: "Rugged Phones", value: "Mozilla/5.0 (Linux; Android 14; Tank3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 124 - UMIDIGI G5 Mecha", cat: "Rugged Phones", value: "Mozilla/5.0 (Linux; Android 14; G5_Mecha) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  INDIAN MARKET PHONES (Lava / Micromax / Karbonn)
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome 130 - Lava Blaze 2 5G", cat: "Indian Market", value: "Mozilla/5.0 (Linux; Android 13; LZX403) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - Lava Agni 2", cat: "Indian Market", value: "Mozilla/5.0 (Linux; Android 13; LXX503) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 124 - Micromax IN 2c", cat: "Indian Market", value: "Mozilla/5.0 (Linux; Android 12; E7748) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 120 - Karbonn Titanium S9", cat: "Indian Market", value: "Mozilla/5.0 (Linux; Android 10; Titanium S9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - iQOO Neo 9 Pro", cat: "Indian Market", value: "Mozilla/5.0 (Linux; Android 14; I2211) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 130 - iQOO Z9", cat: "Indian Market", value: "Mozilla/5.0 (Linux; Android 14; I2205) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  EUROPEAN MARKET (Wiko / BQ / Gigaset)
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome 130 - Wiko T80", cat: "European Market", value: "Mozilla/5.0 (Linux; Android 14; W-V770) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 120 - Wiko Power U30", cat: "European Market", value: "Mozilla/5.0 (Linux; Android 11; W-V680) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 120 - BQ Aquaris X2 Pro", cat: "European Market", value: "Mozilla/5.0 (Linux; Android 10; Aquaris X2 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 120 - Gigaset GS5", cat: "European Market", value: "Mozilla/5.0 (Linux; Android 12; GS5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome 120 - Crosscall Core-X5", cat: "European Market", value: "Mozilla/5.0 (Linux; Android 12; Core-X5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  OLDER GAME CONSOLES (PS3 / PSP / Wii / DS / Dreamcast)
  // ═══════════════════════════════════════════════════════════════
  { label: "PlayStation 3 (NetFront)", cat: "Legacy Consoles", value: "Mozilla/5.0 (PLAYSTATION 3 4.90) AppleWebKit/531.22.8 (KHTML, like Gecko)" },
  { label: "PlayStation Portable (PSP)", cat: "Legacy Consoles", value: "Mozilla/4.0 (PSP (PlayStation Portable); 2.00)" },
  { label: "Nintendo Wii (Opera)", cat: "Legacy Consoles", value: "Opera/9.30 (Nintendo Wii; U; ; 3642; en)" },
  { label: "Nintendo DSi", cat: "Legacy Consoles", value: "Mozilla/5.0 (Nintendo DSi; U; en-US) AppleWebKit/534.1 (KHTML, like Gecko) NF/4 Safari/534.1" },
  { label: "Sega Dreamcast", cat: "Legacy Consoles", value: "Mozilla/4.0 (compatible; Planetweb/2.100 EN; Dreamcast US)" },
  { label: "Xbox 360 (IE 9)", cat: "Legacy Consoles", value: "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; Xbox)" },

  // ═══════════════════════════════════════════════════════════════
  //  SMARTWATCHES (MORE)
  // ═══════════════════════════════════════════════════════════════
  { label: "Samsung Galaxy Watch (Tizen)", cat: "Smartwatches", value: "Mozilla/5.0 (Linux; Tizen 5.5; SAMSUNG SM-R860) AppleWebKit/537.3 (KHTML, like Gecko) SamsungBrowser/4.0 Mobile Safari/537.3" },
  { label: "Samsung Galaxy Watch6 (WearOS)", cat: "Smartwatches", value: "Mozilla/5.0 (Linux; Android 13; SM-L500) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" },
  { label: "Garmin Venu 3", cat: "Smartwatches", value: "Garmin/Venu3 ConnectIQ/4.2.0" },
  { label: "Fitbit Sense 2", cat: "Smartwatches", value: "FitbitOS/6.0" },
  { label: "Wear OS - Google Pixel Watch 2", cat: "Smartwatches", value: "Mozilla/5.0 (Linux; Android 14; Google Pixel Watch 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  KIOSK / POS / ATM / DIGITAL SIGNAGE
  // ═══════════════════════════════════════════════════════════════
  { label: "Kiosk Chrome (fullscreen)", cat: "Kiosk / POS", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 kiosk" },
  { label: "ATM Browser (Wincor Nixdorf)", cat: "Kiosk / POS", value: "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; WincorNixdorf ATM)" },
  { label: "Airline Check-in Kiosk", cat: "Kiosk / POS", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36 KIOSK" },
  { label: "Square Terminal POS", cat: "Kiosk / POS", value: "Mozilla/5.0 (Linux; Android 10; SQR-TERMINAL Build/QQ3A.200805.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36" },
  { label: "BrightSign Digital Signage", cat: "Kiosk / POS", value: "Mozilla/5.0 (X11; Linux armv7l) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36 BrightSign/8.5.31" },
  { label: "Samsung SMART Signage", cat: "Kiosk / POS", value: "Mozilla/5.0 (SMART-TV; LINUX; Tizen 6.5) AppleWebKit/537.36 (KHTML, like Gecko) SSSP8/1.0 TV Safari/537.36" },
  { label: "Self-order Kiosk (McDonald's style)", cat: "Kiosk / POS", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 KIOSK/1.0" },

  // ═══════════════════════════════════════════════════════════════
  //  PRINTER / SCANNER / NETWORK DEVICES
  // ═══════════════════════════════════════════════════════════════
  { label: "HP Printer Web UI", cat: "Embedded Devices", value: "Mozilla/5.0 (hp-printer; Linux armv7l) AppleWebKit/534.13 (KHTML, like Gecko) HP-ChaiEngine" },
  { label: "Brother Printer Web UI", cat: "Embedded Devices", value: "Mozilla/4.0 (compatible; Brother MFC-L2710DW)" },
  { label: "Epson iPrint", cat: "Embedded Devices", value: "Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Epson iPrint/7.12.0 Chrome/100.0.4896.127 Mobile Safari/537.36" },
  { label: "Synology DSM Browser", cat: "Embedded Devices", value: "Mozilla/5.0 (Linux; DSM 7.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" },
  { label: "QNAP NAS Web UI", cat: "Embedded Devices", value: "Mozilla/5.0 (Linux; QNAP QTS 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" },
  { label: "UniFi Network Controller", cat: "Embedded Devices", value: "Mozilla/5.0 (Linux; UniFi OS 3.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" },
  { label: "Cisco WebEx Room Kit", cat: "Embedded Devices", value: "Mozilla/5.0 (CE; Linux armv7l) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36 RoomOS/11.0" },
  { label: "Ring Doorbell App", cat: "Embedded Devices", value: "Ring/5.70.0 (Android 14; Pixel 8; en_US)" },
  { label: "Nest Cam (Google Home)", cat: "Embedded Devices", value: "com.google.android.apps.chromecast.app/2.61.1.11 (Android 14; Pixel 8)" },

  // ═══════════════════════════════════════════════════════════════
  //  MORE SOCIAL IN-APP (Threads / BeReal / Clubhouse / etc.)
  // ═══════════════════════════════════════════════════════════════
  { label: "Threads - iOS", cat: "More In-App", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Barcelona 339.0.0.0.31" },
  { label: "Threads - Android", cat: "More In-App", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.0.0 Mobile Safari/537.36 Barcelona/339.0.0.0.31" },
  { label: "BeReal - iOS", cat: "More In-App", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 BeReal/2.8.0" },
  { label: "Clubhouse - iOS", cat: "More In-App", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Clubhouse/24.10.1" },
  { label: "Mastodon App - iOS", cat: "More In-App", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Mastodon/2024.7" },
  { label: "Bluesky - iOS", cat: "More In-App", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Bluesky/1.90" },
  { label: "Bluesky - Android", cat: "More In-App", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.0.0 Mobile Safari/537.36 Bluesky/1.90" },
  { label: "Tumblr - iOS", cat: "More In-App", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Tumblr/34.4" },
  { label: "Strava - iOS", cat: "More In-App", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Strava/340.0" },
  { label: "Spotify Podcast WebView - Android", cat: "More In-App", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.0.0 Mobile Safari/537.36 Spotify/8.9.10" },
  { label: "Uber - iOS WebView", cat: "More In-App", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Uber/4.508.10002" },
  { label: "Airbnb - iOS WebView", cat: "More In-App", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Airbnb/24.42" },
  { label: "DoorDash - iOS WebView", cat: "More In-App", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 DoorDash/4.90.0" },
  { label: "Temu - iOS WebView", cat: "More In-App", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Temu/3.15.1" },
  { label: "Shein - Android WebView", cat: "More In-App", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.0.0 Mobile Safari/537.36 SHEINApp/10.5.0" },
  { label: "Amazon Shopping - iOS", cat: "More In-App", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AmazonShopping/28.17.0" },
  { label: "eBay - Android WebView", cat: "More In-App", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.0.0 Mobile Safari/537.36 eBay/6.154.0" },

  // ═══════════════════════════════════════════════════════════════
  //  MORE EMAIL CLIENTS
  // ═══════════════════════════════════════════════════════════════
  { label: "Spark Mail - macOS", cat: "More Email Clients", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Spark/3.15.2" },
  { label: "Spark Mail - iOS", cat: "More Email Clients", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Spark/3.15.2" },
  { label: "Airmail - macOS", cat: "More Email Clients", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Airmail/5.7.4" },
  { label: "Proton Mail - Android", cat: "More Email Clients", value: "ProtonMail/3.0.17 (Android 14; Pixel 8)" },
  { label: "Mailspring - Linux", cat: "More Email Clients", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Mailspring/1.13.3 Chrome/120.0.0.0 Electron/28.0.0 Safari/537.36" },
  { label: "Yahoo Mail - iOS", cat: "More Email Clients", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 YahooMobile/1.0" },
  { label: "Samsung Email", cat: "More Email Clients", value: "Mozilla/5.0 (Linux; Android 14; SM-S926B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36 SamsungEmailApp/6.1.80.0" },
  { label: "Outlook - Android", cat: "More Email Clients", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36 Outlook-Android/4.2340.0" },
  { label: "Outlook - iOS", cat: "More Email Clients", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Outlook-iOS/4.2340.0" },
  { label: "Edison Mail - iOS", cat: "More Email Clients", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Edison/1.32" },

  // ═══════════════════════════════════════════════════════════════
  //  BANKING / FINTECH APP WEBVIEWS
  // ═══════════════════════════════════════════════════════════════
  { label: "Chase Mobile - iOS", cat: "Banking Apps", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ChaseMobile/5.30" },
  { label: "PayPal - iOS", cat: "Banking Apps", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 PayPalIOS/8.60.0" },
  { label: "Venmo - iOS", cat: "Banking Apps", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Venmo/10.30.0" },
  { label: "Cash App - iOS", cat: "Banking Apps", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 CashApp/4.50" },
  { label: "Revolut - iOS", cat: "Banking Apps", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Revolut/10.25" },
  { label: "Wise - iOS", cat: "Banking Apps", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TransferWise/8.15.0" },
  { label: "Robinhood - iOS", cat: "Banking Apps", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Robinhood/2024.42.0" },
  { label: "Coinbase - Android", cat: "Banking Apps", value: "Mozilla/5.0 (Linux; Android 14; Pixel 8; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.0.0 Mobile Safari/537.36 Coinbase/10.40.0" },

  // ═══════════════════════════════════════════════════════════════
  //  MORE CAR BRANDS
  // ═══════════════════════════════════════════════════════════════
  { label: "Audi MMI Browser", cat: "More Cars", value: "Mozilla/5.0 (Linux; Automotive; Audi MIB3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" },
  { label: "Porsche PCM 6.0", cat: "More Cars", value: "Mozilla/5.0 (Linux; Automotive; Porsche PCM6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36" },
  { label: "Hyundai Bluelink", cat: "More Cars", value: "Mozilla/5.0 (Linux; Android 10; ccIC) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36 Hyundai" },
  { label: "Toyota Entune", cat: "More Cars", value: "Mozilla/5.0 (Linux; Automotive; Toyota Entune) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" },
  { label: "Lucid Air Browser", cat: "More Cars", value: "Mozilla/5.0 (Linux; Android 12; Lucid Air) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36" },
  { label: "VW ID. Browser", cat: "More Cars", value: "Mozilla/5.0 (Linux; Automotive; VW ID.) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36" },
  { label: "NIO NOMI Browser", cat: "More Cars", value: "Mozilla/5.0 (Linux; Android 11; NIO ES8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36" },
  { label: "BYD DiLink Browser", cat: "More Cars", value: "Mozilla/5.0 (Linux; Android 12; BYD Seal) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  OLDER MACOS COMBOS
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome - macOS Monterey (12)", cat: "Older macOS", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36" },
  { label: "Chrome - macOS Big Sur (11)", cat: "Older macOS", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36" },
  { label: "Chrome - macOS Catalina (10.15)", cat: "Older macOS", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36" },
  { label: "Chrome - macOS Mojave (10.14)", cat: "Older macOS", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36" },
  { label: "Chrome - macOS High Sierra (10.13)", cat: "Older macOS", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36" },
  { label: "Firefox - macOS El Capitan (10.11)", cat: "Older macOS", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:78.0) Gecko/20100101 Firefox/78.0" },
  { label: "Safari 12 - macOS Mojave", cat: "Older macOS", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Safari/605.1.15" },
  { label: "Safari 11 - macOS High Sierra", cat: "Older macOS", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15" },

  // ═══════════════════════════════════════════════════════════════
  //  OLDER ANDROID VERSIONS
  // ═══════════════════════════════════════════════════════════════
  { label: "Chrome - Android 13", cat: "Older Android", value: "Mozilla/5.0 (Linux; Android 13; SM-A536B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome - Android 12", cat: "Older Android", value: "Mozilla/5.0 (Linux; Android 12; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36" },
  { label: "Chrome - Android 11", cat: "Older Android", value: "Mozilla/5.0 (Linux; Android 11; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36" },
  { label: "Chrome - Android 10", cat: "Older Android", value: "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36" },
  { label: "Chrome - Android 9 (Pie)", cat: "Older Android", value: "Mozilla/5.0 (Linux; Android 9; SM-G960F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Mobile Safari/537.36" },
  { label: "Chrome - Android 8.1 (Oreo)", cat: "Older Android", value: "Mozilla/5.0 (Linux; Android 8.1.0; Pixel 2 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Mobile Safari/537.36" },
  { label: "Chrome - Android 7.0 (Nougat)", cat: "Older Android", value: "Mozilla/5.0 (Linux; Android 7.0; Nexus 6P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Mobile Safari/537.36" },
  { label: "Chrome - Android 6.0 (Marshmallow)", cat: "Older Android", value: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Mobile Safari/537.36" },
  { label: "Chrome - Android 5.1 (Lollipop)", cat: "Older Android", value: "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36" },
  { label: "Chrome - Android 4.4 (KitKat)", cat: "Older Android", value: "Mozilla/5.0 (Linux; Android 4.4.4; Nexus 5 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.89 Mobile Safari/537.36" },
  { label: "Android Browser 4.4 (stock)", cat: "Older Android", value: "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36" },
  { label: "Android Browser 2.3 (Gingerbread)", cat: "Older Android", value: "Mozilla/5.0 (Linux; U; Android 2.3.6; en-us; Nexus S Build/GRK39F) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1" },

  // ═══════════════════════════════════════════════════════════════
  //  MORE AI / ML CRAWLERS
  // ═══════════════════════════════════════════════════════════════
  { label: "Apple Applebot Extended", cat: "More AI Bots", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15 (Applebot/0.1)" },
  { label: "Meta-ExternalFetcher", cat: "More AI Bots", value: "Mozilla/5.0 (compatible; Meta-ExternalFetcher/1.0; +https://developers.facebook.com/docs/sharing/webmasters/web_code_yaml)" },
  { label: "iask.ai Bot", cat: "More AI Bots", value: "Mozilla/5.0 (compatible; iaskBot/1.0; +https://iask.ai/bot)" },
  { label: "Neeva Bot", cat: "More AI Bots", value: "Mozilla/5.0 (compatible; NeevaBot/1.0; +https://neeva.com/neevabot)" },
  { label: "Kangaroo Bot (Kagi)", cat: "More AI Bots", value: "Mozilla/5.0 (compatible; KagiBot/1.0; +https://kagi.com/bot)" },
  { label: "Exa Crawler", cat: "More AI Bots", value: "Mozilla/5.0 (compatible; ExaBot/1.0; +https://exa.ai)" },
  { label: "Phind Bot", cat: "More AI Bots", value: "Mozilla/5.0 (compatible; PhindBot/1.0; +https://phind.com/bot)" },
  { label: "Tavily Crawler", cat: "More AI Bots", value: "Mozilla/5.0 (compatible; TavilyBot/1.0; +https://tavily.com/bot)" },
  { label: "SerpAPI Bot", cat: "More AI Bots", value: "Mozilla/5.0 (compatible; SerpAPIBot/1.0; +https://serpapi.com)" },
  { label: "Firecrawl", cat: "More AI Bots", value: "Mozilla/5.0 (compatible; Firecrawl/1.0; +https://firecrawl.dev)" },
  { label: "Jina Reader", cat: "More AI Bots", value: "Mozilla/5.0 (compatible; JinaBot/1.0; +https://jina.ai/reader)" },

  // ═══════════════════════════════════════════════════════════════
  //  MORE SEARCH ENGINE BOTS (REGIONAL)
  // ═══════════════════════════════════════════════════════════════
  { label: "Brave Search (Friendlycrawler)", cat: "More Search Bots", value: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Friendlycrawler/1.0; +https://about.brave.com/search/)" },
  { label: "Ecosia Bot", cat: "More Search Bots", value: "Mozilla/5.0 (compatible; EcosiaBot; +https://info.ecosia.org)" },
  { label: "Exalead Bot", cat: "More Search Bots", value: "Mozilla/5.0 (compatible; Exabot/3.0; +http://www.exabot.com/go/robot)" },
  { label: "Swisscows Bot", cat: "More Search Bots", value: "Mozilla/5.0 (compatible; Swisscows; +https://swisscows.com/)" },
  { label: "Startpage Bot", cat: "More Search Bots", value: "Mozilla/5.0 (compatible; startpage-bot; +https://www.startpage.com/)" },
  { label: "Mail.ru Bot", cat: "More Search Bots", value: "Mozilla/5.0 (compatible; Mail.RU_Bot/2.0; +https://go.mail.ru/help/robots)" },
  { label: "Cốc Cốc Bot", cat: "More Search Bots", value: "Mozilla/5.0 (compatible; coccoc/1.0; +http://help.coccoc.com/searchengine)" },
  { label: "Daum Bot (Kakao)", cat: "More Search Bots", value: "Mozilla/5.0 (compatible; Daum/4.1; +http://cs.daum.net/faq/15/4118.html?faqId=28966)" },
  { label: "Haosou Spider (360)", cat: "More Search Bots", value: "Mozilla/5.0 (compatible; HaosouSpider; +http://www.haosou.com/help/webmaster/spider/)" },
  { label: "Cliqz Bot", cat: "More Search Bots", value: "Mozilla/5.0 (compatible; Cliqzbot/3.0; +http://cliqz.com/company/cliqzbot)" },
  { label: "Gigablast Spider", cat: "More Search Bots", value: "GigablastOpenSource/1.0" },
  { label: "Marginalia Crawler", cat: "More Search Bots", value: "search.marginalia.nu" },

  // ═══════════════════════════════════════════════════════════════
  //  PROGRAMMING LANGUAGE HTTP CLIENTS (MORE)
  // ═══════════════════════════════════════════════════════════════
  { label: "C libcurl 8.7", cat: "More HTTP Clients", value: "libcurl/8.7.1 OpenSSL/3.3.0 zlib/1.3.1 nghttp2/1.61.0" },
  { label: "C libcurl 7.88", cat: "More HTTP Clients", value: "libcurl/7.88.1 OpenSSL/3.0.13 zlib/1.2.13" },
  { label: "Erlang httpc", cat: "More HTTP Clients", value: "Erlang (httpc)" },
  { label: "Elixir Req", cat: "More HTTP Clients", value: "req/0.5.4" },
  { label: "Haskell http-client", cat: "More HTTP Clients", value: "haskell http-client/0.7.16" },
  { label: "OCaml Cohttp", cat: "More HTTP Clients", value: "ocaml-cohttp/6.0.0" },
  { label: "Nim HttpClient", cat: "More HTTP Clients", value: "Nim httpclient/2.0.8" },
  { label: "Zig HTTP", cat: "More HTTP Clients", value: "zig/0.13.0" },
  { label: "Crystal HTTP::Client", cat: "More HTTP Clients", value: "Crystal (HTTP::Client)" },
  { label: "Clojure clj-http", cat: "More HTTP Clients", value: "clj-http/3.12.3" },
  { label: "Lua LuaSocket", cat: "More HTTP Clients", value: "LuaSocket 3.1.0" },
  { label: "PowerShell 5.1 (WinHTTP)", cat: "More HTTP Clients", value: "Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.19041.4412" },
  { label: "Bash/cURL Script", cat: "More HTTP Clients", value: "curl/8.7.1" },
  { label: "Ansible URI module", cat: "More HTTP Clients", value: "ansible-httpget" },
  { label: "Terraform Provider", cat: "More HTTP Clients", value: "HashiCorp/1.0 Terraform/1.9.5" },

  // ═══════════════════════════════════════════════════════════════
  //  MORE MONITORING / OBSERVABILITY
  // ═══════════════════════════════════════════════════════════════
  { label: "Grafana Synthetic Monitoring", cat: "Monitoring", value: "Grafana Synthetic Monitoring Agent/v0.13.0" },
  { label: "Prometheus Blackbox Exporter", cat: "Monitoring", value: "Prometheus/2.53.0" },
  { label: "Zabbix HTTP Agent", cat: "Monitoring", value: "Zabbix" },
  { label: "Nagios check_http", cat: "Monitoring", value: "check_http/v2.4.3 (monitoring-plugins 2.4.3)" },
  { label: "Site24x7 Bot", cat: "Monitoring", value: "Mozilla/5.0 (compatible; Site24x7; +https://www.site24x7.com/bot.html)" },
  { label: "StatusCake", cat: "Monitoring", value: "StatusCake" },
  { label: "BetterStack Uptime", cat: "Monitoring", value: "Better Uptime Bot Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
  { label: "Checkly Browser Check", cat: "Monitoring", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Checkly/1.0" },
  { label: "Dynatrace Synthetic", cat: "Monitoring", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 dynatrace" },
  { label: "Catchpoint", cat: "Monitoring", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Catchpoint" },
  { label: "Appdynamics Synthetic", cat: "Monitoring", value: "AppDynamics Synthetic Agent" },

  // ═══════════════════════════════════════════════════════════════
  //  TRANSLATION / PROXY SERVICES
  // ═══════════════════════════════════════════════════════════════
  { label: "Google Translate", cat: "Translation / Proxy", value: "Mozilla/5.0 (compatible; Google-Site-Verification/1.0)" },
  { label: "Google Web Light (proxy)", cat: "Translation / Proxy", value: "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko; googleweblight) Chrome/38.0.1025.166 Mobile Safari/535.19" },
  { label: "Bing Translator Preview", cat: "Translation / Proxy", value: "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) BingPreview/1.0b" },
  { label: "Cloudflare Workers Fetch", cat: "Translation / Proxy", value: "Cloudflare-Workers" },
  { label: "Google AMP Cache", cat: "Translation / Proxy", value: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html) Google-AMPHTML" },
  { label: "Facebook Sharing Debugger", cat: "Translation / Proxy", value: "facebookexternalhit/1.1 Facebot Twitterbot/1.0" },
  { label: "Open Graph Scraper", cat: "Translation / Proxy", value: "Mozilla/5.0 (compatible; OpenGraphScraper; +https://github.com/jshemas/openGraphScraper)" },
  { label: "Readability Parser", cat: "Translation / Proxy", value: "Mozilla/5.0 (compatible; Readability Parser/1.0; +https://www.readability.com/about)" },
  { label: "Pocket Save API", cat: "Translation / Proxy", value: "PocketImageCache/0.1" },
  { label: "Instapaper", cat: "Translation / Proxy", value: "Mozilla/5.0 (compatible; Instapaper; +https://www.instapaper.com)" },

  // ═══════════════════════════════════════════════════════════════
  //  WEBMAIL CLIENTS
  // ═══════════════════════════════════════════════════════════════
  { label: "Gmail Image Proxy", cat: "Webmail", value: "Mozilla/5.0 (Windows NT 5.1; rv:11.0) Gecko Firefox/11.0 (via ggpht.com GoogleImageProxy)" },
  { label: "Yahoo Mail Image Proxy", cat: "Webmail", value: "YahooMailProxy; https://help.yahoo.com/kb/yahoo-mail-proxy-SLN28749.html" },
  { label: "Outlook.com SafeLinks", cat: "Webmail", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 (compatible; MSIE; SafeLinks; Microsoft Defender)" },
  { label: "ProtonMail Link Checker", cat: "Webmail", value: "ProtonMail Bridge/3.7.1" },
  { label: "Fastmail Image Proxy", cat: "Webmail", value: "Mozilla/5.0 (compatible; Fastmail/1.0; +https://www.fastmail.com)" },

  // ═══════════════════════════════════════════════════════════════
  //  SPECIAL PURPOSE STRINGS
  // ═══════════════════════════════════════════════════════════════
  { label: "Random Desktop (generic Win)", cat: "Special Purpose", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.86 Safari/537.36" },
  { label: "Random Mobile (generic Android)", cat: "Special Purpose", value: "Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.86 Mobile Safari/537.36" },
  { label: "Random Mobile (generic iOS)", cat: "Special Purpose", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1" },
  { label: "Custom UA: \"Bot\"", cat: "Special Purpose", value: "Bot" },
  { label: "Custom UA: \"Mozilla/5.0\"", cat: "Special Purpose", value: "Mozilla/5.0" },
  { label: "Custom UA: \"None\"", cat: "Special Purpose", value: "None" },
  { label: "Single Space (minimal)", cat: "Special Purpose", value: " " },
  { label: "Period Only", cat: "Special Purpose", value: "." },

  // ═══════════════════════════════════════════════════════════════
  //  CLOUD PROVIDER SDKs & CLIs
  // ═══════════════════════════════════════════════════════════════
  { label: "AWS CLI 2.17", cat: "Cloud SDKs", value: "aws-cli/2.17.0 Python/3.12.4 Linux/6.8.0 source/x86_64.ubuntu.24 prompt/off command/s3.ls" },
  { label: "AWS CLI 2.17 - macOS", cat: "Cloud SDKs", value: "aws-cli/2.17.0 Python/3.12.4 Darwin/23.5.0 source/arm64 prompt/off command/sts.get-caller-identity" },
  { label: "AWS CLI 2.17 - Windows", cat: "Cloud SDKs", value: "aws-cli/2.17.0 Python/3.12.4 Windows/10 source/AMD64 prompt/off command/ec2.describe-instances" },
  { label: "AWS SDK Boto3 1.35 (Python)", cat: "Cloud SDKs", value: "Boto3/1.35.0 md/Botocore#1.35.0 ua/2.0 os/linux#6.8.0 md/arch#x86_64 lang/python#3.12.4" },
  { label: "AWS SDK JS v3", cat: "Cloud SDKs", value: "aws-sdk-js/3.654.0 ua/2.0 os/linux#6.8.0 lang/js md/nodejs#20.16.0" },
  { label: "AWS SDK Go v2", cat: "Cloud SDKs", value: "aws-sdk-go-v2/1.30.0 os/linux lang/go#1.22.5 md/GOOS#linux md/GOARCH#amd64" },
  { label: "AWS SDK Java v2", cat: "Cloud SDKs", value: "aws-sdk-java/2.27.0 ua/2.0 os/Linux/6.8.0 lang/java#21 md/vendor#Amazon.com_Inc. md/io#netty" },
  { label: "AWS SDK .NET", cat: "Cloud SDKs", value: "aws-sdk-dotnet-coreclr/3.7.400.0 ua/2.0 os/windows#10.0.22631 lang/.NET_Core#8.0.7 md/ARCH#X64" },
  { label: "AWS Lambda Runtime", cat: "Cloud SDKs", value: "aws-sdk-nodejs/3.654.0 promise exec-env/AWS_Lambda_nodejs20.x" },
  { label: "Azure CLI 2.63", cat: "Cloud SDKs", value: "AZURECLI/2.63.0 azsdk-python-core/1.30.2 Python/3.12.4 (Linux-6.8.0-x86_64-with-glib2.39)" },
  { label: "Azure CLI - Windows", cat: "Cloud SDKs", value: "AZURECLI/2.63.0 azsdk-python-core/1.30.2 Python/3.12.4 (Windows-10-10.0.22631-SP0)" },
  { label: "Azure SDK Python", cat: "Cloud SDKs", value: "azsdk-python-identity/1.17.1 Python/3.12.4 (Linux-6.8.0-x86_64-with-glib2.39)" },
  { label: "Azure SDK JS", cat: "Cloud SDKs", value: "azsdk-js-identity/4.4.0 core-rest-pipeline/1.16.3 Node/20.16.0 OS/(x64-Linux-6.8.0)" },
  { label: "Azure SDK .NET", cat: "Cloud SDKs", value: "azsdk-net-Identity/1.12.0 (.NET 8.0.7; Microsoft Windows 10.0.22631)" },
  { label: "Azure PowerShell", cat: "Cloud SDKs", value: "AzurePowerShell/12.2.0 PSVersion/7.4.5" },
  { label: "Google Cloud SDK (gcloud)", cat: "Cloud SDKs", value: "google-cloud-sdk gcloud/489.0.0 command/gcloud.compute.instances.list invocation-id/abc123 environment/None environment-version/None interactive/True from-script/False python/3.12.4 term/xterm-256color (Linux 6.8.0)" },
  { label: "Google Cloud SDK - macOS", cat: "Cloud SDKs", value: "google-cloud-sdk gcloud/489.0.0 command/gcloud.auth.login python/3.12.4 (Macintosh; arm64 Mac OS X 14.5.0)" },
  { label: "Google API Python Client", cat: "Cloud SDKs", value: "google-api-python-client/2.140.0 (gzip) google-auth/2.32.0" },
  { label: "Google API Go Client", cat: "Cloud SDKs", value: "google-api-go-client/0.192.0 gl-go/1.22.5 gdcl/0.192.0" },
  { label: "Google API Node.js", cat: "Cloud SDKs", value: "google-api-nodejs-client/128.0.0 gl-node/20.16.0" },

  // ═══════════════════════════════════════════════════════════════
  //  DEVOPS / INFRA TOOLS
  // ═══════════════════════════════════════════════════════════════
  { label: "Terraform 1.9", cat: "DevOps Tools", value: "HashiCorp/1.0 Terraform/1.9.5 (+https://www.terraform.io)" },
  { label: "Terraform 1.8", cat: "DevOps Tools", value: "HashiCorp/1.0 Terraform/1.8.5 (+https://www.terraform.io)" },
  { label: "Terraform Provider AWS", cat: "DevOps Tools", value: "HashiCorp/1.0 Terraform/1.9.5 (+https://www.terraform.io) terraform-provider-aws/5.62.0 (+https://registry.terraform.io/providers/hashicorp/aws)" },
  { label: "Pulumi CLI", cat: "DevOps Tools", value: "pulumi-cli/3.130.0 (go1.22.5; linux/amd64)" },
  { label: "Ansible 2.17", cat: "DevOps Tools", value: "ansible-httpget" },
  { label: "Ansible URI Module", cat: "DevOps Tools", value: "python-requests/2.31.0 ansible-core/2.17.3" },
  { label: "Docker CLI 27", cat: "DevOps Tools", value: "docker/27.1.1 go/1.22.5 git-commit/cc13f95 kernel/6.8.0 os/linux arch/amd64" },
  { label: "Docker Desktop - macOS", cat: "DevOps Tools", value: "Docker-Client/27.1.1 (darwin; arm64; go 1.22.5)" },
  { label: "Docker Hub Registry", cat: "DevOps Tools", value: "docker/27.1.1 go/1.22.5 kernel/6.8.0" },
  { label: "Kubernetes kubectl", cat: "DevOps Tools", value: "kubectl/v1.30.3 (linux/amd64) kubernetes/6fc0a69" },
  { label: "Kubernetes Kubelet", cat: "DevOps Tools", value: "kubelet/v1.30.3 (linux/amd64) kubernetes/6fc0a69" },
  { label: "Helm 3.15", cat: "DevOps Tools", value: "Helm/3.15.3 (linux; amd64)" },
  { label: "ArgoCD 2.12", cat: "DevOps Tools", value: "argocd-client/v2.12.0+abc123" },
  { label: "Vault CLI 1.17", cat: "DevOps Tools", value: "HashiCorp/1.0 Vault/1.17.3 (+https://www.vaultproject.io)" },
  { label: "Consul CLI 1.19", cat: "DevOps Tools", value: "HashiCorp/1.0 Consul/1.19.1 (+https://www.consul.io)" },
  { label: "Packer 1.11", cat: "DevOps Tools", value: "HashiCorp/1.0 Packer/1.11.2 (+https://www.packer.io)" },
  { label: "Vagrant 2.4", cat: "DevOps Tools", value: "Vagrant/2.4.1 (+https://www.vagrantup.com; ruby3.2.4)" },
  { label: "Chef Infra Client", cat: "DevOps Tools", value: "Chef Infra Client/18.4.12 (ruby-3.1.6-p260; x86_64-linux)" },
  { label: "Puppet Agent", cat: "DevOps Tools", value: "Puppet/8.8.1 Ruby/3.2.4-p170 (x86_64-linux)" },

  // ═══════════════════════════════════════════════════════════════
  //  CI/CD SYSTEMS
  // ═══════════════════════════════════════════════════════════════
  { label: "GitHub Actions Runner", cat: "CI/CD", value: "github-actions-runner/2.319.1 (Linux x86_64)" },
  { label: "GitHub API (Octokit)", cat: "CI/CD", value: "octokit.js/4.0.2 Node.js/20.16.0 (linux; x64)" },
  { label: "GitHub CLI (gh)", cat: "CI/CD", value: "GitHub CLI 2.54.0" },
  { label: "GitLab Runner 17", cat: "CI/CD", value: "gitlab-runner/17.3.0 (linux/amd64)" },
  { label: "Jenkins 2.462", cat: "CI/CD", value: "Java/17.0.12 Jenkins/2.462.2" },
  { label: "CircleCI Runner", cat: "CI/CD", value: "CircleCI-Runner/3.0.20 (linux; amd64)" },
  { label: "Travis CI", cat: "CI/CD", value: "Travis-CI/1.0" },
  { label: "Buildkite Agent", cat: "CI/CD", value: "buildkite-agent/3.80.0 (linux/amd64)" },
  { label: "Drone CI Runner", cat: "CI/CD", value: "drone/2.24.0 (linux/amd64)" },
  { label: "Renovate Bot", cat: "CI/CD", value: "RenovateBot/38.55.2 (https://github.com/renovatebot/renovate)" },
  { label: "Dependabot", cat: "CI/CD", value: "dependabot-core/0.261.0 excon/0.110.0 ruby/3.3.4 (x86_64-linux)" },

  // ═══════════════════════════════════════════════════════════════
  //  IDE / CODE EDITORS
  // ═══════════════════════════════════════════════════════════════
  { label: "VS Code 1.94 - Windows", cat: "IDEs", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.94.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "VS Code 1.94 - macOS", cat: "IDEs", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.94.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "VS Code 1.94 - Linux", cat: "IDEs", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.94.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "VS Code Extension Host", cat: "IDEs", value: "VS Code Extension Host/1.94.0 Node.js/20.16.0 (linux; x64)" },
  { label: "VSCodium 1.94", cat: "IDEs", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) VSCodium/1.94.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "JetBrains IntelliJ IDEA 2024", cat: "IDEs", value: "JetBrains IntelliJ IDEA/2024.2.1; Java/21.0.2; Linux/6.8.0; amd64" },
  { label: "JetBrains PyCharm 2024", cat: "IDEs", value: "JetBrains PyCharm/2024.2.1; Java/21.0.2; Linux/6.8.0; amd64" },
  { label: "JetBrains WebStorm 2024", cat: "IDEs", value: "JetBrains WebStorm/2024.2.1; Java/21.0.2; macOS/14.5; aarch64" },
  { label: "JetBrains GoLand 2024", cat: "IDEs", value: "JetBrains GoLand/2024.2.1; Java/21.0.2; Windows/10.0; amd64" },
  { label: "JetBrains Rider 2024", cat: "IDEs", value: "JetBrains Rider/2024.2.1; Java/21.0.2; Windows/10.0; amd64" },
  { label: "Eclipse IDE 2024-06", cat: "IDEs", value: "Eclipse/4.32.0 (win32; x86_64; Java 21.0.2)" },
  { label: "Sublime Text 4", cat: "IDEs", value: "Sublime Text/4 Build 4180 (Linux x86_64)" },
  { label: "Neovim (LSP client)", cat: "IDEs", value: "Neovim/0.10.1 (Linux x86_64)" },
  { label: "Cursor IDE", cat: "IDEs", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Cursor/0.40.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Zed Editor", cat: "IDEs", value: "Zed/0.150.0 (macOS; aarch64)" },
  { label: "Windsurf IDE", cat: "IDEs", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Windsurf/1.0.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "GitHub Copilot Plugin", cat: "IDEs", value: "GithubCopilot/1.220.0 (vscode/1.94.0; electron/32.0.0; node/20.16.0; linux x64)" },
  { label: "Codeium Extension", cat: "IDEs", value: "Codeium/1.14.0 (vscode/1.94.0; electron/32.0.0; node/20.16.0)" },

  // ═══════════════════════════════════════════════════════════════
  //  MICROSOFT OFFICE / ENTERPRISE
  // ═══════════════════════════════════════════════════════════════
  { label: "Outlook Desktop - Windows", cat: "Microsoft Office", value: "Microsoft Office/16.0 (Windows NT 10.0; Microsoft Outlook 16.0.17928; Pro)" },
  { label: "Outlook Desktop - macOS", cat: "Microsoft Office", value: "Microsoft Office/16.0 (Macintosh; Intel Mac OS X 10.15; Microsoft Outlook 16.0.17928)" },
  { label: "Outlook Mobile - iOS", cat: "Microsoft Office", value: "Outlook-iOS/2.129.0" },
  { label: "Outlook Mobile - Android", cat: "Microsoft Office", value: "Outlook-Android/4.2400.0" },
  { label: "Outlook Web (OWA)", cat: "Microsoft Office", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0 (OWA)" },
  { label: "Word Desktop - Windows", cat: "Microsoft Office", value: "Microsoft Office Word/16.0 (Windows NT 10.0; Win64; x64; Pro)" },
  { label: "Excel Desktop - Windows", cat: "Microsoft Office", value: "Microsoft Office Excel/16.0 (Windows NT 10.0; Win64; x64; Pro)" },
  { label: "PowerPoint Desktop", cat: "Microsoft Office", value: "Microsoft Office PowerPoint/16.0 (Windows NT 10.0; Win64; x64; Pro)" },
  { label: "Teams Desktop", cat: "Microsoft Office", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Teams/24213.1103.3029.3655 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Teams - macOS", cat: "Microsoft Office", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Teams/24213.1103.3029.3655 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "OneDrive Sync Client", cat: "Microsoft Office", value: "OneDriveSyncEngine/24.156.0721.0002 (Windows; Win64; x64)" },
  { label: "SharePoint Crawler", cat: "Microsoft Office", value: "Microsoft Office Existence Discovery (Microsoft-SharePoint-Feeds/15.0)" },
  { label: "Microsoft Graph API", cat: "Microsoft Office", value: "Graph-dotnet-sdk/5.56.0 (featureUsage=0)" },
  { label: "Microsoft Power Automate", cat: "Microsoft Office", value: "PowerAutomate/1.0 (Flow; +https://flow.microsoft.com)" },
  { label: "Microsoft Copilot", cat: "Microsoft Office", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0 Microsoft Copilot" },

  // ═══════════════════════════════════════════════════════════════
  //  GOOGLE WORKSPACE
  // ═══════════════════════════════════════════════════════════════
  { label: "Google Docs Viewer", cat: "Google Workspace", value: "Mozilla/5.0 (compatible; Google-Docs-Viewer; +https://support.google.com/webmasters/answer/1061943)" },
  { label: "Google Sheets API", cat: "Google Workspace", value: "google-api-python-client/2.140.0 (gzip) google-auth/2.32.0 google-cloud-core/2.4.1" },
  { label: "Google Drive Desktop", cat: "Google Workspace", value: "google-drive-fs/91.0.3 (macOS; ARM64)" },
  { label: "Google Calendar Sync", cat: "Google Workspace", value: "Google-Calendar-Importer/1.0 (+https://www.google.com/calendar)" },
  { label: "Google Meet", cat: "Google Workspace", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 (Meet)" },

  // ═══════════════════════════════════════════════════════════════
  //  PROJECT MANAGEMENT / COLLABORATION
  // ═══════════════════════════════════════════════════════════════
  { label: "Jira Cloud Automation", cat: "Project Tools", value: "Jira-Automation/1.0 (+https://www.atlassian.com/software/jira)" },
  { label: "Jira Webhook", cat: "Project Tools", value: "Atlassian HttpClient/5.2.0 (Jira/9.12.0)" },
  { label: "Confluence Webhook", cat: "Project Tools", value: "Atlassian HttpClient/5.2.0 (Confluence/8.9.0)" },
  { label: "Bitbucket Pipelines", cat: "Project Tools", value: "Bitbucket-Pipelines/2.0 (+https://bitbucket.org)" },
  { label: "Notion API Client", cat: "Project Tools", value: "Notion-SDK/2.2.15 Node.js/20.16.0" },
  { label: "Notion Desktop", cat: "Project Tools", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Notion/3.14.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Linear Desktop", cat: "Project Tools", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Linear/1.0.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Asana API", cat: "Project Tools", value: "asana-python/5.0.9 python/3.12.4" },
  { label: "Monday.com Webhook", cat: "Project Tools", value: "Monday.com/1.0" },
  { label: "ClickUp Webhook", cat: "Project Tools", value: "ClickUp/1.0" },
  { label: "Trello Webhook", cat: "Project Tools", value: "Trello Webhooks (+https://trello.com)" },
  { label: "Basecamp Webhook", cat: "Project Tools", value: "Basecamp/4.0 (+https://basecamp.com)" },

  // ═══════════════════════════════════════════════════════════════
  //  PAYMENT / FINTECH APIs
  // ═══════════════════════════════════════════════════════════════
  { label: "Stripe API (Python)", cat: "Payment APIs", value: "Stripe/v1 PythonBindings/10.8.0 Python/3.12.4" },
  { label: "Stripe API (Node)", cat: "Payment APIs", value: "Stripe/v1 NodeBindings/16.8.0 Node/20.16.0" },
  { label: "Stripe API (Ruby)", cat: "Payment APIs", value: "Stripe/v1 RubyBindings/12.5.0 Ruby/3.3.4" },
  { label: "Stripe API (Go)", cat: "Payment APIs", value: "Stripe/v1 GoBindings/79.6.0 Go/1.22.5" },
  { label: "Stripe Webhook", cat: "Payment APIs", value: "Stripe/1.0 (+https://stripe.com/docs/webhooks)" },
  { label: "PayPal API (Python)", cat: "Payment APIs", value: "PayPalSDK/paypalrestsdk-Python 2.0.0 (requests 2.31.0; python 3.12.4; linux)" },
  { label: "Square API", cat: "Payment APIs", value: "Square-Python-SDK/37.1.0" },
  { label: "Shopify Admin API", cat: "Payment APIs", value: "ShopifyAPI/14.3.0 Ruby/3.3.4" },
  { label: "Plaid API", cat: "Payment APIs", value: "Plaid Python v24.0.0" },
  { label: "Twilio API", cat: "Payment APIs", value: "twilio-python/9.2.3 (linux x86_64) Python/3.12.4" },
  { label: "SendGrid API", cat: "Payment APIs", value: "sendgrid/7.1.0;python" },

  // ═══════════════════════════════════════════════════════════════
  //  DATABASE CLIENTS
  // ═══════════════════════════════════════════════════════════════
  { label: "MongoDB Compass", cat: "Database Clients", value: "MongoDB Compass/1.44.4 (Electron 32.0.0; Node.js 20.16.0)" },
  { label: "MongoDB Shell (mongosh)", cat: "Database Clients", value: "mongosh/2.2.15 (node 20.16.0; linux x86_64)" },
  { label: "MongoDB Driver (Python)", cat: "Database Clients", value: "PyMongo/4.8.0 Python/3.12.4 Linux/6.8.0" },
  { label: "MongoDB Driver (Node)", cat: "Database Clients", value: "nodejs|mongodb/6.8.0|Node.js v20.16.0|Linux" },
  { label: "pgAdmin 4", cat: "Database Clients", value: "pgAdmin/8.10 (Electron; Linux x86_64)" },
  { label: "DBeaver 24", cat: "Database Clients", value: "DBeaver/24.2.0 (Java 21.0.2; Linux 6.8.0; amd64)" },
  { label: "Redis Insight", cat: "Database Clients", value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) RedisInsight/2.56.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Supabase CLI", cat: "Database Clients", value: "supabase-cli/1.191.3 (linux/amd64)" },
  { label: "Firebase Admin SDK", cat: "Database Clients", value: "Firebase/Admin/12.4.0/Node.js" },
  { label: "Prisma Client", cat: "Database Clients", value: "prisma/5.19.0 (node v20.16.0; linux x64)" },

  // ═══════════════════════════════════════════════════════════════
  //  API PLATFORMS / GATEWAYS
  // ═══════════════════════════════════════════════════════════════
  { label: "Postman Desktop", cat: "API Tools", value: "PostmanRuntime/7.42.0" },
  { label: "Postman Desktop (Electron)", cat: "API Tools", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Postman/11.16.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Insomnia 9", cat: "API Tools", value: "insomnia/9.3.2" },
  { label: "Hoppscotch", cat: "API Tools", value: "Hoppscotch/2024.8.0" },
  { label: "Bruno API Client", cat: "API Tools", value: "Bruno/1.24.0 (Electron; Linux x86_64)" },
  { label: "Paw (RapidAPI)", cat: "API Tools", value: "Paw/3.4.2 (Macintosh; OS X/14.5.0) GCDHTTPRequest" },
  { label: "Swagger Codegen", cat: "API Tools", value: "swagger-codegen/3.0.0 java/21.0.2" },
  { label: "OpenAPI Generator", cat: "API Tools", value: "openapi-generator/7.8.0 java/21.0.2" },

  // ═══════════════════════════════════════════════════════════════
  //  PACKAGE MANAGERS
  // ═══════════════════════════════════════════════════════════════
  { label: "npm 10.8", cat: "Package Managers", value: "npm/10.8.2 node/v20.16.0 linux x64 workspaces/false" },
  { label: "yarn 4.4", cat: "Package Managers", value: "yarn/4.4.0 npm/? node/v20.16.0 linux x64" },
  { label: "pnpm 9.8", cat: "Package Managers", value: "pnpm/9.8.0 npm/? node/v20.16.0 linux x64" },
  { label: "pip 24.2", cat: "Package Managers", value: "pip/24.2 CPython/3.12.4 Linux/6.8.0" },
  { label: "pip - macOS", cat: "Package Managers", value: "pip/24.2 CPython/3.12.4 macOS/14.5" },
  { label: "Cargo (Rust)", cat: "Package Managers", value: "cargo/1.80.0 (4657855b7 2024-07-23)" },
  { label: "Go Modules", cat: "Package Managers", value: "Go-http-client/2.0 GOARCH/amd64 GOOS/linux" },
  { label: "Composer (PHP)", cat: "Package Managers", value: "Composer/2.7.7 (PHP 8.3.10; Linux 6.8.0 x86_64)" },
  { label: "Maven 3.9", cat: "Package Managers", value: "Apache-Maven/3.9.9 (Java 21.0.2; Linux 6.8.0)" },
  { label: "Gradle 8.10", cat: "Package Managers", value: "Gradle/8.10 (Linux;6.8.0;amd64) (Oracle;21.0.2)" },
  { label: "NuGet 6.11", cat: "Package Managers", value: "NuGet Command Line/6.11.0 (Microsoft Windows NT 10.0.22631.0)" },
  { label: "CocoaPods 1.15", cat: "Package Managers", value: "CocoaPods/1.15.2 cocoapods-core/1.15.2 Ruby/3.3.4 (x86_64-linux)" },
  { label: "Homebrew 4.3", cat: "Package Managers", value: "Homebrew/4.3.15 (Macintosh; arm64 Mac OS X 14.5) curl/8.7.1" },
  { label: "apt (Debian/Ubuntu)", cat: "Package Managers", value: "Debian APT-HTTP/1.3 (2.7.14) non-interactive" },
  { label: "dnf (Fedora/RHEL)", cat: "Package Managers", value: "libdnf (Fedora Linux 40; server; Linux.x86_64)" },
  { label: "Snap Store", cat: "Package Managers", value: "snapd/2.63 (series 16; ubuntu 24.04; amd64)" },
  { label: "Flatpak", cat: "Package Managers", value: "Flatpak/1.14.8" },

  // ═══════════════════════════════════════════════════════════════
  //  GIT CLIENTS
  // ═══════════════════════════════════════════════════════════════
  { label: "Git 2.46 - Linux", cat: "Git Clients", value: "git/2.46.0 (linux)" },
  { label: "Git 2.46 - macOS", cat: "Git Clients", value: "git/2.46.0 (macOS)" },
  { label: "Git 2.46 - Windows", cat: "Git Clients", value: "git/2.46.0.windows.1" },
  { label: "GitHub Desktop", cat: "Git Clients", value: "GitHub Desktop/3.4.3 (Windows NT 10.0; x64; Electron 32.0.0; git 2.46.0)" },
  { label: "GitKraken 10", cat: "Git Clients", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) GitKraken/10.3.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Tower (Git client)", cat: "Git Clients", value: "Tower/11.0 (macOS; aarch64) git/2.46.0" },
  { label: "Sourcetree", cat: "Git Clients", value: "Sourcetree/4.2.7 (Windows; amd64; git 2.46.0)" },
  { label: "GitLab CLI (glab)", cat: "Git Clients", value: "glab/1.46.0 (linux; amd64)" },

  // ═══════════════════════════════════════════════════════════════
  //  COMMUNICATION APPS (more)
  // ═══════════════════════════════════════════════════════════════
  { label: "Slack Desktop - Windows", cat: "Communication", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Slack/4.39.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Slack Desktop - macOS", cat: "Communication", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Slack/4.39.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Slack API Bot", cat: "Communication", value: "Slackbot 1.0 (+https://api.slack.com/robots)" },
  { label: "Discord Desktop", cat: "Communication", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.311 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Discord Bot (discord.js)", cat: "Communication", value: "DiscordBot (https://discord.js.org, 14.16.1) Node.js/20.16.0" },
  { label: "Discord Bot (discord.py)", cat: "Communication", value: "DiscordBot (https://github.com/Rapptz/discord.py 2.4.0) Python/3.12.4 aiohttp/3.9.5" },
  { label: "Zoom Desktop", cat: "Communication", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.5304.110 ZoomWebKit/537.36 Safari/537.36" },
  { label: "Telegram Bot API", cat: "Communication", value: "python-telegram-bot/21.5 Python/3.12.4 (Linux 6.8.0)" },
  { label: "WhatsApp Business API", cat: "Communication", value: "WhatsApp/2.24.6.78 A" },
  { label: "Matrix Synapse", cat: "Communication", value: "Synapse/1.114.0" },
  { label: "Mattermost Desktop", cat: "Communication", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Mattermost/5.9.0 Chrome/128.0.0.0 Electron/32.0.0 Safari/537.36" },
  { label: "Webex Desktop", cat: "Communication", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) WebexTeams/44.8.0.30200 Chrome/120.0.0.0 Electron/28.0.0 Safari/537.36" },

  // ═══════════════════════════════════════════════════════════════
  //  OBSERVABILITY / LOGGING
  // ═══════════════════════════════════════════════════════════════
  { label: "Datadog Agent 7.56", cat: "Observability", value: "datadog-agent/7.56.0 (linux; amd64)" },
  { label: "Grafana 11", cat: "Observability", value: "Grafana/11.1.4 (linux; amd64; go1.22.5)" },
  { label: "Prometheus 2.54", cat: "Observability", value: "Prometheus/2.54.0" },
  { label: "Elasticsearch 8.15", cat: "Observability", value: "elasticsearch-py/8.15.0 (Python/3.12.4; elastic-transport-python/8.13.1)" },
  { label: "Kibana 8.15", cat: "Observability", value: "Kibana/8.15.0 (linux; amd64; go1.22.5)" },
  { label: "Logstash 8.15", cat: "Observability", value: "logstash/8.15.0 (linux; x86_64; java 21.0.2)" },
  { label: "Fluentd 1.17", cat: "Observability", value: "Fluentd/1.17.0 (ruby 3.3.4; x86_64-linux)" },
  { label: "OpenTelemetry Collector", cat: "Observability", value: "otelcol-contrib/0.108.0 (linux/amd64)" },
  { label: "New Relic Agent (Python)", cat: "Observability", value: "NewRelic-PythonAgent/9.12.0 (Python 3.12.4; Linux 6.8.0)" },
  { label: "Sentry SDK (Python)", cat: "Observability", value: "sentry.python/2.13.0 Python/3.12.4" },
  { label: "Sentry SDK (Node)", cat: "Observability", value: "sentry.javascript.node/8.28.0" },
  { label: "PagerDuty Webhook", cat: "Observability", value: "PagerDuty-Webhook/3.0 (+https://developer.pagerduty.com)" },
  { label: "OpsGenie Webhook", cat: "Observability", value: "OpsGenie-Http/1.0" },
];
