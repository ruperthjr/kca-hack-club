---
title: "Fintech Landing: Responsive Marketing Site"
description: "Design, build, and deploy a production-ready marketing site for a fintech startup with modern UI, smooth animations, and conversion-focused UX."
difficulty: "advanced"
unit: "Week 1 Challenge"
week: 1
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
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Fintech Marketing Site Challenge

## Overview
Build a polished, conversion-focused landing site for a fictional fintech product (payment processor, investing app, budgeting tool, or crypto exchange). Emphasize performance, accessibility, and measurable conversion points (CTAs, lead capture).

## Objective
Design and deploy a multi-section marketing site that includes: hero, features, how-it-works, pricing, testimonials, and a final CTA/lead capture form. The site must be responsive, accessible, and production-ready.

## Quick Start / Project Structure
Suggested layout:
```
fintech-landing/
├── index.html
├── css/
├── js/
├── assets/
└── README.md
```

## Core Sections & Requirements

- Hero
  - H1, subheadline, primary/secondary CTAs, hero media, trust indicators
  - Full viewport height, fade-in on load, responsive typography

- Features Grid
  - 6–9 feature cards with icons, descriptions
  - Grid: 3 → 2 → 1 columns, subtle hover lift, staggered on scroll

- How It Works
  - 3–5 steps (horizontal timeline desktop, vertical mobile)
  - Animated progression line, scroll-triggered reveals

- Pricing
  - 3 tiers (Starter / Growth / Enterprise) with monthly/annual toggle
  - Featured tier styling, responsive layout, savings display

- Testimonials
  - 3–6 testimonials (photo, name, role, quote), slider or grid

- CTA / Contact Form
  - Strong headline, email/demo form, success state, validation

## Interactivity (must-haves)
- Smooth scroll for internal nav (example)
```javascript
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
```
- Intersection Observer for reveal animations and count-ups
- Pricing toggle that updates prices and shows savings
- Client-side form validation with real-time feedback

## Styling & Accessibility
- Use CSS variables for theming and clamp() for fluid type:
```css
:root{
  --primary:#6366f1; --accent:#ec4899; --bg:#fff;
  --font-heading:'Inter',sans-serif; --transition:0.3s;
}
```
- Semantic HTML, keyboard accessible controls, alt text for images, sufficient color contrast

## Performance & Deployment
- Optimize images (WebP), lazy-load below the fold, minimize CSS/JS, use caching headers
- Target: Lighthouse Performance &gt; 90, FCP &lt; 1.5s
- Deploy to GitHub Pages or Netlify; include live demo URL in the README

## Evaluation Criteria
- Design quality and visual hierarchy
- Responsiveness and touch-friendly interactions
- Interactive features and smooth animations
- Code quality: semantic HTML, reusable CSS, well-structured JS
- Performance and conversion optimization

## Submission
- Live site URL
- GitHub repo URL with README (project overview, tech stack, setup, screenshots)
- Optional: short notes on design choices and performance metrics

## Checklist
- [ ] Hero with CTAs and trust indicators
- [ ] Responsive features grid
- [ ] How It Works timeline with animations
- [ ] Pricing table with monthly/annual toggle
- [ ] Testimonials section
- [ ] Contact/demo form with validation
- [ ] Smooth scroll nav and scroll-triggered animations
- [ ] Accessible markup and mobile-first design
- [ ] Optimized assets and deployed site
- [ ] README with live demo and screenshots

Good luck — build something that looks great, performs well, and converts.
