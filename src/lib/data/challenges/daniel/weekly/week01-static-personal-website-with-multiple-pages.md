---
title: "Static Personal Website with Multiple Pages"
description: "Deploy a professional personal website with HTML and CSS featuring multiple pages and responsive design"
difficulty: "beginner"
unit: "Week 1 Challenge"
week: 1
technologies:
  - "HTML5"
  - "CSS3"
  - "Responsive Design"
  - "GitHub Pages"
learningOutcomes:
  - "Structure semantic HTML documents"
  - "Apply CSS styling for professional layouts"
  - "Create multi-page websites with navigation"
  - "Deploy static websites to the internet"
estimatedTime: "4-6 hours"
requirements:
  - "Text editor (VS Code recommended)"
  - "Modern web browser"
  - "GitHub account"
  - "Basic understanding of HTML tags and CSS properties"
deliverables:
  - "Live website deployed to GitHub Pages or Netlify"
  - "At least 3 HTML pages (Home, About, Projects)"
  - "External CSS stylesheet with organized styles"
  - "Responsive design that works on mobile devices"
  - "README.md with deployment URL and screenshots"
resources:
    - name: "MDN Web Docs - HTML"
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    - name: "MDN Web Docs - CSS"
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    - name: "CSS Tricks - Flexbox Guide"
      url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
    - name: "GitHub Pages Deployment Guide"
      url: "https://pages.github.com/"
    - name: "Google Fonts"
      url: "https://fonts.google.com/"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Static Personal Website Challenge

## Project Overview

Build and deploy a professional personal website that showcases your identity, skills, and aspirations as a budding developer. This multi-page site will serve as your digital presence and the foundation for more advanced web projects.

## Core Requirements

### Technical Requirements

**Must Include:**
- Minimum of 3 distinct HTML pages (Home, About, Projects/Goals)
- External CSS stylesheet (no inline styles except for rare exceptions)
- Responsive navigation menu that works on mobile
- At least one form element (contact form or newsletter signup)
- Proper semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`)
- Mobile-responsive design (looks good on phones, tablets, desktops)

### Page Structure

**1. Home Page (index.html)**
- Hero section with your name and tagline
- Brief introduction (2-3 sentences)
- Call-to-action (e.g., "View My Projects" button)
- Navigation to other pages
- Footer with social media links or contact info

**2. About Page (about.html)**
- Your background and story
- Why you're learning programming
- Your interests and hobbies
- Skills you have or are learning
- Profile photo (optional but recommended)

**3. Projects/Goals Page (projects.html)**
- Current projects you're working on (even if just starting)
- Learning goals for the semester
- Technologies you want to master
- Future project ideas

### Design Requirements

**Layout:**
- Clean, professional appearance
- Consistent color scheme (choose 2-3 main colors)
- Readable fonts (system fonts or Google Fonts)
- Adequate spacing and padding
- Clear visual hierarchy

**Responsive Design:**
- Mobile-first approach
- Uses media queries for different screen sizes
- Navigation collapses on mobile (hamburger menu or stacked links)
- Images scale appropriately
- Text remains readable at all sizes

## Step-by-Step Guide

### Phase 1: Planning
**1. Sketch Your Layout**

Draw rough wireframes for each page:
```
Home Page Wireframe:
┌─────────────────────────────┐
│  Logo/Name      Navigation  │
├─────────────────────────────┤
│                             │
│   Hero Section with Photo   │
│                             │
├─────────────────────────────┤
│   About Me Preview          │
├─────────────────────────────┤
│   Footer (Social Links)     │
└─────────────────────────────┘
```

**2. Choose Your Color Scheme**

Pick 2-3 colors that work well together:
- Use tools like [Coolors.co](https://coolors.co/) or [Adobe Color](https://color.adobe.com/)
- Example palette: Navy Blue (#2C3E50), Teal (#18BC9C), White (#FFFFFF)

**3. Select Fonts**

Choose 2 fonts:
- One for headings (bold, distinctive)
- One for body text (readable, clean)
- Google Fonts recommendations: Poppins + Open Sans, Montserrat + Lato, Raleway + Roboto

### Phase 2: HTML Structure
### Phase 3: CSS Styling
### Phase 4: Content Creation
### Phase 5: Deployment

**Option 1: GitHub Pages (Recommended)**

1. Create a GitHub account if you don't have one
2. Create a new repository named `your-username.github.io`
3. Upload your files (or use Git commands):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```
4. Wait 1-2 minutes, then visit `https://your-username.github.io`

**Option 2: Netlify**

1. Create a Netlify account
2. Drag and drop your project folder to Netlify
3. Get your custom URL (e.g., `your-name-portfolio.netlify.app`)
4. Optional: Configure custom domain

**Option 3: Vercel**

1. Create a Vercel account
2. Import from GitHub or upload files
3. Deploy with one click
4. Get instant URL

## Evaluation Criteria

Your project will be assessed on:

1. **Functionality** (30%)
   - All pages load correctly
   - Navigation works on all pages
   - No broken links or missing images
   - Site is successfully deployed

2. **Design & User Experience** (25%)
   - Clean, professional appearance
   - Consistent styling across pages
   - Good color choices and typography
   - Intuitive navigation

3. **Responsive Design** (20%)
   - Works on mobile, tablet, and desktop
   - Navigation adapts to screen size
   - Content is readable at all sizes
   - Images scale appropriately

4. **Code Quality** (15%)
   - Semantic HTML tags used correctly
   - CSS is organized and well-commented
   - Proper indentation and formatting
   - External stylesheet (no inline styles)

5. **Content & Creativity** (10%)
   - Authentic, well-written content
   - Personality shines through
   - Original design (not just copied template)

## Required Deliverables

Submit the following:

1. **Live Website URL**
   - GitHub Pages, Netlify, or Vercel link

2. **GitHub Repository**
   - Complete source code
   - README.md with:
     - Project description
     - Live site URL
     - Screenshots
     - Technologies used
     - Future improvements planned

3. **Screenshots**
   - Desktop view (at least 2 pages)
   - Mobile view (at least 1 page)
   - Navigation demonstration

## Common Mistakes to Avoid

- Using inline styles instead of external CSS
- Forgetting the viewport meta tag (breaks mobile)
- Broken navigation links (wrong file paths)
- Inconsistent styling across pages
- Not testing on mobile devices
- Images that are too large (slow loading)
- Forgetting alt text on images
- No README file in repository

## Bonus Features

If you finish early and want to level up:

- Add a contact form (use Formspree or EmailJS for backend)
- Implement a dark mode toggle
- Add smooth scrolling between sections
- Create custom 404 page
- Add favicon
- Include subtle CSS animations
- Add a blog section
- Implement accessibility features (ARIA labels, keyboard navigation)

## Tips for Success

1. **Start Simple:** Get a basic version working first, then enhance
2. **Test Often:** View in browser after each major change
3. **Mobile First:** Design for mobile, then adapt for desktop
4. **Use Real Content:** Don't use "Lorem ipsum"—write authentic text
5. **Ask for Feedback:** Show friends/family and get their input
6. **Validate Your Code:** Use W3C HTML/CSS validators
7. **Commit Frequently:** Make small Git commits as you build

## Resources for Inspiration

Browse these for design ideas (but don't copy directly):

- [Awwwards.com](https://www.awwwards.com/) - Award-winning web designs
- [Dribbble.com](https://dribbble.com/tags/portfolio) - Portfolio design concepts
- [CodePen.io](https://codepen.io/search/pens?q=portfolio) - Code examples

## Submission Checklist

- [ ] All 3 HTML pages created and linked
- [ ] External CSS stylesheet with organized styles
- [ ] Responsive navigation menu
- [ ] Mobile-responsive design (tested on phone or emulator)
- [ ] Website deployed and accessible via URL
- [ ] README.md with live URL and screenshots
- [ ] GitHub repository with all source code
- [ ] No broken links or missing images
- [ ] Semantic HTML5 tags used
- [ ] Consistent design across all pages

## Next Steps After Completion

Once your static site is live:

1. Share it on social media (LinkedIn, Twitter)
2. Add the URL to your email signature
3. Use it when applying for internships
4. Plan your next feature additions

This portfolio is just the beginning—you'll continue to improve and expand it throughout your learning journey!

Good luck building your first deployed website!