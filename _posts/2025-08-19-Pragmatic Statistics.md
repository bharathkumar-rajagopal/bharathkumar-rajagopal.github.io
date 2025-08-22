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

This is the second part of my beginner-friendly series on statistics. You can treat this as the main starting point for learning how to use statistics in research. Earlier, I wrote a post on [basic statistics for scientific research](https://bharathkumar-rajagopal.github.io/blog/2025/Statistics-for-Scientific-Research/), where I explained topics such as averages, variation, and the normal distribution. If you are new to those ideas, you might find that post helpful too. As I always mention, I am not an expert. I am still learning, reading, and trying to understand these ideas better each day. My aim is to share what I learn in a way that feels practical and easy to follow, especially for beginners like myself.
In this post, I want to go a bit further and talk about how to approach statistics in research. This was something I found quite confusing when I first started. It is not just about knowing formulas or using software. It is about understanding the type of research you are doing, the questions you are asking, and how to choose the right design and analysis method for your data.

I will use examples from general science and environmental or pollution studies, as that is the area I know best. These examples help explain the ideas more clearly, but the same principles apply to most fields of research. I will keep the language simple and avoid unnecessary jargon. Where technical terms are needed, I will explain them as clearly as I can. Most importantly, I want this post to be useful. If you feel unsure about how to use statistics in research, I hope this guide gives you a clear starting point and helps you avoid some of the mistakes I made when I began.

> #### Note
>
> I've done my best to make this post accurate. It’s quite a long one, written while learning from different sources. I believe the content is correct, but I plan to check with someone more experienced, like my professor or one who understands these topics better. If everything is confirmed, I’ll remove this note. Until then, please keep in mind that there may be a few mistakes or things I’ve misunderstood while learning. This is meant to be a basic learning guide, not a final reference.
> {: .block-warning }

---

## The One Big Idea: Match Questions to Designs, and Designs to Analyses

It is tempting to begin with methods, "Should I use t-tests, ANOVA, or regression?", but the honest starting point is your **research question**. Statistics is not magic dust sprinkled after data collection; it is a logical process that starts the moment you shape the question. A good workflow looks like this:

1. **Question**: Is it descriptive, predictive, explanatory/causal, or evaluative?
2. **Design**: Observational or experimental? Cross-sectional or longitudinal? Randomised or not? Controlled or not?
3. **Measurement & sampling**: What variables, scales, instruments, detection limits, sampling frames, and spatial/temporal scope?
4. **Analysis plan**: What assumptions, models/tests, diagnostics, uncertainty quantification, and sensitivity analyses?
5. **Interpretation & communication**: Effect sizes, intervals, context, limitations, and external validity.

If you can write a sentence or two about each of these before collecting data, your study will run more smoothly, fewer detours, fewer "we cannot analyse this" moments, and a much stronger story at the end.

---

## Variables and Measurement: Foundations You Cannot Skip

Before designs and tests, be precise about **what you are measuring** and **how**.

### Types of Variables

- **Categorical (nominal):** Unordered labels (e.g., land use type: industrial, residential, agricultural).
- **Ordinal:** Ordered categories (e.g., water clarity ratings: poor, fair, good, excellent).
- **Discrete counts:** Whole numbers, usually non-negative (e.g., number of species observed in a plot).
- **Continuous:** Real-valued measurements (e.g., PM2.5 concentration in µg/m³, pH, temperature).
- **Binary (Bernoulli):** Two outcomes (e.g., presence or absence of a pollutant above a threshold).

### Measurement Scales and Implications

- **Nominal/ordinal**: Use nonparametric methods or models that respect ordering (e.g., ordinal logistic regression).
- **Interval/ratio**: Continuous scale with meaningful differences (ratio has a true zero). Many parametric methods can be used if assumptions hold.
- **Count data**: Poisson or negative binomial distributions usually fit better than normal models.
- **Proportions** (bounded between 0 and 1): Binomial or beta regression, depending on how the data were generated.

### Reliability, Validity, and Detection Limits

- **Reliability**: Instruments should give similar results under similar conditions. Calibration and repeated measurements matter.
- **Validity**: The measurement must reflect what you care about (e.g., using PM2.5 readings to infer exposure requires thinking about indoor/outdoor differences and time activity patterns).
- **Detection limits (LOD/LOQ)**: If measurements fall below detection thresholds, you have censored data. Imputation rules of thumb (e.g., LOD/2) are common but can bias results; censored models are better when possible.

These points may seem dry, but they influence everything downstream. For example, transforming heavily skewed pollutant concentrations (e.g., log-transform) before modelling often stabilises variance and gives more sensible results.

---

## The Taxonomy of Research Questions

You can classify research questions by their **purpose**. This helps you choose both **designs** and **statistics**:

1. **Descriptive:** "What is happening?"  
   _Example:_ What is the distribution of PM2.5 across 24 neighbourhoods in winter?

2. **Associational/Correlational:** "What varies with what?"  
   _Example:_ Is traffic volume associated with NO₂ levels after adjusting for wind and temperature?

3. **Predictive:** "Can we forecast or classify accurately?"  
   _Example:_ Can we predict algal bloom probability next week from temperature, nutrients, and flow?

4. **Explanatory/Causal:** "What causes what?"  
   _Example:_ Does installing scrubbers in a factory reduce downwind SO₂ levels compared to similar sites without scrubbers?

5. **Evaluative/Policy:** "What is the effect of an intervention at scale?"  
   _Example:_ Did a statewide fuel policy reduce ambient benzene concentrations compared to neighbouring states?

Most confusion in statistics comes from trying to do a **causal** analysis with a **descriptive** design, or interpreting a correlational result as causal. Label your question early and keep it labelled.

---

## Study Designs You Will Actually Use

### 1. Descriptive Designs

**Goal:** Summarise characteristics without asserting causation.

- **Cross-sectional surveys/monitoring:** Measure variables at one time point across locations (e.g., sampling PM2.5 across districts).
- **Routine monitoring time series:** Summarise trends and seasonality in a single station’s data across time.
- **Ecological summaries:** Aggregate by units (e.g., average NO₂ per ward) to describe patterns.

**Typical statistics:** Percentiles, means/medians, histograms, kernel density plots, boxplots, maps, time series plots; confidence intervals for means or quantiles; trend lines with uncertainty ribbons.

**Pitfall:** Ecological fallacy, inferring individual-level relationships from aggregated data.

---

### 2. Observational Correlational Designs

**Goal:** Quantify associations while acknowledging potential confounding.

- **Cross-sectional associations:** Measure exposure and outcome once (e.g., neighbourhood traffic vs NO₂).
- **Case-control:** Select outcomes first (algal bloom events vs non-events) and look backward at exposures.
- **Cohort (prospective/retrospective):** Follow units over time with documented exposures (e.g., communities before/after monsoon with varying industrial emissions).
- **Panel data (repeated measures):** Multiple observations per unit (e.g., daily pollution and hospital visits by city).

**Typical statistics:** Correlation coefficients (Pearson/Spearman), linear or generalised linear models (GLMs), mixed-effects models for repeated measures and clustering, splines for nonlinearity.

**Pitfall:** Confounding, variables that affect both exposure and outcome (e.g., temperature confounding pollution–health associations). Directed acyclic graphs (DAGs) help decide what to adjust for.

---

### 3. Experimental Designs (Randomised)

**Goal:** Estimate causal effects by controlling or randomising exposures.

- **Completely randomised design (CRD):** Randomly assign treatments to units (e.g., plants exposed to different ozone levels).
- **Randomised block design:** Block on a nuisance factor (e.g., light conditions), then randomise within blocks.
- **Factorial designs (2×2, 3×3, etc.):** Manipulate multiple factors simultaneously (e.g., nutrient level × temperature on algal growth).
- **Split-plot designs:** Some treatments are harder to randomise and applied to plots, with sub-plot treatments nested within (common in field ecology).
- **Response surface/DOE (Design of Experiments):** Systematic designs to optimise responses (e.g., Box–Behnken for maximising biodegradation rate).

**Typical statistics:** ANOVA/ANCOVA, linear models with interactions, mixed models for random blocks or split plots, regression with polynomial terms.

**Pitfall:** Pseudoreplication, treating sub-samples from the same experimental unit as independent replicates.

---

### 4. Quasi-Experimental Designs (Natural Experiments)

**Goal:** Estimate causal effects when randomisation is not feasible, common in environmental policy and public health.

- **Interrupted time series (ITS):** Examine level/slope changes after a policy start date (e.g., emissions limits enacted on a known date).
- **Difference-in-differences (DiD):** Compare changes over time in treated vs control units (e.g., cities with vs without a new bus rapid transit policy).
- **Regression discontinuity (RD):** Use a threshold rule (e.g., plants above a capacity threshold must comply) and compare units just above and below.
- **Instrumental variables (IV):** Use a variable related to exposure but not directly to the outcome except through that exposure (weather as an instrument for pollution dispersion is sometimes used cautiously).

**Typical statistics:** Segmented regression (ITS), two-way fixed effects (DiD), local linear regression around thresholds (RD), two-stage least squares (IV).

**Pitfall:** Violated assumptions, parallel trends for DiD, no manipulation around the threshold for RD, valid instrument for IV.

---

### 5. Longitudinal vs Cross-Sectional

- **Cross-sectional:** Snapshot at one time, efficient but limited for causation.
- **Longitudinal:** Repeated measurements, richer, allows within-unit comparisons, but requires models that account for autocorrelation and individual random effects.

**Typical statistics for longitudinal data:** Mixed-effects models, generalised estimating equations (GEE), time series models (ARIMA), distributed lag models for exposure effects over time.

---

### 6. Sampling Designs You Can Defend

- **Simple random sampling (SRS):** Every unit has equal chance, baseline.
- **Stratified sampling:** Partition the population into strata (e.g., industrial, residential, rural) and sample within each, improves precision and ensures coverage.
- **Cluster sampling:** Sample clusters first (e.g., villages), then units within, cost effective but requires design-based inference.
- **Systematic sampling:** Every $k$th unit after a random start, simple but watch for periodic patterns.
- **Spatial sampling:** Regular grids, random points, stratified by land cover; transects along rivers or coastlines.
- **Multistage sampling:** Combine strategies, common in large surveys.

**Design analysis note:** If you use complex sampling (strata, clusters, weights), your analysis must reflect it, standard errors and confidence intervals differ from simple random sampling.

---

## Choosing the Right Design: A Practical Decision Framework

When in doubt, step through these questions:

1. **Is the aim descriptive, predictive, or causal?**

   - Descriptive: Surveys/monitoring; summary statistics and visualisation.
   - Predictive: Split data into training/validation; prioritise out-of-sample performance.
   - Causal: Randomise if possible; else consider DiD, ITS, RD, IV.

2. **What are your constraints?**

   - Ethical: You cannot randomly assign harmful exposures.
   - Feasibility: Instruments, budget, time, access to sites.
   - Policy/operational: Fixed implementation dates, partial rollouts.

3. **What are the key confounders or nuisance factors?**

   - Draw a DAG. Decide on minimal adjustment sets. Plan blocking or stratification.

4. **What is your unit of analysis and replication?**

   - Individual plants, plots, rivers, cities? Avoid pseudoreplication.

5. **What is the expected effect size and variability?**

   - Run a power analysis to determine sample size or assess if the study is underpowered. If unsure, pilot.

6. **What is the temporal and spatial scope?**

   - Are you capturing seasonality, diurnal cycles, or spatial heterogeneity?

7. **What quality controls are needed?**
   - Calibration, blanks, duplicates, inter-lab comparisons, metadata logging.

If you draft a one-page design rationale with these elements before collecting data, your future self will thank you.

---

## Statistical Approaches Paired to Designs

### Descriptive Statistics and Exploratory Data Analysis (EDA)

- **Central tendency:** Mean, median, trimmed mean. For skewed data, the median often summarises better.
- **Dispersion:** Standard deviation, interquartile range (IQR), median absolute deviation (MAD), robust to outliers.
- **Shape:** Skewness, kurtosis, useful but easy to over-interpret; visual checks (histograms, density plots, QQ-plots) usually suffice.
- **Transformations:** Log transform for positive skew (e.g., pollutant concentrations); square root for counts; consider Box–Cox families.
- **Outliers:** Investigate causes, instrument error, data entry, genuine variability? Do not auto-delete; document decisions.

**Visualisation staples:** Histograms, violin/box plots, scatterplots with smoothers, time series with seasonal decomposition, maps with appropriate colour scales.

---

### Hypothesis Testing With Context

- **Null hypothesis ($H_0$) vs alternative ($H_1$):** Set up before looking at results.
- **p-value:** Probability of data at least as extreme as observed under $H_0$. It is not the probability that $H_0$ is true.
- **Confidence intervals (CIs):** A 95% CI is a range constructed by a procedure that yields intervals covering the true parameter 95% of the time in repeated sampling. It does not guarantee the parameter has a 95% chance of lying within the interval for this specific sample (that is a Bayesian credible interval).
- **Type I/II errors:** False positives vs false negatives; choose $\\alpha$ meaningfully.
- **Power:** Probability of detecting a true effect of a given size, plan this before data collection.
- **Multiple testing:** Adjust $p$-values or control false discovery rates when running many tests.

**Advanced but practical:** Consider equivalence or non-inferiority tests when the goal is to demonstrate similarity within a margin (e.g., two sensors measuring PM2.5 within a pre-specified tolerance). The null becomes "difference larger than margin", which flips the usual logic.

---

### Parametric vs Nonparametric

- **Parametric** methods assume a distributional form (normal errors, constant variance). They are powerful when assumptions are approximately met and are often robust with large samples.
- **Nonparametric** methods (Wilcoxon, Kruskal-Wallis, Spearman) avoid distributional assumptions at the cost of power under ideal parametric conditions.
- **Permutation/randomisation tests** can be intuitive and powerful, especially in small experiments with randomisation built in.

The choice is not moral; it is situational, match your data’s quirks to the tool.

---

### Linear Models and Beyond

**Plain linear regression:**  
Use for continuous outcomes with roughly normal residuals and homoscedasticity. Include interactions when the effect of one variable depends on another (e.g., temperature modifies pollution effects). Diagnose with residual plots, leverage/Cook’s distance, and variance inflation factors (VIFs) for collinearity.

**Generalised linear models (GLMs):**

- **Logistic regression** for binary outcomes (e.g., bloom present vs absent).
- **Poisson/Negative binomial** for counts (e.g., daily asthma ER visits; overdispersion suggests negative binomial).
- **Gamma or log-normal** for strictly positive, right-skewed continuous outcomes (e.g., pollutant concentrations).

**Offsets & exposure:**  
In Poisson/negative binomial models, include exposure time or population as an offset (e.g., visits per day with log(days) as offset).

**Nonlinearity:**  
Use splines or generalised additive models (GAMs) when relationships are not linear, common with temperature–health associations or pollutant dose–response curves.

---

### ANOVA, ANCOVA, and Mixed-Effects Models

- **ANOVA:** Compare means across groups in randomised experiments; handles factorial designs and interactions.
- **ANCOVA:** Add covariates to improve precision or adjust for small imbalances.
- **Repeated measures ANOVA:** Works for balanced designs with sphericity, often too restrictive.
- **Mixed-effects models (LMM/GLMM):** Add random effects to model clustering (plots within sites, repeated measures within individuals). This tackles pseudoreplication and captures variability between clusters.
  - Random intercepts: different baselines by cluster.
  - Random slopes: different effect sizes by cluster.

**Diagnostic notes:** Check residuals at the appropriate level; ensure random effects meaningfully reduce correlation in residuals.

---

### Time Series and Longitudinal Analysis

- **ARIMA/Seasonal ARIMA:** Model autocorrelation and seasonality in a single station’s series, useful for forecasting.
- **State-space models:** Flexible for noisy processes; Kalman filtering for real-time estimation.
- **Distributed lag models (DLM):** Capture lagged effects of exposures (e.g., pollutants affecting health over several days).
- **Interrupted time series (segmented regression):** Test for level and slope changes after an intervention date; include seasonal terms and autocorrelation structures.

For panel data (many units over time), consider fixed effects (unit-specific intercepts) to control for unobserved, time-invariant confounders, common in DiD setups.

---

### Spatial and Spatiotemporal Methods

- **Spatial autocorrelation:** Nearby locations resemble each other, Moran’s I and semivariograms detect this.
- **Kriging/geostatistics:** Interpolate spatial fields (e.g., PM2.5 surfaces) using variograms and covariance structures.
- **Spatial regression:**
  - SAR/CAR models incorporate spatial lag/dependence.
  - Geographically weighted regression (GWR) explores spatially varying relationships, interpret with care; it is exploratory.
- **Spatiotemporal models:** Combine space and time, Gaussian process models, hierarchical Bayesian approaches when warranted.

**Practicality:** If you only have a handful of locations, complex spatial models may be overkill; start with mixed models and spatial random effects.

---

### Causal Inference Without Wishful Thinking

- **DAGs (Directed Acyclic Graphs):** Clarify causal assumptions. Identify minimal adjustment sets, avoid controlling for colliders or mediators unless the goal demands it.
- **Propensity scores:** Model probability of treatment given covariates and then match/weight/stratify to balance groups. Check balance diagnostics rigorously.
- **Instrumental variables:** Useful but fragile, requires an instrument that influences the exposure but has no direct path to the outcome other than through that exposure.
- **Regression discontinuity:** Uses thresholds to approximate random assignment locally, requires no manipulation around threshold and continuity of potential outcomes.
- **Difference-in-differences:** Needs parallel trends assumption; check pre-trends, use event-study specifications.

**Sensitivity analyses:** Always include them, test robustness to unmeasured confounding, alternative specifications, and different bandwidths (RD), or different matching methods (propensity and matching).

---

### Multivariate and High-Dimensional Methods

- **PCA (Principal Components Analysis):** Reduce correlated variables to orthogonal components, useful for summarising multi-pollutant mixtures or spectral data.
- **Clustering (k-means, hierarchical):** Group sites or samples, unsupervised, exploratory.
- **Ordination (NMDS, PCoA):** For community composition or multi-metric ecological data, distance-based, emphasises relative dissimilarities.
- **PERMANOVA:** Tests group differences on distance matrices, assumes similar dispersion unless adjusted.
- **Regularisation (Ridge, LASSO, Elastic Net):** When predictors are many and collinear; helps with prediction and variable selection cautiously.
- **Cross-validation:** Essential for predictive modelling, honest estimates of performance.

**Caution:** If the goal is inference on a small set of interpretable parameters, high-dimensional feature selection can obscure interpretability, be explicit about priorities (prediction vs explanation).

---

## Measurement, Data Quality, and Data Management

### Calibration and Quality Control

- Calibrate instruments regularly; log calibration runs.
- Include field blanks, duplicates, and lab spikes as appropriate.
- Track metadata: instrument model, firmware/software versions, environmental conditions, operator notes.

### Missing Data

- Classify missingness: MCAR (missing completely at random), MAR (missing at random), or MNAR (missing not at random), procedures differ.
- Multiple imputation often outperforms complete-case analysis if MAR is plausible.
- Keep the imputation model at least as rich as the analysis model.

### Censoring and Truncation

- **Censored** (e.g., values below LOD): Consider Tobit models or censored likelihoods; simple substitutions (LOD/2) can bias variance and effects.
- **Truncated**: Data not recorded below/above thresholds, affects distributions and inference.

### Data Structure

- Tidy data principles: each variable a column, each observation a row, each type of observational unit a table, makes analysis smoother and reproducible.

---

## Sample Size and Power, Before You Step into the Field

- **Define the minimum detectable effect (MDE)** that is substantively meaningful (not just statistically significant).
- **Estimate variability** from pilot data or the literature.
- **Choose $\\alpha$ and power ($1-\\beta$)** meaningfully (not reflexively 0.05 and 0.80).
- **Account for design effects**, clustering, stratification, unequal weights inflate or deflate variance relative to SRS.
- **Plan for attrition** in longitudinal studies and sensor downtime in monitoring.

A quick power calculation, even if approximate, can save months of fruitless data collection.

---

## Common Pitfalls and How to Dodge Them

1. **Pseudoreplication:** Treating technical replicates or subsamples as independent units.  
   _Fix:_ Identify the true experimental unit; use random effects.

2. **Dichotomising continuous variables:** Turning continuous exposures into "high/low", throws away information.  
   _Fix:_ Model the continuous variable or use splines.

3. **Fishing expeditions (p-hacking):** Trying many models and highlighting the one that "worked".  
   _Fix:_ Preregister analysis where possible; report all analyses; adjust for multiple comparisons.

4. **Violating independence:** Ignoring correlation in time, space, or clusters.  
   _Fix:_ Use mixed models, GEE, time series structures.

5. **Overfitting:** Too many parameters relative to observations.  
   _Fix:_ Penalisation, cross-validation, simpler models.

6. **Extrapolation:** Predicting outside the observed range.  
   _Fix:_ Be explicit about domains of applicability.

7. **Confounding left unaddressed:** Misattributing effects to the wrong cause.  
   _Fix:_ Use DAGs, design-based controls, thoughtful covariate adjustment.

8. **Unit mismatch:** Combining variables with incompatible spatial/temporal scales (e.g., hourly pollution with annual health outcomes).  
   _Fix:_ Align scales or model them appropriately (aggregation/disaggregation with care).

9. **Ignoring measurement error:** Treating noisy exposure measures as perfect.  
   _Fix:_ Use calibration, replicate measures, measurement-error models if needed.

10. **Misinterpreting p-values and CIs:** Equating non-significance with "no effect".  
    _Fix:_ Report effect sizes with uncertainty and discuss practical significance.

---

## A Method-Selection Guide by Question Type

**Descriptive (What is happening?)**

- **Design:** Cross-sectional sampling or monitoring.
- **Analyses:** Summaries, CIs for means/medians, distribution plots, spatial maps, time series decomposition for trends.
- **Deliverable:** A clear picture of central tendency, spread, and heterogeneity, no implied causation.

**Associational (What co-moves?)**

- **Design:** Observational; cross-sectional, cohort, or panel.
- **Analyses:** Correlations, GLMs, GAMs, mixed models; adjust for confounders; consider nonlinearity.
- **Deliverable:** Quantified association with caveats about causality.

**Predictive (What will happen?)**

- **Design:** Any; aim for representative training data and a validation plan.
- **Analyses:** Regularised regression, tree-based models, ensembles; cross-validation; calibration plots.
- **Deliverable:** Predictive accuracy and calibration; interpretability is helpful but secondary.

**Causal (What is the effect?)**

- **Design:** Randomised experiment if possible; else quasi-experimental (DiD, ITS, RD, IV) or carefully controlled observational studies with propensity methods.
- **Analyses:** Appropriate causal estimators with diagnostic checks and sensitivity analyses.
- **Deliverable:** Estimated effect with assumptions stated and evaluated as far as possible.

---

## Concrete Examples from Environmental and Pollution Science

### Example 1: Citywide Air Quality Description

**Question:** What is the distribution of PM2.5 across neighbourhoods during winter?

- **Design:** Stratified cross-sectional sampling, strata by land use and elevation.
- **Measurement:** Portable sensors calibrated weekly; duplicates in 10% of sites; metadata for wind conditions.
- **Analysis:**
  - Descriptive stats: medians, IQR, 10th/90th percentiles.
  - Spatial maps with interpolation only if justified (variogram supports spatial correlation).
  - Confidence intervals for neighbourhood means using stratified sampling weights.
- **Outcome:** A defensible baseline that tells residents, planners, and researchers what levels to expect and where outliers exist.

### Example 2: Effect of a Riverbank Vegetation Restoration on Water Temperature

**Question:** Does riparian planting reduce downstream water temperature?

- **Design:** Before–after control–impact (BACI), measure temperature upstream and downstream at treated sites and at similar control sites across time.
- **Analysis:**
  - Mixed-effects model with fixed effects for treatment, time (before/after), and their interaction, plus random intercepts for site.
  - Include seasonal splines to absorb seasonal cycles and an AR(1) residual structure for autocorrelation.
- **Outcome:** The interaction term estimates the treatment effect net of background temporal trends and site differences.

### Example 3: Experimental Algal Growth Under Nutrient and Temperature Factors

**Question:** How do nitrate concentration and temperature interact to affect algal growth?

- **Design:** 3×3 factorial experiment (three nitrate levels × three temperatures), randomised block by batch to control for day-to-day lab variation.
- **Analysis:** Two-way ANOVA or linear model with interaction; check residuals; consider log transform of growth.
- **Outcome:** Main effects and interaction, does high nitrate matter more at higher temperatures?

### Example 4: Policy Impact on NO₂ Levels, Difference-in-Differences

**Question:** Did new bus fleet regulations reduce roadside NO₂ compared to cities that did not implement similar regulations?

- **Design:** DiD with monthly averages from multiple monitoring stations in treated and control cities for three years pre- and two years post-policy.
- **Analysis:**
  - Two-way fixed effects (city and month/year fixed effects), weather controls (temperature, wind speed), and station random intercepts.
  - Event-study plots to inspect pre-trends.
- **Outcome:** An average treatment effect with uncertainty; robustness checks with alternative control groups and varying post-policy windows.

### Example 5: Exposure–Response for Daily Health Visits, Count Models with Lags

**Question:** Are daily ER visits for respiratory issues associated with same-day and lagged PM2.5?

- **Design:** Time series at city level with daily counts and pollutant measurements; account for seasonality and day-of-week effects.
- **Analysis:** Overdispersed Poisson (negative binomial) with distributed lags for PM2.5, splines for temperature and long-term trend, holiday indicators, and an offset for population.
- **Outcome:** Cumulative lagged effect estimate with interpretable relative risks per 10 µg/m³ increase.

---

## Reporting Results with Candour and Precision

- **Lead with the effect size and uncertainty**, not just the $p$-value.
- **Describe assumptions** and diagnostics briefly; put full checks in an appendix or supplement.
- **Contextualise magnitude**, what does a 5 µg/m³ reduction mean in practical or health terms?
- **Show the data** with clean plots, boxplots, trend lines, partial effect plots.
- **Admit limitations**: residual confounding, measurement error, generalisability, missingness.

A good rule: write the abstract as if you are explaining to a careful colleague who has ten minutes and a sharp pencil.

---

## Reproducibility and Workflow That Saves You Later

- **Plan & preregistration:** Even a one-page plan reduces researcher degrees of freedom.
- **Version control (Git):** Track changes; branch for experiments.
- **Notebooks & reports:** R Markdown/Quarto/Jupyter for reproducible narratives.
- **Tidy data & code style:** Consistent naming, functions for repeated steps, clear outputs.
- **Set seeds & record environments:** Document package versions; use renv (R) or virtual environments/conda (Python).
- **Data sharing & FAIR:** If possible, deposit data/code or a synthetic dataset and analysis scripts.

---

## Tools That Are Friendly to Beginners but Scale Well

- **Spreadsheets (with caution):** Good for initial inspection; error-prone for serious analysis.
- **R:** `tidyverse` for wrangling/plots; `lme4`/`glmmTMB` for mixed/GLMs; `mgcv` for GAMs; `sf`, `sp`, `gstat` for spatial; `forecast` or `fable` for time series; `MatchIt`/`WeightIt` for propensity methods.
- **Python:** `pandas`, `statsmodels`, `scikit-learn`, `patsy`; `geopandas`, `PySAL` for spatial; `pmdarima` for time series.
- **Power/sample size:** G\*Power, `pwr` in R, simulation-based power with your planned model.
- **GIS:** QGIS or ArcGIS for mapping and spatial joins.
- **Visualisation:** `ggplot2` (R), `seaborn`/`plotly` (Python).

Pick one primary analysis language and get comfortable. You can always add another later.

---

## A Practical Flowchart in Words

1. **Write your question** in one sentence, tag it as descriptive, associational, predictive, causal, or evaluative.
2. **Sketch a DAG** if there is any hint of causality, identify confounders to measure or block on.
3. **Choose a design** that your constraints allow, randomise if you can; otherwise, choose the cleanest quasi-experimental or observational design.
4. **Define your measurements**, units, instruments, calibration plan, detection limits, metadata.
5. **Plan sampling**, stratification, clustering, spatial coverage, temporal frequency.
6. **Run a power analysis** or small pilot.
7. **Write an analysis plan**, primary model, alternative specifications, diagnostics, sensitivity analyses.
8. **Collect data** with quality checks; log everything.
9. **Explore data**, plots, summaries, transformations.
10. **Fit models**, check assumptions; revise as needed without hunting for significance.
11. **Quantify uncertainty**, CIs, prediction intervals, posterior intervals if Bayesian.
12. **Report honestly**, effects, uncertainty, assumptions, limitations, and, importantly, what it means practically.

Tape this list near your workspace. It is boring, but it helps.

---

## Frequently Asked "But What Do I Use When…?"

- **Two groups, continuous outcome, randomised:** Two-sample t-test (or Wilcoxon if assumptions shaky); consider ANCOVA if baseline covariates help.
- **More than two groups, factorial experiment:** ANOVA with interactions; mixed models if blocks/random factors present.
- **Binary outcome (present/absent):** Logistic regression; add random effects for clustering.
- **Counts with overdispersion:** Negative binomial regression.
- **Proportions with varying denominators:** Binomial GLM with logit link and an offset if modelling counts of successes out of trials.
- **Skewed positive outcomes:** Gamma GLM with log link or log-normal model.
- **Nonlinear relationships:** GAMs or splines in GLMs.
- **Longitudinal with time-invariant confounding:** Fixed effects models; random effects if you assume uncorrelated random intercepts; add AR terms for autocorrelation.
- **Policy effect at a known time:** Interrupted time series; add seasonal and ARIMA structures as needed.
- **Policy effect with treated vs control units:** DiD with pre-trend checks and event-study plots.
- **Threshold-based assignment:** Regression discontinuity, local regression around the cutoff.
- **Exposure measured with error:** Regression calibration or simulation-extrapolation (SIMEX) if feasible.
- **Spatial interpolation:** Kriging if variogram supports spatial correlation and stationarity assumptions are plausible.

---

## Interpreting Effects, Beyond "It Is Significant"

- **Effect size:** Report magnitudes in interpretable units (e.g., a 10 µg/m³ increase relates to X% increase in outcome).
- **Uncertainty:** CIs or credible intervals; prediction intervals when forecasting.
- **Nonlinearity:** Show partial dependence plots or smooths with ribbons.
- **Heterogeneity:** If effects differ across subgroups (e.g., season, site), present stratified estimates or interaction terms, with caution about multiple testing.
- **Practical significance:** Tie back to standards, guidelines, or biological relevance.
- **Caveats:** Remind readers where assumptions matter, parallel trends, unmeasured confounding, or sensor accuracy.

---

## A Mini-Glossary You Will Actually Use

- **Confounder:** A variable related to both exposure and outcome that, if unadjusted, biases effect estimates.
- **Collider:** A variable influenced by two other variables; conditioning on it can create spurious associations.
- **Blocking:** Grouping experimental units by a nuisance factor to reduce variance.
- **Fixed effects:** Parameters for specific levels (e.g., city dummies) that control for time-invariant differences.
- **Random effects:** Parameters drawn from a distribution to capture cluster-level variability.
- **Homoscedasticity:** Constant variance of residuals across fitted values, violations suggest transformations or robust SEs.
- **Autocorrelation:** Correlation of residuals across time or space, model it or adjust SEs.
- **Overdispersion:** Variance exceeding the mean in count data, suggests negative binomial or quasi-Poisson.
- **Parallel trends:** DiD assumption that treated and control would have followed similar trends absent treatment.
- **Bandwidth (RD):** Window around the cutoff used for estimation, smaller reduces bias but increases variance.

---

## What I Would Do If Starting a New Environmental Study Tomorrow

1. **Write the question:** "Does converting a congested corridor to a bus-only lane reduce roadside NO₂ relative to parallel roads?"
2. **DAG:** Traffic → NO₂; weather affects NO₂; holidays affect traffic and NO₂; economic trends might affect both treated and control corridors similarly.
3. **Design:** DiD with treated corridor vs parallel corridors over two years pre- and one year post-intervention.
4. **Measure:** Fixed monitors at several sites along each corridor; portable cross-checks; weather station data; traffic counts.
5. **Sampling:** Continuous monitoring, validate with portable sensors on a rotating schedule.
6. **Power:** Use historical variance to estimate detectable change in NO₂ given station counts and time horizon.
7. **Analysis plan:** Two-way fixed effects, station random intercepts, weather controls, event-study pre-trend checks; sensitivity to alternative control corridors.
8. **Implementation:** Git repository, data dictionary, preprocessing scripts, preregister the plan.
9. **Results:** Effect size with 95% CI, graphics showing pre- and post-trends; robustness checks.
10. **Communication:** Implications for air quality targets; limitations, suggestions for further monitoring.

This skeleton adapts to many interventions, industrial scrubbers, fuel policy shifts, low-emission zones, or construction dust controls.

---

## A Closing Note, On Humility and Iteration

Statistics does not remove uncertainty, it quantifies and manages it. The best work I have seen is cautious, explicit about assumptions, and generous with diagnostics and alternative checks. As you move from beginner toward comfortable practitioner, your taste sharpens, you will care less about fancy methods and more about whether your design is credible, your measurements are defensible, and your conclusions are realistically bounded.

This post is a starting point, one I will build on with more detailed examples and hands-on walkthroughs (including code) in future posts. If there is a section you want expanded first, say, power analysis by simulation, or a full BACI example with mixed models, or a practical guide to interrupted time series, tell me, and I will prioritise it.

---

## Quick Reference, Choosing Designs and Analyses (Cheat Sheet)

- **Descriptive:** Stratified sampling or monitoring → summaries, CIs, maps, trend plots.
- **Associational:** Observational cross-sectional or cohort → GLMs/GAMs/mixed models with confounder adjustment.
- **Predictive:** Any representative data → regularisation, cross-validation, calibration.
- **Experimental:** Randomised designs (CRD, blocks, factorial, split-plot) → ANOVA/ANCOVA/mixed models.
- **Quasi-Experimental:** ITS, DiD, RD, IV → segmented regression, fixed effects, local regressions, 2SLS; assumption checks.
- **Longitudinal:** Mixed models, GEE, ARIMA, distributed lags; account for autocorrelation.
- **Spatial:** Kriging, SAR/CAR, spatial random effects; check variograms and Moran’s I.
- **Multivariate:** PCA/NMDS/cluster; PERMANOVA for group differences on distances.
- **Special data types:** Counts → Poisson/NB; Proportions → Binomial/Beta; Skewed positive → Gamma/log-normal.
- **Always:** Diagnose; report effect sizes with uncertainty; document assumptions and
