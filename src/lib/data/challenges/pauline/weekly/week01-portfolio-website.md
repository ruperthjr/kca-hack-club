---
title: "Professional Portfolio Website"
description: "Design, build, and deploy a responsive, accessible multi‑page portfolio that showcases your skills, projects, and professional communication."
difficulty: "beginner"
unit: "Week 1 Project: Communication Skills"
day: null
week: 1
month: 1
technologies:
    - "HTML5"
    - "CSS3"
    - "JavaScript (ES6+)"
    - "Flexbox & CSS Grid"
    - "Responsive Design"
    - "Git & GitHub"
    - "GitHub Pages"
    - "Web Accessibility (WCAG)"
learningOutcomes:
    - "Create semantic, accessible multi‑page HTML structure"
    - "Build responsive layouts using Flexbox and Grid"
    - "Add interactivity with vanilla JavaScript (navigation, forms)"
    - "Use Git for version control and deploy via GitHub Pages"
    - "Optimize assets and ensure basic performance and accessibility"
estimatedTime: "6-8 hours"
requirements:
    - "Familiarity with basic HTML and CSS"
    - "Basic JavaScript (DOM manipulation, events)"
    - "Git and GitHub account; git installed locally"
    - "Code editor (VS Code recommended) and terminal"
    - "Project screenshots and a profile image or avatar"
deliverables:
    - "Live, deployed portfolio on GitHub Pages (3+ pages)"
    - "GitHub repository with clear commits and README"
    - "Responsive navigation, project showcase, and contact form"
    - "Accessible markup, optimized assets, and no console errors"
resources:
  - name: "MDN Web Docs — HTML, CSS, JavaScript"
    url: "https://developer.mozilla.org/en-US/docs/Web"
  - name: "GitHub Pages Documentation"
    url: "https://docs.github.com/en/pages"
  - name: "W3C Web Accessibility (WCAG) Overview"
    url: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  - name: "CSS-Tricks — A Complete Guide to Flexbox"
    url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
  - name: "Squoosh — Image compression tool"
    url: "https://squoosh.app/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Professional Portfolio Website

## Overview

Design and deploy a polished, responsive portfolio that communicates your skills, projects, and professional story. The project emphasizes accessible HTML, clean responsive CSS, lightweight JavaScript for interactivity, and deployment via GitHub Pages.

## Objective

Build a multi‑page, responsive portfolio that includes a home/hero, about, projects, and contact page — deployed and publicly accessible.

## Prerequisites

- Basic HTML and CSS knowledge
- Introductory JavaScript (DOM/events)
- Git and GitHub account
- Code editor (VS Code recommended)
- Images/screenshots for project entries

## Instructions

### Part 1: Content strategy and planning
- Define brand: headline, 2–3 primary colors, typography pairings, and tone.
- Plan pages and content: Home, About, Projects (3+), Contact.
- Wireframe layout (paper or Figma) for desktop and mobile.
- Collect assets: headshot, project screenshots, short project descriptions, resume.

### Part 2: Build and implement
- Create file structure:
    portfolio/
    ├── index.html
    ├── about.html
    ├── projects.html
    ├── contact.html
    ├── css/
    ├── js/
    └── assets/
- Semantic HTML: use header, nav, main, article, section, footer, form with labels and aria attributes where needed.
- CSS architecture: variables.css, typography.css, layout.css, components.css, responsive.css. Mobile‑first breakpoints at 768px and 1024px.
- Key UI elements:
    - Sticky header with accessible hamburger menu
    - Hero section with CTA
    - Project cards with consistent layout and hover focus states
    - Contact form with client-side validation
- Minimal JS:
    - Toggle mobile menu (classList.toggle)
    - Smooth scroll for in‑page anchors
    - Simple form validation and accessible error messages
- Accessibility and performance: alt text, color contrast ≥4.5:1, loading="lazy" on images, compressed assets.

### Part 3: Deploy, test, and polish
- Initialize git, commit, push to GitHub repository named username.github.io or a project repo with gh-pages.
- Enable GitHub Pages and verify live URL.
- Test on mobile widths and keyboard navigation.
- Optimize: compress images, minify CSS/JS, remove console errors.
- Write README with description, live URL, setup, screenshots, technologies, and notes on design decisions.

## Deliverables

1. Live site URL (e.g., https://username.github.io) with all pages functional  
2. GitHub repository containing source, README, and clear commit history  
3. Evidence of accessibility and performance checks (short notes in README)

## Evaluation Criteria

| Criteria | Weight | Description |
|---------|--------:|-------------|
| HTML structure & accessibility | 25% | Semantic markup, ARIA where appropriate, alt text |
| CSS quality & responsiveness | 25% | Consistent design, responsive layouts, reusable styles |
| Content & communication | 20% | Clear messaging, professional presentation, branding |
| Functionality & interactivity | 15% | Navigation, form behavior, JS features work reliably |
| Deployment & polish | 15% | Live site, optimized assets, README and repo hygiene |

## Tips & Common Mistakes

- Plan content before coding to avoid layout rework
- Start mobile‑first and progressively enhance for larger screens
- Avoid inline styles; keep CSS modular
- Always include alt text and test keyboard navigation
- Compress images to reduce load time

## Bonus Challenges (Optional)

1. Dark/light mode toggle with saved preference
2. Add a project filter or simple CMS-like markdown-driven blog section

## Submission

Push the final code to GitHub, ensure the site is deployed, then submit the live URL and repository link. Include a short README section listing implemented accessibility checks and any known issues.
