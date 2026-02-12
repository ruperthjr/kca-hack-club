---
title: "Monthly Expense Tracker in Excel"
description: "Build a professional Excel spreadsheet to track monthly income and expenses, calculate totals with SUM formulas, and visualize your budget."
difficulty: "beginner"
unit: "Unit 6: Computer Applications"
day: 4
week: 1
month: 1
technologies:
    - Microsoft Excel
    - Google Sheets
    - Spreadsheet Formulas
    - Data Visualization
    - Data Analysis
learningOutcomes:
    - Design and organize a monthly budget spreadsheet for personal finance.
    - Apply SUM and arithmetic formulas to automate calculations.
    - Implement running balances and dynamic totals.
    - Format spreadsheets for clarity and professionalism.
    - Visualize expenses with charts and summary tables.
estimatedTime: "45 minutes"
requirements:
    - Access to Microsoft Excel (Office 365, 2021, or compatible)
    - Basic spreadsheet navigation and data entry skills
    - Ability to use formulas and cell references
    - Familiarity with formatting tools (currency, borders, charts)
    - Internet access for reference resources
deliverables:
    - Completed Excel (.xlsx) file with a functional monthly expense tracker
    - Screenshot (PNG or JPG) of the filled spreadsheet with sample data
    - A pie chart visualizing expense categories
    - Clearly labeled and formatted worksheet
    - Brief summary of your approach (2-3 sentences)
resources:
  - name: "Microsoft Support - SUM function"
    url: "https://support.microsoft.com/en-us/office/sum-function-043e1c7d-7726-4e80-8f32-07b23e057f89"
  - name: "Excel 2021 Bible (Alexander, Kusleika)"
    url: "https://www.wiley.com/en-us/Excel+2021+Bible-p-9781119830711"
  - name: "Google Sheets: Create a Budget"
    url: "https://support.google.com/docs/answer/3093281?hl=en"
  - name: "Excel Data Analysis (Etheridge)"
    url: "https://www.wiley.com/en-us/Excel+Data+Analysis%3A+Your+Visual+Blueprint+for+Analyzing+Data%2C+Charts%2C+and+PivotTables%2C+4th+Edition-p-9781119571522"
  - name: "Microsoft Support - Create a Pie Chart"
    url: "https://support.microsoft.com/en-us/office/create-a-pie-chart-0baf3996-3d5e-4118-9b1c-8ca5e7b0b3c9"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-12"
unlockDate: "2026-02-12"
---

# Monthly Expense Tracker in Excel

## Overview

Managing personal finances is essential for financial well-being. In this challenge, you'll create a reusable Excel spreadsheet to record monthly income and expenses, calculate totals automatically, and visualize your spending. This exercise builds practical spreadsheet and data analysis skills.

## Objective

Design an Excel workbook that tracks at least five income and five expense items, uses SUM formulas for totals, maintains a running balance, and includes a pie chart of expenses.

## Prerequisites

- Microsoft Excel (Office 365, 2021, or compatible)
- Basic knowledge of spreadsheet navigation and data entry
- Understanding of simple formulas and formatting

## Instructions

### Part 1: Set Up the Spreadsheet

- Open a new Excel workbook and rename Sheet1 to "Monthly Budget".
- In row 1, enter headers: Date (A1), Category (B1), Description (C1), Income (D1), Expense (E1), Balance (F1).

### Part 2: Enter Data

- In rows 2–6, add at least five income entries (e.g., salary, freelance). Enter amounts in column D; leave E blank.
- In rows 7–11, add at least five expense entries (e.g., rent, groceries). Enter amounts in column E; leave D blank.

### Part 3: Formulas and Balance

- In D12, enter `=SUM(D2:D11)` to total income.
- In E12, enter `=SUM(E2:E11)` to total expenses.
- In F2, enter your starting balance (e.g., 0 or an initial amount).
- In F3, enter `=F2 + D3 - E3` and drag down to the last data row.
- In F12, enter `=F11` to show the final balance.

### Part 4: Formatting and Visualization

- Apply Currency format to columns D, E, and F.
- Bold and color the header row; add borders for clarity.
- Insert a pie chart to visualize expense categories using your data.

## Deliverables

1. Excel (.xlsx) file with the completed budget tracker
2. Screenshot (PNG or JPG) of the spreadsheet with sample data and chart
3. Pie chart visualizing expenses
4. Well-formatted and labeled worksheet
5. Brief summary of your approach

## Evaluation Criteria

| Criteria                | Weight | Description                                              |
|-------------------------|--------|----------------------------------------------------------|
| Correct SUM formulas    | 40%    | Income and expense totals calculated accurately           |
| Running balance         | 30%    | Balance updates correctly with each transaction           |
| Data organization       | 20%    | Clear separation, labels, and readable layout             |
| Professional appearance | 10%    | Formatting, chart, and overall presentation               |

## Tips & Common Mistakes

- Keep income and expenses in separate columns for easy calculations.
- Use absolute references if you move totals or formulas.
- Test your balance formula by checking a few rows manually.
- Use filters (Ctrl+Shift+L) to analyze categories.
- Double-check chart data ranges for accuracy.

## Bonus Challenges (Optional)

1. Use SUMIF to total specific categories (e.g., "Food").
2. Add a summary sheet with weekly totals using pivot tables.

## Submission

Upload your .xlsx file and screenshot to the assignment portal. Name your file: FirstName_LastName_ExpenseTracker.xlsx.
