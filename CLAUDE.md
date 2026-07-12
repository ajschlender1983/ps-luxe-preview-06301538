# CLAUDE.md — Working with the Celestial Atelier build

This package is the complete **Psychic Source "Celestial Atelier"** redesign — a static, self-contained luxury website plus the design system that makes it. Point Claude Code at this folder and it can extend the site on-brand.

## Start here
1. Read the brand skill: **`.claude/skills/celestial-atelier/SKILL.md`** — it's the source of truth for palette, type, the shared shell, motion, and voice. Load it before styling or building anything.
2. Read `assets/BUILD.md` for the concept and the full asset manifest.
3. Prompts behind every generated image: `prompts/image-prompts.md`.

## What's here
- **Pages** — `index.html`, `advisors.html`, and 15 interior pages (how-it-works, readings, love, tarot, mediumship, horoscopes, reviews, manifesto, guarantee, ethics, become-a-psychic, contact, faqs, rewards, privacy).
- **`assets/`** — everything: `site.css` (tokens + components), `site.js` (injected chrome + motion), `review-data.js`, and 150+ generated images across 11 collections.
- **`.claude/skills/celestial-atelier/`** — the reusable brand skill.
- **`prompts/`** — the image-generation prompt library.

## How it's architected
Interior pages are thin: they link `assets/site.css` + `assets/site.js`, and `site.js` **injects** the header, cosmos background, mobile menu, footer, and floating CTA. Compose pages from the section primitives listed in the skill.

Important: `site.js` builds DOM via `document.createRange().createContextualFragment(...)`, not `innerHTML` — a security hook blocks `innerHTML` assignment. Follow that pattern in any new script.

## Running it
It's plain static files. From this folder:
```
python3 -m http.server 8000
```
then open <http://localhost:8000/index.html>. No build step, no dependencies. (The home page pulls three CDN libs — Lenis, GSAP, SplitType — for smooth scroll and headline motion; self-host these for production.)

## House rules for edits
- Colors from `site.css` tokens only. Gold is an accent, not a fill.
- Cormorant Garamond for display, Jost for body.
- Every animation needs a `prefers-reduced-motion` fallback.
- Voice: second person, no em dashes, no "not X, Y". Primary CTA is "Get Your Reading."
- Give any new page its own unique hero image; don't reuse another page's art.

## Included with your purchase
- **Deployment support** — we get this live on your host.
- **8 hours of design revision time** — tune it to your brand.
- **This brand skill** — so you (and Claude) keep building on-brand.

*Prototype — a design system and conversion study, not affiliated with the live site's production systems.*
