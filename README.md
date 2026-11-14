# THOLU

**A cinema older than cinema.** An interactive field guide to Tholu Bommalata, the leather shadow
play of Andhra Pradesh.

Tholu Bommalata is a two-thousand-year-old shadow theatre in which painted, perforated goat hide is
held against a lit cloth and given a voice. This project is a frontend-only, six-act web experience
that explains the craft, the makers and the making — and lets you try the light for yourself.

## What's inside

- **Act I — The lamp** (`/`): a Three.js hero with a brass diya, a lit screen and drifting dust.
- **Act II — The craft** (`/craft`): an interactive cross-section of the stage and an anatomy of a
  jointed leather figure.
- **Act III — The making** (`/making`): the seven stages from hide to finished puppet.
- **Act IV — The makers** (`/makers`): the families of Nimmalakunta, in their own words.
- **Act V — The stage** (`/stage`): drag the lamp, pose the dancer, watch the shadow respond.
- **Act VI — Learn it** (`/learn`): make a shadow puppet tonight, with printable templates.
- **The programme** (`/sources`): every source, a glossary and an accessibility note.

## Tech stack

| Concern    | Choice                                   |
| ---------- | ---------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)       |
| UI         | React 19, CSS Modules                    |
| Motion     | Framer Motion                            |
| 3D         | Three.js (vanilla, dynamic import)       |
| Type-check | TypeScript                               |
| Lint       | ESLint (eslint-config-next)              |
| Unit tests | Vitest                                   |
| E2E / a11y | Playwright + axe-core                    |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script              | Purpose                             |
| ------------------- | ----------------------------------- |
| `npm run dev`       | Start the dev server                |
| `npm run build`     | Production build                    |
| `npm run start`     | Serve the production build          |
| `npm run lint`      | ESLint                              |
| `npm run typecheck` | TypeScript, no emit                 |
| `npm test`          | Unit tests (Vitest)                 |
| `npm run e2e`       | End-to-end + accessibility (Playwright) |

The Playwright config starts a dev server on port `3100` automatically, or reuses one that is already
running.

## Project structure

```
src/
  app/                 routes, layout, global styles, metadata routes
    craft/ making/ makers/ stage/ learn/ sources/
  components/
    hero/              Three.js lamp scene and poster fallback
    craft/ making/ stage/ learn/   interactive pieces
    *.tsx              header, footer, transitions, reveal, icons
  content/             site copy and sourced data (craft, making, makers, learn, sources)
  lib/utils.ts         pure helpers (pose and shadow maths)
public/
  art/                 original illustrations
  patterns/            printable puppet templates
e2e/                   Playwright specs
tests/unit/            Vitest specs
```

## Content and sources

Every factual claim on the site is drawn from published reporting and reference works, listed with
links on the `/sources` page. Where sources disagree on a date or a number, the site says so rather
than choosing a side. All artwork is original to this project; no external photographs are used.

## Accessibility

- Full keyboard navigation, a skip link and a route announcer.
- The hero 3D scene is decorative and is replaced by a still image when motion is reduced or the
  viewport is small.
- The interactive stage is operable by keyboard (arrow keys move the lamp; sliders are native range
  inputs).
- Sound is opt-in only.
- The end-to-end suite runs axe-core against every page and fails on serious or critical violations.

## Deployment

The project is linked to a Vercel project and deploys with:

```bash
vercel --prod
```
