# unit23.xyz

Static company site for **UNIT23 LIMITED**, hosted on **Cloudflare Pages**.

- Site: [https://unit23.xyz](https://unit23.xyz)
- AI product: [https://ai.unit23.xyz](https://ai.unit23.xyz)

## Stack

- Pure static HTML / CSS (no build step)
- Deployed via Git → Cloudflare Pages (free)

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx --yes serve .
# or: python3 -m http.server 8080
```

## Deploy with Cloudflare Pages (Git)

### 1. Push this repo to GitHub

Already done if you use the GitHub remote on this project. Otherwise:

```bash
git remote add origin https://github.com/<you>/website-unit23.xyz.git
git push -u origin main
```

### 2. Create a Pages project

1. Open [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages**
2. **Create** → **Pages** → **Connect to Git**
3. Authorize GitHub and select this repository
4. Build settings:

   | Field | Value |
   |-------|--------|
   | Production branch | `main` |
   | Framework preset | **None** |
   | Build command | *(leave empty)* |
   | Build output directory | `/` |

5. **Save and Deploy**

You will get a temporary URL like `https://website-unit23-xyz.pages.dev`.

### 3. Attach custom domain `unit23.xyz`

1. Open the Pages project → **Custom domains** → **Set up a domain**
2. Add `unit23.xyz` (and optionally `www.unit23.xyz`)
3. Because the zone is already on Cloudflare **in the same account**, DNS records are created automatically
4. Wait for SSL to become **Active**

Optional: add a Redirect Rule so `www` → apex (or the reverse).

### 4. Ongoing updates

```bash
git add -A
git commit -m "Update site copy"
git push origin main
```

Cloudflare rebuilds and deploys production on every push to `main`. Pull requests get preview URLs automatically.

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
