# Portfolio refresh plan — Fall 2026

## Implementation status — September 24, 2026

- Phases 1–4 are implemented locally: résumé-backed copy, a clearer page order, a Datadog feature story, Korsana case study, responsive design, an original SVG oak that grows in stages, accessible navigation, local images, metadata, and repository cleanup. Selected Work also includes LegalEase, FIU PawlinaWalk, MyAlbumList, and TravelMaxx at William's request.
- Production build and lint pass. The JavaScript output is about 169 KB (55 KB gzip), down from roughly 291 KB (92 KB gzip). The npm audit reports zero current advisories.
- Previously listed project and profile links returned HTTP 200 during the September 24 check. The newly supplied project links still need a live check. The remaining release gate is visual review at mobile, tablet, and desktop sizes, including keyboard and reduced-motion checks. Computer-use permission is unavailable in this session, so browser screenshots or a later enabled browser session are needed before deploying.
- The public site has **not** been redeployed yet. The work is in the local repository.

## Goal and source of truth

Build a portfolio for software engineering internship applications that shows shipped work, clear technical judgment, and William's running community leadership. Keep the current bold, earthy visual direction and refine it. The September 2026 résumé supplies the baseline for dates, titles, education, metrics, and skills; William's later direct updates take precedence. The site can tell fuller stories where facts are verified. This project concerns the portfolio site, not editing the résumé PDF. Do not publish a résumé download or phone number.

## Starting state (audited September 24, 2026)

- The active app was `src/Portfolio.jsx` and `src/components/portfolio/*`. Unused `Components/portfolio/*`, `pages/Portfolio.jsx`, and the former `src/components/ui/*` files were removed during this implementation. Their empty directories and the ignored generated `dist/` folder were also removed; `npm run build` recreates `dist/` when needed.
- At the start of this work, the site called Datadog incoming, dated Korsana as in development, listed an old FIU graduation date and GPA, and understated run club growth. The About copy also misspelled Datadog. These facts are now corrected in the active site.
- The former hero rendered 390 animated canopy ellipses and delayed the name and calls to action. Its interim still-image reveal has been replaced with original SVG paths: roots, branches, and smaller twigs draw upward, then eight canopy groups bloom, finishing in about two seconds. The crowns now use varied hand-drawn outlines, lobed leaf details, and bark marks. The name and calls to action appear immediately, and reduced-motion users see the complete tree. The fixed-height background roots were removed.
- Portrait, run club, and Sylly images now live in `public/`; generic error fallbacks were replaced with labelled placeholders. A custom favicon and a social preview card using the original vector oak were added. The résumé remains unlinked by choice.
- Baseline lint had 41 warnings and the output was about 291 KB JavaScript (92 KB gzip). Current lint is clean and the output is about 169 KB (55 KB gzip). Vite and its React plugin were updated; deployment is pinned to Node 22, matching the local runtime and Vercel's supported versions.

## Content changes

| Section | Required story | Status |
| --- | --- | --- |
| Hero | Name, software engineer introduction, work and contact CTAs, FIU and Datadog context. | Implemented. |
| About / education | Datadog completed; FIU B.A. CS, 3.83 GPA, expected December 2027. | Implemented. |
| Experience | Datadog's shipped feature and measurable outcomes, plus FIU support. Only résumé experience. | Implemented. |
| Projects | Live Korsana case study, Sylly's award and planner workflow, classifier accuracy and dataset, plus LegalEase, FIU PawlinaWalk, MyAlbumList, and TravelMaxx. | Implemented; visual review pending. |
| Community | 100+ members, 1,000+ followers, 30+ partnerships, 50+ beginning runners. | Implemented. |
| Skills | A selective list from the résumé's current skills. | Implemented. |
| Contact | Internship invitation and approved public links; no phone or résumé PDF. | Implemented; links checked. |

Content rules: use completed tense for finished work, avoid unsupported product claims, and keep employer details at the same level already present in the provided résumé. Use specific outcomes ahead of long technology lists. Keep dates and role names in one data source so the same fact is not retyped across sections.

### Completed content work

- Corrected Datadog's name, role, dates, and selected public résumé metrics; removed its “incoming” badge. Added William's conditional-formatting video as an external demo link in Experience.
- Updated FIU GPA, graduation date, and coursework; removed time-relative About copy and its empty stats grid.
- Marked Korsana as a live product with current capabilities. Its displayed period follows William's later update in `src/data/portfolio.js`.
- Updated run club figures, skills, contact positioning, and search/social description.
- Removed Handshake and Destination Brides from the active Experience section, as requested. Kept the current images and left the résumé PDF private.
- Added four projects to Selected Work. William supplied the first-overall LegalEase and second-overall FIU PawlinaWalk results, project descriptions, stacks, and contribution details. The two hackathon cards credit his frontend flow and functionality work; MyAlbumList credits his backend ownership; TravelMaxx is marked as an MVP in development. “Spin the Globe” is labeled upcoming and PawlinaWalk's emergency-services screen is labeled simulated. The supplied Devpost and GitHub destinations still need a live link check.
- Added Intro to AI and Intro to Deep Learning to selected coursework and connected William's interest in useful, personalized AI features to his Korsana work in the About section.

## Implementation phases

### 1. Correct and curate the profile (priority: immediate)

1. Keep the résumé-to-site comparison current whenever dates or metrics change. Continue showing only the Datadog and FIU roles from the latest résumé.
2. Keep Korsana marked as a live project at `korsana.run`; verify the destination, current screenshot, and whether the product requires sign-in. Make the CTA say what opens.
3. Tighten Sylly and classifier descriptions to one concise outcome and one technical detail each. Verify award wording and links.
4. Keep the existing images for now, as requested. Replace generic stock fallbacks with an intentional local asset or a designed text fallback when new images are available.
5. Recheck copy, metadata, and public contact details during the final content pass; the empty About grid and stale time-relative copy have been removed.

**Done when:** every visible date, status, metric, and outbound link has been checked against the résumé or William's confirmation; there are no “incoming” or stale “current” claims.

### 2. Improve the visitor journey (priority: high)

1. Rewrite the hero to establish role and proof within the first screen: Datadog release, one or two shipped projects, and FIU graduation context. Keep the tree as the visual signature.
2. Reorder or condense sections so a recruiter reaches Datadog and the featured work quickly. Proposed flow: Hero → Experience → Projects → About/Education → Community → Skills → Contact.
3. Make Datadog a compact, outcome-led case study within Experience. Show the problem, William's ownership, the technical approach, and measured result without implying access to confidential implementation details.
4. Give Korsana a deeper project panel with real screenshots, what a runner can do, architecture, William's ownership, and a live product CTA. Give Sylly and the classifier smaller, consistent cards with proof links.
5. Reduce repeated heavy borders, tags, and long monospace passages. Keep the bold type and earthy palette; use a more readable body face and consistent spacing on desktop and mobile.

**Done when:** a visitor can identify William's role, strongest shipped work, technical range, and contact path in under a minute without reading every paragraph.

### 3. Rework the tree and motion (priority: high)

1. Use the original SVG oak in `src/components/portfolio/OakTree.jsx`: roots, branches, and twigs draw first, then eight grouped crowns grow in. Keep the editable vector as the source for any later visual refinement; its social preview has been updated to match.
2. Bring the complete hero reveal into roughly 2 seconds. Show the name and calls to action immediately in the document and do not make them depend on the tree animation finishing.
3. Honor `prefers-reduced-motion` with a fully visible static tree and content. Avoid scroll-jacking or repeated entrance animations.
4. Replace the fixed-height background roots with a responsive decoration that does not end abruptly or overlap key text. Test at 320 px, tablet, and wide desktop widths.

**Done when:** the tree remains distinctive, content is readable before animation completes, mobile has no clipping, and reduced-motion users receive the full page.

### 4. Make the site complete and maintainable (priority: medium)

1. Centralize experience, projects, links, and stats in a small data module; keep presentational components focused on layout.
2. Remove unused legacy copies and unused UI components after confirming no imports. Stop tracking generated `dist` output so the repo reflects source code.
3. Add a custom favicon, social preview image, updated title/description, canonical URL, and structured data appropriate to a personal portfolio. Keep contact information consistent.
4. Use semantic headings, landmarks, real links for navigation, keyboard-visible focus, meaningful image alt text, and accessible mobile menu behavior.
5. Self-host or otherwise stabilize approved images, optimize sizes, and check broken or redirected links. Review dependency audit findings and upgrade intentionally, with a passing build after each group of changes.

**Done when:** the build and lint pass without warnings, no active page relies on legacy files, metadata previews correctly, and the site remains usable with keyboard and reduced motion.

### 5. Review and release (priority: final)

1. Review the page in a browser at mobile, tablet, and desktop sizes; inspect typography, image crops, tree timing, navigation, and contact flow.
2. Run build and lint, check external links, and test keyboard navigation and reduced-motion mode. Check mobile performance and accessibility with Lighthouse or equivalent; target at least 80 mobile performance and 90 accessibility, then investigate any important misses.
3. Review copy against the résumé one last time and get William's approval for any claims, photos, or employer detail added beyond it.
4. Deploy through the existing Vercel setup, inspect the deployed page and social preview, and verify all CTAs on the live domain.

## Decisions and assets to collect

- Handshake and Destination Brides are excluded, as requested. Revisit only if the résumé changes.
- New portrait, run club group photo, Korsana screenshot, and Sylly screenshot or demo can improve the next design pass. Existing images stay for now.
- Optional GitHub or demo URLs for Korsana and Sylly. The live Korsana destination is `https://korsana.run`.
- William supplied a portrait photo of the two FIU mascots for PawlinaWalk and a landing-page screenshot for TravelMaxx. LegalEase, MyAlbumList, and the classifier use AI-generated concept photos, visibly labeled as such; replace them with real screenshots or project photos when available. The classifier image is temporary until its data UI exists.
- Any Datadog details that should stay out of a public case study. Until then, use the résumé's public wording and metrics only.

### Classifier data UI — next project enhancement

1. Build a small web UI around real classifier artifacts, starting with dataset counts by category and train/validation/test split, followed by a confusion matrix, per-class results, and a few representative correct and incorrect predictions. Preserve the existing 83.4% test-accuracy figure only if it matches the model version shown.
2. Add an optional upload-and-predict flow only after confirming the model weights, class mapping, inference API, hosting requirements, and acceptable file/privacy handling. Show confidence and limitations clearly; avoid presenting a prediction as a definitive recycling instruction.
3. Replace the temporary concept photo with a real screenshot or link to the working UI when it is ready.

**Needed to start:** the dataset summary, evaluation outputs, sample images, model artifact, and current inference API or repository instructions. No fabricated metrics or example predictions.

## Remaining work order

Complete the browser review and fix any layout or interaction issues it reveals. Then verify the deployed page and social preview. React, Vite, and the existing component split supported the refresh without a framework rewrite.
