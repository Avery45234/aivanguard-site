// Tell search engines that pages on aivanguard.org are new or changed.
//
// IndexNow is an open protocol: one request notifies Bing, Yandex, Naver,
// Seznam, and the other participating engines. Bing's index is also what
// Copilot and ChatGPT search read. Google does not take part; for Google,
// use "Request indexing" in Search Console.
//
// Run after a deploy:
//   node scripts/indexnow.mjs            (every URL in the live sitemap)
//   node scripts/indexnow.mjs /competition /highlights
//
// The key is public by design. It is served at /<key>.txt so the engines
// can confirm the request came from the site's owner.

const HOST = "aivanguard.org";
const KEY = "495b85c15bd7819576b5de649d455729";
const BASE = `https://${HOST}`;

async function sitemapUrls() {
  const xml = await (await fetch(`${BASE}/sitemap.xml`, { cache: "no-store" })).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const args = process.argv.slice(2);
const urlList = args.length
  ? args.map((p) => (p.startsWith("http") ? p : `${BASE}${p.startsWith("/") ? p : `/${p}`}`))
  : await sitemapUrls();

// The key file must be live before the engines will accept the request.
const keyCheck = await fetch(`${BASE}/${KEY}.txt`, { cache: "no-store" });
const keyBody = keyCheck.ok ? (await keyCheck.text()).trim() : "";
if (keyBody !== KEY) {
  console.error(`Key file not live yet at ${BASE}/${KEY}.txt (status ${keyCheck.status}). Deploy first.`);
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${BASE}/${KEY}.txt`, urlList }),
});

console.log(`Submitted ${urlList.length} URLs to IndexNow: HTTP ${res.status} ${res.statusText}`);
for (const u of urlList) console.log("  " + u);
if (![200, 202].includes(res.status)) {
  console.error(await res.text());
  process.exit(1);
}
