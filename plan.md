# William Delaosa — Portfolio Plan

---

## Vision

A personal website that feels like *William* — not a résumé, not a template.
The aesthetic sits between a high-end outdoor/running editorial (think Tracksmith, Ciele) and
an original developer portfolio. Earthy, bold, alive. The tree is the centerpiece and wow factor.
Everything else is clean, confident, and readable.

**What it is not:**
- Dark mode with glowing gradients and glassmorphism
- Generic card-based layouts
- A shadcn/ui showcase
- Over-animated (nothing should feel gimmicky)

---

## Design System

### Colors

| Token       | Hex       | Usage                                     |
|-------------|-----------|-------------------------------------------|
| `bg`        | `#fdfbf7` | Page background (warm cream)              |
| `ink`       | `#1e2d1e` | All text (deep forest green)              |
| `accent`    | `#c58361` | Highlights, tags, hover states (clay)     |
| `moss`      | `#4a7c59` | Tree leaves, secondary accent             |
| `muted`     | `#7a9178` | Supporting text, metadata                 |
| `surface`   | `#f4f1ea` | Alternate section backgrounds             |

### Typography

| Role         | Font                  | Weight   | Usage                                  |
|--------------|-----------------------|----------|----------------------------------------|
| Display      | Cormorant Garamond    | 700      | Hero name, section headings, pull quotes |
| Display Italic | Cormorant Garamond  | 400i     | Blockquotes, emphasis                  |
| Body         | DM Sans               | 400/500  | All body copy, labels, nav             |
| Label        | DM Sans               | 700      | Tags, caps labels, section numbers     |

**Rules:**
- Section numbers (`01`, `02`…) are Cormorant, very large, very low opacity — decorative, not functional
- Section titles are Cormorant Bold, tight tracking, no uppercase
- Body is DM Sans at comfortable line-height (1.7)
- No gradient text, ever

### Spacing

- Max content width: `1100px`
- Section vertical padding: `py-28` (7rem top/bottom)
- Alternating section backgrounds: `bg` and `surface`

### Borders & Images

- All images: `2px solid #1e2d1e`, zero border-radius
- Images start grayscale, reveal color on hover (`transition-all duration-700`)
- No box shadows anywhere
- Dividers: `1px` at `8–15% opacity`

---

## Animation Philosophy

**Animate with purpose, not decoration.**

| Element                  | Animation                            | Library       | Duration  |
|--------------------------|--------------------------------------|---------------|-----------|
| Tree trunk               | Stroke draw (pathLength 0 → 1)       | Framer Motion | 1.4s      |
| Tree branches            | Stroke draw, staggered pairs         | Framer Motion | 0.9s each |
| Tree sub-branches        | Stroke draw, staggered               | Framer Motion | 0.6s each |
| Tree leaf clusters       | Scale + opacity pop (backOut ease)   | Framer Motion | 0.5s each |
| Hero name (WILLIAM)      | Clip reveal (y: 100% → 0)            | Framer Motion | 0.9s      |
| Hero name (DELAOSA)      | Clip reveal, 120ms after WILLIAM     | Framer Motion | 0.9s      |
| Hero tagline/CTAs/socials| Opacity fade, staggered              | Framer Motion | 0.5s each |
| Section entrances        | Fade up (y: 24 → 0, opacity 0 → 1)  | Framer Motion | 0.7s      |
| Image hover              | CSS grayscale → color                | CSS           | 700ms     |
| CTA hover dash           | Width expand (w-8 → w-12)            | CSS           | 300ms     |

**Rules:**
- Nothing loops or pulses continuously (no floating orbs, no pulsing dots)
- Section entrances fire once on scroll (`viewport: { once: true }`)
- Leaves do NOT float/sway after appearing — the tree is still once drawn
- No spring physics that make things feel bouncy or toy-like

---

## Tree Specification

The tree is a hand-crafted SVG in the Hero section. It is **not** an image file.

**Structure (viewBox: `0 0 600 490`):**

```
                  🌿 🌿 🌿 🌿 🌿
               /    \       /    \
            🌿        \   /        🌿
          /    \    BRANCHES    /    \
       🌿        \_____________/        🌿
                      |||
                    TRUNK (thick → thin, bottom to top)
                      |||
               ___roots_roots___
```

**Elements:**
- **Trunk**: 3 path segments, strokeWidth 8 → 5 → 3.5, draws bottom-up
- **Branch pairs**: 4 pairs (high, mid, low-mid, low), each pair draws simultaneously
- **Sub-branches**: Off the top 2 pairs, smaller (sw 1.5), draw after parents
- **Tiny tips**: Off sub-branches, sw 1, draw last
- **Leaf clusters**: ~20 filled circles (`#4a7c59`), pop in after branches with scale+opacity
- **Roots**: 7 paths extending below trunk base with `overflow: visible`

**Animation sequence:**
```
0.0s   Roots begin drawing (simultaneous with trunk)
0.0s   Trunk lower segment begins
0.8s   Trunk mid segment begins
1.6s   Trunk upper segment begins
2.0s   Branch pair 1 (highest)
2.1s   Branch pair 1 mirror
2.3s   Branch pair 2
... continues staggered ...
2.9s   Sub-branches begin
3.2s   Tiny tips
3.2s   Leaf clusters begin popping in (staggered through ~4.5s)
2.2s   WILLIAM name clip reveal begins
2.32s  DELAOSA clip reveal
2.7s   Divider line draws
2.9s   Tagline fades in
3.1s   CTA links fade in
3.3s   Social icons fade in
```

**Page roots background:**
A separate SVG in `Portfolio.jsx`, absolutely positioned at `top: 90vh`, 4% opacity,
800px tall. Elegant sweeping quadratic bezier arcs spreading outward from center —
creates visual continuity from the hero tree downward without competing with content.

---

## Site Structure

```
Fixed Nav (W.D. + section links)
│
├── Hero          (cream bg)
├── About         (cream bg)
├── Experience    (surface bg)
├── Projects      (cream bg)
├── Skills        (surface bg)
├── Community     (cream bg)
└── Contact       (surface bg)
```

---

## Section Specifications

### Hero

**Layout:** Centered, full viewport height.
Top 55%: Tree SVG. Bottom 45%: Name + tagline + CTAs + socials.

**Tree container:** `max-w-[480px]`, centered.
**Name:** `WILLIAM` then `DELAOSA`, each on own line, `text-6xl md:text-8xl lg:text-[9rem]`,
Cormorant Garamond Bold, tight tracking, centered.
**Divider:** 1px line, `max-w-sm`, centered, draws in after name.
**Tagline:** `Software Engineer · Builder · Runner · Miami, FL`
uppercase, tracked, DM Sans 500, muted.
**CTAs:** Two text links — `← View Work` and `Get in Touch →`.
Extending dash on hover.
**Socials:** GitHub, LinkedIn, Email — icon only, low opacity by default.

---

### 01 — About

**Layout:** Section number + title left, then 2-column grid.
Left col: Photo (2px border, grayscale/color hover, 4:5 ratio).
Right col: Bio, blockquote, education, stats.

**Bio:** 2 short paragraphs — engineering + run club.
**Blockquote:** *"I care about writing code that solves real problems — not just code that compiles."*
Cormorant italic, large, left clay border.
**Education block:** FIU · BA Computer Science · GPA 3.85 · May 2027 · relevant coursework.
**Stats:** `3.85` GPA / `100+` Runners / `50+` First Races — Cormorant display, clay labels.

---

### 02 — Experience

**Layout:** Section header, then a list of entries separated by `1px` dividers.
Each entry: 2-column grid — `[160px meta] [content]`.

**Meta column (left):** Large decorative number (Cormorant, very low opacity), period, location, optional tag.
**Content column (right):** Role (semibold, large), Company (clay, small, tracked), bullet list.

**Entries (most recent first):**
1. Software Engineer Intern — Datadog — New York City — Summer 2026 — tag: "Incoming"
2. Machine Learning Fellow — Handshake — Remote — Feb–Aug 2026 — tag: "Current"
3. Web Developer Intern — Destination Brides — Remote — May–Jul 2025
4. Computer Lab & IT Student Assistant — FIU — Miami — Oct 2024–Present — tag: "Current"

---

### 03 — Projects

**Layout:** Featured project full-width first, then 2-col grid for others.

**Featured (Korsana):**
- Full-width 2-col: image left, content right
- Large Cormorant title (`text-4xl md:text-5xl`)
- "In Development" tag + period
- Description paragraph
- 2 bullet points
- Tech as plain text (`·` separated)
- Grayscale → color on image hover

**Grid projects (Sylly, AI Garbage Classifier):**
- Image on top (16:9, grayscale hover)
- Title (Cormorant), subtitle, period
- Award tag for Sylly (`◆ Best Authentication — ShellHacks 2025`)
- Short description
- Tech as plain text

---

### 04 — Skills

**Layout:** Section header, then 3-column grid.

**Columns:**
- Languages: JavaScript, TypeScript, Python, GoLang, HTML5, CSS3
- Frameworks & Libraries: React, Node.js, Express, TensorFlow, Django, React Native, NumPy, Pandas, Bootstrap5
- Tools & Platforms: Git, GitHub, Google Cloud, Auth0, MongoDB, PostgreSQL, Redis, Salesforce, VS Code

Plain list with small dot markers. No icons, no skill bars, no badge chips.

---

### 05 — Community

**Layout:** Section header, then 2-column grid — content left, photo right.

**Content:**
- `Panthers Run Club` — Cormorant display title
- `President & Co-Founder · Oct 2023 – Present` — clay label
- 2 paragraphs: founding/growth story + coaching story
- 4 stats (2×2 grid): `100+` Members / `800+` Followers / `50+` First Races / `3–4×` Weekly Runs

**Photo:** Run club group photo. 2px border, grayscale → color hover.

---

### Contact

**Layout:** Subtle root SVG at top, then 2-column — message left, link rows right.

**Left:** Short paragraph — open to opportunities, currently Miami / NYC this summer.
**Right:** 4 link rows with icon + label + value + hover arrow:
- Email: wdelaosa24@gmail.com
- GitHub: github.com/WillDela
- LinkedIn: linkedin.com/in/williamdelaosa
- Phone: 305-850-9778

**Footer:** `© 2026 William Delaosa` and `Miami, FL · Florida International University`

---

## Technical Stack

| Concern         | Tool                   | Notes                                    |
|-----------------|------------------------|------------------------------------------|
| Framework       | React 18               | Vite build                               |
| Styling         | Tailwind CSS v3        | Custom earthy palette, custom fonts      |
| Animations      | Framer Motion          | pathLength for tree, whileInView for sections |
| Icons           | Lucide React           | Minimal use — socials and contact only   |
| Fonts           | Google Fonts           | Cormorant Garamond + DM Sans             |
| UI components   | None (no shadcn/ui)    | Custom only                              |
| Deployment      | Vercel                 | Existing setup                           |

---

## File Structure

```
src/
├── Portfolio.jsx              # Root: nav + root bg SVG + section layout
├── index.css                  # Fonts + base styles + CSS variables
└── components/portfolio/
    ├── Hero.jsx               # Animated SVG tree + name reveal
    ├── About.jsx              # Photo + bio + education + stats
    ├── Experience.jsx         # Numbered editorial job list
    ├── Projects.jsx           # Featured + grid projects
    ├── Skills.jsx             # 3-column clean list
    ├── Leadership.jsx         # Panthers Run Club
    └── Contact.jsx            # Links + footer

tailwind.config.js             # Earthy color tokens + font families
```

---

## Implementation Order

Build in this order so each piece builds on a working foundation:

1. `tailwind.config.js` + `index.css` — design tokens and fonts
2. `Portfolio.jsx` — nav + root background + section shell
3. `Hero.jsx` — the tree SVG + text (most complex, do first while fresh)
4. `About.jsx` — straightforward two-column
5. `Experience.jsx` — data-driven list
6. `Projects.jsx` — featured + grid
7. `Skills.jsx` — simplest section
8. `Leadership.jsx` — mirrors About structure
9. `Contact.jsx` — links + footer

---

## Open Questions / Decisions

- [ ] Hero photo in About section: is the Supabase URL still valid?
- [ ] Run Club photo in Leadership: same question
- [ ] Korsana image: use an Unsplash running/fitness photo as placeholder
- [ ] Any additional projects to add beyond the current three?
- [ ] Any additional experience entries coming?
