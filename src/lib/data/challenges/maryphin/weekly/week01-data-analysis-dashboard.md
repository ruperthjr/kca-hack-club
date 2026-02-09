---
title: "Data Analysis Dashboard with COVID-19 Dataset"
description: "Create an interactive Excel/Google Sheets dashboard analyzing COVID-19 case data with visualizations and insights"
difficulty: "intermediate"
unit: "Week 1 Project: Computer Applications"
week: 1
technologies:
  - "Microsoft Excel/Google Sheets"
  - "Pivot Tables"
  - "Data Visualization"
  - "Statistical Analysis"
  - "Dashboard Design"
learningOutcomes:
  - "Import and clean real-world datasets in spreadsheet software"
  - "Create interactive pivot tables for data analysis"
  - "Design multiple chart types for effective data visualization"
  - "Implement dynamic dashboards with slicers and filters"
  - "Derive insights from data and present findings professionally"
estimatedTime: "8-12 hours"
requirements:
  - "Intermediate Excel/Sheets knowledge"
  - "Understanding of basic statistics"
  - "Access to Microsoft Excel or Google Sheets"
  - "Ability to download and handle CSV files"
deliverables:
  - "Complete dashboard with 3+ interactive visualizations"
  - "Pivot tables summarizing key metrics"
  - "Data cleaning and preparation steps documented"
  - "Written analysis report with insights"
  - "Dashboard user guide"
resources:
  - name: "Our World in Data: COVID-19 Dataset"
    url: "https://ourworldindata.org/covid-cases"
  - name: "Johns Hopkins University COVID-19 Data"
    url: "https://github.com/CSSEGISandData/COVID-19"
  - name: "WHO Coronavirus Dashboard"
    url: "https://covid19.who.int/"
  - name: "Microsoft Excel Pivot Table Tutorial"
    url: "https://support.microsoft.com/en-us/excel/pivot-tables"
  - name: "Google Sheets Data Visualization Guide"
    url: "https://support.google.com/docs/answer/190718"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# COVID-19 Data Analysis Dashboard Project

## Overview

Build a professional data analysis dashboard using COVID-19 case data to practice data manipulation, visualization, and insight generation. This project aligns with your interest in data science and analysis while developing practical spreadsheet skills.

## Objective

Create an interactive dashboard in Excel or Google Sheets that analyzes COVID-19 case data, provides visual insights into trends and patterns, and allows users to explore the data through filters and slicers. The dashboard should tell a data story about the pandemic's progression.

## Instructions

### Phase 1: Data Acquisition and Preparation

**Data Sources:**
- Download COVID-19 dataset from reliable source (e.g., WHO, Johns Hopkins, Our World in Data)
- Choose dataset with: Date, Country/Region, Confirmed Cases, Deaths, Recovered
- Ensure data covers at least 6 months for trend analysis

**Data Cleaning Steps:**
1. Remove unnecessary columns
2. Handle missing values appropriately
3. Convert date formats consistently
4. Standardize country/region names
5. Create calculated columns:
   - Daily new cases (difference from previous day)
   - Case fatality rate (deaths/confirmed cases)
   - Recovery rate (recovered/confirmed cases)
   - 7-day moving average for smoothing

**Dataset Requirements:**
- At least 10 countries/regions
- Minimum 180 days of data
- Clean, structured format ready for analysis

### Phase 2: Pivot Table Analysis

**Create 4+ Pivot Tables:**

1. **Country Summary Table:**
   - Total cases, deaths, recoveries by country
   - Average daily cases
   - Peak case count and date

2. **Time Series Analysis:**
   - Monthly case progression
   - Week-over-week growth rates
   - Daily trends with date grouping

3. **Comparative Analysis:**
   - Cases per capita (if population data available)
   - Fatality rates by country
   - Recovery rates comparison

4. **Regional Aggregation:**
   - Group countries by continent/region
   - Regional totals and averages
   - Regional growth patterns

**Pivot Table Features:**
- Calculated fields for rates and percentages
- Grouping by date (months, weeks)
- Slicers for country and date range selection
- Timeline control for date filtering
- Conditional formatting for highlights

### Phase 3: Visualization Development

**Create 5+ Chart Types:**

1. **Line Chart:** Daily new cases with 7-day moving average
2. **Bar Chart:** Total cases by country (top 10)
3. **Stacked Area Chart:** Cumulative cases over time
4. **Scatter Plot:** Cases vs deaths with trendline
5. **Heat Map:** Case intensity by country and month
6. **Combo Chart:** Cases and deaths on dual axis
7. **Dashboard Indicators:** Key metrics in KPI boxes

**Chart Requirements:**
- Professional color schemes (consider colorblind accessibility)
- Clear titles and axis labels
- Data labels where appropriate
- Legends positioned for clarity
- Dynamic ranges that update with filters

### Phase 4: Dashboard Assembly

**Dashboard Layout:**
+-----------------------+
| HEADER: Title & Date |
+-----------------------+
| KPIs | Slicers | Filters |
+-----------------------+
| Chart 1 | Chart 2 |
+-----------------------+
| Chart 3 | Chart 4 |
+-----------------------+
| Pivot Table | Insights |
+-----------------------+

**Interactive Elements:**
- Slicers for country, date range, case thresholds
- Timeline control for date selection
- Dropdown for metric selection (cases, deaths, recoveries)
- Reset button to clear all filters
- Dynamic titles that update with filters

**Design Principles:**
- Consistent spacing and alignment
- Logical visual hierarchy
- Minimal clutter, maximum insight
- Mobile-friendly layout considerations
- Print-ready formatting

### Phase 5: Analysis and Reporting

**Insight Generation:**
1. **Trend Analysis:** Identify peaks, troughs, and patterns
2. **Comparative Insights:** Which countries handled it best/worst?
3. **Rate Analysis:** Fatality and recovery rate trends
4. **Growth Patterns:** Exponential vs linear growth phases
5. **Seasonal Effects:** Any weekly or monthly patterns?

**Report Creation:**
- Executive summary of key findings
- Methodology explanation
- Data limitations and assumptions
- Recommendations based on data
- Future analysis possibilities

## Evaluation Criteria

1. **Data Preparation (20%):** Clean, structured data with proper calculations
2. **Pivot Table Quality (25%):** Comprehensive analysis, proper aggregations
3. **Visualization Effectiveness (25%):** Clear, informative, well-designed charts
4. **Dashboard Usability (15%):** Intuitive navigation, interactive features
5. **Insight Quality (15%):** Meaningful analysis, well-presented findings

## Required Deliverables

1. **Spreadsheet File (.xlsx or Google Sheets link)**
   - Raw data tab (cleaned)
   - Analysis tabs with pivot tables
   - Dashboard tab with all visualizations
   - Documentation tab with methodology

2. **Analysis Report (PDF)**
   - 2-3 page report with key insights
   - Screenshots of dashboard
   - Data sources and cleaning steps
   - Limitations and assumptions

3. **Presentation (Optional)**
   - 5-minute video walkthrough
   - Demonstration of interactive features
   - Explanation of key insights

## Common Mistakes to Avoid

- Using unprocessed raw data directly
- Charts with misleading scales or truncations
- No data validation or error checking
- Overcomplicated visualizations
- Missing axis labels or units
- Inconsistent formatting across charts
- No documentation of methodology
- Ignoring data quality issues
- Too many colors or chart types
- No mobile or print consideration

## Bonus Challenges

- Add forecasting using Excel's forecast tools
- Implement VBA macros for automation
- Create custom calculated fields with DAX
- Add geographic mapping with Power Map
- Integrate real-time data refresh
- Build comparative scenario analysis
- Create automated PDF report generation
- Add statistical significance testing

## Tips for Success

1. **Start with Clean Data:** Spend time on data preparation
2. **Test Interactivity:** Ensure slicers and filters work correctly
3. **Keep it Simple:** One clear insight per visualization
4. **Document Everything:** Note data sources and cleaning steps
5. **Get Feedback:** Have someone else test your dashboard

## Real-World Application

This project develops skills for:
- Business intelligence dashboard creation
- Data analysis and reporting roles
- Public health data visualization
- Business performance tracking
- Data-driven decision making

## Submission Checklist

- [ ] Complete dashboard with all visualizations
- [ ] 4+ pivot tables with different analyses
- [ ] 5+ different chart types implemented
- [ ] Interactive slicers and filters
- [ ] Clean, documented data preparation
- [ ] Analysis report with key insights
- [ ] Professional formatting throughout
- [ ] All formulas and references working
- [ ] File properly named and organized
- [ ] Documentation of methodology