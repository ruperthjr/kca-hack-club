---
title: "Responsive HTML5 Portfolio Page"
description: "Build a semantic, accessible, and SEO-friendly HTML5 portfolio page"
difficulty: "intermediate"
unit: "Unit 1: Web Technologies and Internet Applications"
day: 1
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
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Responsive HTML5 Portfolio Page

## Overview

This challenge is about building a semantic, accessible, and SEO-friendly portfolio page using HTML5. Focus on structure, meaningful markup, and accessibility — not visual styling. The HTML you create will be styled in a future exercise.

## Objective

Produce a single valid HTML5 page that:
- Uses semantic elements and correct heading hierarchy
- Includes accessible form elements ready for validation
- Implements basic SEO meta tags and simple structured data
- Passes W3C validation and scores highly on accessibility audits

## Instructions

### Step 1: Document Setup & Head

Create `index.html` with an HTML5 doctype and a complete `<head>` including:
- lang attribute on `<html>`
- charset and viewport meta tags
- descriptive title and meta description
- Open Graph and Twitter Card tags (examples)
- favicon link

Example head snippet:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="description" content="Portfolio of Your Name — Full‑Stack Developer specializing in Flutter & AI/ML">
    <title>Your Name — Developer Portfolio</title>
    <link rel="icon" href="favicon.png" type="image/png">
    <!-- Open Graph & Twitter meta tags (optional placeholders) -->
</head>
```

### Step 2: Semantic Page Structure

Use semantic regions and a single `<main>`:

```html
<body>
    <a class="skip-link" href="#main-content">Skip to main content</a>

    <header>...</header>

    <main id="main-content">
        <section id="hero">...</section>
        <section id="about">...</section>
        <section id="projects">...</section>
        <section id="skills">...</section>
        <section id="contact">...</section>
    </main>

    <footer>...</footer>
</body>
```

Use `<article>` for self-contained projects and `<aside>` for tangential info.

### Step 3: Accessible Navigation

Provide a clear nav with list semantics and ARIA where needed:

```html
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
```

Ensure keyboard navigation and descriptive link text.

### Step 4: Hero Section

Keep one H1 in the header; use H2 for the hero:

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

Include alt text and size attributes to reduce layout shift.

### Step 5: About Section

Use semantic text, lists, and definition lists for education/certifications.

### Step 6: Projects Section (40 min)

Wrap each project in an `<article>` and include schema.org markup if desired:

- Use <h3> for project titles
- Add descriptive images with figcaption
- Use external links with rel="noopener noreferrer" and target="_blank"
- Lazy-load non-critical images with loading="lazy"

Example project header:

```html
<article itemscope itemtype="https://schema.org/CreativeWork">
    <header>
        <h3 itemprop="name">AI-Powered Document Analysis</h3>
        <p itemprop="description">RAG system with embeddings and Pinecone vector DB.</p>
    </header>
    ...
</article>
```

### Step 7: Skills Section

Group skill categories into semantic blocks or articles with lists.

### Step 8: Contact Form

Build an accessible form skeleton with labels, required indicators, and error containers:

- Use <label for="...">, appropriate input types, autocomplete attributes
- Mark required fields with <abbr title="required">*</abbr> and aria-required
- Provide aria-describedby linking to error message elements with role="alert"

Example:

```html
<form action="/submit-contact" method="POST" novalidate>
    <label for="name">Full Name <abbr title="required">*</abbr></label>
    <input id="name" name="name" type="text" required autocomplete="name" aria-describedby="name-error">
    <span id="name-error" class="error" role="alert"></span>
    ...
    <button type="submit">Send Message</button>
</form>
```

Include alternative contact methods in an `<aside>`.

### Step 9: Footer (10 min)

Include site info, footer nav (with aria-label), contact links, and copyright:

- Use `<time>` for the current year
- Place small print in `<small>`

### Step 10: Validation & Accessibility Testing

W3C Validation:
- Use https://validator.w3.org/ and fix all errors/warnings
- Save a screenshot of successful validation

Accessibility:
- Use WAVE (https://wave.webaim.org/) or Lighthouse (DevTools → Lighthouse)
- Aim for 90+ accessibility score and resolve critical issues
- Save a screenshot of the report

Common issues to check:
- Missing alt text
- Empty links or buttons
- Missing form labels
- Heading hierarchy errors
- Missing lang attribute

### Step 11: Documentation

Create `semantic-choices.md` (200–300 words) describing key semantic and accessibility choices:
- Header/nav rationale
- Sectioning and heading hierarchy
- Form accessibility decisions
- Image and figure usage
- Any schema.org or ARIA choices

Use the following project structure for submission:

```
portfolio-html-[yourname]/
├── index.html
├── semantic-choices.md
├── validation/
│   ├── w3c-validation.png
│   └── accessibility-report.png
└── README.md
```

## Evaluation Criteria (summary)

- Semantic structure and heading hierarchy
- Accessibility and ARIA usage
- W3C validation (0 errors) and accessibility score (90+)
- Complete required sections and professional content
- Documentation of semantic choices (200–300 words)

## Tips & Common Mistakes

- Validate early and often
- Use semantic elements, not <div> for everything
- Do not skip heading levels
- Provide alt text for all images
- Associate labels with inputs
- Test keyboard navigation and screen readers

Good luck — build semantics first, style later.
