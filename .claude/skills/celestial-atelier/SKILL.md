---
name: celestial-atelier
description: The Psychic Source "Celestial Atelier" luxury design system. Use whenever building, styling, extending, or reviewing any page, component, email, or graphic for this Psychic Source redesign — or any surface that should match its cosmic violet + champagne-gold heritage-luxury look. Covers palette tokens, type, the shared shell (site.css / site.js), motion doctrine, voice, and the image-generation style.
---

# Celestial Atelier — Psychic Source Design System

A heritage **luxury house**, not a transactional psychic directory. Every surface holds one idea: **everything emerges from a single point of source-light.**

## When to use this skill
- Building a **new page** or component for this site → use the shared shell (below), never hand-roll chrome.
- **Styling** anything (buttons, cards, headings, backgrounds) → pull tokens from `assets/site.css`, don't invent colors.
- **Writing copy** → follow the Voice rules.
- **Generating imagery** → follow the Image style + reuse the prompt library in `prompts/image-prompts.md`.
- **Reviewing** a surface → check it against the checklist at the bottom.

## The core idea
Everything emerges from source. A single point of warm champagne-gold light in a deep violet-indigo cosmos, from which content, energy, and motion emanate. Backgrounds breathe. Light gathers at meaningful points (a fingertip, a seal, a headline). Nothing is flat or static, but nothing is loud.

## Palette (from `assets/site.css :root`)
```
--ink:      #140F38   /* deepest text / base */
--void:     #1C1550   /* cosmic base */
--void-2:   #2A1E66   /* lifted panel base */
--panel:    rgba(28,20,70,.42)   /* translucent panel so the cosmos shows through */
--gold:     #C9A86A   /* champagne gold — primary accent */
--gold-bright: #E8CF9A /* bright gold — highlights, active */
--gold-deep:   #9C7E48 /* deep gold — borders, shadow */
--ivory:    #F7F2E8   /* cream — body text on dark */
--moon:     #8FA6C4   /* moonlight blue — secondary */
--violet:   #8A57E0   /* nebula violet */
--indigo:   #3E6BEA   /* nebula indigo */
--magenta:  #B254DC   /* nebula magenta */
--muted:    rgba(247,242,232,.68)
--faint:    rgba(247,242,232,.16)
--hair:     rgba(201,168,106,.28)  /* gold hairline borders */
```
Gold is precious — use it for accents, hairlines, and the source-light, not fills. Panels are translucent so the animated cosmos reads through them.

## Type
- **Display / serif:** Cormorant Garamond (`--serif`) — headings, big numbers, editorial moments. Often 500–600 weight, generous size, tight leading.
- **Body / UI:** Jost (`--sans`) — paragraphs, labels, buttons, eyebrows.
- **Eyebrows / kickers:** Jost, uppercase, `letter-spacing:.2–.24em`, small, `--gold-bright`.
- Signature heading move: a serif line with one word set in italic gold (e.g. "A website redesign, *presented*").

## The shared shell (how pages are built)
Interior pages are thin. They include two shared files and get their chrome injected:

- **`assets/site.css`** — all tokens + components: header, utility bar, dropdowns, footer, and section primitives: `page-hero`, `fcard`, `statband`, `wingband`, `rev-masonry`, `acc`, `zgrid`, `zcard`, `ctaband`, `split-feat`, `prose`, `cine`.
- **`assets/site.js`** — injects the cosmos background, header, mobile menu, footer, and floating CTA using `document.createRange().createContextualFragment(...)` (NOT innerHTML — a security hook blocks innerHTML assignment). It also wires scroll state, the reveal IntersectionObserver, the starfield, and the parallax engine (`.cine-bg`, `.wingband .wb-bg`, `.ph-media`).

**To make a new page:** start from an existing interior page (e.g. `love.html`), link `site.css` + `site.js`, give it a unique cinematic hero at `assets/heroes/<page>.jpg`, and compose from the section primitives above. Do not paste header/footer markup — `site.js` injects it. (`index.html` and `advisors.html` are the exception: they keep their own inline chrome.)

## Motion doctrine — motion is storytelling, never decoration
- Backgrounds drift and breathe (slow Ken Burns, pulsing gold "source" glows, twinkling four-point starfields).
- `.cine` interstitial "page-breaks": full-bleed image + Ken-Burns zoom + breathing `.cine-glow` + scrim + one centered serif line. One per content page, each with a bespoke `assets/cine/<page>.jpg`.
- Parallax translates `.cine-bg`, `.wb-bg`, and `.ph-media` on scroll (rAF-throttled).
- Every motion is gated behind `prefers-reduced-motion` — provide a calm static fallback.
- If an effect doesn't serve the story, cut it.

## Voice
- Heritage-luxury, warm, quietly confident. Second person ("you", "your").
- **No em dashes.** Use a period, comma, or "and/but".
- **No "not X, but Y" negation constructions** — state the positive directly.
- Benefit-led, reassuring near CTAs ("$1/min · guaranteed", spending cap, real person, no account to start).
- Primary CTA sitewide: **"Get Your Reading."**

## Signature marks
- **Logo:** a four-point champagne-gold compass-star (slow rotate + ambient gold glow).
- **Guarantee seal:** a concentric breathing "source" medallion — a deep orb, crisp gold rim, engraved ring text, halo anchored to the seal.
- **Tarot deck:** bespoke "Regal & Crowned" Art Nouveau × antique ink cards (The Seeker, The Oracle, The Insight, six spreads, star card-back).
- **Per-page cinematic heroes:** no two pages share a hero.

## Image style
Deep violet-indigo cosmos washed with champagne-gold source-light, soft nebula, scattered stars, painterly and atmospheric, generous dark negative space for text, no lettering. Generated with Google `gemini-2.5-flash-image`, refined against reference frames for consistency. Full prompts: `prompts/image-prompts.md`. Portraits are graded to the shared violet-indigo key so the whole set reads as one house.

## Review checklist
- [ ] Colors come from `site.css` tokens (no stray hexes); gold used for accent, not fills.
- [ ] Cormorant Garamond for display, Jost for body/UI.
- [ ] Chrome comes from `site.js` injection (page didn't hand-roll header/footer).
- [ ] Page has its own unique hero; nothing reused from another page.
- [ ] Every animation has a `prefers-reduced-motion` fallback.
- [ ] Copy: no em dashes, no "not X, Y", second person, CTA is "Get Your Reading."
- [ ] Translucent panels let the cosmos read through.
