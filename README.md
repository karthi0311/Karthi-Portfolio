# Karthi S — Digital Marketing Executive Portfolio

A modern, job-focused personal portfolio built with React, JSX, CSS3, and JavaScript (via Vite).

## Project structure

```
src/
  components/
    Navbar.jsx           Sticky nav, active-section tracking, mobile menu
    Hero.jsx             Hero section with photo, headline, CTAs
    ToolsMarquee.jsx     Infinite auto-scrolling tool logo strip
    About.jsx
    Skills.jsx
    WhatIBring.jsx
    Experience.jsx       Timeline of roles
    Projects.jsx         Renders both featured projects
    ProjectCard.jsx      Shared project card layout + CTA buttons
    EvidenceModal.jsx    Accessible lightbox for the Hot Bites screenshot
    Education.jsx
    Certification.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  main.jsx
  styles.css
public/
  profile-photo.jpg
  hotbites-proof.png
  Karthi_S_Resume.pdf
index.html
```

## Running locally

```bash
npm install
npm run dev       # starts a local dev server with hot reload
npm run build     # builds a production bundle into dist/
npm run preview   # serves the production build locally
```

Requires Node.js 18+.

## Notes

- The "Download Resume" buttons point to `/public/Karthi_S_Resume.pdf`. Replace this file with an updated resume any time — the filename and path can stay the same.
- The Hot Bites evidence screenshot lives at `/public/hotbites-proof.png`. Swap in a fresh screenshot if you re-run the search later.
- The tools marquee uses real brand icons from `react-icons/si` where available (Google Ads, Meta, Google Analytics, Search Console, SEMrush) with clean fallback glyphs for tools without an official icon package (Ahrefs, Screaming Frog, Canva).
- No fake statistics, testimonials, or freelance/pricing content are included anywhere — this is intentionally a recruiter-facing portfolio, not an agency or freelancer site.

## Deploying

This is a static Vite build, so it deploys cleanly to Vercel, Netlify, GitHub Pages, or any static host:

```bash
npm run build
# then upload/deploy the dist/ folder
```
