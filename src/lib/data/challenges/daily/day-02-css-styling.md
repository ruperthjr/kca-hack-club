---
title: "Style Your Personal Page with CSS"
description: "Add beautiful styling to your HTML page using modern CSS techniques"
difficulty: "beginner"
estimatedTime: "1 hour"
skills: ["CSS", "Web Design", "Typography", "Color Theory"]
recommendedFor: ["Maryphin", "Daniel", "Pauline"]
points: 15
tags: ["css", "web-design", "day-2"]
prerequisites: ["HTML basics"]
learningObjectives: ["Master CSS selectors and properties", "Understand the box model", "Create responsive layouts", "Apply color and typography principles"]
deliverables: ["Fully styled HTML page", "External CSS file", "Responsive design elements", "Clean, organized CSS code"]
---

# Style Your Personal Page with CSS

Transform your plain HTML page into a visually appealing website using CSS. Learn about colors, fonts, spacing, and layout.

## Requirements

### File Setup
- Create an external CSS file named `styles.css`
- Link it to your HTML page using `<link>` tag in the `<head>`

### Core Styling Requirements

**Typography:**
- Set a custom font family (use Google Fonts or web-safe fonts)
- Style all headings with appropriate sizes and colors
- Set a readable line-height for paragraphs (1.6 or higher)
- Add proper font weights

**Colors:**
- Choose a color palette (3-5 colors)
- Apply consistent colors throughout the page
- Use background colors for sections
- Ensure good contrast for readability

**Box Model:**
- Add padding to all sections
- Apply margins between elements
- Use borders where appropriate
- Implement box-sizing: border-box

**Layout:**
- Center the main content (max-width: 800px)
- Add spacing between sections
- Style the navigation menu horizontally
- Create a sticky or fixed header

## Example CSS Structure
```css
/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
}

/* Header Styles */
header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem;
    text-align: center;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

/* Navigation Styles */
nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: opacity 0.3s;
}

nav a:hover {
    opacity: 0.8;
}

/* Main Content */
main {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
}

section {
    background: white;
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

h2 {
    color: #667eea;
    margin-bottom: 1rem;
    font-size: 1.8rem;
}

/* Skills List */
#skills ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    list-style: none;
}

#skills li {
    background: #f0f0f0;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-align: center;
}

/* Blockquote */
blockquote {
    border-left: 4px solid #667eea;
    padding-left: 1rem;
    font-style: italic;
    color: #666;
    margin: 2rem 0;
}

/* Footer */
footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    margin-top: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }
    
    nav ul {
        flex-direction: column;
        gap: 1rem;
    }
    
    section {
        padding: 1.5rem;
    }
}
```

## Color Palette Suggestions

**Professional Blue:**
- Primary: #667eea
- Secondary: #764ba2
- Accent: #f093fb
- Text: #333333
- Background: #f4f4f4

**Nature Green:**
- Primary: #11998e
- Secondary: #38ef7d
- Accent: #06beb6
- Text: #2d3436
- Background: #dfe6e9

**Sunset Orange:**
- Primary: #f46b45
- Secondary: #eea849
- Accent: #ff6b6b
- Text: #2f3542
- Background: #f1f2f6

## Tasks

1. Choose and implement a color palette
2. Add Google Fonts to your page
3. Style all HTML elements consistently
4. Create hover effects for links
5. Add box-shadows for depth
6. Implement responsive design with media queries
7. Add smooth transitions to interactive elements

## Validation Checklist

- CSS validates at https://jigsaw.w3.org/css-validator/
- Page looks good at different screen sizes
- Colors have sufficient contrast
- Text is readable and well-spaced
- Hover effects work smoothly
- No horizontal scrolling on mobile

## Bonus Challenges

**Easy:**
- Add a gradient background
- Create custom bullet points for lists
- Style the scrollbar

**Medium:**
- Implement a dark mode toggle
- Add CSS animations
- Create a hamburger menu for mobile

**Hard:**
- Build a CSS-only image gallery
- Implement CSS Grid layout
- Add CSS variables for theme management

## Learning Resources

- [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [Google Fonts](https://fonts.google.com/)
- [Coolors Color Palette Generator](https://coolors.co/)