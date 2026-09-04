# sqorvin — marketing website

A dark, premium marketing site for sqorvin (data analytics, AI & BI consultancy), built with Next.js 14 (App Router, static export), TypeScript, Tailwind CSS, Framer Motion, Lucide icons and Recharts.

## Quick start

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build      # produces a static site in ./out
npm run typecheck  # TypeScript check with no emit
```

`npm run build` needs normal internet access the first time, because the heading/body/mono fonts (Space Grotesk, Manrope, JetBrains Mono) are fetched from Google Fonts at build time via `next/font/google`. This is a one-off per machine/CI runner — the fonts are then self-hosted from your build output, so the live site never calls out to Google Fonts itself.

## Editing content

**Everything you're likely to change lives in one file: `src/config/site.ts`.** Company name, tagline, email, LinkedIn, booking link, nav links, services, process steps, FAQs, the case study, the founder bio — all there, with `TODO(placeholder)` comments marking anything that needs a real value before launch (see the checklist below).

Component code under `src/components` generally shouldn't need touching just to update copy or contact details.

## Project structure

```
src/
  app/
    layout.tsx        — fonts, <head> metadata/OG tags, wraps the page in Navbar/Footer/PageLoader
    page.tsx           — assembles all sections in order
    privacy-policy/     — real UK GDPR-scoped policy (see checklist)
    sitemap.ts           — static sitemap.xml, generated at build time
    robots.ts            — static robots.txt, generated at build time
    globals.css         — design tokens as CSS variables, reduced-motion base rules
  config/
    site.ts             — ALL editable content (see above)
  components/
    layout/             — Navbar, Footer, PageLoader
    sections/            — one component per homepage section (Hero, Services, FAQ, ...)
    ui/                  — reusable primitives (Button, GlassCard, DashboardPreview, ...)
    MotionProvider.tsx    — wraps the app in Framer Motion's reduced-motion handling
  hooks/                  — useMousePosition, useScrolled
  lib/                    — cn() classname helper, shared Framer Motion variants/easing
scripts/
  generate_og_image.py    — regenerates public/og-image.png if you change the tagline/palette
                             (traces the logo mark from favicon.svg by hand — if that mark
                             ever changes, re-trace the SEGMENTS constant at the top of the
                             logo section to match, or this script will draw a stale one)
```

## Design system

Defined in `tailwind.config.ts` and `src/app/globals.css`:

- **Colour** — near-black navy base (`#05070D`), off-white ink, electric blue (`#4C7FFF`) / violet (`#8B5CF6`) / cyan (`#22D3EE`) accents used sparingly (CTAs, headline gradient, one hero visual), a separate semantic `good` green for status/checkmarks.
- **Type** — Space Grotesk (headings), Manrope (body), JetBrains Mono (numbers/data labels). A custom `display-*` font-size scale for headlines, plain Tailwind scale for body text.
- **Motion** — one shared easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`) and a small set of reusable variants in `lib/motion.ts` (`fadeUp`, `fadeUpSmall`, `staggerContainer`, `scaleIn`) so every reveal feels consistent.

## Accessibility & reduced motion

The whole app is wrapped in `<MotionConfig reducedMotion="user">` (see `MotionProvider.tsx`), so every Framer Motion animation automatically respects the visitor's OS-level "reduce motion" setting without each component needing its own check. A couple of components (the canvas data-grid background, the page loader's dismiss delay) have their own `useReducedMotion()` handling for things `MotionConfig` can't reach.

One deliberate engineering note: none of the animated components branch their *rendered structure* on `useReducedMotion()` directly (e.g. rendering a completely different element for reduced-motion users). On a statically-exported site, the server has no way to know a visitor's motion preference, so branching structure that way causes a React hydration mismatch for exactly the users this feature exists to help. Reduced motion is instead handled centrally by `MotionConfig`, plus timing-only adjustments inside `useEffect` where needed. If you add new animated components, follow the same pattern.

All interactive elements have visible focus states, the mobile nav is fully keyboard-operable, and there's a skip-to-content link for keyboard/screen-reader users.

## Deploying

The build output (`npm run build`) is a fully static site in `./out` — host it anywhere:

- **Vercel** — easiest path: import the repo, Vercel detects Next.js automatically. Static export works with zero config.
- **Netlify** — set the build command to `npm run build` and the publish directory to `out`.
- **Anywhere else** (S3 + CloudFront, GitHub Pages, your own server) — upload the contents of `out/` as-is; it's plain HTML/CSS/JS.

## A note on dependencies

`npm audit` currently flags several high-severity advisories against the pinned Next.js version — all of them affect Next's *server-side* features (Server Actions, Middleware, custom servers). Since this project builds as a fully static export with none of those features in use, they don't apply to how this site is actually deployed. It's still worth running `npm audit` periodically and upgrading Next.js when you have a moment to re-test the build, rather than treating this as permanently settled.

---

## Placeholder checklist — replace before launch

- [x] `SITE.email` — real inbox, `hello@sqorvin.com` (Namecheap forwarding to a Gmail-hosted address)
- [x] `SITE.linkedin` — real, live company page
- [x] `SITE.url` — real production domain, `https://sqorvin.com`, live on Vercel
- [x] **Founder photo** — real photo in `src/components/sections/About.tsx`, not a placeholder monogram
- [x] **Privacy Policy** (`src/app/privacy-policy/page.tsx`) — real, UK GDPR-scoped policy describing what the site actually does today (last updated 29 August 2026)
- [x] **OG image** (`public/og-image.png`) — current, uses the real logo mark
- [x] `sitemap.xml` / `robots.txt` / Organization structured data (JSON-LD) — added
- [x] Page analytics — `@vercel/analytics` wired into `layout.tsx` (enable it in the Vercel project dashboard to start seeing numbers)
- [ ] `SITE.bookingUrl` — still routed to a `mailto:` link as a working stand-in. Point this at a real booking page (Calendly, Cal.com) once that account exists — it's the only line that needs to change.
- [ ] `SITE.legalName` — currently `"Sqorvin Ltd"`, **unconfirmed**. Decide whether sqorvin is actually registered at Companies House (or trading as a sole trader) and update this to match — search-engine structured data deliberately omits this field until it's confirmed, since it's a factual claim.
- [ ] **Case study** (`CASE_STUDY` in `site.ts`) — every number and the client description are explicitly illustrative placeholders (labelled as such in the UI). Replace with a real, permissioned client story and real figures once you have one, or remove the section if you'd rather launch without it.
- [ ] Confirm the FAQ answers (pricing approach, timelines, data security) still match how you actually plan to work once you're taking on real clients.
