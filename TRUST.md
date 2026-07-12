# Trust, privacy & safety

A plain statement of what this build is and is not, for the people who will vet it before it goes live.

## It is self-contained and cannot touch your systems
- **Static only.** HTML, CSS, JS, and images. No server code, no database, no framework.
- **No integration with production.** It makes no calls to your CRM, billing, payment, account, or psychic-routing systems, and holds no credentials to them. Standing it up cannot affect your live operations.
- **No data collection.** No forms post anywhere. No cookies are set. No analytics, pixels, or trackers are included. If you want analytics or consent tooling, you add it deliberately.

## No external dependencies (after one step)
- The only outbound requests are three motion libraries loaded on the **home page** from public CDNs, and the home page degrades gracefully if they are blocked. `DEPLOY.md` shows how to self-host them so the deployed build calls **nothing external**.

## Honest provenance of the imagery
- The **190 psychic portraits** were relit from the real headshots on your live directory. Faces were not altered or invented; the grade changes background, lighting, and sharpening only. Non-portrait avatars were excluded.
- All other imagery (tarot deck, cosmic heroes, cinematic bands, agent avatars) was **generated** for this build with Google `gemini-2.5-flash-image`. Prompts are included in `prompts/image-prompts.md`.
- The market-research "agents" and the review board are an **AI-native analysis device** presented in the command center, not real customers. Market figures cite public sources (IBISWorld, Statista, and others) and are labeled as such.

## Search & visibility
- Every page ships with `<meta name="robots" content="noindex">`, so nothing is indexed while you review. You remove that tag when you choose to go public.

## Accessibility & resilience
- All motion is gated behind `prefers-reduced-motion`; the site is fully usable with motion off.
- Relative paths mean it runs from any host, subdomain, or subpath without edits.

## What this is
A design-system and conversion **prototype** — a reimagining of the brand and a playbook, not a drop-in replacement for your production platform. It is not affiliated with the live site's production systems.
