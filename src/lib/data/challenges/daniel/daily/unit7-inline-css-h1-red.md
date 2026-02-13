---
title: "Inline CSS for Red Heading"
description: "Learn to apply inline CSS to style an <h1> element with a red color using the style attribute."
difficulty: "beginner"
unit: "Unit 7: Web Technologies and Internet Applications"
day: 5
week: 1
month: 1
technologies:
    - "HTML5"
    - "CSS3"
    - "Web Styling"
    - "Inline CSS"
    - "Web Browsers"
learningOutcomes:
    - "Apply inline CSS using the style attribute."
    - "Set text color using named colors and hex codes."
    - "Differentiate between inline, internal, and external CSS."
    - "Validate and test HTML/CSS in a browser."
    - "Troubleshoot common inline CSS mistakes."
estimatedTime: "15 minutes"
requirements:
    - "Basic knowledge of HTML structure."
    - "Text editor (e.g., VS Code, Sublime Text)."
    - "Web browser for testing."
    - "Ability to save and open HTML files."
    - "Willingness to experiment with CSS properties."
deliverables:
    - "An HTML file (red-heading.html) with an <h1> styled red using inline CSS."
    - "A screenshot showing the red heading in a browser."
    - "Optional: Additional styled headings for bonus tasks."
    - "Brief notes on any issues encountered and how they were resolved."
    - "A README or comment in the HTML explaining the inline CSS used."
resources:
  - name: "MDN Web Docs: HTML <h1> Element"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"
  - name: "MDN Web Docs: The style Attribute"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style"
  - name: "MDN Web Docs: CSS color Property"
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color"
  - name: "W3Schools: HTML Inline Styles"
    url: "https://www.w3schools.com/html/html_styles.asp"
  - name: "CSS-Tricks: Inline Styles in HTML"
    url: "https://css-tricks.com/using-inline-styles/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-13"
unlockDate: "2026-02-13"
---

# Inline CSS for Red Heading

## Overview

This challenge introduces inline CSS, a fundamental web styling technique where CSS is applied directly to HTML elements using the style attribute. You'll learn how to change the color of a heading, understand the syntax, and recognize when inline styles are appropriate.

## Objective

Create an HTML page with an h1 element styled in red using inline CSS. Demonstrate understanding by customizing the heading and exploring additional inline style options.

## Prerequisites

- Basic understanding of HTML tags and structure
- Access to a text editor and web browser
- No prior CSS experience required

## Instructions

### Part 1: Create the HTML Structure

1. Open your text editor and create a new file named `red-heading.html`.
2. Add the basic HTML5 boilerplate:

     ```html
     <!DOCTYPE html>
     <html>
         <head>
             <title>Red Heading Challenge</title>
         </head>
         <body>
             <!-- Your heading will go here -->
         </body>
     </html>
     ```

### Part 2: Add the Inline Style

1. Inside the `<body>`, add an `<h1>` element with your chosen text.
2. Apply inline CSS to make the text red:

     ```html
     <body>
         <h1 style="color: red;">Hello World!</h1>
     </body>
     ```

3. Optionally, try using a hex code:

     ```html
     <body>
         <h1 style="color: #FF0000;">Hello World!</h1>
     </body>
     ```

### Part 3: Verify and Submit

1. Save the file and open it in your web browser.
2. Confirm the heading appears in red.
3. Take a screenshot showing the browser window with the red heading.
4. (Optional) Add a second `<h1>` with a different color or font size using inline CSS.

## Deliverables

1. `red-heading.html` file with the styled heading.
2. Screenshot of the rendered page showing the red heading.
3. (Optional) Additional headings for bonus tasks.
4. Brief notes or comments explaining your inline CSS.

## Evaluation Criteria

| Criteria                | Weight | Description                                      |
|-------------------------|--------|--------------------------------------------------|
| Valid HTML structure    | 20%    | Proper use of `<!DOCTYPE>` and HTML elements     |
| Heading present         | 20%    | `<h1>` element exists and contains text          |
| Inline CSS applied      | 30%    | Correct use of `style="color: red;"`             |
| Color rendered correctly| 20%    | Heading text is visibly red                      |
| Submission completeness | 10%    | Both HTML file and screenshot provided           |

## Tips & Common Mistakes

- Use the correct syntax: `style="color: red;"`
- Inline CSS only affects the specific element it is applied to.
- Remember to save your file before refreshing the browser.
- Double-check for typos in property names or values.
- You can use named colors or hex codes for color values.

## Bonus Challenges (Optional)

1. Use a hex color code instead of the name "red".
2. Add another inline style to change the font size (e.g., `font-size: 48px;`).
3. Create a second `<h1>` styled blue using inline CSS.

## Submission

Upload your `red-heading.html` file and the screenshot. Optionally, include notes or comments about your approach and any bonus tasks completed.