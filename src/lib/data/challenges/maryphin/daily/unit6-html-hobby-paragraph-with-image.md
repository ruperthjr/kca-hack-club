---
title: "Build an HTML Hobby Page with Image"
description: "Create a well-structured HTML page about your hobby, including descriptive text and an embedded image."
difficulty: "beginner"
unit: "WEB DESIGN TECHNOLOGY AND INTERNET APPLICATIONS"
day: 5
week: 1
month: 1
technologies:
    - "HTML"
    - "Web Browsers"
    - "Text Editors"
    - "Accessibility"
    - "Web Standards"
learningOutcomes:
    - "Structure a valid HTML document"
    - "Use headings and paragraphs for content"
    - "Embed and describe images with alt text"
    - "Test HTML in a browser"
    - "Apply best practices for accessibility"
estimatedTime: "45 minutes"
requirements:
    - "A modern text editor (e.g., VS Code, Sublime Text, Atom)"
    - "A web browser (e.g., Chrome, Firefox, Edge)"
    - "Basic computer skills"
    - "Ability to download images or use image URLs"
    - "Internet access for resources"
deliverables:
    - "A single HTML file named hobby.html"
    - "An image file (if local) or a comment with the image source"
resources:
  - name: "MDN Web Docs: HTML Basics"
    url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
  - name: "W3Schools: HTML Tutorial"
    url: "https://www.w3schools.com/html/"
  - name: "Unsplash: Free Images"
    url: "https://unsplash.com/"
  - name: "Pixabay: Free Images"
    url: "https://pixabay.com/"
  - name: "WebAIM: Alternative Text"
    url: "https://webaim.org/techniques/alttext/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-13"
unlockDate: "2026-02-13"
---

# Build an HTML Hobby Page with Image

## Overview

This challenge introduces you to the essentials of web development by guiding you through the creation of a simple HTML page. You'll describe your hobby and visually represent it with an image, practicing fundamental HTML structure and accessibility.

## Objective

Create a valid HTML file featuring a heading, a descriptive paragraph about your hobby, and an embedded image with appropriate alt text.

## Prerequisites

- Familiarity with saving and editing files
- Access to a text editor and web browser
- Ability to find and download royalty-free images or use image URLs

## Instructions

### Part 1: Set Up the HTML Skeleton

- Open your text editor and create a file named `hobby.html`.
- Add the following structure:
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>My Hobby</title>
        </head>
        <body>
        </body>
    </html>
    ```

### Part 2: Add Content About Your Hobby

- Inside `<body>`, add a main heading (`<h1>`) with your hobby's name.
- Write one or two paragraphs (`<p>`) describing what you enjoy about your hobby.

### Part 3: Embed an Image

- Find a royalty-free image (e.g., from Unsplash or Pixabay) representing your hobby.
- Download it to the same folder as your HTML file, or use its direct URL.
- Insert the image using:
    ```html
    <img src="hobby-image.jpg" alt="Description of the image">
    ```
- If using a URL, include a comment in your HTML with the image source.

## Deliverables

1. `hobby.html` file with heading, paragraph(s), and image
2. Image file (if local) or a comment with the image URL
3. The page should display correctly in a browser

## Evaluation Criteria

| Criteria                | Weight | Description                                      |
|-------------------------|--------|--------------------------------------------------|
| Valid HTML structure    | 30%    | Proper use of DOCTYPE, html, head, and body tags |
| Text content            | 30%    | Includes heading and descriptive paragraph(s)    |
| Image embedding         | 40%    | Image displays with meaningful alt attribute     |

## Tips & Common Mistakes

- Always include the `alt` attribute for images for accessibility.
- Double-check file paths or URLs if the image doesn't appear.
- Don't forget closing tags, especially `</html>`.

## Bonus Challenges (Optional)

1. Add a second page and link to it using an anchor tag.
2. Style your page with internal or inline CSS.

## Submission

Compress `hobby.html` and the image (if local) into a ZIP file and upload it as instructed.