---
title: "Embed an Image in HTML"
description: "Learn to embed and describe images in HTML using the <img> tag, focusing on best practices for accessibility and file organization."
difficulty: "beginner"
unit: "Unit 6: Computer Organization & Architecture"
day: 5
week: 1
month: 1
technologies:
    - "HTML5"
    - "Web Accessibility"
    - "Responsive Design"
    - "File Organization"
    - "Image Optimization"
learningOutcomes:
    - "Embed images in HTML using the <img> tag with src and alt attributes."
    - "Organize image files and reference them with relative paths."
    - "Apply accessibility best practices with descriptive alt text."
    - "Resize and optimize images for the web."
    - "Enhance HTML documents with captions and links."
estimatedTime: "30 minutes"
requirements:
    - "Basic knowledge of HTML structure (<!DOCTYPE>, <html>, <head>, <body>)."
    - "A text editor (e.g., VS Code, Sublime Text)."
    - "An image file (JPG, PNG, or GIF) of your favorite place."
    - "Ability to organize files and folders."
    - "A modern web browser for testing."
deliverables:
    - "A complete HTML file displaying your chosen image with proper alt text."
    - "Screenshot of the rendered page in a browser."
    - "Organized project folder with image assets."
    - "Optional: Caption and responsive image enhancements."
resources:
  - name: "MDN: Images in HTML"
    url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
  - name: "WebAIM: Alternative Text"
    url: "https://webaim.org/techniques/alttext/"
  - name: "W3Schools: HTML Images"
    url: "https://www.w3schools.com/html/html_images.asp"
  - name: "Google Web Fundamentals: Images"
    url: "https://web.dev/fast/#optimize-your-images"
  - name: "MDN: <figure> and <figcaption> Elements"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-13"
unlockDate: "2026-02-13"
---

# Embed an Image in HTML

## Overview

Images make web pages engaging and personal. This challenge teaches you how to embed an image of your favorite place in an HTML document using the `<img>` tag, while following best practices for accessibility and file organization.

## Objective

Create a well-structured HTML file that displays an image of your favorite place, referenced with a relative path and described with an appropriate alt attribute.

## Prerequisites

- Basic understanding of HTML tags and structure.
- Access to a text editor and a web browser.
- An image file (JPG, PNG, or GIF) saved on your computer.

## Instructions

### Part 1: Set Up Your Project

1. Create a new folder for this challenge (e.g., `image-challenge`).
2. Place your chosen image file inside this folder, or in a subfolder named `images`.
3. Create a file named `index.html` in the project folder.

### Part 2: Write the HTML

1. Add the basic HTML skeleton to `index.html`:

        ```html
        <!DOCTYPE html>
        <html>
            <head>
                <title>My Favourite Place</title>
            </head>
            <body>
                <!-- Image goes here -->
            </body>
        </html>
        ```

2. Inside the `<body>`, add an `<img>` tag:
        - Set the `src` attribute to the relative path of your image (e.g., `src="paris.jpg"` or `src="images/beach.png"`).
        - Add a descriptive `alt` attribute (e.g., `alt="Eiffel Tower in Paris"`).

3. (Optional) Add a caption using `<figure>` and `<figcaption>`:

        ```html
        <figure>
            <img src="images/beach.png" alt="Sunny beach with palm trees">
            <figcaption>My favorite beach vacation spot.</figcaption>
        </figure>
        ```

### Part 3: Test and Submit

1. Open `index.html` in your web browser to verify the image displays correctly.
2. Check that the alt text appears when the image cannot be loaded.
3. Take a screenshot of the rendered page.
4. Organize your files and prepare them for submission.

## Deliverables

1. `index.html` file with a correctly embedded image and alt text.
2. Screenshot of the page as rendered in a browser.
3. Organized project folder with image assets.
4. (Optional) Enhanced HTML with caption or responsive image features.

## Evaluation Criteria

| Criteria                | Weight | Description                                      |
|-------------------------|--------|--------------------------------------------------|
| HTML Structure          | 20%    | Valid HTML with proper tags and nesting.         |
| Image Embedding         | 30%    | Image displays using correct relative path.      |
| Accessibility           | 20%    | Descriptive, non-empty alt attribute.            |
| File Organization       | 20%    | Logical folder structure and file naming.        |
| Submission Completeness | 10%    | All required files and screenshot provided.      |

## Tips & Common Mistakes

- Use lowercase letters and hyphens for file names; avoid spaces.
- Double-check file paths and extensions for accuracy.
- Always include a meaningful alt attribute for accessibility.
- Test your page in multiple browsers if possible.

## Bonus Challenges (Optional)

1. Add a caption below the image using `<figure>` and `<figcaption>`.
2. Resize the image using the `width` and `height` attributes.
3. Link the image to a larger version by wrapping it in an `<a>` tag.

## Submission

Submit your `index.html`, the image file, and the screenshot as a zipped folder or via your instructor's preferred method.