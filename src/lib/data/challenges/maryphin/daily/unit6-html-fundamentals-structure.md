---
title: "HTML Fundamentals Practice"
description: "Create a simple HTML page with proper structure including headings and basic elements"
difficulty: "beginner"
unit: "Unit 6: Web Design Technology and Internet Applications"
day: 2
technologies:
    - "HTML5"
    - "Web Development"
    - "Frontend Basics"
learningOutcomes:
    - "Create valid HTML5 document structure"
    - "Use heading tags appropriately"
    - "Add basic text content and formatting"
    - "Understand HTML element hierarchy"
estimatedTime: "15-25 minutes"
requirements:
    - "Textbook: HTML and CSS: Design and Build Websites by Jon Duckett"
    - "Text editor (VS Code, Notepad++, Sublime Text)"
    - "Web browser for testing"
deliverables:
    - "Valid HTML5 file with proper structure"
    - "Heading with your name"
    - "Basic content section"
    - "Comments explaining code sections"
resources:
  - name: "HTML5 Tutorial for Beginners"
    url: "https://www.w3schools.com/html/html_intro.asp"
  - name: "HTML Validator Tool"
    url: "https://validator.w3.org/"
  - name: "HTML Document Structure Guide"
    url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
  - name: "VS Code Setup for Web Development"
    url: "https://code.visualstudio.com/docs/languages/html"
  - name: "HTML5 Cheat Sheet"
    url: "https://htmlcheatsheet.com/"
dateAdded: "2026-02-11"
unlockDate: "2026-02-11"
---

# HTML Fundamentals Practice Challenge

## Overview

This hands-on challenge introduces basic HTML structure by creating a simple webpage with your name as the main heading. You'll practice proper HTML5 syntax, document structure, and basic element usage.

## Objective

Create a valid HTML5 document that displays your name as the primary heading, includes a brief introduction paragraph, and demonstrates proper HTML structure with essential elements.

## Instructions

### Step 1: Set Up Basic HTML5 Structure

Create a new file with .html extension and include:

- `<!DOCTYPE html>` declaration
- `<html>` element with `lang` attribute
- `<head>` section containing:
    - `<meta charset="UTF-8">`
    - `<meta name="viewport">` for responsive design
    - `<title>` element with descriptive page title
- `<body>` section for visible content

### Step 2: Create Content Structure

Within the `<body>`, add:

- **Main Heading:** `<h1>` tag containing your full name
- **Subheading:** `<h2>` tag with a brief title or descriptor
- **Introduction Paragraph:** `<p>` tag with 2-3 sentences about yourself
- **Section Divider:** `<hr>` element for visual separation
- **Secondary Content:** Additional `<h3>` and `<p>` elements for other information

### Step 3: Apply Semantic HTML

Use semantic elements where appropriate:

- `<header>` for the top section
- `<main>` for primary content
- `<section>` to group related content
- `<footer>` for closing information

### Step 4: Add Basic Styling (Inline)

Apply minimal inline styles for readability:

- Text alignment
- Font family
- Padding/margins
- Background/text colors

### Step 5: Include Helpful Comments

Add HTML comments to:

- Identify different sections
- Explain purpose of elements
- Note areas for future expansion

## Evaluation Criteria

1.  **HTML Validity (30%):** Proper DOCTYPE, closing tags, and nesting
2.  **Semantic Structure (25%):** Appropriate use of HTML5 semantic elements
3.  **Content Organization (20%):** Logical flow and hierarchy of information
4.  **Code Readability (15%):** Clear formatting, indentation, and comments
5.  **Completeness (10%):** All required elements present and functional

## Submission Format

Submit a single HTML file named `index.html` containing:

- **Complete HTML5 Structure:** All required document elements
- **Name Display:** Your name in an `<h1>` heading tag
- **Supporting Content:** At least one paragraph about yourself
- **Semantic Markup:** Proper use of header, main, section, footer
- **Comments:** Brief explanations of code sections
- **Basic Styling:** Minimal inline CSS for readability

**File Requirements:**
- Must be valid HTML5
- Must include your actual name
- Must display properly in modern browsers
- File size under 5KB

### Example Structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Daniel's Personal Page</title>
</head>
<body>
        <header>
                <h1>Daniel Smith</h1>
                <h2>Computer Science Student & Aspiring Developer</h2>
        </header>
        
        <main>
                <section>
                        <h3>About Me</h3>
                        <p>I'm a second-year computer science student passionate about web development and data science. I enjoy creating practical applications that solve real-world problems.</p>
                </section>
                
                <section>
                        <h3>Current Focus</h3>
                        <p>Currently learning HTML, CSS, JavaScript, and Python while working on personal projects that combine my interests in technology and productivity.</p>
                </section>
        </main>
        
        <footer>
                <hr>
                <p>© 2026 Daniel Smith | Student Portfolio Page</p>
        </footer>
</body>
</html>
```

## Common Mistakes to Avoid

- Missing closing tags or improper nesting
- Using deprecated tags (like `<font>` or `<center>`)
- Placing block elements inside inline elements
- Forgetting the `lang` attribute in `<html>` tag
- Overusing `<div>` instead of semantic elements
- Not including character encoding meta tag
- Using multiple `<h1>` tags on one page
- Forgetting to close self-closing tags properly (like `<hr>`)
- Missing `alt` text on images (if included)
- Not testing in multiple browsers

## Real-World Application

Basic HTML skills form the foundation for:

- Website and web application development
- Content management system customization
- Email template creation
- Technical documentation
- Digital portfolio development
- Blog and content publishing
- E-commerce product pages
- Online learning content
- Interactive digital resumes
