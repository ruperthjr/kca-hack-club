---
title: "Responsive HTML5 Portfolio Page"
description: "Build a semantic, accessible, and SEO-friendly HTML5 portfolio page"
difficulty: "intermediate"
unit: "Unit 1: Web Technologies and Internet Applications"
day: 1
week: 1
month: 1
technologies:
    - "HTML5"
    - "Semantic Markup"
    - "Web Accessibility"
    - "SEO Best Practices"
learningOutcomes:
    - "Use semantic HTML5 elements and proper document structure"
    - "Maintain correct heading hierarchy and ARIA landmarks"
    - "Build accessible forms with validation hooks"
    - "Apply SEO meta tags and basic structured data"
    - "Create a mobile-responsive HTML foundation"
estimatedTime: "2–3 hours"
requirements:
    - "Text editor or IDE (VS Code recommended)"
    - "Web browser with developer tools"
    - "Basic HTML familiarity"
    - "Access to W3C Markup Validation Service"
deliverables:
    - "index.html with semantic markup"
    - "Screenshot of successful W3C validation"
    - "Accessibility report (WAVE or Lighthouse)"
    - "semantic-choices.md (200–300 words)"
resources:
  - name: "MDN HTML Element Reference"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
  - name: "W3C Markup Validation Service"
    url: "https://validator.w3.org/"
  - name: "WebAIM: Semantic Structure"
    url: "https://webaim.org/articles/semanticstructure/"
  - name: "WAVE Accessibility Tool"
    url: "https://wave.webaim.org/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Responsive HTML5 Portfolio Page

## Overview

Create a single-page HTML5 portfolio that demonstrates semantic structure, accessibility, and SEO best practices. This challenge emphasizes meaningful markup and inclusive design, laying a solid foundation for future styling and enhancements.

## Objective

Build a valid, accessible, and SEO-friendly portfolio page using semantic HTML5 elements, correct heading hierarchy, accessible navigation and forms, and basic SEO meta tags. The page should pass W3C validation and score highly on accessibility audits.

## Prerequisites

- Basic knowledge of HTML5 and semantic elements
- Familiarity with accessibility concepts
- Access to a text editor or IDE and a modern web browser
- Ability to use online validation and accessibility tools

## Instructions

### Part 1: Document Structure & Head

- Create `index.html` with `<!DOCTYPE html>` and `<html lang="en">`
- Add `<head>` with charset, viewport, descriptive title, meta description, favicon, and example Open Graph/Twitter Card tags

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="description" content="Portfolio of Your Name — Full‑Stack Developer specializing in Flutter & AI/ML">
    <title>Your Name — Developer Portfolio</title>
    <link rel="icon" href="favicon.png" type="image/png">
    <!-- Open Graph & Twitter meta tags -->
</head>
```

### Part 2: Semantic Layout & Navigation

- Structure the page using `<header>`, `<main>`, `<section>`, `<footer>`, and ARIA landmarks
- Implement a skip link, accessible navigation with list semantics, and a mobile menu button

```html
<body>
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <header>
        <h1><a href="/" aria-label="Home — Your Name">YN <span>Your Name</span></a></h1>
        <nav aria-label="Main navigation" id="main-navigation">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <button id="mobile-menu-toggle" aria-expanded="false" aria-controls="main-navigation" aria-label="Toggle navigation">
            <span aria-hidden="true">☰</span>
        </button>
    </header>
    <main id="main-content">
        <!-- Sections go here -->
    </main>
    <footer>
        <!-- Footer content -->
    </footer>
</body>
```

### Part 3: Content Sections & Accessibility

- Add the following sections inside `<main>`: Hero, About, Projects, Skills, Contact
- Use semantic elements: `<section>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`
- For Projects, wrap each in `<article>` and use schema.org markup if desired
- Build an accessible contact form with labels, required indicators, and error containers
- Ensure all images have descriptive alt text and appropriate attributes

```html
<section id="hero" aria-labelledby="hero-heading">
    <div>
        <h2 id="hero-heading">Full-Stack Developer & AI Engineer</h2>
        <p>Building intelligent mobile apps with Flutter and scalable AI systems.</p>
        <a href="#projects" class="cta-primary">View My Work</a>
        <a href="#contact" class="cta-secondary">Get in Touch</a>
    </div>
    <figure>
        <img src="images/profile.jpg" alt="Professional headshot of Your Name" width="400" height="400" loading="eager">
        <figcaption class="visually-hidden">Your Name — Developer</figcaption>
    </figure>
</section>
```

- Validate your HTML using https://validator.w3.org/
- Run accessibility checks with WAVE or Lighthouse and resolve issues

## Deliverables

1. `index.html` with semantic, accessible markup
2. Screenshot of successful W3C validation
3. Accessibility report screenshot (WAVE or Lighthouse)
4. `semantic-choices.md` (200–300 words) explaining key semantic and accessibility decisions

## Evaluation Criteria

| Criteria                       | Weight | Description                                      |
|---------------------------------|--------|--------------------------------------------------|
| Semantic structure & headings   | 40%    | Proper use of HTML5 elements and heading order   |
| Accessibility & ARIA usage      | 30%    | Navigation, forms, and content are accessible    |
| Validation & documentation      | 30%    | Passes W3C, high accessibility, clear rationale  |

## Tips & Common Mistakes

- Validate early and often
- Use semantic elements, not `<div>` for structure
- Do not skip heading levels
- Provide alt text for all images
- Associate labels with inputs
- Test keyboard navigation and screen readers

## Bonus Challenges (Optional)

1. Add schema.org structured data to projects or contact info
2. Implement a responsive mobile menu with accessible toggling

## Submission

Submit a folder named `portfolio-html-[yourname]/` containing:
- `index.html`
- `semantic-choices.md`
- `validation/w3c-validation.png`
- `validation/accessibility-report.png`
- `README.md`
