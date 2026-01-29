---
title: "Build Your First HTML Page"
description: "Create a personal introduction webpage using semantic HTML5 elements"
difficulty: "beginner"
estimatedTime: "45 minutes"
skills: ["HTML", "Web Development", "Semantic Markup"]
recommendedFor: ["Daniel", "Maryphin"]
points: 10
tags: ["html", "web-fundamentals", "day-1"]
prerequisites: []
learningObjectives: ["Understand HTML document structure", "Use semantic HTML5 elements", "Create well-formed HTML documents"]
deliverables: ["A complete HTML page with proper structure", "At least 5 different semantic elements used", "Valid HTML5 code"]
---

# Build Your First HTML Page

Create a personal introduction webpage that tells us about yourself using proper HTML5 semantic elements.

## Requirements

Your HTML page must include the following elements:

### Document Structure
- Proper DOCTYPE declaration
- HTML, head, and body tags
- Meta charset UTF-8
- Page title in the head section

### Content Sections
- Header with your name using `<header>` and `<h1>`
- Navigation menu with links to different sections using `<nav>`
- Main content area with `<main>` containing:
  - About section with `<section>` and `<h2>`
  - Skills list using `<ul>` or `<ol>`
  - Hobbies or interests using `<article>`
  - Education information in a `<section>`
- Footer with contact information using `<footer>`

### Additional Elements
- At least one image with proper alt text
- At least one external link
- Use `<strong>` and `<em>` for emphasis
- Include a `<blockquote>` with your favorite quote

## Example Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Page</title>
</head>
<body>
    <header>
        <h1>Your Name Here</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#education">Education</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>Write a brief introduction about yourself here.</p>
        </section>

        <section id="skills">
            <h2>My Skills</h2>
            <ul>
                <li>HTML</li>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
            </ul>
        </section>

        <section id="education">
            <h2>Education</h2>
            <p>Currently studying at <strong>Kabarak University</strong></p>
        </section>

        <article>
            <h2>My Interests</h2>
            <p>Describe your hobbies and interests here.</p>
        </article>

        <blockquote>
            <p>"Your favorite inspirational quote goes here"</p>
        </blockquote>
    </main>

    <footer>
        <p>Contact me at: your.email@example.com</p>
    </footer>
</body>
</html>
```

## Validation Checklist

Before submitting, ensure:
- All opening tags have matching closing tags
- Attributes are properly quoted
- Images have alt attributes
- Links have meaningful text (not "click here")
- Headings are in logical order (h1, h2, h3)
- Document validates at https://validator.w3.org

## Bonus Challenges

**Easy:**
- Add a table showing your weekly schedule
- Include at least 3 different types of lists

**Medium:**
- Create a contact form with input fields
- Add semantic time elements for dates

**Hard:**
- Structure the page to be accessible (use ARIA labels where appropriate)
- Include meta tags for social media sharing (Open Graph)

## Submission

Save your file as `index.html` and test it in multiple browsers. Make sure all links work and images load correctly.

## Learning Resources

- [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)