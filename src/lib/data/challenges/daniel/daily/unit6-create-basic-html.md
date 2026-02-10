---
title: "HTML Document Structure Implementation"
description: "Create a basic HTML document with proper structure and semantic heading elements"
difficulty: "beginner"
unit: "Unit 6: Computer Organization & Architecture"
day: 2
technologies:
    - "HTML5"
    - "Web Standards"
    - "Document Structure"
learningOutcomes:
    - "Create valid HTML5 document structure"
    - "Use heading tags appropriately for document hierarchy"
    - "Understand the basic HTML skeleton"
    - "View HTML files in web browser"
estimatedTime: "20-30 minutes"
requirements:
    - "Text editor (VS Code, Notepad++, Sublime Text)"
    - "Web browser (Chrome, Firefox, Edge)"
    - "Textbook: HTML and CSS: Design and Build Websites"
deliverables:
    - "HTML file with proper DOCTYPE and structure"
    - "Name and registration number displayed in <h1> tag"
    - "Screenshot of rendered webpage in browser"
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
dateAdded: "2026-02-10"
unlockDate: "2026-02-10"
---

# HTML Document Structure Implementation Challenge

## Overview

In this web development challenge, you'll create your first properly structured HTML document. You'll learn the essential skeleton of every webpage and how to use semantic HTML elements to create meaningful document structure.

## Objective

Create a valid HTML5 document that displays your name and registration number in a top-level heading (`<h1>` tag) with proper document structure and semantic markup.

## Instructions

### Step 1: Set Up Your Development Environment

- Open your text editor (VS Code recommended)
- Create a new file and save it as `index.html` in your `Projects/Websites/` folder
- Ensure file extension is `.html` not `.txt`

### Step 2: Create Basic HTML Structure

Type the following skeleton code:

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

### Step 3: Add Your Information

Inside the `<body>` section, add:

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

Replace the bracketed text with your actual information.

### Step 4: Validate Your HTML

- Save your file
- Open it in a web browser (drag file into browser or use Open File)
- Verify it displays correctly
- Visit [https://validator.w3.org/](https://validator.w3.org/)
- Upload your file or paste your code
- Fix any errors reported

### Step 5: Test Responsiveness

- Open Developer Tools (F12 or Right-click → Inspect)
- Click the "Toggle Device Toolbar" icon (phone/tablet symbol)
- Test different screen sizes
- Verify your `<h1>` text remains readable

## Evaluation Criteria

- **Validity (40%)**: Proper HTML5 structure and no validation errors
- **Semantics (30%)**: Correct use of heading hierarchy and semantic elements
- **Content (20%)**: Accurate display of name and registration number
- **Presentation (10%)**: Clean code formatting and organization

## Common Mistakes to Avoid

- Forgetting the `<!DOCTYPE html>` declaration
- Missing closing tags (especially for headings)
- Using multiple `<h1>` tags incorrectly (only one per page ideally)
- Not setting UTF-8 character encoding
- Incorrect file extension (`.htm` instead of `.html`)
- Not testing in multiple browsers

## Real-World Application

Understanding HTML structure helps you:

- Build accessible websites that work for all users
- Create search-engine-friendly content
- Lay foundation for CSS styling and JavaScript interactivity
- Collaborate with other developers using standard practices
- Progress to frameworks like React, Vue, or Svelte

## Submission Format

Submit three files:

- `index.html` (your HTML file)
- `screenshot.png` (browser view showing rendered page)
- `validation-report.txt` (copy of W3C validation results)
