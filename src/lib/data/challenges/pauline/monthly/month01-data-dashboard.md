---
title: "Production-Ready Data Analysis Dashboard"
description: "Build a multi-page, interactive Streamlit dashboard using real-world data — includes data cleaning, EDA, Plotly visualizations, and cloud deployment."
difficulty: "advanced"
unit: "Unit 6: Computer Applications"
day: 5
week: null
month: 1
technologies:
    - "Python 3.9+"
    - "Pandas"
    - "NumPy"
    - "Plotly / Plotly Express"
    - "Streamlit"
    - "statsmodels"
    - "scikit-learn"
    - "Git / GitHub"
    - "Docker (optional)"
learningOutcomes:
    - "Implement robust data cleaning and validation pipelines with Pandas"
    - "Perform exploratory data analysis and statistical summaries"
    - "Design and build interactive Plotly visualizations"
    - "Create a responsive multi-page Streamlit dashboard"
    - "Optimize performance using caching and data types"
    - "Deploy a production-ready app to Streamlit Cloud and manage version control"
estimatedTime: "15-20 hours"
requirements:
    - "Python 3.9 or higher"
    - "pip and virtualenv or venv"
    - "Git and a GitHub account"
    - "Streamlit Cloud account for deployment"
    - "Code editor (VS Code recommended)"
    - "Access to a real-world dataset (Kaggle, OWID, or public API)"
deliverables:
    - "Multi-page Streamlit app (source code) in a GitHub repo"
    - "Live deployed dashboard URL"
    - "Comprehensive README with setup and usage"
    - "Data analysis report (PDF) summarizing findings and methodology"
    - "Presentation slides and at least three dashboard screenshots"
resources:
  - name: "Pandas Documentation"
    url: "https://pandas.pydata.org/docs/"
  - name: "Plotly Python Graphing Library"
    url: "https://plotly.com/python/"
  - name: "Streamlit Documentation"
    url: "https://docs.streamlit.io/"
  - name: "Kaggle Datasets"
    url: "https://www.kaggle.com/datasets"
  - name: "Our World in Data (public datasets)"
    url: "https://ourworldindata.org/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Production-Ready Data Analysis Dashboard

## Overview

Build a polished, production-ready data dashboard that ingests a real-world dataset, performs end-to-end cleaning and exploratory analysis, presents interactive Plotly visualizations across multiple pages in Streamlit, and is deployed to the cloud for stakeholder access.

## Objective

Deliver a deployable Streamlit dashboard that demonstrates data engineering, statistical analysis, clear visual storytelling, performance optimization, and reproducible deployment.

## Prerequisites

- Basic Python and Pandas experience
- Familiarity with plotting libraries (Plotly recommended)
- Git and GitHub workflow knowledge
- Streamlit installed and a free Streamlit Cloud account
- A chosen dataset (CSV or API access)

## Instructions

### Part 1: Data acquisition and cleaning
1. Select a dataset (example: COVID-19 OWID CSV, Kaggle e-commerce CSV, or stock price API).
2. Create a reproducible loader in utils/data_loader.py:
     - Use requests for APIs or pd.read_csv for files.
     - Validate schema and required columns.
3. Implement clean_dataset(df) in utils/data_cleaner.py:
     - Standardize column names to snake_case.
     - Parse dates with pd.to_datetime and set appropriate dtypes.
     - Remove duplicates and handle missing values with domain-appropriate strategies.
     - Detect outliers using IQR or z-score and document treatment decisions.
4. Add unit tests for cleaning functions and a sample fixture dataset.

Code example:
```python
def clean_dataset(df: pd.DataFrame) -> pd.DataFrame:
        df = df.drop_duplicates().rename(columns=str.lower).copy()
        df['date'] = pd.to_datetime(df['date'], errors='coerce')
        df['category'] = df['category'].fillna('Unknown').astype('category')
        df['value'] = pd.to_numeric(df['value'], errors='coerce').fillna(df['value'].median())
        Q1, Q3 = df['value'].quantile([0.25, 0.75])
        IQR = Q3 - Q1
        df = df[~((df['value'] < Q1 - 1.5 * IQR) | (df['value'] > Q3 + 1.5 * IQR))]
        return df
```

### Part 2: Exploratory data analysis and feature engineering
1. Produce descriptive statistics and distribution checks (histograms, box plots).
2. Compute time-series aggregations and rolling metrics (weekly/monthly sums and moving averages).
3. Generate correlation matrix and a heatmap; run seasonal_decompose if data is temporal.
4. Engineer at least two new features (e.g., growth_rate, rolling_mean, category_score).

Suggested analyses:
- summary = df.describe()
- correlation = df.select_dtypes('number').corr()
- monthly = df.resample('M', on='date')['value'].sum()

### Part 3: Dashboard implementation and deployment
1. Structure the app as a multi-page Streamlit project (app.py + pages/).
2. Implement interactive controls in the sidebar: date range, multi-select, numeric sliders.
3. Create at least six visualization types: time-series line, bar chart, choropleth (if geographic), scatter, heatmap, and distribution plots using Plotly.
4. Add export features: download filtered CSV, export charts to HTML or PNG, and generate a PDF report programmatically.
5. Optimize with st.cache_data and efficient dtypes; ensure responsive layout and mobile-friendly views.
6. Create requirements.txt, add .streamlit/config.toml, push to GitHub, and deploy on Streamlit Cloud.

Streamlit snippet:
```python
@st.cache_data(ttl=86400)
def load_and_clean(path):
        df = pd.read_csv(path)
        return clean_dataset(df)
```

## Deliverables

1. GitHub repository with complete source code and clear commits.
2. Live deployed Streamlit dashboard URL in deployment_url.txt.
3. README.md with setup, usage, and dataset sources.
4. analysis_report.pdf that includes methodology, key insights, visual evidence, and recommendations.
5. presentation.pdf and screenshots folder with at least three annotated images.

## Evaluation Criteria

| Criteria | Weight | Description |
|---------|--------:|-------------|
| Data cleaning & validation | 25% | Correct, reproducible cleaning with tests and documentation |
| Analysis & insights | 30% | Statistical rigor, feature engineering, and meaningful findings |
| Visualizations & UX | 20% | Clear, interactive, well-labeled charts and responsive layout |
| Code quality & documentation | 15% | Readability, docstrings, README, and PEP 8 compliance |
| Deployment & deliverables | 10% | Working live app, complete deliverables, reproducible setup |

## Tips & Common Mistakes

- Cache expensive operations to avoid slow reloads.
- Use categorical dtypes to reduce memory usage.
- Validate user inputs and guard against empty filter results.
- Avoid overcrowded visuals; prefer small multiples or drill-downs.
- Do not hardcode local file paths; use relative paths or environment variables.

## Bonus Challenges (Optional)

1. Add forecasting (ARIMA, Prophet, or scikit-learn regressors) and compare model performance.
2. Implement user authentication and saved dashboard views.
3. Integrate real-time data via a public API and add streaming updates.

## Submission

- Push the project to a public GitHub repo named data-dashboard-[yourname].
- Include deployment_url.txt with the deployed Streamlit URL.
- Submit the GitHub repo link and the deployment URL according to the course submission instructions.
- Ensure README lists dataset source and citations.
