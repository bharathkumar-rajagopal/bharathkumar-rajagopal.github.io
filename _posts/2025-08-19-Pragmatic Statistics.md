---
layout: post
title: "Pragmatic Statistics: A Beginner-Friendly Guide for Research"
date: 2025-08-19 23:06:42
description: A practical, honest, and clear guide to statistical design and analysis.
tags: statistics
pretty_table: true
giscus_comments: true
related_publications: false
featured: false
toc:
  sidebar: left
---

This is the second part of my beginner-friendly series on statistics. You can use this as your main starting point for learning how to apply statistics in research. Previously, I wrote a post on [basic statistics for scientific research](https://bharathkumar-rajagopal.github.io/blog/2025/Statistics-for-Scientific-Research/), where I explained topics such as averages, variation, and the normal distribution. If you are new to those ideas, you might find that post helpful as well. I am not an expert, but I am learning and trying to understand these ideas better every day. My aim is to share what I learn in a way that is practical and easy to follow, especially for beginners.

In this post, I will go a bit further and talk about how to approach statistics in research. This is something I found confusing when I first started. It is not just about knowing formulas or using software. It is about understanding the type of research you are doing, the questions you are asking, and how to choose the right design and analysis method for your data.

I will use examples from general science and environmental or pollution studies, as that is the area I know best. These examples help explain the ideas more clearly, but the same principles apply to most fields of research. I will keep the language simple and avoid unnecessary jargon. Where technical terms are needed, I will explain them as clearly as I can. Most importantly, I want this post to be useful. If you feel unsure about how to use statistics in research, I hope this guide gives you a clear starting point and helps you avoid some of the mistakes I made when I began.

> #### Note
>
> I have done my best to make this post accurate. It is quite a long one, written while learning from different sources. I believe the content is correct, but I plan to check with someone more experienced, such as my professor or someone who understands these topics better. If everything is confirmed, I will remove this note. Until then, please keep in mind that there may be a few mistakes or things I have misunderstood while learning. This is meant to be a basic learning guide, not a final reference.
> {: .block-warning }

---

## The Main Idea: Match Your Questions to Designs, and Designs to Analyses

It is easy to want to start with methods, asking questions like "Should I use t-tests, ANOVA, or regression?" However, the real starting point is your **research question**. Statistics is not something you add after collecting data. It is a logical process that begins as soon as you shape your question. A good workflow looks like this:

1. **Question:** Is your question descriptive, predictive, explanatory or causal, or evaluative?
2. **Design:** Is your study observational or experimental? Is it a snapshot in time or does it follow things over time? Is it randomised or not? Is there a control group?
3. **Measurement and sampling:** What are you measuring? What scales and instruments are you using? What are the detection limits? How are you choosing your samples? What is the time and place covered?
4. **Analysis plan:** What assumptions do you need? What models or tests will you use? How will you check if your analysis is working? How will you measure uncertainty? Will you do any sensitivity analyses?
5. **Interpretation and communication:** How will you report effect sizes, intervals, context, limitations, and whether your results apply elsewhere?

If you can write a sentence or two about each of these before collecting data, your study will run more smoothly. You will have fewer surprises, fewer moments where you realise you cannot analyse your data, and a much stronger story at the end.

---

## Variables and Measurement: The Basics You Must Understand

Before you think about study designs or statistical tests, you need to be clear about **what you are measuring** and **how you are measuring it**.

### Types of Variables

- **Categorical (nominal):** These are labels without any order. For example, land use type such as industrial, residential, or agricultural.
- **Ordinal:** These are categories with a clear order. For example, water clarity ratings such as poor, fair, good, or excellent.
- **Discrete counts:** These are whole numbers, usually non-negative. For example, the number of birds seen in a park.
- **Continuous:** These are measurements that can take any value within a range. For example, temperature, height, or the concentration of a chemical in water.
- **Binary (Bernoulli):** These are variables with only two possible outcomes. For example, whether a pollutant is present or absent above a certain level.

### Measurement Scales and What They Mean

- **Nominal or ordinal:** For these, you usually use nonparametric methods or models that respect the order (for example, ordinal logistic regression).
- **Interval or ratio:** These are continuous scales where differences are meaningful. Ratio scales have a true zero. Many parametric methods can be used if their assumptions are met.
- **Count data:** These are often better analysed with Poisson or negative binomial models rather than normal models.
- **Proportions:** These are values between 0 and 1. You might use binomial or beta regression, depending on how the data were collected.

### Reliability, Validity, and Detection Limits

- **Reliability:** Your instruments should give similar results under similar conditions. This means you need to calibrate them and sometimes take repeated measurements.
- **Validity:** Your measurement should actually reflect what you care about. For example, if you use outdoor air pollution readings to estimate exposure, you need to think about whether people spend time indoors or outdoors.
- **Detection limits (LOD/LOQ):** Sometimes your instruments cannot measure below a certain level. If your data include values below this limit, you have censored data. Simple rules like replacing these values with half the detection limit are common, but they can bias your results. Special models for censored data are better if you can use them.

These points might seem technical, but they affect everything you do later. For example, if your data are very skewed, transforming them (such as taking the logarithm) before analysis can make your results more reliable.

---

## Types of Research Questions

You can group research questions by their **purpose**. This helps you choose both your **study design** and your **statistical methods**:

1. **Descriptive:** "What is happening?"  
   _Example:_ What is the range of air pollution levels across different neighbourhoods in winter?

2. **Associational or correlational:** "What varies with what?"  
   _Example:_ Is there a link between traffic volume and air pollution, after accounting for weather?

3. **Predictive:** "Can we forecast or classify accurately?"  
   _Example:_ Can we predict the chance of an algal bloom next week using temperature and nutrient levels?

4. **Explanatory or causal:** "What causes what?"  
   _Example:_ Does installing air filters in a factory reduce pollution levels in nearby areas compared to similar places without filters?

5. **Evaluative or policy:** "What is the effect of an intervention at scale?"  
   _Example:_ Did a new fuel policy reduce pollution levels compared to areas without the policy?

A lot of confusion in statistics comes from trying to answer a **causal** question with a **descriptive** design, or from interpreting a correlation as if it proves causation. Label your question early and keep that label in mind.

---

## Study Designs You Will Actually Use

### 1. Descriptive Designs

**Goal:** Summarise characteristics without claiming one thing causes another.

- **Cross-sectional surveys or monitoring:** Measure variables at one point in time across different places. For example, measuring air pollution in different districts on the same day.
- **Routine monitoring time series:** Look at trends and patterns over time at a single location.
- **Ecological summaries:** Group data by area, such as the average pollution level in each neighbourhood.

**Typical statistics:** Percentiles, means, medians, histograms, boxplots, maps, time series plots, and confidence intervals for means or other summaries.

**Common mistake:** Drawing conclusions about individuals from group-level data. This is called the ecological fallacy.

---

### 2. Observational Correlational Designs

**Goal:** Measure associations while recognising that other factors might be involved.

- **Cross-sectional associations:** Measure exposure and outcome at the same time. For example, comparing traffic and pollution in different areas.
- **Case-control:** Start with outcomes (such as people who became ill and those who did not) and look back at exposures.
- **Cohort (prospective or retrospective):** Follow groups over time, recording exposures and outcomes.
- **Panel data (repeated measures):** Collect data from the same units (such as cities or people) at multiple times.

**Typical statistics:** Correlation coefficients, linear or generalised linear models, mixed-effects models for repeated measures, and splines for non-linear relationships.

**Common mistake:** Confounding, where another variable affects both the exposure and the outcome. Drawing a diagram called a directed acyclic graph (DAG) can help you decide what to adjust for.

---

### 3. Experimental Designs (Randomised)

**Goal:** Estimate causal effects by controlling or randomising exposures.

- **Completely randomised design:** Randomly assign treatments to units, such as plants exposed to different levels of a chemical.
- **Randomised block design:** Group units by a factor that might affect the outcome, then randomise within those groups.
- **Factorial designs:** Test more than one factor at the same time, such as different levels of nutrients and temperature.
- **Split-plot designs:** Some treatments are applied to larger groups, with other treatments applied within those groups.
- **Design of Experiments (DOE):** Systematic designs to find the best combination of factors.

**Typical statistics:** ANOVA, ANCOVA, linear models with interactions, mixed models for random blocks or split plots, and regression with polynomial terms.

**Common mistake:** Pseudoreplication, which means treating subsamples from the same unit as if they were independent.

---

### 4. Quasi-Experimental Designs (Natural Experiments)

**Goal:** Estimate causal effects when randomisation is not possible, often used in policy or public health studies.

- **Interrupted time series:** Look for changes after a policy or event starts.
- **Difference-in-differences:** Compare changes over time in treated and control groups.
- **Regression discontinuity:** Use a threshold rule, such as comparing places just above and below a cut-off.
- **Instrumental variables:** Use a variable that affects the exposure but not the outcome directly.

**Typical statistics:** Segmented regression, two-way fixed effects, local linear regression, and two-stage least squares.

**Common mistake:** Not checking the assumptions needed for these methods, such as parallel trends for difference-in-differences.

---

### 5. Longitudinal and Cross-Sectional Designs

- **Cross-sectional:** Take a snapshot at one time. This is efficient but limited for understanding causes.
- **Longitudinal:** Collect repeated measurements over time. This allows you to see changes within units, but you need models that account for repeated measures.

**Typical statistics for longitudinal data:** Mixed-effects models, generalised estimating equations, time series models, and distributed lag models.

---

### 6. Sampling Designs You Can Explain

- **Simple random sampling:** Every unit has an equal chance of being chosen.
- **Stratified sampling:** Divide the population into groups (such as urban and rural) and sample within each group.
- **Cluster sampling:** Sample groups first (such as villages), then sample within those groups.
- **Systematic sampling:** Choose every kth unit after a random start.
- **Spatial sampling:** Use grids, random points, or lines across an area.
- **Multistage sampling:** Combine several strategies, often used in large surveys.

**Note on analysis:** If you use complex sampling, your analysis must account for it. Standard errors and confidence intervals will be different from simple random sampling.

---

## How to Choose the Right Design: A Step-by-Step Guide

When you are not sure, ask yourself these questions:

1. **What is your main aim? Is it descriptive, predictive, or causal?**

   - Descriptive: Use surveys or monitoring, and focus on summaries and visualisation.
   - Predictive: Split your data into training and validation sets, and focus on how well your model predicts new data.
   - Causal: Randomise if you can. If not, consider methods like difference-in-differences or interrupted time series.

2. **What are your constraints?**

   - Ethical: You cannot randomly assign harmful exposures.
   - Practical: What equipment, time, and money do you have? Can you access the sites you need?
   - Policy or operational: Are there fixed dates or partial rollouts?

3. **What are the main confounders or nuisance factors?**

   - Draw a DAG. Decide what you need to adjust for. Plan blocking or stratification if needed.

4. **What is your unit of analysis and replication?**

   - Are you studying individual people, plants, plots, rivers, or cities? Avoid treating subsamples as independent.

5. **What effect size and variability do you expect?**

   - Do a power analysis to decide how many samples you need. If you are not sure, do a small pilot study.

6. **What is the time and place covered by your study?**

   - Are you capturing seasonal changes, daily cycles, or differences between places?

7. **What quality controls do you need?**
   - Calibration, blanks, duplicates, comparisons between labs, and keeping good records.

If you write a one-page summary of your design before collecting data, you will save yourself a lot of trouble later.

---

## Statistical Approaches Matched to Designs

### Descriptive Statistics and Exploratory Data Analysis

- **Central tendency:** Mean, median, and trimmed mean. For skewed data, the median is often better.
- **Dispersion:** Standard deviation, interquartile range, and median absolute deviation. These show how spread out your data are.
- **Shape:** Skewness and kurtosis describe the shape of your data, but it is usually better to look at plots such as histograms or boxplots.
- **Transformations:** Taking the logarithm of positive, skewed data (such as pollution levels) can make your analysis more reliable. Square roots can help with counts.
- **Outliers:** Check if unusual values are due to errors or real variation. Do not delete them without a good reason, and always document your decisions.

**Useful plots:** Histograms, violin or box plots, scatterplots with smooth lines, time series plots, and maps.

---

### Hypothesis Testing in Context

- **Null hypothesis ($H_0$) and alternative ($H_1$):** Decide what you are testing before looking at your results.
- **p-value:** This is the probability of seeing data as extreme as yours if the null hypothesis is true. It is not the chance that the null hypothesis is true.
- **Confidence intervals (CIs):** A 95 percent CI is a range that would contain the true value in 95 percent of repeated samples. It does not mean there is a 95 percent chance the true value is in your interval.
- **Type I and II errors:** Type I is a false positive, Type II is a false negative. Choose your significance level ($\alpha$) carefully.
- **Power:** This is the chance of detecting a real effect. Plan this before collecting data.
- **Multiple testing:** If you do many tests, adjust your p-values or control the false discovery rate.

**Advanced but useful:** Sometimes you want to show that two things are similar, not different. Equivalence or non-inferiority tests are designed for this.

---

### Parametric and Nonparametric Methods

- **Parametric methods** assume your data follow a certain distribution, such as the normal distribution. They are powerful if the assumptions are met.
- **Nonparametric methods** do not make these assumptions. Examples include the Wilcoxon test and Spearman correlation. They are safer when you are unsure about your data, but may be less powerful.
- **Permutation or randomisation tests** are useful, especially in small experiments where you have randomisation.

The choice depends on your data, not on which method is "better".

---

### Linear Models and More

**Simple linear regression:**  
Use this when your outcome is continuous and your data are roughly normal. Include interactions if the effect of one variable depends on another. Always check your model with plots of the residuals and look for problems like collinearity.

**Generalised linear models (GLMs):**

- **Logistic regression** for binary outcomes.
- **Poisson or negative binomial** for counts. If the variance is much larger than the mean, use negative binomial.
- **Gamma or log-normal** for positive, skewed outcomes.

**Offsets and exposure:**  
In count models, include the time or population at risk as an offset.

**Nonlinearity:**  
Use splines or generalised additive models if the relationship is not straight.

---

### ANOVA, ANCOVA, and Mixed-Effects Models

- **ANOVA:** Compare means across groups in experiments.
- **ANCOVA:** Add other variables to improve precision.
- **Repeated measures ANOVA:** For balanced designs with repeated measures, but often too restrictive.
- **Mixed-effects models:** Add random effects to account for clustering or repeated measures. This helps avoid pseudoreplication.

**Diagnostics:** Check residuals at the right level and make sure random effects are helping.

---

### Time Series and Longitudinal Analysis

- **ARIMA:** Model patterns over time, such as trends and seasonality.
- **State-space models:** Flexible models for noisy data.
- **Distributed lag models:** Capture effects that happen with a delay.
- **Interrupted time series:** Test for changes after an event or policy.

For data from many units over time, use fixed effects to control for differences between units.

---

### Spatial and Spatiotemporal Methods

- **Spatial autocorrelation:** Nearby places tend to be similar. Use Moran’s I or semivariograms to check this.
- **Kriging:** A method for predicting values at new locations.
- **Spatial regression:** Models that include spatial relationships.
- **Spatiotemporal models:** Combine space and time, often using advanced methods.

**Practical advice:** If you have only a few locations, start with simple models.

---

### Causal Inference Without Overconfidence

- **DAGs:** Draw diagrams to clarify your assumptions about what causes what.
- **Propensity scores:** Estimate the chance of treatment given other variables, then match or weight your groups.
- **Instrumental variables:** Use a variable that affects the exposure but not the outcome directly.
- **Regression discontinuity:** Use a threshold to compare groups.
- **Difference-in-differences:** Compare trends in treated and control groups.

**Sensitivity analyses:** Always check how robust your results are to different assumptions.

---

### Multivariate and High-Dimensional Methods

- **PCA:** Reduce many correlated variables to a few summary variables.
- **Clustering:** Group similar samples together.
- **Ordination:** Methods for summarising complex data, often used in ecology.
- **PERMANOVA:** Test for group differences using distance measures.
- **Regularisation:** Methods like Ridge or LASSO help when you have many predictors.
- **Cross-validation:** Always check how well your model predicts new data.

**Caution:** If you want to explain your results, be careful with methods that make interpretation harder.

---

## Measurement, Data Quality, and Data Management

### Calibration and Quality Control

- Calibrate your instruments regularly and keep records.
- Include blanks, duplicates, and other checks.
- Record metadata such as instrument type, software version, and conditions.

### Missing Data

- Understand why data are missing. Are they missing completely at random, at random, or not at random?
- Multiple imputation is often better than just dropping missing data.
- Make sure your imputation model is at least as detailed as your analysis model.

### Censoring and Truncation

- **Censored data:** For example, values below the detection limit. Use special models if possible.
- **Truncated data:** Data not recorded below or above certain values. This affects your analysis.

### Data Structure

- Follow tidy data principles: each variable in a column, each observation in a row, each type of unit in a table.

---

## Sample Size and Power: Plan Before You Collect Data

- **Define the minimum effect you care about.**
- **Estimate variability** from pilot data or the literature.
- **Choose your significance level and power** carefully.
- **Account for design effects** such as clustering or stratification.
- **Plan for missing data** or equipment failures.

A quick power calculation can save you a lot of wasted effort.

---

## Common Mistakes and How to Avoid Them

1. **Pseudoreplication:** Treating subsamples as independent.  
   _Solution:_ Identify the true experimental unit and use random effects.

2. **Turning continuous variables into categories:** This wastes information.  
   _Solution:_ Model the variable as continuous or use splines.

3. **Trying many models and only reporting the best:**  
   _Solution:_ Plan your analysis in advance and report all results.

4. **Ignoring correlation in your data:**  
   _Solution:_ Use models that account for repeated measures or clustering.

5. **Overfitting:** Too many variables for your sample size.  
   _Solution:_ Use simpler models or regularisation.

6. **Extrapolating beyond your data:**  
   _Solution:_ Be clear about where your results apply.

7. **Not adjusting for confounding:**  
   _Solution:_ Use DAGs and adjust for the right variables.

8. **Mixing up units:** For example, combining hourly pollution with yearly health outcomes.  
   _Solution:_ Align your data or model the differences carefully.

9. **Ignoring measurement error:**  
   _Solution:_ Use calibration and consider measurement error in your models.

10. **Misinterpreting p-values and confidence intervals:**  
    _Solution:_ Report effect sizes and uncertainty, and discuss what they mean in practice.

---

## A Guide to Choosing Methods by Question Type

**Descriptive (What is happening?)**

- **Design:** Cross-sectional sampling or monitoring.
- **Analyses:** Summaries, confidence intervals, plots, maps, and time series analysis.
- **Goal:** Give a clear picture of what is happening, without claiming causes.

**Associational (What varies together?)**

- **Design:** Observational, such as cross-sectional or cohort studies.
- **Analyses:** Correlations, generalised linear models, mixed models, and splines.
- **Goal:** Quantify associations, but be careful about causality.

**Predictive (What will happen?)**

- **Design:** Any, but make sure your training data are representative and you have a validation plan.
- **Analyses:** Regularised regression, tree-based models, and cross-validation.
- **Goal:** Predict accurately, with interpretability as a bonus.

**Causal (What is the effect?)**

- **Design:** Randomised experiment if possible, otherwise use quasi-experimental or carefully controlled observational studies.
- **Analyses:** Use the right causal estimators and check your assumptions.
- **Goal:** Estimate the effect and be clear about your assumptions.

---

## Simple Examples from Environmental and Pollution Science

### Example 1: Describing Air Quality in a City

**Question:** What is the range of air pollution levels across neighbourhoods in winter?

- **Design:** Stratified sampling by land use and elevation.
- **Measurement:** Portable sensors calibrated weekly, duplicates at some sites, and records of wind conditions.
- **Analysis:**
  - Descriptive statistics: medians, interquartile ranges, and percentiles.
  - Maps if spatial patterns are clear.
  - Confidence intervals for neighbourhood means.
- **Outcome:** A clear baseline for residents and planners.

### Example 2: Effect of Riverbank Planting on Water Temperature

**Question:** Does planting trees along a river reduce water temperature downstream?

- **Design:** Measure temperature before and after planting, upstream and downstream, and at control sites.
- **Analysis:**
  - Mixed-effects model with treatment, time, and their interaction, plus random effects for site.
  - Include seasonal trends and autocorrelation.
- **Outcome:** The interaction term shows the effect of planting.

### Example 3: Experimental Study of Algal Growth

**Question:** How do nitrate and temperature affect algal growth?

- **Design:** Experiment with different levels of nitrate and temperature, randomised by batch.
- **Analysis:** Two-way ANOVA or linear model with interaction, check residuals, and consider transforming the outcome.
- **Outcome:** Main effects and interaction.

### Example 4: Policy Impact on Pollution Using Difference-in-Differences

**Question:** Did new bus regulations reduce pollution compared to cities without the policy?

- **Design:** Compare treated and control cities before and after the policy.
- **Analysis:**
  - Fixed effects for city and time, weather controls, and random effects for monitoring stations.
  - Plots to check trends before the policy.
- **Outcome:** Estimate of the policy effect with uncertainty.

### Example 5: Health Visits and Pollution with Lags

**Question:** Are daily hospital visits for breathing problems linked to pollution today and in the past few days?

- **Design:** Time series of daily counts and pollution levels, accounting for season and day of the week.
- **Analysis:** Negative binomial model with lags, splines for temperature and trend, and an offset for population.
- **Outcome:** Estimate of the effect over several days.

---

## Reporting Results Clearly and Honestly

- **Start with the effect size and uncertainty,** not just the p-value.
- **Describe your assumptions** and how you checked them.
- **Explain what the effect means in real terms.**
- **Show your data** with clear plots.
- **Admit limitations:** such as confounding, measurement error, or missing data.

A good rule is to write your summary as if you are explaining it to a careful colleague who has only a few minutes.

---

## Reproducibility and Good Workflow

- **Plan and preregister:** Even a short plan helps.
- **Version control:** Use Git to track changes.
- **Notebooks and reports:** Use tools like R Markdown, Quarto, or Jupyter.
- **Tidy data and code:** Use clear names and functions for repeated steps.
- **Set seeds and record environments:** Keep track of software versions.
- **Data sharing:** Share your data and code if possible.

---

## Tools That Are Friendly for Beginners and Useful Later

- **Spreadsheets:** Good for a first look, but not for serious analysis.
- **R:** Use tidyverse for data, lme4 or glmmTMB for mixed models, mgcv for splines, sf or sp for spatial data, forecast for time series, and MatchIt for propensity methods.
- **Python:** Use pandas, statsmodels, scikit-learn, patsy, geopandas, PySAL, and pmdarima.
- **Power and sample size:** G\*Power, pwr in R, or simulation-based power analysis.
- **GIS:** QGIS or ArcGIS for mapping.
- **Visualisation:** ggplot2 in R, seaborn or plotly in Python.

Pick one main analysis language and get comfortable with it.

---

## A Practical Checklist

1. **Write your question** in one sentence and label it as descriptive, associational, predictive, causal, or evaluative.
2. **Draw a DAG** if you are interested in causality, and identify confounders.
3. **Choose a design** that fits your constraints, randomise if possible.
4. **Define your measurements,** instruments, calibration, detection limits, and metadata.
5. **Plan your sampling,** including stratification and coverage.
6. **Do a power analysis** or a small pilot.
7. **Write an analysis plan,** including models, checks, and sensitivity analyses.
8. **Collect data** with quality checks and good records.
9. **Explore your data** with plots and summaries.
10. **Fit models** and check assumptions.
11. **Quantify uncertainty** with confidence or prediction intervals.
12. **Report honestly,** including effects, uncertainty, assumptions, and practical meaning.

Keep this list handy. It may seem simple, but it helps.

---

## Frequently Asked "What Should I Use When…?"

- **Two groups, continuous outcome, randomised:** Two-sample t-test or Wilcoxon test; consider ANCOVA if you have baseline variables.
- **More than two groups, factorial experiment:** ANOVA with interactions; mixed models if you have blocks or random factors.
- **Binary outcome:** Logistic regression; add random effects for clustering.
- **Counts with overdispersion:** Negative binomial regression.
- **Proportions with different denominators:** Binomial GLM with logit link and an offset.
- **Skewed positive outcomes:** Gamma GLM with log link or log-normal model.
- **Nonlinear relationships:** Use splines or generalised additive models.
- **Longitudinal data:** Fixed effects models or random effects if appropriate; add terms for autocorrelation.
- **Policy effect at a known time:** Interrupted time series with seasonal and ARIMA terms.
- **Policy effect with treated and control units:** Difference-in-differences with trend checks.
- **Threshold-based assignment:** Regression discontinuity with local regression.
- **Exposure measured with error:** Use regression calibration or simulation-extrapolation.
- **Spatial interpolation:** Use kriging if spatial correlation is present.

---

## Interpreting Effects: More Than Just "Significant"

- **Effect size:** Report in clear units, such as a 10 unit increase leads to a certain percentage change.
- **Uncertainty:** Use confidence or credible intervals, and prediction intervals for forecasts.
- **Nonlinearity:** Show plots of the relationship with uncertainty.
- **Heterogeneity:** If effects differ by group, show separate estimates or interactions, but be careful about multiple testing.
- **Practical significance:** Relate your results to real-world standards or guidelines.
- **Caveats:** Remind readers about important assumptions and limitations.

---

## A Mini-Glossary for Beginners

- **Confounder:** A variable that affects both the exposure and the outcome, which can bias your results if not adjusted for.
- **Collider:** A variable influenced by two other variables; adjusting for it can create false associations.
- **Blocking:** Grouping units by a factor to reduce variation.
- **Fixed effects:** Parameters for specific groups, such as cities, to control for differences.
- **Random effects:** Parameters that capture variation between groups.
- **Homoscedasticity:** Constant variance of errors; if this is not true, consider transformations or robust standard errors.
- **Autocorrelation:** Correlation of errors over time or space; model it or adjust your standard errors.
- **Overdispersion:** When the variance is greater than the mean in count data; use negative binomial models.
- **Parallel trends:** The assumption that treated and control groups would have followed similar trends without treatment.
- **Bandwidth (in regression discontinuity):** The window around the cut-off used for estimation.

---

## What I Would Do If Starting a New Environmental Study

1. **Write the question:** For example, "Does converting a busy road to a bus-only lane reduce pollution compared to similar roads?"
2. **Draw a DAG:** Show how traffic, weather, and other factors affect pollution.
3. **Design:** Use difference-in-differences with treated and control roads before and after the change.
4. **Measure:** Use fixed monitors, portable sensors, weather data, and traffic counts.
5. **Sampling:** Continuous monitoring, with checks using portable sensors.
6. **Power:** Use past data to estimate the smallest change you can detect.
7. **Analysis plan:** Fixed effects, random effects, weather controls, and trend checks.
8. **Implementation:** Use version control, a data dictionary, and clear scripts.
9. **Results:** Report effect size with confidence intervals and clear plots.
10. **Communication:** Explain what the results mean for air quality and policy.

This approach can be adapted to many types of interventions.

---

## A Final Note: Be Humble and Keep Improving

Statistics does not remove uncertainty, but helps you understand and manage it. The best work is careful, clear about assumptions, and open about limitations. As you learn more, you will care less about fancy methods and more about whether your design is solid, your measurements are reliable, and your conclusions are realistic.

This post is a starting point. I will add more detailed examples and hands-on guides in future posts. If you want a particular topic covered first, such as power analysis or a full example with mixed models, let me know.

---

## Quick Reference: Designs and Analyses (Cheat Sheet)

- **Descriptive:** Stratified sampling or monitoring, summaries, confidence intervals, maps, and trend plots.
- **Associational:** Observational studies, generalised linear models, splines, and mixed models with confounder adjustment.
- **Predictive:** Any representative data, regularisation, cross-validation, and calibration.
- **Experimental:** Randomised designs, ANOVA, ANCOVA, and mixed models.
- **Quasi-Experimental:** Interrupted time series, difference-in-differences, regression discontinuity, instrumental variables, and assumption checks.
- **Longitudinal:** Mixed models, generalised estimating equations, time series models, and distributed lags.
- **Spatial:** Kriging, spatial regression, and random effects; check for spatial correlation.
- **Multivariate:** Principal components, ordination, clustering, and PERMANOVA.
- **Special data types:** Counts use Poisson or negative binomial, proportions use binomial or beta, skewed positive data use gamma or log-normal.
- **Always:** Check your models, report effect sizes with uncertainty,
