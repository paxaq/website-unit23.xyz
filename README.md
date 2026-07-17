# unit23.xyz

Static company site for **UNIT23 LIMITED** (Hong Kong) — cross-border trade and information consulting. Hosted on **Cloudflare Pages**.

- Site: [https://unit23.xyz](https://unit23.xyz)

## Stack

- Pure static HTML / CSS (no build step)
- Deployed via Git → Cloudflare Pages (free)

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx --yes serve .
# or: python3 -m http.server 8080
```

## Status (CLI)

| Item | Value |
|------|--------|
| Pages project | `unit23-xyz` |
| Live preview | https://unit23-xyz.pages.dev |
| Custom domains | `unit23.xyz`, `www.unit23.xyz` (pending until CNAME exists) |
| Account ID | `01d3023b107051484e9bfb9b2efbd459` |
| Zone ID | `877217d9b95c0aef88da94fff4157787` |

### Deploy from this machine

```bash
# uses wrangler OAuth login (already used once)
npx wrangler pages deploy . --project-name=unit23-xyz --branch=main
# or
npm run deploy
```

### Deploy from GitHub (push to `main`)

1. Create a Cloudflare API Token: [API Tokens](https://dash.cloudflare.com/profile/api-tokens)
   - Permissions: **Account → Cloudflare Pages → Edit**, **Zone → DNS → Edit** (zone `unit23.xyz`)
2. Add GitHub secrets on the repo:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID` = `01d3023b107051484e9bfb9b2efbd459`
3. Push to `main` (workflow: `.github/workflows/deploy.yml`)

### Bind custom domain DNS (one-time)

Wrangler OAuth only has **Zone read**, so DNS must use an API token:

```bash
export CLOUDFLARE_API_TOKEN='…'   # Zone.DNS Edit on unit23.xyz
./scripts/setup-dns.sh
```

This creates proxied CNAMEs:

- `unit23.xyz` → `unit23-xyz.pages.dev`
- `www.unit23.xyz` → `unit23-xyz.pages.dev`

SSL on the custom domains usually becomes active within a few minutes.

## Project layout

```
.
├── index.html      # Homepage
├── styles.css
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── _headers        # Cloudflare Pages security / cache headers
└── README.md
```

## Contact

hello@unit23.xyz
