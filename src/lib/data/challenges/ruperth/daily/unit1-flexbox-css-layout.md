---
title: "CSS Flexbox Portfolio Layout"
description: "Build a modern, accessible, and responsive portfolio stylesheet using Flexbox, CSS variables, and media queries."
difficulty: "intermediate"
unit: "Unit 1: Web Technologies and Internet Applications"
day: 1
week: 1
month: 1
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

# CSS Flexbox Portfolio Layout

## Overview

Transform your semantic HTML portfolio into a polished, responsive website using CSS Flexbox. This challenge emphasizes clarity, accessibility, maintainability, and performance, guiding you to implement a scalable design system and mobile-first responsive patterns.

## Objective

Create a single, well-documented stylesheet that leverages Flexbox for layout, defines a consistent design system with CSS variables, supports mobile-first responsiveness, and includes accessible focus and hover states.

## Prerequisites

- Completed HTML portfolio page from Day 1
- Web browser with DevTools
- Familiarity with CSS selectors and layout concepts

## Instructions

### Part 1: Setup & Base Styles

- Create `styles.css` and link it to your portfolio HTML.
- Add a modern CSS reset and base styles for accessible defaults, including font smoothing and reduced-motion support.

```css
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
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
}
```

### Part 2: Design System & Layout

- Define CSS variables at `:root` for colors, typography, spacing, radii, shadows, and transitions.
- Implement utility classes for layout (e.g., `.flex`, `.container`, `.gap-md`).
- Use Flexbox for header, navigation, and hero sections. Apply grid for project cards and Flexbox within cards.
- Add responsive breakpoints for mobile, tablet, and desktop layouts.

```css
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

### Part 3: Accessibility & Responsive Enhancements

- Ensure all interactive elements have visible focus states.
- Use semantic HTML and ARIA where needed.
- Optimize images and minimize critical CSS.
- Test with keyboard navigation and assistive technologies.
- Add mobile menu toggle and responsive adjustments for navigation and hero sections.

## Deliverables

1. `styles.css` implementing the described layout and design system
2. Responsive screenshots (mobile, tablet, desktop)
3. `css-documentation.md` explaining design decisions and breakpoints

## Evaluation Criteria

| Criteria                        | Weight | Description                                      |
|----------------------------------|--------|--------------------------------------------------|
| Flexbox & layout correctness     | 40%    | Proper use of Flexbox and responsive layouts      |
| Design system & token usage      | 30%    | Consistent use of CSS variables and utilities     |
| Accessibility & documentation    | 30%    | Focus states, ARIA, and clear documentation       |

## Tips & Common Mistakes

- Work mobile-first and add breakpoints as needed
- Use descriptive variable names for design tokens
- Don’t forget focus-visible and reduced-motion support
- Avoid overusing !important and redundant selectors

## Bonus Challenges (Optional)

1. Add dark mode support using CSS variables
2. Animate navigation or hero section with accessible transitions

## Submission

Commit your `styles.css`, screenshots, and `css-documentation.md` to your repository. Submit the repository link as instructed.
