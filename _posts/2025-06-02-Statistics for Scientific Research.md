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

I remember feeling completely lost when I first encountered statistical analysis in my research. All those formulas and jargon seemed like an impenetrable wall. But here's what I learned: statistics is simply a toolkit for understanding patterns in data. Whether you're studying pollution levels, species diversity, or clinical outcomes, these methods help transform raw numbers into meaningful insights.

Statistics gives us the power to:

- Make sense of complex datasets
- Separate real patterns from random noise
- Quantify uncertainty in our measurements
- Make evidence-based decisions

In this guide, I'll explain essential statistical concepts using straightforward language. For deeper exploration, I highly recommend {% cite Daniel2024 %} it's an absolute gem.

---

## 1. Descriptive Statistics: Understanding Your Data

Before exploring complex tests, we need to understand our data's basic characteristics. This starts with recognising different data types. Quantitative data represents measurable quantities discrete for countable things like species counts, continuous for precise measurements like pH levels. Qualitative data involves categories nominal for unordered groups like soil types, ordinal for ranked categories like pollution severity levels.

When summarising data, we look at where values cluster. The mean ($\bar{x}$) gives the arithmetic average:
\begin{equation}
\bar{x} = \frac{1}{n}\sum\_{i=1}^{n} x_i
\end{equation}
where $n$ is number of observations and $x_i$ are individual values. It works well for symmetric data. The median identifies the middle value in ordered data, better for skewed distributions like pollutant concentrations. The mode shows the most frequent value, useful for categorical data.

We also need to understand how data spreads out. Variance ($s^2$) measures average squared deviation from the mean:
\begin{equation}
s^2 = \frac{1}{n-1}\sum\_{i=1}^{n} (x_i - \bar{x})^2
\end{equation}
Standard deviation ($s$) is its square root, in original units. For skewed data, the interquartile range (IQR) is more appropriate:
\begin{align*}
\text{IQR} = Q_3 - Q_1
\end{align*}
where $Q_1$ (25th percentile) and $Q_3$ (75th percentile) contain the middle 50% of values. This helps identify variability and potential outliers in field measurements.

---

## 2. Probability: Working with Uncertainty

Probability quantifies how likely events are, ranging from 0 (impossible) to 1 (certain). The complement rule states that $P(\text{not } A) = 1 - P(A)$ if there's a 20% chance of rain, there's an 80% chance it won't rain. For mutually exclusive events (like detecting either lead or mercury contamination at a single test point), the addition rule applies: $P(A \text{ or } B) = P(A) + P(B)$.

When events are independent, the multiplication rule gives the joint probability: $P(A \text{ and } B) = P(A) \times P(B)$. For dependent events, conditional probability becomes essential:
\begin{equation}
P(A \mid B) = \frac{P(A \cap B)}{P(B)}
\end{equation}
This helps model scenarios like the probability of fish kills given high toxin levels, where outcomes depend on environmental conditions.

---

## 3. Probability Distributions: Modelling Randomness

Different distributions model different data types. The binomial distribution describes yes/no outcomes across fixed trials:
\begin{equation}
P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}
\end{equation}
where $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ is the combination formula, $n$ is trials, $k$ successes, and $p$ success probability. Use this for contamination detection studies.

The Poisson distribution models rare events:
\begin{equation}
P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}
\end{equation}
where $\lambda$ is the average event rate. This applies to situations like predicting industrial accidents or wildlife sightings.

The normal distribution (bell curve) appears everywhere:
\begin{equation}
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
\end{equation}
with $\mu$ as mean and $\sigma$ standard deviation. About 68% of values fall within $\mu \pm \sigma$, 95% within $\mu \pm 2\sigma$. Many statistical tests assume normality, so always check with histograms or Q-Q plots.

---

## 4. Hypothesis Testing: Answering Research Questions

Hypothesis testing evaluates whether observed patterns reflect real effects. Start with a null hypothesis ($H_0$) of no effect (e.g., $\mu_{\text{treated}} = \mu_{\text{control}}$) and alternative hypothesis ($H_1$) of an effect. Set significance level $\alpha$ (usually 0.05).

For comparing a sample mean to a standard, use a t-test:
\begin{equation}
t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}
\end{equation}
where $\bar{x}$ is sample mean, $\mu_0$ reference value, $s$ standard deviation, and $n$ sample size. The p-value indicates how extreme your results would be if $H_0$ were true. If p < $\alpha$, reject $H_0$.

---

## 5. Confidence Intervals: Estimating Precision

Confidence intervals provide a range where the true population parameter likely lies. For means with unknown population standard deviation:
\begin{equation}
\text{CI} = \bar{x} \pm t\_{\alpha/2, df} \frac{s}{\sqrt{n}}
\end{equation}
where $t$ comes from the t-distribution table. A 95% CI means that with repeated sampling, 95% of such intervals would contain the true mean. This shows estimate precision better than point estimates alone.

---

## 6. Correlation and Regression

Correlation ($r$) measures linear association strength (-1 to 1):
\begin{equation}
r = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum (x_i - \bar{x})^2 \sum (y_i - \bar{y})^2}}
\end{equation}
Values near ±1 indicate strong relationships, but correlation doesn't imply causation.

Regression models relationships between variables:
\begin{equation}
Y = \beta_0 + \beta_1 X + \varepsilon
\end{equation}
Slope $\beta_1$ shows how Y changes per unit X:
\begin{equation}
\hat{\beta}\_1 = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}
\end{equation}
Intercept $\beta_0$ is the Y value when X=0. Use this for prediction and understanding relationships.

---

## 7. Analysis of Variance (ANOVA)

ANOVA compares means across three or more groups. The F-statistic compares between-group to within-group variation:
\begin{equation}
F = \frac{MS*{\text{between}}}{MS*{\text{within}}} = \frac{SS*{\text{between}}/df*{\text{between}}}{SS*{\text{within}}/df*{\text{within}}}
\end{equation}
where SS = sum of squares, MS = mean square, df = degrees of freedom. Significant F-values indicate group differences, followed by post-hoc tests to identify where differences lie.

---

## 8. Non-Parametric Tests

When data violates normality assumptions, use distribution-free alternatives. The Mann-Whitney U test compares two independent groups using ranks. The Kruskal-Wallis test extends this to three or more groups. These work for ordinal data, small samples, or skewed distributions.

---

## 9. Survival Analysis

Survival analysis handles time-to-event data with censored observations. The Kaplan-Meier estimator calculates survival probabilities:
\begin{equation}
\hat{S}(t) = \prod\_{t_i \leq t} \left(1 - \frac{d_i}{n_i}\right)
\end{equation}
where $d_i$ = events at time $t_i$, $n_i$ = subjects at risk. The Cox model extends this to assess multiple predictors.

---

## 10. Statistical Workflow

Good analysis follows a logical path:

1. Define precise research questions
2. Design studies with proper sampling and controls
3. Collect quality-controlled data
4. Explore through visualisation
5. Choose appropriate statistical methods
6. Interpret results in context

> **Pro Tips:**
>
> - Visualise before and after analysis
> - Document every decision
> - Report effect sizes with confidence intervals
> - Acknowledge limitations
> - Consult statisticians early  
>   {: .block-tip}

---

This might give a very basic introduction. But I’m planning to talk more about statistics and environmental science in future posts, especially what to keep in mind when doing these kinds of analyses; much more in-depth. It'll also be a useful reference for myself. That said, it does take time and effort, so I’ll get to it when I can.

---

**Further Resources**:

- [R for Data Science (Online Book)](https://r4ds.had.co.nz)
- [StatQuest YouTube Channel](https://youtube.com/joshstarmer)
