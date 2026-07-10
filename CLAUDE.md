# CLAUDE.md — derikschneider.com (vite-lit-1)

## Working Rules
Kept identical across repos (this one, `nav-experiments`, and the root `_github` copy) so they travel to whichever machine/repo you're working from. If these get updated, update all copies together.

- Think through the problem first, and read the relevant files in the codebase before proposing or making changes.
- Check in before major changes — lay out the plan and wait for confirmation before executing anything large or hard to reverse.
- Along the way, give a high-level explanation of what changed at each step, not a line-by-line narration.
- Keep every change as small and targeted as possible. Touch as little code as necessary to do the job. No speculative refactors, no scope creep, no unrequested cleanup while in the area — exception: sweeping changes (e.g. deleting an entire project or folder) are fine when explicitly asked for, but scope them exactly to what was requested.
- Never speculate about code that hasn't been opened. If a specific file is referenced, read it before answering. Investigate before making claims about the codebase — no guessing.
- Each project should have a maintained doc describing its architecture end-to-end, kept current as the project changes.

## What this is
Derik Schneider's personal site/portfolio. Repo: `github.com/derikschneider/vite-lit-1`, deployed to derikschneider.com via GitHub Pages.

The site's whole premise: **it IS the portfolio, not a description of one.** No résumé layout, no case studies, no thumbnail grid. Interactive experiments live on the page and run for real. See "Product direction" below.

## Tech stack (confirmed, do not deviate without asking)
- **Framework:** Lit 3 (Web Components) + TypeScript + Vite. **No React.**
- **Styling:** Modern vanilla CSS — native nesting, custom properties, grid/flexbox. **No Tailwind, no CSS frameworks.**
- **Animation:** GSAP for scroll-driven animation and micro-interactions.
- **3D:** Spline — a scene is already embedded live in `index.html` via `<spline-viewer>`.
- **Icons:** Lucide.
- **Fonts:** Google Fonts + custom WOFF2 (LS Trappist 1, Derik's own font, may be used here).
- **Deploy:** GitHub Actions (`.github/workflows/static.yml`) — push to `main` → build → GitHub Pages. No manual deploy step needed.

> Note: `GEMINI-1.md` (archived 2026-07-10 to `c:\_github\_archive\vite-lit-1-GEMINI-1.md`, no longer in this repo) specs out React + Tailwind + GSAP. That was written as a reusable template for *client* landing pages, not this site — ignore its stack requirements here, but its component-architecture thinking (floating nav, cinematic hero, etc.) can still inform layout ideas if adapted to Lit/vanilla CSS.

## Brand voice — check before writing any copy
Full doc: `../../brand-voice.md`
- Creator first, salesman never. No hype words, no "world-class," no thought-leader tone, no case-study selling.
- CTA framing is "let's build something," never "hire me" or "book a consultation."
- Gut check before shipping copy: Does this feel like selling? Kill it. Would it fit a LinkedIn post? Rewrite it. Does it sound preachy? Flatten it.

## Aesthetic direction
- Dark charcoal/obsidian backgrounds, muted sage/cream light sections, neon green typographic accents, sharp red framing/wireframe lines.
- Structural vocabulary: grid systems, Bauhaus minimalism, raw Brutalist honesty — used for composition, not decoration.
- Reference inspiration abstractly (mood, tension, flow) — never copy source images literally.
- Awwwards-tier is the baseline, not the ceiling. Inspiration: godly.website, awwwards.com, land-book.com, siteinspire.com.
- Anti-patterns: generic portfolio grids, résumé layouts, standard marketing-site CTAs, boxing Derik into one discipline (he does design/art/animation/dev/type).

## Product direction — interactive experiments as portfolio
Full doc: `../../Derik Schneider/project ideas.md`
Build small, self-contained interactive pieces (Canvas/WebGL/Spline) and showcase them live — "theater mode" lightbox for in-site browsing, plus dedicated routes (`/experiments/*`) for sharing/Awwwards submissions.

Priority build order (concepts are framework-agnostic — implement as Lit components, not React):
1. **Particle Identity** — generative name animation, becomes the hero
2. **Waveform** — audio-reactive visualizer (Web Audio API + Canvas)
3. **Site foundation** — layout, nav, theater/lightbox mode for showing experiments
4. **Gravity Well**, **Cursor Trails**, and further experiments from the medium/exploratory tiers

## Working style
- Directorial: Derik gives creative direction and supplies assets/inspiration; build first, discuss second.
- Comfortable iterating fast — ship it, look at it, tweak it live rather than long planning cycles.
- He'll supply Figma links, exported PNGs, or annotated specs — read hex values/labels directly from these when given.
- Prior agent sessions (Antigravity/Gemini) used the persona name "Axis" (Principal Design Engineer / Creative Technologist). Not required going forward, just context if referenced.

## Repo state as of 2026-07-08
- Currently still close to the stock `lit-ts` Vite scaffold (`my-element.ts` is default boilerplate, unused/commented out in `index.html`).
- Only real customization so far: a Spline 3D scene embedded directly in `index.html`, page title "DS".
- No experiments, nav, or theater mode built yet — next real work starts from "Site foundation" above.
- Untracked `GEMINI-1.md` sitting in the repo is legacy/reference only (see stack note above) — fine to leave or delete, doesn't block anything.

## Publishing
- Remote already configured: `https://github.com/derikschneider/vite-lit-1.git`, tracking `origin/main`, working tree was clean as of last check.
- Local git identity and credential manager are already set up — pushes to `main` should trigger the Pages deploy automatically. Confirm the first deploy after a long gap actually succeeds (Pages settings/Actions could have drifted) before assuming CI is still green.
