---
layout: post
title: Statistics for Scientific Research
date: 2025-06-02 23:26:05
description: Complete statistical guide with environmental science applications
tags: statistics
pretty_table: true
giscus_comments: true
related_publications: true
featured: true
toc:
  sidebar: left
---

I remember feeling completely lost when I first encountered statistical analysis in my research. All those formulas and jargon seemed overwhelming. But here's what I learnt: statistics is simply a toolkit for understanding patterns in data. Whether you're studying pollution levels, species diversity, or medical outcomes, these methods help transform numbers into meaningful insights.

Statistics gives us the power to:

- Understand complex datasets
- Distinguish real patterns from random variations
- Measure uncertainty in our observations
- Make evidence-based decisions

In this guide, I'll explain essential statistical concepts using straightforward language. For detailed understanding, I highly recommend {% cite Daniel2024 %} - it's an absolute gem.

---

## 1. Descriptive Statistics: Understanding Your Data

Before getting into more advanced techniques, we need to understand our data's basic characteristics. Start by identifying different data types. Quantitative data represents measurable amounts:

- Discrete: Countable values (e.g., number of contaminated sites)
- Continuous: Precise measurements (e.g., chemical concentration levels)

Qualitative data involves categories:

- Nominal: Unordered groups (e.g., types of pollutants)
- Ordinal: Ranked categories (e.g., low/medium/high contamination levels)

When summarising data, we examine where values cluster. The mean ($\bar{x}$) calculates the average value:
\begin{equation}
\bar{x} = \frac{1}{n}\sum\_{i=1}^{n} x_i
\end{equation}
where $n$ is the number of observations and $x_i$ represents individual values. Use this for symmetrical data distributions.

The median identifies the middle value in ordered data, better for skewed measurements like pollutant concentrations. The mode shows the most frequent value, useful for categorical data.

To understand data spread, variance ($s^2$) measures average squared deviation from the mean:
\begin{equation}
s^2 = \frac{1}{n-1}\sum\_{i=1}^{n} (x_i - \bar{x})^2
\end{equation}
Standard deviation ($s$) is its square root, in original units. For skewed data, the interquartile range (IQR) is more appropriate:
\begin{align*}
\text{IQR} = Q_3 - Q_1
\end{align*}
where $Q_1$ (25th percentile) and $Q_3$ (75th percentile) contain the middle 50% of values. This helps identify variability in field measurements.

Additionally, consider skewness and kurtosis to describe the shape of the distribution.

---

## 2. Probability: Working with Uncertainty

Probability quantifies how likely events are, from 0 (impossible) to 1 (certain). Key rules include:

- Complement rule: $P(\text{not } A) = 1 - P(A)$
- Addition rule for mutually exclusive events: $P(A \text{ or } B) = P(A) + P(B)$
- Multiplication rule for independent events: $P(A \text{ and } B) = P(A) \times P(B)$

For dependent events, conditional probability is essential:
\begin{equation}
P(A \mid B) = \frac{P(A \cap B)}{P(B)}
\end{equation}
This models situations where outcomes depend on conditions, like the probability of ecosystem recovery given specific interventions.

Additionally, Bayes' Theorem can be useful for updating probabilities based on new evidence.

---

## 3. Probability Distributions: Modelling Randomness

Different distributions model different data patterns. The binomial distribution describes yes/no outcomes:
\begin{equation}
P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}
\end{equation}
where $n$ = trials, $k$ = successes, $p$ = success probability. Useful for contamination detection studies.

The Poisson distribution models rare events:
\begin{equation}
P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}
\end{equation}
where $\lambda$ = average event rate. Applies to industrial incidents or wildlife sightings.

The normal distribution (bell curve) appears frequently:
\begin{equation}
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
\end{equation}
with $\mu$ = mean, $\sigma$ = standard deviation. Approximately 68% of values fall within $\mu \pm \sigma$, 95% within $\mu \pm 2\sigma$. Many statistical tests assume normality.

---

## 4. Hypothesis Testing: Answering Research Questions

Hypothesis testing evaluates whether observed patterns reflect real effects. Start with:

- Null hypothesis ($H_0$): No effect (e.g., $\mu_{\text{treated}} = \mu_{\text{control}}$)
- Alternative hypothesis ($H_1$): Effect exists

Set significance level $\alpha$ (typically 0.05). For comparing a sample mean to a standard:
\begin{equation}
t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}
\end{equation}
where $\bar{x}$ = sample mean, $\mu_0$ = reference value, $s$ = standard deviation, $n$ = sample size. If p-value < $\alpha$, reject $H_0$.

Additionally, consider one-tailed vs. two-tailed tests and Type I/II errors.

---

## 5. Confidence Intervals: Estimating Precision

Confidence intervals show where the true population parameter likely resides:
\begin{equation}
\text{CI} = \bar{x} \pm t\_{\alpha/2, df} \frac{s}{\sqrt{n}}
\end{equation}
where $t$ comes from t-distribution tables. A 95% CI indicates that 95% of similar intervals would contain the true mean with repeated sampling.

Note that CI width decreases with larger sample size or lower variability.

---

## 6. Correlation and Regression

Correlation ($r$) measures linear association strength (-1 to 1):
\begin{equation}
r = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum (x_i - \bar{x})^2 \sum (y_i - \bar{y})^2}}
\end{equation}
Values near ±1 indicate strong relationships, but correlation doesn't imply causation.

Regression models variable relationships:
\begin{equation}
Y = \beta_0 + \beta_1 X + \varepsilon
\end{equation}
Slope $\beta_1$ shows Y's change per unit X:
\begin{equation}
\hat{\beta}\_1 = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}
\end{equation}

Consider assumptions of linear regression (e.g., linearity, homoscedasticity, independence, normality of residuals).

---

## 7. Analysis of Variance (ANOVA)

ANOVA compares means across three or more groups:


\begin{equation}
F = \frac{MS_{\text{between}}}{MS_{\text{within}}} = \frac{SS_{\text{between}} / df_{\text{between}}}{SS_{\text{within}} / df_{\text{within}}}
\end{equation}


where $SS$ = sum of squares, $MS$ = mean square, $df$ = degrees of freedom. Significant F-values indicate group differences.

Consider post-hoc tests (e.g., Tukey's HSD) if ANOVA is significant.

---

## 8. Non-Parametric Tests

When data violates normality assumptions, use distribution-free alternatives:

- Mann-Whitney U test: Compares two independent groups
- Kruskal-Wallis test: Compares three or more groups
- Wilcoxon signed-rank test: For paired samples
- Spearman’s rho: For correlation

These work for ordinal data, small samples, or skewed distributions.

---

## 9. Survival Analysis

Survival analysis handles time-to-event data with incomplete observations:
\begin{equation}
\hat{S}(t) = \prod\_{t_i \leq t} \left(1 - \frac{d_i}{n_i}\right)
\end{equation}
where $d_i$ = events at time $t_i$, $n_i$ = subjects at risk.

Consider censoring and log-rank test for comparing survival curves.

---

## 10. Statistical Workflow

Effective analysis follows these steps:

1. Define specific research questions
2. Design studies with proper sampling methods
3. Collect quality-controlled data
4. Explore through visualisation
5. Select appropriate statistical methods
6. Interpret results in context

---

> **Key Recommendations:**
>
> - Visualise data at all stages
> - Document analytical decisions thoroughly
> - Report effect sizes with confidence intervals
> - Acknowledge study limitations
> - Consult statisticians during design phase  
>   {: .block-tip}

Additionally, consider reproducibility and open data/code sharing.

---

I plan to write more about statistics, especially in the context of environmental science, in future posts. I’ll focus on practical aspects of analysis, and it might also serve as a personal reference. It will take some time and effort, but I’ll do my best to share it as soon as I can.

---

**Further Resources:**

- [R for Data Science](https://r4ds.had.co.nz)
- [StatQuest YouTube Channel](https://youtube.com/joshstarmer)
