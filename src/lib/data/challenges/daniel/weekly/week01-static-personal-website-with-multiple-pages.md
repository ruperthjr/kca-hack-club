---
title: "Static Personal Website with Multiple Pages"
description: "Build and deploy a professional personal website with HTML and CSS, featuring multiple pages and a responsive design to showcase your skills and projects."
difficulty: "beginner"
unit: "Week 1 Challenge"
week: 1
month: 1
technologies:
  - "HTML5"
  - "CSS3"
  - "Responsive Design"
  - "GitHub Pages"
  - "Git"
learningOutcomes:
  - "Structure semantic HTML documents for a multi-page website."
  - "Apply external CSS for professional and consistent styling."
  - "Implement responsive design principles using media queries."
  - "Deploy a static website to the internet using GitHub Pages."
  - "Organize a project with a clean file structure and version control."
estimatedTime: "4-6 hours"
requirements:
  - "A text editor (e.g., VS Code)."
  - "A modern web browser for testing."
  - "A GitHub account for version control and deployment."
  - "Basic understanding of HTML tags and CSS properties."
deliverables:
  - "A live, multi-page website deployed to GitHub Pages."
  - "A GitHub repository containing all source code."
  - "A responsive design that is functional on both mobile and desktop screens."
  - "A README.md file with the project description, live URL, and screenshots."
resources:
  - name: "MDN Web Docs: Learn Web Development"
    url: "https://developer.mozilla.org/en-US/docs/Learn"
  - name: "GitHub Pages Documentation"
    url: "https://docs.github.com/en/pages"
  - name: "CSS-Tricks: A Complete Guide to Flexbox"
    url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
  - name: "W3Schools: Responsive Web Design"
    url: "https://www.w3schools.com/css/css_rwd_intro.asp"
  - name: "Coolors.co - Color Palette Generator"
    url: "https://coolors.co/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Static Personal Website Challenge

## Overview

This challenge guides you through building and deploying a professional personal website. This multi-page site will serve as your digital presence, showcasing your identity, skills, and aspirations as a developer. It is a foundational project for demonstrating your web development capabilities.

## Objective

To create a responsive, multi-page personal website using HTML and CSS, and deploy it to the internet using GitHub Pages. The final site will feature home, about, and projects pages, and will be optimized for both desktop and mobile viewing.

## Prerequisites

- Basic understanding of HTML tags (`<header>`, `<footer>`, `<p>`, `<a>`, etc.).
- Familiarity with fundamental CSS properties (e.g., `color`, `font-size`, `margin`).
- A GitHub account.
- A text editor like VS Code installed.

## Instructions

### Part 1: Planning and Setup

1.  **Sketch Your Layout:** Draw simple wireframes for your Home, About, and Projects pages. Plan where the navigation, main content, and footer will go.
2.  **Choose a Color Scheme & Fonts:** Select 2-3 primary colors and two fonts (one for headings, one for body text) using tools like Google Fonts and Coolors.
3.  **Project Structure:** Create a project folder with `index.html`, `about.html`, `projects.html`, and a `css` folder containing a `style.css` file.

### Part 2: HTML Structure and Content

1.  **Build the Homepage (`index.html`):** Create the basic HTML structure with semantic tags (`<header>`, `<nav>`, `<main>`, `<footer>`). Add a hero section with your name, a brief introduction, and navigation links.
2.  **Create Other Pages:** Copy the basic structure to `about.html` and `projects.html`. Populate each page with relevant content: your background story on the About page, and project ideas or learning goals on the Projects page.
3.  **Link Pages:** Ensure your navigation links correctly point to each HTML file (e.g., `<a href="about.html">About</a>`).

### Part 3: CSS Styling and Deployment

1.  **Style the Website:** In `style.css`, add styles for your layout, color scheme, and typography. Use Flexbox or Grid for layout. Ensure the design is consistent across all pages.
2.  **Implement Responsive Design:** Use CSS media queries to adjust the layout for mobile devices. A common task is to change the navigation from a horizontal bar to a stacked list or hamburger menu on smaller screens.
3.  **Deploy to GitHub Pages:** Initialize a Git repository, commit your files, and push them to a new GitHub repository. In the repository settings, enable GitHub Pages on the `main` branch to make your site live.

## Deliverables

1.  A live website URL hosted on GitHub Pages (e.g., `https://your-username.github.io/repository-name/`).
2.  A public GitHub repository containing the complete source code for your website.
3.  A `README.md` file in the repository that includes a project description, the live URL, and screenshots of the desktop and mobile views.

## Evaluation Criteria

| Criteria | Weight | Description |
|---|---|---|
| Functionality | 30% | All pages load, links work, and the site is successfully deployed. |
| Design & UX | 25% | The site has a clean, professional appearance with consistent styling. |
| Responsive Design | 20% | The layout adapts gracefully to mobile, tablet, and desktop screen sizes. |
| Code Quality | 15% | Code uses semantic HTML, is well-formatted, and uses an external stylesheet. |
| Content & Creativity | 10% | Content is authentic and well-written; the design shows personal effort. |

## Tips & Common Mistakes

- **Avoid Inline Styles:** Keep all your styles in the external `style.css` file for better organization.
- **Check File Paths:** Ensure links (`href`) and image sources (`src`) have the correct paths to avoid broken links and images.
- **Use the Viewport Meta Tag:** Include `<meta name="viewport" content="width=device-width, initial-scale=1.0">` in the `<head>` of your HTML files to ensure proper scaling on mobile devices.
- **Test on Mobile:** Frequently check your site's appearance on a small screen using your browser's developer tools.

## Bonus Challenges (Optional)

1.  Implement a dark mode toggle using CSS variables and a little JavaScript.
2.  Add a functional contact form using a free service like Formspree.
3.  Incorporate subtle CSS animations or transitions for interactive elements like buttons and links.

## Submission

Submit the live URL of your deployed website and the link to your GitHub repository. Ensure the repository's `README.md` is complete and provides all required information.
