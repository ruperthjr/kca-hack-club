---
title: "Personal Portfolio Website with Bio and Project Goals"
description: "Design and deploy a responsive, accessible static website that showcases your biography, interests, and semester goals."
difficulty: "beginner"
unit: "Week 1 Project: Web Design Technology and Internet Applications"
week: 1
technologies:
    - "HTML5"
    - "CSS3"
    - "Responsive Design"
    - "GitHub Pages"
    - "Web Accessibility"
learningOutcomes:
    - "Use semantic HTML to structure content"
    - "Style layouts and typography with CSS"
    - "Build responsive layouts across device sizes"
    - "Deploy a site using GitHub Pages"
    - "Apply basic accessibility best practices"
estimatedTime: "6-8 hours"
requirements:
    - "Basic HTML knowledge (tags, attributes)"
    - "Familiarity with CSS selectors and properties"
    - "GitHub account for deployment"
    - "Text editor (VS Code recommended)"
deliverables:
    - "Three-page website: index.html, bio.html, projects.html"
    - "Fully responsive design (mobile, tablet, desktop)"
    - "Consistent navigation with active state"
    - "Deployed to GitHub Pages with public URL"
    - "README with project documentation and screenshots"
resources:
  - name: "MDN Web Docs — HTML Reference"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  - name: "MDN Web Docs — CSS Reference"
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  - name: "Google Developers — Responsive Web Design"
    url: "https://developers.google.com/web/fundamentals/design-and-ux/responsive"
  - name: "GitHub Pages Documentation"
    url: "https://docs.github.com/en/pages"
  - name: "W3C WCAG (Accessibility Guidelines)"
    url: "https://www.w3.org/WAI/standards-guidelines/wcag/"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Personal Portfolio Website Project

## Overview
Create a clean, accessible, and responsive three-page portfolio that introduces your professional identity, background, skills, and semester project goals. Focus on semantic markup, responsive layouts, and a polished, deployable site.

## Objectives
- Build a three-page static site: Home, Bio, Projects
- Showcase biography, technical skills, and semester goals
- Demonstrate responsive design and accessibility
- Deploy the site using GitHub Pages

## Recommended File Structure
```
portfolio/
├── index.html
├── bio.html
├── projects.html
├── css/
│   ├── variables.css
│   ├── style.css
│   └── responsive.css
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

## Project Phases

### Phase 1 — Plan & Gather (1–2 hours)
- Define content for each page:
    - Home: headline, tagline, CTA
    - Bio: education, timeline, skills, interests
    - Projects: semester goals, tech stack, ideas
- Collect assets: profile photo/avatar, GitHub/LinkedIn links, screenshots

### Phase 2 — HTML Structure (2–3 hours)
Core requirements:
- Use semantic elements: header, nav, main, section, article, footer
- Include a consistent navigation with an active state
- Add meaningful alt text and meta viewport tag

### Phase 3 — CSS Styling (2–3 hours)
CSS architecture example:
```css
/* variables.css */
:root {
    --primary: #2563eb;
    --accent: #7c3aed;
    --text: #1f2937;
    --muted: #6b7280;
    --bg: #ffffff;
    --surface: #f9fafb;
    --font-heading: 'Inter', sans-serif;
    --font-body: 'Inter', sans-serif;
}
```
Key features:
- Mobile-first responsive styles
- CSS Grid/Flexbox for layout
- Custom properties for theme consistency
- Hover/focus states for interactive elements
- Proper spacing and visual hierarchy

### Phase 4 — Responsive Behavior (1–2 hours)
Breakpoints:
- Mobile: 320–639px
- Tablet: 640–1023px
- Desktop: 1024px+

Adjustments:
- Hamburger navigation on small screens
- Stacked columns on mobile
- Scalable images and touch-friendly controls

### Phase 5 — Deploy & Validate (≈1 hour)
- Create repo (username.github.io)
- Push code and enable GitHub Pages
- Validate HTML/CSS, test across browsers and devices
- Verify links, images, and no console errors

## Evaluation Criteria
- HTML structure & accessibility — 25%
- CSS quality & responsiveness — 25%
- Content & design clarity — 20%
- Functionality (navigation, responsiveness) — 15%
- Deployment & documentation — 15%

## Common Mistakes to Avoid
- Non-semantic markup (excessive divs)
- Inline styles or hard-coded widths
- Missing viewport/meta tags and alt text
- Poor color contrast or uncompressed images
- Broken internal links or missing navigation on pages

## Bonus Challenges
- Dark/light mode toggle
- Smooth scroll navigation
- CSS animations or scroll-triggered reveals
- Print-friendly styles and social meta tags
- Contact form (Formspree or static)

## Submission Checklist
- Three semantic HTML pages
- External CSS files and responsive design
- Working navigation and no broken links
- Live site URL (https://username.github.io)
- README with description, setup, screenshots, and reflection
- Clean commit history and commented code

Tips: Start mobile-first, test frequently, and prioritize accessibility (alt text, keyboard nav, contrast).
