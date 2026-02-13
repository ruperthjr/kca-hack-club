---
title: "HTML Document Structure Implementation"
description: "Create a basic HTML document with proper structure and semantic heading elements"
difficulty: "beginner"
unit: "Unit 6: Computer Organization & Architecture"
day: 2
week: 1
month: 1
technologies:
        - "HTML5"
        - "Web Standards"
        - "Document Structure"
        - "Semantic HTML"
        - "Web Browsers"
learningOutcomes:
        - "Implement a valid HTML5 document structure with DOCTYPE, head, and body elements"
        - "Apply semantic HTML elements like header, main, section, and footer for meaningful content organization"
        - "Use heading tags (h1-h6) to establish proper document hierarchy and accessibility"
        - "Validate HTML code using online tools to ensure compliance with web standards"
        - "Test and view HTML files in web browsers across different devices for responsiveness"
estimatedTime: "20-30 minutes"
requirements:
        - "A text editor such as VS Code, Notepad++, or Sublime Text for writing code"
        - "A modern web browser like Chrome, Firefox, or Edge for testing and viewing"
        - "Basic familiarity with file saving and folder organization"
        - "Access to an internet connection for validation tools"
deliverables:
        - "A valid HTML file named index.html with complete document structure"
        - "Proper display of name and registration number in an h1 tag within semantic elements"
        - "A screenshot of the rendered webpage in a browser showing correct layout"
        - "A validation report from W3C Validator confirming no errors"
        - "Clean, indented code with comments for readability"
resources:
  - name: "HTML Introduction - W3Schools"
    url: "https://www.w3schools.com/html/html_intro.asp"
  - name: "MDN Web Docs: HTML Basics"
    url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
  - name: "HTML5 Doctor - Document Outlines"
    url: "http://html5doctor.com/outlines/"
  - name: "Semantic HTML5 Elements Explained"
    url: "https://www.freecodecamp.org/news/semantic-html5-elements/"
  - name: "HTML Validation Service"
    url: "https://validator.w3.org/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-10"
unlockDate: "2026-02-10"
---

# HTML Document Structure Implementation Challenge

## Overview

In this web development challenge, you'll create your first properly structured HTML document. You'll learn the essential skeleton of every webpage and how to use semantic HTML elements to create meaningful document structure, laying the foundation for accessible and standards-compliant websites.

## Objective

Create a valid HTML5 document that displays your name and registration number in a top-level heading (h1 tag) with proper document structure and semantic markup, ensuring it renders correctly in a web browser and passes validation.

## Prerequisites

- Basic understanding of file creation and text editing
- Familiarity with web browsers and opening files
- No prior coding experience required

## Instructions

### Part 1: Set Up Your Development Environment

1. Open your text editor (VS Code recommended).
2. Create a new file and save it as `index.html` in a dedicated folder like `Projects/Websites/`.
3. Ensure the file extension is `.html` (not `.txt`).

### Part 2: Create Basic HTML Structure

1. Type the following skeleton code into your file:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Student Information - [Your Name]</title>
   </head>
   <body>
           <!-- Your content will go here -->
   </body>
   </html>
   ```
2. Save the file.

### Part 3: Add Your Information and Validate

1. Inside the `<body>` section, replace the comment with:
   ```html
   <header>
           <h1>Student Information</h1>
   </header>
   
   <main>
           <section>
                   <h2>Personal Details</h2>
                   <h1>[Your Full Name Here]</h1>
                   <p>Registration Number: [Your Registration Number Here]</p>
           </section>
   </main>
   
   <footer>
           <p>Created on: February 10, 2026</p>
   </footer>
   ```
2. Replace the bracketed text with your actual information.
3. Save and open the file in a web browser to verify display.
4. Visit https://validator.w3.org/ to validate your HTML and fix any errors.
5. Test responsiveness using browser developer tools.

## Deliverables

1. `index.html` - The complete HTML file with valid structure and content.
2. `screenshot.png` - A browser screenshot showing the rendered page.
3. `validation-report.txt` - A copy of the W3C validation results.
4. Clean code with proper indentation and comments.
5. Confirmation of testing on at least two different browsers.

## Evaluation Criteria

| Criteria | Weight | Description |
|---------|--------|-------------|
| Validity | 40% | Proper HTML5 structure, DOCTYPE, and no validation errors |
| Semantics | 30% | Correct use of heading hierarchy and semantic elements like header, main, section, footer |
| Content | 20% | Accurate display of name and registration number in h1 tag |
| Presentation | 10% | Clean code formatting, organization, and browser compatibility |

## Tips & Common Mistakes

- Always include `<!DOCTYPE html>` at the top to declare HTML5.
- Use only one h1 per page for best accessibility practices.
- Ensure all tags are properly closed and nested.
- Test in multiple browsers to catch rendering differences.
- Avoid using deprecated tags or attributes.

## Bonus Challenges (Optional)

1. Add CSS styling to make the page visually appealing.
2. Include additional sections like skills or hobbies with appropriate headings.
3. Implement a simple navigation menu linking to other pages.
4. Add meta tags for better SEO and social sharing.

## Submission

Submit the three files (index.html, screenshot.png, validation-report.txt). Ensure the HTML file is valid and the screenshot clearly shows the rendered content.
