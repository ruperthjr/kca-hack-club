---
title: "CSS Flexbox Layout Implementation"
description: "Implement a modern, accessible, responsive portfolio stylesheet using Flexbox, CSS variables, and media queries."
difficulty: "intermediate"
unit: "Unit 1: Web Technologies and Internet Applications"
day: 1
technologies:
    - "CSS3"
    - "Flexbox"
    - "Responsive Design"
    - "Media Queries"
    - "CSS Variables"
learningOutcomes:
    - "Use CSS Flexbox to build responsive layouts"
    - "Create a design system with CSS custom properties"
    - "Apply mobile-first responsive patterns and breakpoints"
    - "Implement accessible focus and hover states"
    - "Optimize CSS for maintainability and performance"
estimatedTime: "3–4 hours"
requirements:
    - "HTML portfolio page from Day 1"
    - "Web browser with DevTools"
    - "Familiarity with CSS selectors and layout"
deliverables:
    - "styles.css"
    - "Responsive screenshots (mobile, tablet, desktop)"
    - "css-documentation.md describing decisions"
resources:
    - name: "CSS-Tricks: A Complete Guide to Flexbox"
      url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
    - name: "MDN: Flexbox"
      url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"
    - name: "Flexbox Froggy"
      url: "https://flexboxfroggy.com/"
    - name: "MDN: Using Media Queries"
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"
    - name: "Can I Use: Flexbox"
      url: "https://caniuse.com/flexbox"

completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# CSS Flexbox Layout Implementation

Overview
- Convert your semantic HTML portfolio into a polished, responsive site using Flexbox.
- Focus on clarity, accessibility, maintainability, and performance.

Objective
Build a single, well-documented stylesheet that:
- Uses Flexbox for layout and grid where appropriate
- Defines a consistent design system with CSS variables
- Is mobile-first and responsive (clear breakpoints)
- Includes accessible focus/hover states and small performance optimizations

Getting started
- Create styles.css and link it into your Day 1 index.html.
- Work mobile-first: design for small screens then add breakpoints.

Instructions

Step 1 — Reset & Base (15m)
- Add a modern reset and sensible base styles. Ensure accessible defaults (smooth font rendering, reduced-motion support).

```css
/* RESET & BASE */
*,
*::before,
*::after { box-sizing: border-box; }
* { margin: 0; padding: 0; }

html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    min-height: 100vh;
    line-height: 1.6;
    font-family: var(--font-primary);
    font-size: var(--font-size-base);
    color: var(--color-text);
    background: var(--color-background);
}

img, picture, svg { max-width: 100%; display: block; height: auto; }

@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
}
```

Step 2 — Design Tokens (20m)
- Define variables at :root for colors, type, spacing, radii, shadows and transitions. Keep them descriptive and consistent.

```css
/* DESIGN SYSTEM VARIABLES */
:root {
    --color-primary: #2563eb;
    --color-primary-dark: #1d4ed8;
    --color-accent: #10b981;
    --color-text: #1f2937;
    --color-text-light: #6b7280;
    --color-background: #ffffff;
    --color-background-alt: #f9fafb;
    --color-border: #e5e7eb;

    --font-primary: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    --font-heading: 'Poppins', var(--font-primary);
    --font-mono: 'Fira Code', ui-monospace, 'Courier New', monospace;

    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;

    --radius-md: 0.5rem;
    --shadow-md: 0 4px 6px rgba(0,0,0,0.08);
    --transition-fast: 150ms ease-in-out;

    --container-lg: 1024px;
    --z-sticky: 1020;
}
```

Step 3 — Typography (15m)
- Create a clear heading scale, readable body text and accessible link / focus styles.

```css
/* TYPOGRAPHY */
h1,h2,h3,h4 { font-family: var(--font-heading); color: var(--color-text); line-height: 1.25; margin-bottom: var(--space-lg); }
h1 { font-size: 2.25rem; }
h2 { font-size: 1.75rem; }
p { margin-bottom: var(--space-md); color: var(--color-text-light); }

a { color: var(--color-primary); text-decoration: none; transition: color var(--transition-fast); }
a:hover, a:focus { color: var(--color-primary-dark); text-decoration: underline; }
a:focus-visible { outline: 3px solid rgba(37,99,235,0.15); outline-offset: 2px; border-radius: 4px; }
```

Step 4 — Utilities (15m)
- Provide small utility classes and a responsive container to speed layout work.

```css
/* UTILITIES */
.container { width: 100%; max-width: var(--container-lg); margin: 0 auto; padding: 0 var(--space-md); }
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.gap-md { gap: var(--space-md); }

.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); border: 0; white-space: nowrap; }
.skip-link { position: absolute; top: -9999px; left: 0; }
.skip-link:focus { top: 0; left: 0; }
```

Step 5 — Header & Nav (30m)
- Use Flexbox for the header: brand left, navigation right. Implement a simple accessible mobile menu toggle.

```css
/* HEADER & NAV */
header {
    border-bottom: 1px solid var(--color-border);
    position: sticky; top: 0; z-index: var(--z-sticky);
    background: var(--color-background);
}

header > .container { display: flex; align-items: center; justify-content: space-between; padding: var(--space-md) 0; }

nav[aria-label="Main"] ul { display: flex; gap: var(--space-md); list-style: none; }
#mobile-menu-toggle { display: none; }

@media (max-width: 768px) {
    #mobile-menu-toggle { display: inline-flex; }
    nav[aria-label="Main"] { position: absolute; top: 100%; left: 0; right: 0; background: var(--color-background); max-height: 0; overflow: hidden; transition: max-height 300ms ease; }
    nav[aria-label="Main"].active { max-height: 400px; }
    nav[aria-label="Main"] ul { flex-direction: column; padding: var(--space-md); gap: 0; }
}
```

Step 6 — Hero (25m)
- Build a flexible hero using Flexbox; stack content on smaller viewports.

```css
/* HERO */
#hero { padding: var(--space-xl) 0; background: linear-gradient(135deg,var(--color-background),var(--color-background-alt)); }

#hero > .container { display: flex; align-items: center; gap: var(--space-lg); }
#hero .hero-content { flex: 1; }
#hero figure { flex-shrink: 0; width: 360px; height: 360px; border-radius: 9999px; overflow: hidden; }

@media (max-width: 1024px) { #hero > .container { flex-direction: column-reverse; text-align: center; } }
@media (max-width: 640px) { #hero figure { width: 200px; height: 200px; } .cta { width: 100%; justify-content: center; } }
```

Step 7 — Sections & Cards (30m)
- Use grid for collections and Flexbox inside cards. Keep hover and focus interactions subtle and accessible.

```css
/* SECTIONS */
section { padding: var(--space-xl) 0; }
section:nth-child(even) { background: var(--color-background-alt); }

#projects > .container { display: grid; gap: var(--space-xl); grid-template-columns: 1fr; }
@media (min-width: 1024px) { #projects > .container { grid-template-columns: repeat(2, 1fr); } }

article { background: var(--color-background); border-radius: var(--radius-md); box-shadow: var(--shadow-md); overflow: hidden; display: flex; flex-direction: column; transition: transform var(--transition-fast); }
article:hover, article:focus-within { transform: translateY(-6px); box-shadow: 0 10px 20px rgba(0,0,0,0.08); }
```

Step 8 — Contact Form (25m)
- Style form controls accessibly: clear label associations, visible focus, and mobile-friendly layout.

```css
/* CONTACT FORM */
form { max-width: 720px; margin: 0 auto; padding: 0 var(--space-md); }
label { display: block; margin-bottom: 0.25rem; font-weight: 600; }
input, select, textarea {
    width: 100%;
    padding: var(--space-md);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-md);
}
input:focus, textarea:focus { border-color: var(--color-primary); box-shadow: 0 0 0 4px rgba(37,99,235,0.08); outline: none; }
button[type="submit"] { width: 100%; padding: var(--space-lg); background: var(--color-primary); color: white; border: none; border-radius: var(--radius-md); }
```

Footer
- Keep a compact footer with clear links, readable text and adequate contrast.

```css
/* FOOTER */
footer { background: var(--color-text); color: #fff; padding: var(--space-lg) 0; }
footer nav a { color: rgba(255,255,255,0.85); }
```

Accessibility & Performance Checklist
- Semantic HTML + ARIA where needed
- Focus-visible for keyboard users
- Reduced-motion support
- Optimized images (srcset, modern formats) and critical CSS minimized
- Use CSS transitions sparingly and prefer transform/opacity

Evaluation Criteria (summary)
- Flexbox & layout correctness
- Mobile-first responsive behavior
- Design system & token usage
- Visual polish and accessibility
- Documentation and project organization

Deliverables & Checklist
- styles.css linked and committed
- CSS variables and design tokens defined
- Mobile, tablet and desktop screenshots
- css-documentation.md describing layout choices and breakpoints
- README with how to run and test

Good luck — iterate often, test with devtools and assistive technologies, and keep CSS modular and well-commented.
