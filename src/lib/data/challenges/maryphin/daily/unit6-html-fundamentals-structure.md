---
title: "HTML Fundamentals: Structured Webpage Creation"
description: "Build a well-structured HTML5 page using semantic elements, headings, and basic content organization."
difficulty: "beginner"
unit: "Unit 6: Web Design Technology and Internet Applications"
day: 2
week: 1
month: 1
technologies:
        - "HTML5"
        - "Semantic HTML"
        - "Web Browsers"
        - "Text Editors"
        - "Frontend Development"
learningOutcomes:
        - "Construct a valid HTML5 document"
        - "Apply semantic HTML elements for structure"
        - "Organize content with headings and sections"
        - "Add inline styling for readability"
        - "Document code with helpful comments"
estimatedTime: "15-25 minutes"
requirements:
        - "Access to a modern text editor (VS Code, Sublime Text, Atom, etc.)"
        - "Web browser for testing (Chrome, Firefox, Edge, or Safari)"
        - "Basic understanding of HTML tags and attributes"
        - "Reference: HTML and CSS: Design and Build Websites by Jon Duckett"
        - "Internet connection for accessing resources"
deliverables:
        - "A single valid HTML5 file named `index.html`"
        - "Your name as the main heading"
        - "At least one introduction paragraph"
        - "Semantic structure using header, main, section, and footer"
        - "Inline comments explaining code sections"
resources:
  - name: "MDN: HTML Introduction"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  - name: "W3Schools: HTML5 Tutorial"
    url: "https://www.w3schools.com/html/html5_intro.asp"
  - name: "HTML Validator"
    url: "https://validator.w3.org/"
  - name: "Semantic HTML Elements Guide"
    url: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html"
  - name: "HTML5 Cheat Sheet"
    url: "https://htmlcheatsheet.com/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-10"
unlockDate: "2026-02-10"
---

# HTML Fundamentals: Structured Webpage Creation

## Overview

This challenge introduces you to the essentials of HTML5 by guiding you through the creation of a personal webpage. You'll learn to use semantic elements, organize content with headings, and apply basic inline styling for clarity and readability—skills foundational to all web development.

## Objective

Create a valid, well-structured HTML5 document that displays your name, a brief introduction, and demonstrates the use of semantic elements and inline comments.

## Prerequisites

- Familiarity with basic HTML tags and attributes
- Access to a text editor and web browser
- Reference to an HTML guide or textbook

## Instructions

### Part 1: Set Up the HTML5 Document

- Start with `<!DOCTYPE html>` and `<html lang="en">`
- Add a `<head>` section with:
        - `<meta charset="UTF-8">`
        - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
        - `<title>` with your name or page description

### Part 2: Structure Content with Semantic Elements

- Use `<header>` for the top section:
        - `<h1>` with your full name
        - `<h2>` with a brief title or descriptor
- Use `<main>` for primary content:
        - At least one `<section>` with a `<h3>` and a `<p>` introducing yourself
        - Optional: Add another section for interests or goals
- Use `<footer>` for closing info:
        - `<hr>` for separation
        - A copyright

### Part 3: Add Inline Styling and Comments

- Apply minimal inline styles (e.g., `style="text-align:center;"`)
- Add HTML comments to explain each section and key elements

## Deliverables

1. `index.html` file with all required elements
2. Page displays your name, intro, and organized sections
3. Inline comments and basic inline styling

## Evaluation Criteria

| Criteria                | Weight | Description                                      |
|-------------------------|--------|--------------------------------------------------|
| HTML Validity           | 30%    | Proper structure, closing tags, and nesting      |
| Semantic Structure      | 25%    | Use of header, main, section, footer             |
| Content Organization    | 20%    | Logical flow and use of headings                 |

## Tips & Common Mistakes

- Always close your tags and nest elements properly
- Use only one `<h1>` per page
- Prefer semantic elements over generic `<div>`
- Don’t forget the `lang` attribute in `<html>`
- Test your file in multiple browsers

## Bonus Challenges (Optional)

1. Add a profile image with appropriate `alt` text
2. Include a list of your favorite technologies using `<ul>`

## Submission

Submit your `index.html` file via your course platform or as instructed by your teacher.
