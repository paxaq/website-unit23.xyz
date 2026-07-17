# unit23.xyz

Official company website for **UNIT23 LIMITED** (Hong Kong).

| | |
|---|---|
| **Live site** | [https://unit23.xyz](https://unit23.xyz) · [https://www.unit23.xyz](https://www.unit23.xyz) |
| **Pages project** | `unit23-xyz` · [https://unit23-xyz.pages.dev](https://unit23-xyz.pages.dev) |
| **Repository** | [github.com/paxaq/website-unit23.xyz](https://github.com/paxaq/website-unit23.xyz) |
| **Contact** | [hello@unit23.xyz](mailto:hello@unit23.xyz) |

---

## Phase 1 status — complete

Phase 1 delivers a production static corporate site on Cloudflare Pages:

- Company positioning as a **Hong Kong trading firm**
- Full homepage sections (enterprise layout, not a stub landing page)
- **Four languages** with RTL for Arabic
- Custom domains `unit23.xyz` / `www.unit23.xyz` on Cloudflare Pages (free tier)
- Automated deploy path (Wrangler CLI + optional GitHub Actions)

### Positioning

- **Legal name:** UNIT23 LIMITED  
- **Location:** Hong Kong SAR  
- **Business pillars:**
  1. **Cross-border trade** — import & export, online retail, logistics services  
  2. **Information consulting** — supply chain management, online marketing, channel management  

### Homepage structure

| Section | Purpose |
|---------|---------|
| Top bar + sticky nav | Brand, language switcher, primary anchors, enquire CTA |
| Hero | Positioning + business-focus panel |
| About | Company narrative + profile card |
| Services | Two pillars × three service lines each (six total) |
| Why UNIT23 | Four value cards |
| How we work | Discover → Scope → Execute → Optimise |
| Capabilities | Six capability tiles |
| CTA band | Conversion strip |
| Contact | Direct contact + enquiry tips |
| Footer | Four-column enterprise footer |

### Languages

| Code | Locale | Direction | UI label |
|------|--------|-----------|----------|
| `en` | English (US) `en-US` | LTR | EN |
| `ar` | Arabic (Saudi) `ar-SA` | **RTL** | AR |
| `fr` | French `fr` | LTR | FR |
| `es` | Spanish `es` | LTR | ES |

- Switcher in the top bar (mobile) and main nav (desktop)
- Preference stored in `localStorage` (`unit23-lang`)
- Shareable URL: `https://unit23.xyz/?lang=ar` (also `en` / `fr` / `es`)
- Copy lives in `i18n.js`; proper names (UNIT23 LIMITED, emails, domain) stay stable across locales

---

## Stack

| Layer | Choice |
|-------|--------|
| Markup / style / behaviour | Static HTML + CSS + vanilla JS (**no build step**) |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com/) (Free) |
| CDN / DNS / SSL | Cloudflare zone `unit23.xyz` |
| Deploy | Wrangler `pages deploy`, or push to `main` (GitHub Actions) |
| Fonts | Source Sans 3, Source Serif 4, Noto Sans Arabic (Google Fonts) |

---

## Project layout

```
.
├── index.html                          # Homepage (data-i18n hooks)
├── styles.css                          # Design system + layout + RTL
├── i18n.js                             # Translations + language apply
├── main.js                             # Mobile nav
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── _headers                            # Security / cache headers (Pages)
├── package.json                        # deploy / verify scripts
├── .github/workflows/deploy.yml        # Deploy on push to main
├── scripts/
│   ├── setup-dns.sh                    # One-time CNAME setup (API token)
│   └── verify-enterprise-site.mjs      # Structural + Playwright checks
└── README.md
```

---

## Local development

```bash
# Preview (any static server)
npx --yes serve .
# or: python3 -m http.server 8080

# Open http://localhost:3000 (or the port shown)
# Language: use the EN/AR/FR/ES controls or ?lang=
```

No compile step. Edit HTML/CSS/JS and refresh.

---

## Deploy

### Cloudflare context

| Item | Value |
|------|--------|
| Account ID | `01d3023b107051484e9bfb9b2efbd459` |
| Zone ID (`unit23.xyz`) | `877217d9b95c0aef88da94fff4157787` |
| Pages project | `unit23-xyz` |
| Production branch | `main` |
| Build command | *(none)* |
| Output directory | `/` (project root) |

### Deploy from this machine

Requires [Wrangler](https://developers.cloudflare.com/workers/wrangler/) login (`npx wrangler login`).

```bash
npm run deploy
# equivalent:
# npx wrangler pages deploy . --project-name=unit23-xyz --branch=main
```

### Deploy from GitHub

Workflow: `.github/workflows/deploy.yml` (on push to `main`).

Repo secrets:

| Secret | Purpose |
|--------|---------|
| `CLOUDFLARE_API_TOKEN` | Pages deploy (and DNS if token allows) |
| `CLOUDFLARE_ACCOUNT_ID` | `01d3023b107051484e9bfb9b2efbd459` |

Token permissions (recommended): **Account → Cloudflare Pages → Edit**; for DNS helper also **Zone → DNS → Edit** on `unit23.xyz`.

### Custom domains (already set for Phase 1)

Proxied CNAMEs:

- `unit23.xyz` → `unit23-xyz.pages.dev`
- `www.unit23.xyz` → `unit23-xyz.pages.dev`

To recreate DNS (API token with Zone.DNS Edit):

```bash
export CLOUDFLARE_API_TOKEN='…'
./scripts/setup-dns.sh
```

---

## Verify

Structural checks + Playwright (desktop/mobile nav + language switch):

```bash
npm install
npx playwright install chromium   # once per machine
npm test
```

---

## Design notes (Phase 1)

- **Palette:** navy (`#0C2340`), warm paper background, bronze accent (`#B08D57`)
- **Tone:** formal B2B trade company; English source copy is the content baseline
- **Out of Phase 1:** CMS, blog, careers, contact form backend, client login, Chinese UI, real office address listing, e-commerce

---

## Contact

**UNIT23 LIMITED** · Hong Kong  
Email: [hello@unit23.xyz](mailto:hello@unit23.xyz)
