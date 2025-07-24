---
layout: post
title: "Pollution, Populations, and the Role of Mathematical Modelling"
date: 2025-06-20 16:34:08
description: Mathematical models help us understand how pollution affects biological populations. They share important knowledge on survival thresholds, environmental stability, and the importance of clean-up efforts.
tags: Pollution, Mathematical Biology
categories: current-research
giscus_comments: true
related_publications: true
---

Pollution is not just a chemical problem. It is a biological one, and increasingly, a mathematical one too. As researchers explore how toxic substances affect living organisms, mathematical modelling has become a vital tool in understanding the long-term consequences of environmental contamination.

At the heart of this research is a simple but powerful idea: pollutants do not remain outside the organism. They enter the body, influence internal systems, and return to the environment when the organism dies. This cycle creates a feedback loop that can either stabilise or destabilise populations. Models that include these interactions offer a more realistic picture of ecological dynamics.

### Modelling Pollution and Survival

To study how a population behaves in a polluted environment, researchers developed a system of differential equations. These equations describe how the population size, internal toxicant concentration, and environmental toxicant concentration change over time.

\begin{equation}
\frac{dx}{dt} = x(t) \left( r_0 - aC_0(t) - bC_e(t) - f x(t) \right)
\label{eq:population_growth}
\end{equation}

Here:

- $$ x(t) $$ is the population biomass,
- $$ C_0(t) $$ is the toxicant concentration inside organisms,
- $$ C_e(t) $$ is the toxicant concentration in the environment,
- $$ r_0 $$ is the intrinsic growth rate,
- $$ a, b, and f $$ are constants representing sensitivity to internal toxicant, environmental toxicant, and intra-species competition respectively.

This equation shows that as pollution increases (either internally or externally), the growth rate of the population decreases. If the pollution is too high, the population may decline to extinction.

The internal toxicant dynamics are modelled by:

\begin{equation}
\frac{dC_0}{dt} = k C_e(t) \left( g + m + b_0 - f x(t) \right) C_0(t)
\label{eq:internal_toxicant}
\end{equation}

This reflects how organisms absorb toxicants from the environment and how internal levels are affected by metabolism, egestion, and death.

The environmental toxicant concentration is governed by:

\begin{equation}
\frac{dC_e}{dt} = k_1 C_e(t) x(t) + \left( g_1 + d_1 + a_1 C_0(t) + b_1 C_e(t) \right) x(t) C_0(t) - h C_e(t) + u(t)
\label{eq:environment_toxicant}
\end{equation}

This equation includes:

- uptake by organisms,
- release from dead organisms,
- natural decay or removal (via $$ h $$),
- and external input $$ u(t) $$, such as industrial pollution.

### Why These Equations Matter

These equations help identify critical thresholds. For example, if the external input $$ u(t)$$ exceeds a certain value, the population cannot survive. But if it stays below that threshold, the population may persist. This is formalised in the paper through conditions for persistence and extinction based on parameter values.

The model also shows how increasing the clean-up rate $$ h $$ or reducing $$ u(t) $$ can shift the system from extinction to persistence. This is not just theoretical—it provides a quantitative basis for environmental policy.

### Incomplete H-function and Pollution Diffusion

In a complementary study, researchers used the incomplete H-function to solve the pollutant diffusion equation:

\begin{equation}
\frac{\partial k}{\partial t} = E_c a k + K_c \frac{\partial^2 k}{\partial x^2}
\label{eq:pollutant_diffusion}
\end{equation}

This equation models how pollutants spread in space and time. The solution is expressed using the incomplete H-function:

$$
k(x, t) = c_{a,b}^{c,d}(z x^r t^l)
$$

This approach allows for exact solutions without simplifying assumptions, using contour integrals and special function theory. It provides a flexible framework to study how pollutant concentration evolves and affects species over time.

### Stability Is Not Always Safety

One of the more sobering findings is that even if the environment reaches a steady state, the population may still decline. This happens when the steady state is at a low level of population biomass, which may not be sustainable in the long term.

The model also shows that pollution effects are not linear. Small increases in toxicant levels can lead to large changes in population outcomes, especially near the threshold.

### A Tool for Action

Mathematical models like these are not just academic exercises. They help us understand the complex interactions between pollution and life. They also guide decisions—how much pollution is too much, how much clean-up is enough, and what happens if we do nothing.

This area of research shows that survival is not just a matter of biology. It is also about numbers, rates, and thresholds. As pollution continues to rise, understanding the maths behind ecological systems becomes more important—not only for scientists but also for policymakers and communities.

If we want to protect life, we must understand the equations that govern it.

> For further reading - {% cite purohit2021impact %} and {% cite he2007survival %}
> {: .block-tip}
