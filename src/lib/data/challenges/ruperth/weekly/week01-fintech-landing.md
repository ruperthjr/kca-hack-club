---
title: "Fintech Landing: Responsive Marketing Site"
description: "Design, build, and deploy a production-ready, conversion-focused marketing site for a fintech product with accessible, performant UI and smooth interactions."
difficulty: "advanced"
unit: "Week 1 Challenge"
day: null
week: 1
month: 1
technologies:
  - "HTML5"
  - "CSS3"
  - "JavaScript"
  - "Responsive Design"
  - "CSS Animations"
  - "GitHub Pages"
learningOutcomes:
  - "Design conversion-focused landing pages"
  - "Implement performant CSS animations and interactions"
  - "Build responsive layouts with Grid and Flexbox"
  - "Create interactive UI with vanilla JavaScript"
  - "Optimize for production performance"
estimatedTime: "8–12 hours"
requirements:
  - "Solid HTML/CSS skills"
  - "JavaScript fundamentals"
  - "Responsive design knowledge"
  - "Basic Git/GitHub usage"
deliverables:
  - "Deployed marketing site (≥5 sections) with a live URL"
  - "Responsive layout tested on multiple devices"
  - "Interactive features and smooth animations"
  - "GitHub repo with clean commits and README"
resources:
  - name: "Modern CSS Techniques"
    url: "https://moderncss.dev/"
  - name: "Web Animation Guide"
    url: "https://web.dev/animations/"
  - name: "Responsive Web Design Basics"
    url: "https://web.dev/responsive-web-design-basics/"
  - name: "Deploying to GitHub Pages"
    url: "https://docs.github.com/en/pages"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-12"
unlockDate: "2026-02-12"
---

# Fintech Marketing Site Challenge

## Overview
Build a polished, accessible, and high-performance landing site for a fictional fintech product (payments, investing, budgeting, or crypto). Focus on clear conversion paths, responsive layout, and smooth micro‑interactions that improve trust and usability.

## Objective
Create and deploy a multi-section marketing site (hero, features, how‑it‑works, pricing, testimonials, CTA) that is responsive, accessible, animated where appropriate, and optimized for production.

## Prerequisites
- HTML & semantic markup
- CSS layout (Grid, Flexbox), responsive techniques
- JavaScript for DOM manipulation and small UI logic
- Git and GitHub for version control and deployment

## Instructions

### Part 1: Structure & Markup
- Build distinct, semantic sections: header/nav, hero, features, how‑it‑works, pricing, testimonials, CTA, footer.
- Ensure headings follow a clear hierarchy and all interactive elements are keyboard accessible.
- Include alt text for images and aria labels where necessary.
- Add trust indicators (logos, security notes, stats) near primary CTAs.

Example: smooth internal navigation
```javascript
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
```

### Part 2: Styling & Responsiveness
- Use CSS variables for theming and clamp() for fluid typography.
- Create a responsive features grid (3 → 2 → 1 columns) and a pricing layout that stacks on small screens.
- Implement accessible components: focus states, visible labels, sufficient color contrast.
- Add subtle, performant animations (transforms, opacity) and avoid layout-thrashing transitions.

Example CSS variables
```css
:root{
  --primary:#6366f1; --accent:#ec4899; --bg:#fff;
  --font-heading:'Inter',sans-serif; --transition:0.3s;
}
```

### Part 3: Interactivity, Performance & Deployment
- Use IntersectionObserver for reveal animations and any count-up effects.
- Implement a pricing toggle (monthly ↔ annual) that updates UI and shows savings.
- Validate the contact/demo form on the client with real-time feedback and a clear success state.
- Optimize images (WebP), lazy-load offscreen assets, and minify CSS/JS.
- Deploy to GitHub Pages (or Netlify) and include the live URL in the repo README.

## Deliverables
1. Live site URL (deployed) — accessible and responsive.
2. GitHub repository with source, README (setup, tech, screenshots, live link).
3. Short notes on design choices, accessibility decisions, and performance metrics.

## Evaluation Criteria

| Criteria | Weight | Description |
|---------|--------|-------------|
| Design & Responsiveness | 30% | Visual hierarchy, layout across breakpoints, mobile usability |
| Interactivity & Accessibility | 30% | Smooth animations, form UX, keyboard/ARIA support |
| Code Quality & Performance | 40% | Semantic HTML, maintainable CSS/JS, Lighthouse metrics and optimizations |

## Tips & Common Mistakes
- Use transforms and opacity for animations (avoid animating width/height).
- Test keyboard navigation and screen-reader labels early.
- Don’t ship large images — compress and lazy-load.
- Keep pricing toggle logic simple and test edge cases (currency/format).
- Commit incrementally with descriptive messages.

## Bonus Challenges (Optional)
1. Add an A/B hero variant and document which performs better (brief hypothesis + results).
2. Implement an accessible, keyboard-friendly testimonial carousel with reduced-motion support.

## Submission
- Push code to a public GitHub repo and include a README with live demo link and screenshots.
- Share the live URL and repo URL where requested (project board or assignment platform).  
- Optional: include short performance metrics (Lighthouse scores) and design notes.
