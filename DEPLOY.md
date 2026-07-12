# Deploying the Celestial Atelier build

This is a **portable static site** — plain HTML, CSS, JS, and image files. There is no server runtime, no build step, no database, and no framework to install. You serve the folder from any web server and it runs.

**It cannot break your production systems.** It makes no calls to your CRM, billing, psychic-routing, or account systems. Nothing here writes data anywhere. Treat it as a self-contained brand front-end you can stand up beside your live site and cut over when you are ready.

---

## The one step that matters: self-host the motion libraries

Only the **home page** (`index.html`) loads three motion libraries from public CDNs. Every other page is fully self-contained. If a CDN is blocked by your network or CSP, the home-page motion simply degrades to a clean static page (there is a built-in fallback), but for a production deploy on your own infrastructure you should self-host them so the build depends on nothing external.

Download these four files into `assets/vendor/`:

| Save as | From |
|---|---|
| `assets/vendor/lenis.min.js` | https://cdn.jsdelivr.net/npm/lenis@1.1.18/dist/lenis.min.js |
| `assets/vendor/gsap.min.js` | https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js |
| `assets/vendor/ScrollTrigger.min.js` | https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js |
| `assets/vendor/split-type.min.js` | https://cdn.jsdelivr.net/npm/split-type@0.3.4/umd/index.min.js |

Then in `index.html`, repoint the four `<script src="https://…">` tags near the bottom to the local copies (e.g. `<script src="assets/vendor/lenis.min.js"></script>`). That is the only edit required for a fully self-contained deploy.

---

## Serving it from your existing hosting

Because every link and asset path is **relative** (`assets/…`, `how-it-works.html`), the bundle runs unchanged from any of these without find-and-replace:

- **Your own web server** (Apache, Nginx, IIS, or any static file server) — copy the folder into a docroot or virtual host. No server config beyond serving static files. `index.html` is the entry page.
- **A subdomain** — e.g. `atelier.psychicsource.com` pointing at the folder. Nothing to change.
- **A subpath on your main site** — e.g. `https://psychicsource.com/atelier/`. Relative paths resolve correctly under the subpath with no edits.
- **Behind your existing CDN** — put the folder on origin and let your CDN cache it. Suggested cache rules: long-lived (`immutable`) for `assets/`, short or no-cache for `*.html` so copy updates appear immediately.
- **Object storage + CDN** (S3 + CloudFront, GCS, Azure Blob) — upload the folder, set `index.html` as the index document.
- **Reverse proxy** — proxy a path to a container/host serving the folder; it is just static files.

### If you enforce a Content-Security-Policy
The pages use some **inline `<script>` and `<style>`** blocks (this is a prototype, not yet refactored to external files). Under a strict CSP you have two options:
1. Allow `'unsafe-inline'` for `script-src` and `style-src` (simplest for a staging/preview), and — until you self-host — allow `cdn.jsdelivr.net` and `cdnjs.cloudflare.com` in `script-src`.
2. For a locked-down production CSP, self-host the four libraries (above) and add per-block **nonces or hashes** to the inline scripts/styles. Happy to do this refactor as part of the included deployment support.

---

## Recommended rollout

1. **Stage it.** Deploy to a subdomain or `/atelier/` path first, not over your live home page.
2. **Run the pre-flight** (below).
3. **Add analytics / pixels** if you want them — none are included, by design.
4. **Decide on indexing.** Every page currently ships with `<meta name="robots" content="noindex">` so it stays private while you review. Remove that tag on the pages you want search engines to see when you go live.
5. **Cut over** by pointing DNS or the path at the reviewed folder. **Rollback** is instant: keep the previous folder and swap back.

### Pre-flight checklist
- [ ] Every page loads (open `index.html` and click through the nav)
- [ ] No console errors; all images return 200
- [ ] Motion runs, and the page still works with "reduce motion" enabled
- [ ] Mobile and tablet widths look right
- [ ] The four motion libraries are self-hosted (no external requests in the Network tab)
- [ ] `noindex` removed on the pages you want indexed (kept on private ones)
- [ ] Your analytics/consent tooling added if desired

---

## Quick managed-hosting options (if you ever want them)
Drag the folder onto **Netlify** or **Cloudflare Pages**, or `vercel deploy`, or push to a **GitHub Pages** repo. All work with zero config because the build is static. Your own hosting is the recommended path for an established site.

*Prototype — a design system and conversion study, not affiliated with the live site's production systems.*
