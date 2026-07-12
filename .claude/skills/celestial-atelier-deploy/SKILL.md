---
name: celestial-atelier-deploy
description: Deploy or integrate the Celestial Atelier static build into existing hosting safely. Use when someone wants to host this Psychic Source build, integrate it into their own web server / CDN / subdomain / subpath, self-host its motion libraries, satisfy a Content-Security-Policy, run the pre-flight, or roll it back. Static site, no backend, cannot touch production systems.
---

# Deploying the Celestial Atelier build

This build is a **portable static site**: HTML, CSS, JS, and images. No server runtime, no build step, no database, no framework. It makes **no calls to any production system** (CRM, billing, psychic routing, accounts) and writes no data, so it cannot break an existing stack. See `DEPLOY.md` for the full human-facing guide; this skill is the operational checklist.

## The only required edit: self-host the motion libraries
Only `index.html` loads 3 libraries from CDNs (Lenis, GSAP + ScrollTrigger, SplitType). Every other page is self-contained, and the home page degrades to a clean static layout if they are blocked. For a production deploy on the client's own infrastructure, self-host them:

1. Download into `assets/vendor/`:
   - `lenis.min.js` ← https://cdn.jsdelivr.net/npm/lenis@1.1.18/dist/lenis.min.js
   - `gsap.min.js` ← https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js
   - `ScrollTrigger.min.js` ← https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js
   - `split-type.min.js` ← https://cdn.jsdelivr.net/npm/split-type@0.3.4/umd/index.min.js
2. Repoint the four `<script src="https://…">` tags near the bottom of `index.html` to `assets/vendor/…`.

## Serving it (all paths are relative — no find-and-replace needed)
Works unchanged from any of: the client's own web server (Apache/Nginx/IIS), a **subdomain** (`atelier.psychicsource.com`), a **subpath** (`/atelier/`), behind their **CDN** (cache `assets/` long, `*.html` short), or object storage + CDN (S3+CloudFront). Entry page is `index.html`.

## Content-Security-Policy
Pages contain inline `<script>`/`<style>`. Under a strict CSP: either allow `'unsafe-inline'` for `script-src`/`style-src` (and, before self-hosting, `cdn.jsdelivr.net` + `cdnjs.cloudflare.com` in `script-src`), or self-host the libraries and add nonces/hashes to the inline blocks. Offer the nonce/hash refactor as part of deployment support.

## Rollout
Stage to a subdomain/subpath first → run pre-flight → add analytics if wanted → remove `noindex` on pages to be indexed (all 27 pages ship `noindex` by default) → cut over via DNS/path. Rollback = swap back the previous folder (instant).

## Pre-flight checklist
- [ ] Every page loads and the nav clicks through
- [ ] No console errors; images 200
- [ ] Motion runs; page still works under prefers-reduced-motion
- [ ] Mobile + tablet verified
- [ ] Motion libraries self-hosted (no external requests in Network)
- [ ] `noindex` kept on private pages, removed on public ones
- [ ] Analytics/consent tooling added if desired

## What it will NOT do
Touch the database, CRM, payment, or psychic-routing systems. It is a marketing/brand front-end.
