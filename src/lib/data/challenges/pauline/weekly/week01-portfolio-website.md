---
title: "Personal Portfolio Website"
description: "Deploy a professional portfolio showcasing your skills, projects, and career objectives"
difficulty: "beginner"
unit: "Week 1 Project: Communication Skills"
week: 1
technologies:
    - "HTML5"
    - "CSS3"
    - "JavaScript"
    - "Responsive Design"
    - "GitHub Pages"
learningOutcomes:
    - "Create semantic HTML structure for web content"
    - "Implement modern CSS layouts with Flexbox/Grid"
    - "Add interactive elements with JavaScript"
    - "Design responsive websites for all devices"
    - "Deploy and maintain a live web presence"
estimatedTime: "6-8 hours"
requirements:
    - "Basic HTML/CSS knowledge"
    - "Understanding of web development concepts"
    - "GitHub account for deployment"
    - "Text editor (VS Code recommended)"
deliverables:
    - "3+ page responsive portfolio website"
    - "Working navigation between all pages"
    - "Project showcase section"
    - "Contact information and social links"
    - "Live deployment on GitHub Pages"
resources:
    - name: "HTML and CSS: Design and Build Websites"
      url: "https://www.htmlandcssbook.com/"
    - name: "Learning Web Design"
      url: "https://learningwebdesign.com/"
    - name: "MDN Web Docs: HTML, CSS, and JavaScript"
      url: "https://developer.mozilla.org/en-US/docs/Web"
    - name: "GitHub Pages Documentation"
      url: "https://docs.github.com/en/pages"
    - name: "Web Accessibility Guidelines (WCAG)"
      url: "https://www.w3.org/WAI/standards-guidelines/wcag/"

completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Professional Portfolio Website Project

## Overview

Design and deploy a professional portfolio website that effectively communicates your skills, projects, and career aspirations. This project focuses on creating a strong online presence that showcases your technical abilities while demonstrating professional communication skills.

## Objective

Build a responsive, multi-page portfolio website that introduces you professionally, displays your projects, and provides contact information. The site should reflect your personal brand and serve as a foundation for your online presence as a computing professional.

## Instructions

### Phase 1: Content Strategy and Planning

**Define Your Personal Brand:**
- Professional headline/tagline
- Color scheme (2-3 primary colors + neutrals)
- Typography pairings (heading + body fonts)
- Tone of voice (professional, technical, creative)

**Content Outline:**
- **Home Page:** Hero section, brief introduction, call-to-action
- **About Page:** Detailed biography, skills, education, experience
- **Projects Page:** 3-5 project showcases with descriptions
- **Contact Page:** Contact form, social links, location info

**Gather Assets:**
- Professional headshot or avatar
- Academic and professional background details
- Project screenshots or mockups
- Social media profiles (GitHub, LinkedIn, etc.)
- Resume/CV for reference

### Phase 2: HTML Structure and Semantics

**File Structure:**
portfolio/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── css/
│ ├── reset.css
│ ├── variables.css
│ ├── typography.css
│ ├── layout.css
│ ├── components.css
│ └── responsive.css
├── js/
│ ├── main.js
│ └── form-validation.js
├── assets/
│ ├── images/
│ ├── icons/
│ └── projects/
└── README.md

text

**Semantic HTML Requirements:**
```html
<!-- Example structure for home page -->
<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Name | Portfolio</title>
        <link rel="stylesheet" href="css/styles.css">
</head>
<body>
        <header>
                <nav>
                        <a href="/" class="logo">YourName</a>
                        <ul class="nav-links">
                                <li><a href="about.html">About</a></li>
                                <li><a href="projects.html">Projects</a></li>
                                <li><a href="contact.html">Contact</a></li>
                        </ul>
                </nav>
        </header>
        
        <main>
                <section class="hero">
                        <h1>Hi, I'm Your Name</h1>
                        <p>Full-stack developer specializing in modern web technologies</p>
                        <a href="projects.html" class="cta-button">View My Work</a>
                </section>
                
                <section class="skills-overview">
                        <!-- Skills highlights -->
                </section>
                
                <section class="featured-projects">
                        <!-- Project previews -->
                </section>
        </main>
        
        <footer>
                <!-- Contact info and social links -->
        </footer>
        
        <script src="js/main.js"></script>
</body>
</html>
```

### Phase 3: CSS Styling and Layout

**CSS Architecture:**

```css
/* variables.css */
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #ec4899;
    --text-dark: #1f2937;
    --text-light: #6b7280;
    --background: #ffffff;
    --surface: #f9fafb;
    --border: #e5e7eb;
    
    --font-heading: 'Inter', system-ui, sans-serif;
    --font-body: 'Inter', system-ui, sans-serif;
    
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* typography.css */
body {
    font-family: var(--font-body);
    line-height: 1.6;
    color: var(--text-dark);
}

h1, h2, h3, h4 {
    font-family: var(--font-heading);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
}

h1 { font-size: clamp(2.5rem, 5vw, 3.5rem); }
h2 { font-size: clamp(2rem, 4vw, 2.5rem); }
h3 { font-size: clamp(1.5rem, 3vw, 2rem); }

/* layout.css */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.grid {
    display: grid;
    gap: 2rem;
}

@media (min-width: 768px) {
    .grid-2 { grid-template-columns: repeat(2, 1fr); }
    .grid-3 { grid-template-columns: repeat(3, 1fr); }
    .grid-4 { grid-template-columns: repeat(4, 1fr); }
}
```

**Key Components to Style:**

- Navigation: Fixed or sticky header, mobile hamburger menu
- Hero Section: Full-height or compact, with attention-grabbing elements
- Project Cards: Consistent styling with hover effects
- Skill Tags: Badges or pills for technologies
- Contact Form: Clean, accessible form styling
- Footer: Social links, copyright, additional navigation

### Phase 4: Responsive Design and Interactivity

**Mobile-First Approach:**

- Start with mobile styles (320px+)
- Add tablet breakpoints (768px+)
- Add desktop enhancements (1024px+)

**Responsive Navigation:**

```css
/* Mobile menu */
@media (max-width: 767px) {
    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        width: 80%;
        background: var(--background);
        flex-direction: column;
        padding: 6rem 2rem;
        transition: right 0.3s ease;
    }
    
    .nav-links.active {
        right: 0;
    }
    
    .hamburger {
        display: block;
        cursor: pointer;
    }
}
```

**JavaScript Interactivity:**

```javascript
// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]');
        const message = this.querySelector('textarea');
        
        let isValid = true;
        
        // Email validation
        if (!email.value || !isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Message validation
        if (!message.value || message.value.trim().length < 10) {
            showError(message, 'Message must be at least 10 characters');
            isValid = false;
        }
        
        if (isValid) {
            // Form submission logic
            this.submit();
        }
    });
}
```

### Phase 5: Deployment and Optimization

**GitHub Pages Deployment:**

- Create repository: username.github.io
- Initialize git and push code
- Configure GitHub Pages in repository settings
- Verify site is live at https://username.github.io

**Performance Optimization:**

- Compress images with tools like Squoosh
- Minify CSS and JavaScript
- Implement lazy loading for images
- Add loading="lazy" attribute to images
- Use system fonts or font-display: swap

**Accessibility Checks:**

- Sufficient color contrast (4.5:1 minimum)
- Alt text for all images
- Semantic HTML structure
- Keyboard navigation support
- ARIA labels where needed

## Evaluation Criteria

- **HTML Structure (25%)**: Semantic markup, proper document structure, accessibility
- **CSS Quality (25%)**: Clean styling, responsive design, visual consistency
- **Content & Communication (20%)**: Clear messaging, professional presentation, personal brand
- **Functionality (15%)**: Working navigation, responsive behavior, interactive elements
- **Deployment & Polish (15%)**: Live deployment, performance, attention to detail

## Required Deliverables

- Live Website URL  
    Accessible at https://username.github.io  
    All pages fully functional  
    No console errors

- GitHub Repository  
    Clean commit history  
    Organized file structure  
    README with:
        - Project description
        - Live URL
        - Screenshots
        - Technologies used
        - Setup instructions
        - Documentation
        - Design decisions explained
        - Challenges and solutions
        - Future enhancement ideas

## Common Mistakes to Avoid

- Non-semantic HTML (div soup)
- Inline styles instead of external CSS
- Missing viewport meta tag
- Not testing on actual mobile devices
- Poor color contrast affecting readability
- Missing alt text on images
- Broken links between pages
- Large uncompressed images
- No mobile navigation solution
- Inconsistent spacing and typography

## Bonus Challenges

- Implement dark/light mode toggle
- Add CSS animations and transitions
- Create a blog section with markdown support
- Add a skills progress bar or chart
- Implement a project filter system
- Add a testimonial slider
- Create a downloadable resume section
- Add analytics tracking

## Tips for Success

- Plan First: Sketch your layout and content before coding
- Mobile First: Start with mobile styles and enhance for larger screens
- Semantic HTML: Use elements for their intended purpose
- Consistent Styling: Create reusable CSS classes
- Test Early: Check your site on different devices as you build

## Real-World Application

This project develops skills for:

- Personal branding and online presence
- Freelance web development
- Technical portfolio for job applications
- Client website projects
- Understanding user experience principles

## Submission Checklist

- 3+ HTML pages with semantic structure
- External CSS files with organized styles
- Responsive design working on all screen sizes
- Working navigation between all pages
- Content about you, skills, and projects
- Contact form or contact information
- Site deployed to GitHub Pages
- README file with documentation
- No broken links or images
- Clean, commented code
