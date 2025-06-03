---
layout: post
title: Statistics for Scientific Research: A Friendly Guide for Beginners
date: 2025-06-02 23:26:05
description: A complete, beginner-friendly guide to understanding statistics in scientific research
tags: Statistics
categories: current-research
giscus_comments: true
related_publications: true
featured: true
---

I always struggled with statistics in my early days of working in a lab. The formulas, the jargon, and the logic behind it all felt overwhelming. But over time, I realised that whether you're a student, researcher, or professional, understanding statistics is not just helpful — it's essential.

Statistics help us:

- Summarise large amounts of information
- Make informed decisions
- Test hypotheses
- Predict future outcomes

In this guide, I’ve tried to explain the most important statistical concepts used in scientific research, especially in health, biology, and social sciences. I’ve used simple language, real-world examples, and clear formulas to make things as accessible as possible.

I’ve done my best to simplify things, but for a deeper and more structured understanding, I highly recommend reading the original source: {% cite Daniel2024xd %}. It’s an absolute gem.

---

## 1. Descriptive Statistics: Summarising Data

Descriptive statistics help us describe and understand the basic features of a dataset. Think of it as the “first look” at your data.

### 1.1 Types of Data

There are two main types of data:

- **Quantitative (Numerical)**: e.g. height, weight, age
- **Qualitative (Categorical)**: e.g. gender, blood type, diagnosis

Quantitative data can be:

- **Discrete** (countable, like number of children)
- **Continuous** (measurable, like weight)

#### Example

```markdown
| Patient ID | Age | Gender | Blood Pressure |
| ---------- | --- | ------ | -------------- |
| 001        | 45  | Male   | 130            |
| 002        | 52  | Female | 140            |
| 003        | 38  | Male   | 125            |
```

- Age and Blood Pressure are **quantitative**
- Gender is **qualitative**

#### How to Use in Your Research

Before analysing your data, classify each variable. This helps you choose the right statistical test later.

---

### 1.2 Measures of Central Tendency

These tell us where the “centre” of the data lies.

#### Mean (Average)

Add up all the values and divide by the number of values.

```math
\begin{equation}
\mu = \frac{1}{N} \sum_{i=1}^{N} x_i
\label{eq:mean}
\end{equation}
```

#### Example

If 5 patients have weights: 60, 65, 70, 75, 80 kg

```math
\mu = \frac{60 + 65 + 70 + 75 + 80}{5} = 70
```

#### How to Use in Your Research

Use the mean to report average values like age, weight, or test scores. But be cautious if your data has outliers.

---

#### Median

The middle value when data is sorted. If there’s an even number of values, take the average of the two middle ones.

#### Example

Data: 45, 50, 55, 60, 100

Median = 55 (middle value)

#### How to Use in Your Research

Use the median when your data is skewed (e.g. income, hospital stay duration).

---

#### Mode

The most frequently occurring value.

#### Example

Data: 2, 3, 3, 4, 5

Mode = 3

#### How to Use in Your Research

Use the mode for categorical data (e.g. most common diagnosis).

---

### 1.3 Measures of Spread (Dispersion)

These tell us how spread out the data is.

#### Range

```math
\text{Range} = \text{Maximum} - \text{Minimum}
```

#### Example

Data: 10, 20, 30, 40, 50

Range = 50 - 10 = 40

#### How to Use in Your Research

Use range to get a quick sense of variability, but it’s sensitive to outliers.

---

#### Variance

How far each number is from the mean, on average.

```math
\begin{equation}
\sigma^2 = \frac{1}{N} \sum_{i=1}^{N} (x_i - \mu)^2
\label{eq:variance}
\end{equation}
```

#### Standard Deviation

The square root of the variance.

```math
\begin{equation}
\sigma = \sqrt{\sigma^2}
\label{eq:stddev}
\end{equation}
```

#### Example

Data: 2, 4, 4, 4, 5, 5, 7, 9

Mean = 5

Variance:

```math
\sigma^2 = \frac{(2-5)^2 + (4-5)^2 + ... + (9-5)^2}{8} = 4
```

Standard deviation:

```math
\sigma = \sqrt{4} = 2
```

#### How to Use in Your Research

Standard deviation is one of the most important statistics. Use it to describe variability in your data.

---

#### Interquartile Range (IQR)

The range of the middle 50% of the data.

```math
\text{IQR} = Q_3 - Q_1
```

#### Example

Data: 1, 2, 3, 4, 5, 6, 7, 8, 9

Q1 = 3, Q3 = 7 → IQR = 7 - 3 = 4

#### How to Use in Your Research

Use IQR to describe spread when your data is skewed or has outliers.

---

## 2. Probability: Measuring Uncertainty

Probability is the branch of mathematics that deals with the likelihood of events happening. In scientific research, probability helps us quantify uncertainty and make informed predictions.

### 2.1 What is Probability?

Probability is a number between 0 and 1 that tells us how likely an event is to occur.

- A probability of 0 means the event is impossible.
- A probability of 1 means the event is certain.
- A probability of 0.5 means the event is equally likely to happen or not.

### 2.2 Basic Probability Formula

If an event can happen in \( m \) ways out of \( N \) total equally likely outcomes, the probability of the event is:

```math
\begin{equation}
P(E) = \frac{m}{N}
\label{eq:basic_prob}
\end{equation}
```

#### Example

Suppose you have a bag with 3 red balls and 2 blue balls. What is the probability of picking a red ball?

There are 3 red balls out of 5 total balls:

```math
P(\text{Red}) = \frac{3}{5} = 0.6
```

### 2.3 Rules of Probability

#### Rule 1: Complement Rule

The probability that an event does not happen is:

```math
P(\text{not } A) = 1 - P(A)
```

#### Rule 2: Addition Rule (for mutually exclusive events)

If two events cannot happen at the same time:

```math
P(A \cup B) = P(A) + P(B)
```

#### Rule 3: Multiplication Rule (for independent events)

If two events do not affect each other:

```math
P(A \cap B) = P(A) \cdot P(B)
```

#### Example

Suppose the probability of rain on Monday is 0.3 and on Tuesday is 0.4. If the events are independent, the probability it rains on both days is:

```math
P(\text{Rain Mon and Tue}) = 0.3 \times 0.4 = 0.12
```

### 2.4 Conditional Probability

Sometimes we want to know the probability of an event given that another event has already happened. This is called conditional probability.

```math
\begin{equation}
P(A \mid B) = \frac{P(A \cap B)}{P(B)}
\label{eq:cond_prob}
\end{equation}
```

#### Example

Suppose 20 out of 100 patients have diabetes, and 15 of those 20 are over 60 years old. What is the probability that a patient has diabetes given they are over 60?

```math
P(\text{Diabetes} \mid \text{Over 60}) = \frac{15}{30} = 0.5
```

### 2.5 How to Use Probability in Your Research

- Use probability to model uncertainty in experiments.
- Apply conditional probability when analysing subgroups.
- Use the rules to combine probabilities of multiple events.

---

## 3. Probability Distributions

A probability distribution shows all possible values of a variable and how likely each one is. There are two main types:

- Discrete distributions: for countable outcomes.
- Continuous distributions: for measurable outcomes.

### 3.1 Binomial Distribution

Used when there are two possible outcomes (success or failure), repeated \( n \) times.

#### Formula

```math
\begin{equation}
P(X = x) = \binom{n}{x} p^x (1 - p)^{n - x}
\label{eq:binomial}
\end{equation}
```

Where:

- \( n \) is the number of trials
- \( x \) is the number of successes
- \( p \) is the probability of success

#### Example

Suppose a test has a 70 percent pass rate. What is the probability that 3 out of 5 students pass?

```math
P(X = 3) = \binom{5}{3} (0.7)^3 (0.3)^2 = 10 \cdot 0.343 \cdot 0.09 = 0.3087
```

#### How to Use

Use the binomial distribution when:

- You have repeated trials
- Each trial has two outcomes
- The probability of success is constant

---

### 3.2 Poisson Distribution

Used to model the number of events in a fixed time or space when events happen independently.

#### Formula

```math
\begin{equation}
P(X = x) = \frac{e^{-\lambda} \lambda^x}{x!}
\label{eq:poisson}
\end{equation}
```

Where:

- \( \lambda \) is the average number of events
- \( x \) is the actual number of events

#### Example

If a hospital gets 2 emergency calls per hour on average, what is the probability of getting 3 calls in an hour?

```math
P(X = 3) = \frac{e^{-2} \cdot 2^3}{3!} = \frac{0.1353 \cdot 8}{6} = 0.1804
```

#### How to Use

Use the Poisson distribution when:

- You are counting events
- Events happen independently
- The average rate is known

---

### 3.3 Normal Distribution

The normal distribution is a bell-shaped curve. Many natural phenomena follow this distribution, such as height, weight, and test scores.

#### Formula

```math
\begin{equation}
f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{ -\frac{(x - \mu)^2}{2\sigma^2} }
\label{eq:normal}
\end{equation}
```

Where:

- \( \mu \) is the mean
- \( \sigma \) is the standard deviation

#### Example

Suppose the heights of adult women are normally distributed with a mean of 160 cm and a standard deviation of 10 cm. What is the probability that a randomly selected woman is taller than 170 cm?

We convert to a z-score:

```math
z = \frac{170 - 160}{10} = 1
```

Using a z-table, \( P(Z > 1) = 0.1587 \)

#### How to Use

Use the normal distribution when:

- Your data is continuous
- The distribution is symmetric
- You want to calculate probabilities or percentiles

---

## 4. Hypothesis Testing

Hypothesis testing is a method used to make decisions or inferences about a population based on sample data. It helps determine whether the observed results are statistically significant or could have occurred by chance.

### 4.1 What is a Hypothesis?

A hypothesis is a statement about a population parameter. There are two types:

- Null hypothesis (\( H_0 \)): Assumes no effect or no difference.
- Alternative hypothesis (\( H_1 \) or \( H_a \)): Assumes there is an effect or a difference.

### 4.2 Steps in Hypothesis Testing

1. State the null and alternative hypotheses.
2. Choose a significance level (\( \alpha \)), commonly 0.05.
3. Select the appropriate test and compute the test statistic.
4. Find the p-value.
5. Compare the p-value to \( \alpha \).
6. Make a decision: reject or fail to reject \( H_0 \).

### 4.3 Test Statistic

A test statistic is a value calculated from sample data that is used to decide whether to reject the null hypothesis.

For a sample mean:

```math
\begin{equation}
z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}
\label{eq:ztest}
\end{equation}
```

Where:

- \( \bar{x} \) is the sample mean
- \( \mu_0 \) is the population mean under \( H_0 \)
- \( \sigma \) is the population standard deviation
- \( n \) is the sample size

### 4.4 p-Value

The p-value is the probability of obtaining a result as extreme as the one observed, assuming \( H_0 \) is true.

- If \( p < \alpha \), reject \( H_0 \)
- If \( p \geq \alpha \), fail to reject \( H_0 \)

### Example

A researcher claims that the average systolic blood pressure in a population is 120 mmHg. A sample of 36 patients has a mean of 125 mmHg and a standard deviation of 12 mmHg. Test the claim at \( \alpha = 0.05 \).

Step 1: \( H_0: \mu = 120 \), \( H_1: \mu \ne 120 \)

Step 2: \( \alpha = 0.05 \)

Step 3: Compute the test statistic

```math
z = \frac{125 - 120}{12 / \sqrt{36}} = \frac{5}{2} = 2.5
```

Step 4: Find the p-value. For \( z = 2.5 \), \( p = 0.0124 \)

Step 5: Since \( p = 0.0124 < 0.05 \), reject \( H_0 \)

Conclusion: There is evidence that the average blood pressure is not 120 mmHg.

### How to Use in Your Research

Use hypothesis testing to evaluate the effectiveness of treatments, compare groups, or test scientific claims. Always define your hypotheses clearly and interpret the p-value in context.

---

## 5. Confidence Intervals

A confidence interval (CI) gives a range of values that is likely to contain the true population parameter. It provides an estimate along with a measure of uncertainty.

### 5.1 Confidence Interval for the Mean

When the population standard deviation is known:

```math
\begin{equation}
\text{CI} = \bar{x} \pm z \cdot \frac{\sigma}{\sqrt{n}}
\label{eq:ci_known}
\end{equation}
```

When the population standard deviation is unknown and the sample size is small, use the t-distribution:

```math
\begin{equation}
\text{CI} = \bar{x} \pm t \cdot \frac{s}{\sqrt{n}}
\label{eq:ci_unknown}
\end{equation}
```

Where:

- \( \bar{x} \) is the sample mean
- \( s \) is the sample standard deviation
- \( n \) is the sample size
- \( z \) or \( t \) is the critical value from the standard normal or t-distribution

### Example

A sample of 25 patients has a mean cholesterol level of 200 mg/dL and a standard deviation of 20 mg/dL. Find the 95 percent confidence interval for the mean.

Use the t-distribution with \( df = 24 \), \( t = 2.064 \)

```math
\text{CI} = 200 \pm 2.064 \cdot \frac{20}{\sqrt{25}} = 200 \pm 8.256
```

So the 95 percent CI is (191.74, 208.26)

### How to Use in Your Research

Use confidence intervals to report estimates of means, proportions, or differences. They provide more information than a single point estimate and help assess the precision of your results.

---

## 6. Correlation and Regression

Correlation and regression are used to study relationships between variables. Correlation measures the strength and direction of a relationship, while regression models the relationship and allows prediction.

### 6.1 Correlation

Correlation tells us how strongly two variables are related.

#### Pearson Correlation Coefficient

```math
\begin{equation}
r = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum (x_i - \bar{x})^2 \sum (y_i - \bar{y})^2}}
\label{eq:correlation}
\end{equation}
```

- \( r = 1 \): perfect positive correlation
- \( r = -1 \): perfect negative correlation
- \( r = 0 \): no correlation

#### Example

Suppose you measure height and weight for 10 people. If taller people tend to weigh more, the correlation will be positive.

#### How to Use

Use correlation to explore relationships between variables before building models. Be cautious: correlation does not imply causation.

---

### 6.2 Simple Linear Regression

Regression models the relationship between a dependent variable \( y \) and an independent variable \( x \).

#### Regression Equation

```math
\begin{equation}
y = \beta_0 + \beta_1 x + \varepsilon
\label{eq:regression}
\end{equation}
```

Where:

- \( \beta_0 \) is the intercept
- \( \beta_1 \) is the slope
- \( \varepsilon \) is the error term

#### Estimating the Coefficients

```math
\begin{equation}
\hat{\beta}_1 = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}
\label{eq:slope}
\end{equation}
```

```math
\begin{equation}
\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}
\label{eq:intercept}
\end{equation}
```

#### Example

Suppose you want to predict blood pressure based on age. You collect data and fit a regression line:

```math
\text{BP} = 90 + 0.5 \cdot \text{Age}
```

This means for each additional year of age, blood pressure increases by 0.5 mmHg.

#### How to Use

Use regression to model and predict outcomes. Always check assumptions: linearity, independence, normality, and equal variance.

---

## 7. Analysis of Variance (ANOVA)

ANOVA is used to compare means across three or more groups. It tests whether at least one group mean is different from the others.

### 7.1 One-Way ANOVA

Used when comparing one factor across multiple groups.

#### Hypotheses

- \( H_0 \): All group means are equal
- \( H_1 \): At least one group mean is different

#### F-Statistic

```math
\begin{equation}
F = \frac{\text{Between-group variance}}{\text{Within-group variance}}
\label{eq:anova}
\end{equation}
```

If the F-statistic is large and the p-value is small, reject \( H_0 \).

#### Example

Suppose you test three diets and measure weight loss. ANOVA tells you if the average weight loss differs across diets.

#### How to Use

Use ANOVA when comparing more than two groups. If significant, follow up with post-hoc tests to identify which groups differ.

---

## 8. Non-Parametric Tests

Non-parametric tests are used when data do not meet the assumptions required for parametric tests, such as normality or equal variances. These tests are based on ranks rather than raw data.

### 8.1 When to Use Non-Parametric Tests

- Data are not normally distributed
- Sample sizes are small
- Data are ordinal or ranked
- Outliers are present

### 8.2 Common Non-Parametric Tests

#### Wilcoxon Signed-Rank Test

Used to compare two related samples (like the paired t-test).

#### Mann-Whitney U Test

Used to compare two independent samples (like the independent t-test).

#### Kruskal-Wallis Test

Used to compare more than two independent groups (like one-way ANOVA).

#### Example

Suppose you want to compare pain scores (on a 0 to 10 scale) between two groups of patients using different treatments. If the scores are not normally distributed, use the Mann-Whitney U test.

### How to Use

Use non-parametric tests when your data violate the assumptions of parametric tests. They are more robust and flexible for real-world data.

---

## 9. Survival Analysis

Survival analysis is used to analyse time-to-event data. The "event" could be death, disease recurrence, equipment failure, etc.

### 9.1 Key Concepts

- **Survival time**: Time from a defined starting point to the occurrence of a given event.
- **Censoring**: When the event has not occurred for some subjects during the study period.

### 9.2 Kaplan-Meier Estimator

Estimates the survival function from time-to-event data.

```math
\begin{equation}
\hat{S}(t) = \prod_{t_i \leq t} \left(1 - \frac{d_i}{n_i} \right)
\label{eq:km}
\end{equation}
```

Where:

- \( d_i \) = number of events at time \( t_i \)
- \( n_i \) = number of individuals at risk just before \( t_i \)

### 9.3 Log-Rank Test

Used to compare survival curves between two or more groups.

### 9.4 Cox Proportional Hazards Model

A regression model used to examine the effect of several variables on survival time.

```math
\begin{equation}
h(t) = h_0(t) \cdot e^{\beta_1 x_1 + \beta_2 x_2 + \cdots + \beta_k x_k}
\label{eq:cox}
\end{equation}
```

Where:

- \( h(t) \) is the hazard at time \( t \)
- \( h_0(t) \) is the baseline hazard
- \( x_1, x_2, \ldots, x_k \) are covariates

### Example

In a clinical trial, you want to compare the time to relapse between two treatments. Use Kaplan-Meier curves to visualise survival and the log-rank test to compare them.

### How to Use

Use survival analysis when your outcome is time until an event. It is widely used in clinical trials, epidemiology, and reliability engineering.

---

## 10. Summary

This guide has covered the essential statistical concepts used in scientific research. Here is a quick recap:

- Use descriptive statistics to summarise your data.
- Understand probability to model uncertainty.
- Use probability distributions to describe how data behave.
- Apply hypothesis testing to make decisions.
- Use confidence intervals to estimate parameters.
- Use correlation and regression to explore and model relationships.
- Use ANOVA to compare multiple groups.
- Use non-parametric tests when assumptions are not met.
- Use survival analysis for time-to-event data.

Always remember to:

- Understand your data type and distribution.
- Choose the right statistical method.
- Interpret results in the context of your research question.

With these tools, you can confidently analyse data and draw meaningful conclusions in your scientific work.

---
