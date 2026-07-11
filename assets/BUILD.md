# Psychic Source — The Celestial Atelier Redesign

**A luxury reimagining of psychicsource.com, built conversationally in one session, then pressure-tested by an AI-native review board.**

This document is the build story and the asset manifest — what was made, why each piece exists, and how it all fits together.

---

## The concept

**Celestial Atelier** — a heritage luxury house, not a transactional psychic directory.

- **Palette:** deep violet-indigo cosmos, champagne gold, cream
- **Type:** Cormorant Garamond (serif) + Jost (sans)
- **Idea:** everything emerges from a single point of source-light
- **Signature marks:** a four-point compass-star logo, animated cosmic backgrounds, per-page cinematic heroes, a bespoke Art Nouveau × ink tarot deck, and a breathing "source seal" guarantee medallion

The whole site was built on a shared shell — `assets/site.css` for tokens and components, `assets/site.js` to inject the cosmos, header, footer, and motion — so 17 pages stay perfectly consistent.

---

## How it was built

1. **Concept** — reframe the brand as a luxury house; lock palette, type, and the source-light idea.
2. **Home** — a living home page: compass-star logo, drifting cosmic glows, twinkling stars, a cinematic hero, and a floating $1/min CTA.
3. **A/B compare** — an original-vs-redesign toggle with synced-scroll split view, so every change is judged against the live site.
4. **190 psychics** — 215 real psychic photos scraped and studio-graded locally (no generative API) into a unified luxury listing.
5. **The tarot deck** — a style workshop chose "Regal & Crowned" Art Nouveau × ink; a cohesive set was generated (The Seeker, The Oracle, The Insight) plus six spread cards and a star-backed card back.
6. **Build-out** — fifteen interior pages, interlinked, each with its own cinematic hero.
7. **Motion** — parallax and animated interstitial "page-breaks" throughout; motion as storytelling, not decoration.
8. **Set-pieces** — a Tarot hero of double-sided cards spinning through space; a Horoscopes sky of ~1,500 twinkling stars behind a floating gold quill; a concentric breathing guarantee seal.
9. **Conversion** — a CRO copy pass: primary CTA standardized to "Get Your Reading," reassurance microcopy, a benefit-led home headline, cleaned-up terminology — reviewed decision by decision.
10. **The review board** — an AI-native panel and ten researched customer agents pressure-test the result, all narrated in this command center.

---

## The review board

- **Expert panel** — a world-class luxury brand & visual-design expert (8.3/10) and an AI-native conversion strategist (8/10), each with cited, verified sources.
- **Agentic market research** — ten autonomous agents, each embodying a market-researched ICP (love, grief, career, skeptics, practitioners, budget, availability, gifting, loyalty), dispatched in parallel to browse the live redesign and react in character.
- **CTO assessment** — a pragmatic read on adopting this build to replace the live site: *Conditional Go / Reframe* — take the design system and conversion playbook, not the static shell.

---

## The asset library

Every image below was generated for this build (except the 190 studio-graded psychic photos, which were relit from real headshots). Aspect and count are noted so you know exactly what exists.

| Collection | Count | What it is |
|---|---|---|
| **Agent avatars** | 10 | Cinematic headshots of the ten research agents (this document's personas). |
| **Tarot deck** | 3 | The three-card arc — The Seeker, The Oracle, The Insight. |
| **Tarot spreads** | 6 | Three-Card, Celtic Cross, Relationship, Year Ahead, Yes/No, Decision. |
| **Card back** | 1 | The Psychic Source star, Art Nouveau × ink. |
| **Reader scene** | 6 | The final candlelit flat-lay plus the five compositions explored. |
| **Cosmic heroes** | 15 | A unique per-page hero backdrop — no two alike. |
| **Cinematic bands** | 12 | Ethereal mid-page interstitials. |
| **The magical quill** | 2 | The glowing gold quill behind the horoscopes headline. |
| **Angels & wings** | 2 | The winged figures and RISE wing textures. |
| **Home atmosphere** | 6 | The cosmos, light, and hands behind the home page. |

**Generation:** Google `gemini-2.5-flash-image`, prompted for the Celestial Atelier look and refined against reference frames for style consistency. Portraits were graded to a shared violet-indigo cosmic key so the whole set reads as one house.

---

## Using these assets

- All imagery is hosted live in this repository under `assets/`.
- The full source (every HTML/CSS/JS file + assets) is the download — clone or grab the repository zip.
- Colors, type, and motion tokens live in `assets/site.css`; the injected chrome lives in `assets/site.js`.

*Prototype — a design system and conversion study, not affiliated with the live site's production systems.*
