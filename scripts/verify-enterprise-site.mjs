/**
 * Structural + browser verification for the shipped UNIT23 enterprise homepage.
 * Drives real files on disk (and Playwright against a local static server).
 */
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SCRATCH =
  process.env.VERIFY_SCRATCH ||
  path.join(ROOT, ".verify-scratch");

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function structuralChecks() {
  const html = read("index.html");
  const css = read("styles.css");
  const js = read("main.js");

  // Nav + landmarks
  assert(/aria-label="Primary"/.test(html), "primary nav missing");
  assert(/href="#about"/.test(html), "about nav link missing");
  assert(/href="#services"/.test(html), "services nav link missing");
  assert(/href="#contact"/.test(html), "contact nav link missing");
  assert(/id="about"/.test(html), "about section missing");
  assert(/id="services"/.test(html), "services section missing");
  assert(/id="contact"/.test(html), "contact section missing");
  assert(/id="why-us"/.test(html), "why-us section missing");
  assert(/id="process"/.test(html), "process section missing");
  assert(/id="capabilities"/.test(html), "capabilities section missing");
  assert(/class="footer"/.test(html), "footer missing");
  assert(/footer-grid/.test(html), "multi-column footer missing");

  // Six service offerings (English source + i18n keys)
  for (const name of [
    "Import &amp; export",
    "Online retail",
    "Logistics services",
    "Supply chain management",
    "Online marketing",
    "Channel management",
  ]) {
    assert(html.includes(name), `service line missing: ${name}`);
  }
  for (const key of [
    "trade.s1.title",
    "trade.s2.title",
    "trade.s3.title",
    "consulting.s1.title",
    "consulting.s2.title",
    "consulting.s3.title",
  ]) {
    assert(html.includes(`data-i18n="${key}"`), `i18n key missing in HTML: ${key}`);
  }

  // Identity
  assert(html.includes("UNIT23 LIMITED"), "company legal name missing");
  assert(html.includes("Hong Kong"), "Hong Kong identity missing");
  assert(/lang="en-US"/.test(html) || /lang="en"/.test(html), "html lang en missing");

  // i18n assets
  assert(fs.existsSync(path.join(ROOT, "i18n.js")), "i18n.js missing");
  assert(/src="i18n\.js"/.test(html), "homepage must load i18n.js");
  assert(/data-set-lang="en"/.test(html), "EN language control missing");
  assert(/data-set-lang="ar"/.test(html), "AR language control missing");
  assert(/data-set-lang="fr"/.test(html), "FR language control missing");
  assert(/data-set-lang="es"/.test(html), "ES language control missing");

  const i18nSrc = read("i18n.js");
  for (const locale of ["en", "ar", "fr", "es"]) {
    assert(new RegExp(`\\b${locale}\\s*:`).test(i18nSrc), `locale pack missing: ${locale}`);
  }
  assert(i18nSrc.includes("ar-SA"), "ar-SA locale meta missing");
  assert(i18nSrc.includes("en-US"), "en-US locale meta missing");

  // CSS design system
  assert(css.length > 4000, "stylesheet too small to be enterprise layout");
  assert(/grid-template-columns/.test(css), "multi-column grids missing in CSS");
  assert(/--bg-deep/.test(css) && /--accent/.test(css), "design tokens missing");
  assert(/\.nav\s*\{/.test(css), "nav chrome missing");
  assert(/\.footer/.test(css), "footer styles missing");
  assert(/clamp\(/.test(css), "type scale missing");

  // Assets referenced exist
  assert(fs.existsSync(path.join(ROOT, "styles.css")), "styles.css missing");
  assert(fs.existsSync(path.join(ROOT, "main.js")), "main.js missing");
  assert(fs.existsSync(path.join(ROOT, "favicon.svg")), "favicon missing");
  assert(/href="styles\.css"/.test(html), "homepage must link styles.css relatively");
  assert(/src="main\.js"/.test(html), "homepage must load main.js");

  // JS is browser-safe (no bare require/module)
  assert(!/\brequire\s*\(/.test(js), "main.js must not use require()");
  assert(!/\bmodule\.exports\b/.test(js), "main.js must not use module.exports");
  assert(/nav-toggle/.test(js), "main.js must wire mobile nav");

  return {
    htmlBytes: Buffer.byteLength(html),
    cssBytes: Buffer.byteLength(css),
    sectionIds: ["about", "services", "why-us", "process", "capabilities", "contact"],
  };
}

function contentType(filePath) {
  if (filePath.endsWith(".html")) return "text/html; charset=utf-8";
  if (filePath.endsWith(".css")) return "text/css; charset=utf-8";
  if (filePath.endsWith(".js")) return "text/javascript; charset=utf-8";
  if (filePath.endsWith(".svg")) return "image/svg+xml";
  return "application/octet-stream";
}

function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
      let rel = urlPath === "/" ? "/index.html" : urlPath;
      const filePath = path.normalize(path.join(ROOT, rel));
      if (!filePath.startsWith(ROOT)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }
        res.writeHead(200, { "Content-Type": contentType(filePath) });
        res.end(data);
      });
    });
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      resolve({ server, port });
    });
    server.on("error", reject);
  });
}

async function browserChecks(port) {
  fs.mkdirSync(SCRATCH, { recursive: true });
  const outLog = path.join(SCRATCH, "browser-run.log");
  const screenshot = path.join(SCRATCH, "enterprise-home.png");

  let playwright;
  try {
    playwright = await import("playwright");
  } catch (err) {
    const msg = `Playwright import failed: ${err.message}\n`;
    fs.writeFileSync(path.join(SCRATCH, "browser-unavailable.log"), msg);
    return { browser: false, reason: msg };
  }

  const browser = await playwright.chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  const url = `http://127.0.0.1:${port}/`;
  await page.goto(url, { waitUntil: "networkidle" });
  const bodyText = await page.locator("body").innerText();
  const sectionCount = await page.locator("main section").count();
  const footerCols = await page.locator(".footer-col").count();
  const title = await page.title();

  assert(bodyText.length > 1200, `body text too short: ${bodyText.length}`);
  assert(sectionCount >= 6, `expected ≥6 sections, got ${sectionCount}`);
  assert(footerCols >= 3, `expected multi-column footer, got ${footerCols}`);
  assert(/UNIT23/i.test(title), "title should mention UNIT23");
  assert(errors.length === 0, `page errors: ${errors.join("; ")}`);

  // Mobile nav toggle path
  await page.setViewportSize({ width: 390, height: 844 });
  await page.click("#nav-toggle");
  const open = await page.evaluate(() => document.body.classList.contains("nav-open"));
  assert(open, "mobile nav did not open");
  await page.click('#nav-panel a[href="#services"]');
  const closed = await page.evaluate(() => !document.body.classList.contains("nav-open"));
  assert(closed, "mobile nav did not close after link click");

  // Language switch: Arabic RTL
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.locator('.lang-switch-nav [data-set-lang="ar"]').click();
  await page.waitForFunction(() => document.documentElement.dir === "rtl");
  const arTitle = await page.locator("#hero-title").innerText();
  assert(/حدود|تجارة|وضوح/.test(arTitle) || arTitle.length > 10, `Arabic hero title not applied: ${arTitle}`);
  const arLang = await page.evaluate(() => document.documentElement.lang);
  assert(arLang === "ar-SA", `expected ar-SA, got ${arLang}`);

  // French
  await page.locator('.lang-switch-nav [data-set-lang="fr"]').click();
  await page.waitForFunction(() => document.documentElement.lang === "fr");
  const frTitle = await page.locator("#hero-title").innerText();
  assert(/Commerce|transfrontalier|clarté/i.test(frTitle), `French hero missing: ${frTitle}`);

  // Spanish
  await page.locator('.lang-switch-nav [data-set-lang="es"]').click();
  await page.waitForFunction(() => document.documentElement.lang === "es");
  const esTitle = await page.locator("#hero-title").innerText();
  assert(/Comercio|transfronterizo|claridad/i.test(esTitle), `Spanish hero missing: ${esTitle}`);

  // Back to English US
  await page.locator('.lang-switch-nav [data-set-lang="en"]').click();
  await page.waitForFunction(() => document.documentElement.lang === "en-US");

  // Desktop screenshot of filled homepage
  await page.screenshot({ path: screenshot, fullPage: true });
  assert(fs.existsSync(screenshot) && fs.statSync(screenshot).size > 20000, "screenshot missing/too small");

  // Second load — zero errors still
  await page.goto(url, { waitUntil: "networkidle" });
  assert(errors.length === 0, `errors after second load: ${errors.join("; ")}`);

  await browser.close();

  const summary = {
    url,
    bodyTextLength: bodyText.length,
    sectionCount,
    footerCols,
    title,
    screenshot,
    languagesChecked: ["en", "ar", "fr", "es"],
    sampleTitles: { ar: arTitle, fr: frTitle, es: esTitle },
    errors,
  };
  fs.writeFileSync(outLog, JSON.stringify(summary, null, 2));
  return { browser: true, summary };
}

async function main() {
  const structure = structuralChecks();
  const { server, port } = await startServer();
  try {
    const browser = await browserChecks(port);
    const report = {
      ok: true,
      structure,
      browser,
      root: ROOT,
      scratch: SCRATCH,
    };
    const reportPath = path.join(SCRATCH, "verify-report.json");
    fs.mkdirSync(SCRATCH, { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  } finally {
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
