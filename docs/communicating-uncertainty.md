---
title: "Communicating uncertainty"
layout: guidance-page
---

> ## Main messages
> When publishing statistics with associated uncertainty, you should:
> - Be transparent: Draw attention to any uncertainty in your reports and accompanying spreadsheets to avoid misinterpretation and misuse.
> - Be specific about what exactly is uncertain: Explain why there is uncertainty in an estimate, how the uncertainty has been quantified, the limitations of the data and any assumptions made in the analysis.
> - Indicate uncertainty using numerical ranges in parentheses after each value with associated uncertainty.
> - Use plain and accessible language: Make sure that when you write about uncertainty it can be understood by all.
> - Visualise uncertainty: Show uncertainty in your data visualisations and explain to readers what the uncertainty represents.


{% include sources-text.md %}

## What do we mean by uncertainty?

The method by which we gather information about the world is characterised by assumptions and limitations. These assumptions and limitations introduce imprecision into our understanding and mean that any estimate we make to describe real-world phenomena or conclusion we draw is unlikely to be the "true value", even when based on sound data and appropriate methods. The difference between our estimate and the “true value” is what we mean by uncertainty.

Uncertainty can arise from multiple sources including sampling variation, measurement error, systematic biases and assumptions made in statistical models.

The [Winton Centre for Risk and Evidence Communication](https://wintoncentre.maths.cam.ac.uk/) at the University of Cambridge distinguishes between two levels of uncertainty: direct and indirect. Both direct and indirect uncertainty are crucial to consider when communicating uncertainty in statistics and data.


{% capture card_content_1 %}
Direct uncertainty refers to uncertainty about an estimate (or fact) that can be communicated in absolute terms (such as a standard error, confidence intervals, credible intervals and statistical significance). Direct uncertainty is uncertainty that is explicitly measured or quantified during data collection or as part of data analysis.

For example, taking the estimate of disease X positivity in the UK, the direct uncertainty would be summarised by including a range within which the true value is expected to lie. We would write this as "disease X positivity was estimated to be 2.3% (95% confidence interval: 1.9% to 2.7%)."
{% endcapture %}

{% capture card_content_2 %}
In contrast to direct uncertainty, indirect uncertainty refers to uncertainty about the underlying quality of evidence that forms the basis for any claims about the estimate (or fact). It is not directly measured or quantified but is inferred from uncertainties associated with the analysis. This will often be communicated as a list of caveats about the underlying statistics or data, or it can be summarised into a qualitative or ordered categorical scale (such as the [GRADE scale](https://bestpractice.bmj.com/info/toolkit/learn-ebm/what-is-grade/) for communicating the quality of underlying evidence about the effects of medical interventions).

The indirect uncertainty would cover how the data had been collected and analysed, measurement error, historical revisions due to missing data or under-reporting of a group or region. Typically, this added context can be found in the main body of a publication and/or in a quality and methodology information (QMI) report.

{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_1 title="Direct uncertainty" %}
  {% include card.html content=card_content_2 title="Indirect uncertainty" %}
{% include cards-container-end.html %}


## Why uncertainty matters

Uncertainty is an inherent part of statistics and data, but it can directly influence our interpretation of their reliability. This is because, as humans, we have a particular dislike for ambiguity and a natural preference for facts. The reason is straightforward: people naturally (and rationally) prefer to make decisions when they have all the relevant information and are confident in their knowledge. The term uncertainty itself can lead to suspicion and is often misinterpreted, implying that the statistics are of little value or incorrect.

For the public, uncertainty in numbers and what it means for their use can be difficult to grasp, and this can affect public trust in statistics and the organisations that communicate them. For statistics producers, being honest, open and up front about uncertainty can help to minimise misinterpretation, maintain confidence, and protect the integrity of the data, the analysis, and the communicator.

The [Code of Practice for Statistics](https://code.statisticsauthority.gov.uk/) commits statistics producers to the highest standards of quality in statistics. The Quality pillar of the Code contains practices for communicating uncertainty that all producers should be mindful of. See inside the expandable sections below for more detail on these principles. 


{% capture expandable_content_1 %}
[Suitable data sources](https://code.statisticsauthority.gov.uk/the-code/quality/q1-suitable-data-sources/):
"The nature of data sources, and how and why they were selected, should be explained. Potential bias, uncertainty and possible distortive effects in the source data should be identified and the extent of any impact on the statistics should be clearly reported.""
{% endcapture %}

{% capture expandable_content_2 %}
[Sound methods](https://code.statisticsauthority.gov.uk/the-code/quality/q2-sound-methods/):
"Relevant limitations arising from the methods and their application, including bias and uncertainty, should be identified and explained to users. An indication of their likely scale and the steps taken to reduce their impact on the statistics should be included in the explanation."
{% endcapture %}

{% capture expandable_content_3 %}
[Assured quality](https://code.statisticsauthority.gov.uk/the-code/quality/q3-assured-quality/):
"The extent and nature of any uncertainty in the estimates should be clearly explained."
{% endcapture %}


{% include expandable-block-start.html %}
  {% include expandable-section.html number="1" content=expandable_content_1 title="Principle Q1.5" %}
  {% include expandable-section.html number="2" content=expandable_content_2 title="Principle Q2.4" %}
  {% include expandable-section.html number="3" content=expandable_content_3 title="Principle Q3.3" %}
{% include expandable-block-end.html %}



In addition to the Code of Practice for Statistics, ensuring that uncertainty in statistics and data is clearly explained is a key pillar of the Office for Statistics Regulation’s [regulatory guidance on intelligence transparency](https://osr.statisticsauthority.gov.uk/publication/regulatory-guidance-on-intelligent-transparency/). For more information on why uncertainty matters, also see the [Uncertainty Toolkit for Analysts in Government](https://analystsuncertaintytoolkit.github.io/UncertaintyWeb/index.html).

## Common measures of direct uncertainty in statistics

This section introduces common measures of direct uncertainty (such as standard error, confidence and credible intervals and statistical significance), what they mean and how they are calculated.

Stock text definitions are given at the end for use by statistics producers in their publications. All feedback is welcome.

### Variance
{% capture expandable_content_4 %}
Variance measures the dispersion or spread of individual data points within a data set. It is calculated as the average squared difference of each data point from the mean (average) of the data set. It is expressed in squared units of the original data.
{% endcapture %}

{% capture expandable_content_5 %}
Variance is useful when you want a measure of dispersion and are not concerned about the original units of the data. Note: it is sensitive to outliers and may be influenced by the scale of the data.
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="4" content=expandable_content_4 title="What is it?" %}
  {% include expandable-section.html number="5" content=expandable_content_5 title="When is it useful?" %}
{% include expandable-block-end.html %}
### Standard deviation
{% capture expandable_content_6 %}
Standard deviation measures the dispersion or spread of individual data points within a data set. It is calculated as the square root of the variance and is expressed in the same units as the original data.
{% endcapture %}

{% capture expandable_content_7 %}
Standard deviation is useful when you want a measure of dispersion in the original units of the data. It is a more common choice when you need a clear and interpretable measure of spread. Note: it is sensitive to outliers and may be influenced by the scale of the data.
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="6" content=expandable_content_6 title="What is it?" %}
  {% include expandable-section.html number="7" content=expandable_content_7 title="When is it useful?" %}
{% include expandable-block-end.html %}
### Standard error
{% capture expandable_content_8 %}
Standard error measures how accurately a sample statistic (such as a mean or proportion) differs from the population parameter. It is calculated as the standard deviation divided by the square root of the sample size and is expressed in the same units as the original data.
{% endcapture %}

{% capture expandable_content_9 %}
Standard error is particularly useful in inferential statistics. It is commonly used to quantify the similarity between a sample statistic and the population parameter, and is used to construct confidence intervals.
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="8" content=expandable_content_8 title="What is it?" %}
  {% include expandable-section.html number="9" content=expandable_content_9 title="When is it useful?" %}
{% include expandable-block-end.html %}
### Confidence intervals
{% capture expandable_content_10 %}
A confidence interval (CI) is a range of values, defined by a lower and upper bound, that indicates the uncertainty of an estimate. CIs provide an estimate of the range within which the true population parameter is likely to lie. For example, if we drew 20 random samples and calculated a 95% confidence interval for each sample using the data in that sample, we would expect that, on average, 19 out of the 20 (95%) resulting confidence intervals would contain the true population value and 1 in 20 (5%) would not. Increasing the confidence level to 99% would result in wider intervals (greater uncertainty).

For a 95% confidence interval, the upper and lower limit are given by the sample estimate plus or minus the margin of error, where the margin of error is 1.96 multiplied by the standard error.
{% endcapture %}

{% capture expandable_content_11 %}
Confidence intervals (and variance, standard deviation and standard error) are used in frequentist statistics. Frequentist statistics is all about probability in the long run, that is the frequency of events if they are repeated many, many times.
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="10" content=expandable_content_10 title="What is it?" %}
  {% include expandable-section.html number="11" content=expandable_content_11 title="When is it useful?" %}
{% include expandable-block-end.html %}
### Credible intervals
{% capture expandable_content_12 %}
A credible interval (CrI) is used in Bayesian statistics. In Bayesian analysis, instead of providing a range of values based on a hypothetical sampling distribution, a credible interval gives a range of values in which the true parameter is likely to lie based on the posterior distribution of the parameter. The posterior distribution is derived from our prior belief and the observed data. The term "credible" reflects the credibility or believability of the interval based on Bayesian probability.

The interval is constructed such that it contains a certain percentage of the posterior probability. For instance, a 95% credible interval indicates that, based on your prior belief and the observed data, there is a 95% probability that the true value of the parameter falls within that interval.
{% endcapture %}

{% capture expandable_content_13 %}
In Bayesian statistics, probability is all about our degree of belief and not the frequency of repeat events. The different interpretations of probability explain why we use different terminology for confidence and credible intervals.
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="12" content=expandable_content_12 title="What is it?" %}
  {% include expandable-section.html number="13" content=expandable_content_13 title="When is it useful?" %}
{% include expandable-block-end.html %}
### Statistical significance
{% capture expandable_content_14 %}
Statistical significance is a concept in statistics used to determine whether the results of an experiment or study are likely to be meaningful. When a result is described as statistically significant it suggests that the there is strong evidence that the result is not likely due to random chance alone.

A p-value is a measure used in statistical hypothesis testing to assess statistical significance. This is done by comparing a p-value to a pre-determined alpha or significance level (typically 5% or 0.05).
{% endcapture %}

{% capture expandable_content_15 %}
Imagine you ran an experience to assess if a new drug is effective. You might compare a group of people who took the drug to a group that did not. The p-value gives you an idea of the strength of the evidence against a null hypothesis that there is no effect or no difference between groups.

A low p-value (less than the alpha level) suggests that there is enough evidence to reject the null hypothesis. This could mean there is a real effect or difference.

A high p-value (greater than the alpha level) suggests that the evidence does not convincingly support rejecting the null hypothesis. It doesn't prove the null hypothesis, but it doesn't provide strong support for rejecting it either.

While p-values are not direct measures of uncertainty, they are commonly used to assess the strength of evidence against the null hypothesis.
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="14" content=expandable_content_14 title="What is it?" %}
  {% include expandable-section.html number="15" content=expandable_content_15 title="Example" %}
{% include expandable-block-end.html %}

## Communicating uncertainty

For any analytical outputs that communicate variance, standard deviation, standard error, confidence intervals, credible intervals, and statistical significance (p-values), analysts and authors should be transparent, be specific, use numeric ranges, and use plain and accessible language. 


{% capture card_content_3 %}
Transparency and clarity support public confidence in statistics and minimises the risk of misinterpretation.

Draw attention to any uncertainty throughout your reports (text, charts, tables) and accompanying spreadsheets.

Explain why there is uncertainty in an estimate and how the uncertainty has been quantified.

Be specific about the limitations of the data and any assumptions made in the analysis.
{% endcapture %}


{% capture card_content_4 %}
Words like “estimated” or “around” alone do not accurately describe the degree of uncertainty in an estimate.

When reporting a figure include:

- the range of uncertainty after the main value
- the measure of uncertainty: for example, are you presenting standard error or a confidence or credible interval?
- the level of uncertainty: for example, are you presenting a 50% or 95% confidence interval?

To give an example, "unemployment is estimated at 3.9%" should be written "unemployment is estimated at 3.9% (95% confidence interval [CI]: 3.7% to 4.1%)". This will ensure that the user has all the relevant information needed to accurately understand and interpret your statistics.
{% endcapture %}

{% capture card_content_5 %}
Statistical commentary should describe general trends clearly and succinctly, and put any uncertainty in context.

You can use the Professional Head of Intelligence Assessment (PHIA) [Probability Yardstick](https://assets.publishing.service.gov.uk/media/6421b6a43d885d000fdadb70/2019-01_PHIA_PDF_First_Edition_Electronic_Distribution_v1.1__1_.pdf) when making probability judgements. The Yardstick relates numerical probabilties to terms such as 'unlikely', 'probable' and 'highly likely'. 

Contextual information should be used to provide an indication of:

- the quality of the statistics
- the level of uncertainty in the statistics and data
- how the level of uncertainty impacts their interpretation, comparability and appropriate use

Provide definitions and explanations of terms that may be unfamiliar to your audience. Definitions of standard deviation, standard error, credible and confidence intervals, and statistical significance (i.e., p-values) can be found at the end of this guidance.
{% endcapture %}


{% include cards-container-start.html %}
  {% include card.html content=card_content_3 title="Be transparent and specific" %}
  {% include card.html content=card_content_4 title="Use numeric ranges" %}
  {% include card.html content=card_content_5 title="Use plain and accessible language" %}
{% include cards-container-end.html %}


### Visualising uncertainty

Data visualisations should include aids such as shaded ribbons or error bars to represent uncertainty. This is a simple yet impactful way of communicating uncertainty in statistics or data. The choice of visualisation method depends on:

- the nature of your data
- the level of detail you want to convey
- the familiarity of your audience with different chart types

When visualising uncertainty, you should consider all three.

The meaning of the error bars or shaded ribbons should be clearly explained below the chart, with any additional information for the user at the end of the report or in a separate QMI report.

The guidance below presents three different ways of visualising uncertainty in a chart (ribbon chart, fan chart and error bar chart) and highlights typical use cases and their advantages and disadvantages. Experimenting with multiple visualisation techniques can help you find the most effective way to communicate uncertainty in your specific context.

Please also see our [guidance on data visualisations](data-vis) for how to format charts accessibly.

#### ❌ No uncertainty: not recommended

Example 1 shows an illustration of a chart showing no uncertainty. Year is on the x-axis and some hypothetical variable on the y-axis. Only the central line (representing the average) is shown and there is no indication of any uncertainty in the data. Presenting the statistics in this way could mislead users by inflating their confidence in the accuracy of the data.

##### Example 1: Hypothetical variable, England, 2010 to 2020
<img src="assets/img/communicating uncertainty/Example 1.png" alt="A line chart with no uncertainty displayed" width="600px">

{% capture expandable_content_16 %}

```
# Load the tidyverse meta-package:
library(tidyverse)
 
# For generating pseudo-random numbers:
# This ensures that when we use `rnorm()` to generate random numbers below we get the same numbers each time.
set.seed(3)
 
# Create data frame:
df <- tibble(year = 2010:2020,
             x_bar = 6:16 + rnorm(11),
             ci = abs(rnorm(11, mean = 2, sd = 1)),
             x_low = x_bar - ci,
             x_high = x_bar + ci)
 
# Create vector of years for x-axis. Years that we don't want to show are replaced with blanks (""):
x_seq <- seq(2010, 2020, 1)
x_seq[x_seq %% 2 == 1] <- ""
 
# Make Figure 1 (no uncertainty):
# Note: `theme_af()` is available from the data visualisation guidance page
ggplot(df, aes(year, x_bar)) +
  geom_line(col = "#12436D",
            linewidth = 4) +
  scale_x_continuous(breaks = seq(2010, 2020, 1),
                     labels = x_seq) +
  scale_y_continuous(limits = c(0, 20),
                     expand = expansion(mult = c(0, 0.02))) +
  theme_af(tick_mark = "x",
            font_size = 32) +
  labs(x = NULL,
       y = NULL,
       subtitle = "Hypothetical variable")
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="16" content=expandable_content_16 title="R code for Example 1" %}
{% include expandable-block-end.html %}


#### ✔️ Ribbon charts

Displaying a line plot with a shaded ribbon around it can effectively communicate uncertainty without being too distracting. The line shows the central estimate while the ribbon represents the uncertainty.

We recommend that ribbon charts are used to visualise uncertainty on line charts, with a note included underneath each chart to explain what the ribbon (shading) represents.

In Example 2, the blue line represents the central estimate while the grey ribbon represents the 95% confidence interval. The wider the ribbon, the greater the uncertainty.

##### Example 2: Hypothetical variable, England, 2010 to 2020
<img src="assets/img/communicating uncertainty/Example 2.png" alt="A line chart with a shaded ribbon representing 95% confidence intervals" width="600px">

Note: the grey shading represents 95% confidence intervals.

Care should be taken when plotting multiple lines on a single chart to ensure that there is sufficient contrast between colours. Small multiple charts may be more appropriate and avoid clutter.

{% capture expandable_content_17 %}

```
# The data frame `df` is created above, in the code chunk for Example 1:
# Make Figure 2 (ribbon chart):
# Note: `theme_af()` is available from the data visualisation guidance page
ggplot(df, aes(year, x_bar)) +
  geom_ribbon(aes(ymin = x_low, ymax = x_high), alpha = 0.2, fill = "#BFBFBF") +
  geom_line(col = "#12436D",
            linewidth = 4) +
  scale_x_continuous(breaks = seq(2010, 2020, 1),
                     labels = x_seq) +
  scale_y_continuous(limits = c(0, 20),
                     expand = expansion(mult = c(0, 0.02))) +
  theme_af(tick_mark = "x",
           font_size = 32) +
  labs(x = NULL,
       y = NULL,
       subtitle = "Hypothetical variable")
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="17" content=expandable_content_17 title="R code for Example 2" %}
{% include expandable-block-end.html %}

#### ✔️ Fan charts

Fan charts are commonly used to show forecasted data but are also useful if you wish to convey more detail. A fan chart displays a central line and shaded ribbons representing two or more levels of uncertainty. The wider the ribbons the larger the uncertainty.

Example 3 shows an example of a fan chart. The blue line shows the central estimate while the shaded ribbons show 50% and 95% confidence intervals in dark grey and light grey, respectively.

##### Example 3: Hypothetical variable, England, 2010 to 2020
<img src="assets/img/communicating uncertainty/Example 3.png" alt="A line chart with a shaded ribbon representing 95% and 50% confidence intervals" width="600px">

Note: the light and dark grey shading represent 95% and 50% confidence intervals, respectively.

[Chart 5.1 on page 35 of the Bank of England’s inflation report from November 2017](https://www.bankofengland.co.uk/inflation-report/2017/november-2017) shows a good example of a fan chart with three levels of uncertainty. Prior to 2017, the shaded ribbons reflect revisions to historical data while after 2017 the shaded ribbons reflect uncertainty in the future projection.

With a fan chart consider if your audience would benefit from more than one confidence interval or whether one level (typically 95%) is sufficient.

{% capture expandable_content_18 %}

```
# Make Figure 3 (fan chart):
# Note: `theme_af()` is available from the data visualisation guidance page
ggplot(df, aes(year, x_bar)) +
  geom_ribbon(aes(ymin = x_low, ymax = x_high), alpha = 0.2, fill = "#BFBFBF") +
  geom_ribbon(aes(ymin = x_bar - (ci * 0.4), ymax = x_bar + (ci * 0.4)), alpha = 0.2, fill = "#5f5f5f") +
  geom_line(col = "#12436D",
            linewidth = 4) +
  scale_x_continuous(breaks = seq(2010, 2020, 1),
                     labels = x_seq) +
  scale_y_continuous(limits = c(0, 20),
                     expand = expansion(mult = c(0, 0.02))) +
  theme_af(tick_mark = "x",
           font_size = 32) +
  labs(x = NULL,
       y = NULL,
       subtitle = "Hypothetical variable")
```

{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="18" content=expandable_content_18 title="R code for Example 3" %}
{% include expandable-block-end.html %}

#### ✔️ Error bars

Error bars are a classic method for representing uncertainty that can be used in multiple chart types. They can be used to indicate the minimum and maximum values (range), interquartile range, standard deviation, standard error, or confidence intervals.

We recommend that error bars are used to visualise uncertainty on bar charts. To ensure that there is sufficient contrast between the bars and the error bars we recommend adding a white buffer around each error bar (see Example 4a).

Example 4a shows a time-series with year on the x-axis and a hypothetical variable on the x-axis. Black error bars are included to show the uncertainty (expressed as 95% confidence intervals) in the estimate for each year. The taller the error bar, the larger the uncertainty.

##### Example 4a: Hypothetical variable, England, 2010 to 2020 
<img src="assets/img/communicating uncertainty/Example 4.png" alt="A bar chart with error bars representing 95% confidence intervals" width="600px">

Note: the error bars represent 95% confidence intervals.

{% capture expandable_content_19 %}

```
# Make Figure 4a (bar chart):
# Note: `theme_af()` is available from the data visualisation guidance page
ggplot(df, aes(year, x_bar)) +
  geom_col(fill = "#12436D") +
  geom_errorbar(aes(ymin = x_low, ymax = x_high),
                width = 0.25,
                linewidth = 3,
                colour = "white") +
  geom_errorbar(aes(ymin = x_low, ymax = x_high),
                width = 0.2,
                linewidth = 2) +
  scale_x_continuous(breaks = seq(2010, 2020, 1),
                     labels = x_seq) +
  scale_y_continuous(limits = c(0, 20),
                     expand = expansion(mult = c(0, 0.02))) +
  theme_af(tick_mark = "x",
           font_size = 32) +
  labs(x = NULL,
       y = NULL,
       subtitle = "Hypothetical variable")
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="19" content=expandable_content_19 title="R code for Example 4a" %}
{% include expandable-block-end.html %}


Example 4b shows an example with categorical data and horizontal bars. A hypothetical variable is shown on the x-axis and a categorical variable on the y-axis. Horizontal error bars are included to show the uncertainty in the estimate for each category. The wider the error bar the larger the uncertainty.

##### Example 4b: Hypothetical variable by category, England, 2024
<img src="assets/img/communicating uncertainty/Example 5.png" alt="A horizontal bar chart with error bars representing 95% confidence intervals" width="600px">

Note: the error bars represent 95% confidence intervals.

{% capture expandable_content_20 %}

```
# Load the tidyverse meta-package:
library(tidyverse)
 
# Create data frame:
df <- tibble(x = 10:14 + rnorm(5),
             y = LETTERS[1:5]) |>
      mutate(ci = abs(rnorm(5, mean = 2, sd = 1)),
             x_low = x - ci,
             x_high = x + ci) |>
      mutate(y = fct_reorder(y, x)) |> 
 
# Make Figure 4b (horizontal bar chart):
# Note: `theme_af()` is available from the data visualisation guidance page
ggplot(df, aes(x, y)) +
  geom_col(fill = "#12436D") +
  geom_errorbarh(aes(xmin = x_low, xmax = x_high),
                 height = 0.25,
                 linewidth = 3,
                 colour = "white") +
  geom_errorbarh(aes(xmin = x_low, xmax = x_high),
                 height = 0.2,
                 linewidth = 2) +
  scale_x_continuous(expand = expansion(mult = c(0, 0.02)),
                     limits = c(0, 20)) +
  scale_y_discrete(expand = expansion(mult = c(0.15, 0.15))) +
  theme_af(grid = "x",
           tick_mark = "y",
           font_size = 32) +
  labs(y = NULL,
       x = "Hypothetical variable")
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="20" content=expandable_content_20 title="R code for Example 4b" %}
{% include expandable-block-end.html %}


## Revisions
Revisions are common in many analytical outputs that are published weekly or monthly. Revisions can occur for a variety of reasons: for example, to incorporate new data that was unavailable at the time of first release, to include improved data that is more accurate, or to correct errors.

The impact that revisions have on statistics should be quantified and clearly communicated to users. This enables users to understand the size and direction of changes resulting from revisions that are made.

The typical effect of any revision should be quantified in absolute terms in a QMI report to allow users to understand the effect revisions typically have. For example, the difference between the provisional and final values should be given in reports, either in absolute or percentage terms. 

Where it is common for revisions to be made over a period of several weeks or months after first release, authors should include a statement on the typical effect this has. For example: “Historical revisions to data are possible X weeks after first release. Revisions to X typically result in a change of around 0.1%”. This information should be regularly reviewed and updated to ensure it remains accurate.


## Standard wording for inclusion in reports

The expandable sections below include standard wording that authors can use to explain common measures of uncertainty to the users of their reports, for example in a glossary section.

{% capture expandable_content_21 %}
Variance measures the dispersion or spread of individual data points within a data set. It is calculated as the average squared difference of each data point from the mean (average) of the data set. It is expressed in squared units of the original data.

A larger variance indicates greater uncertainty.
{% endcapture %}

{% capture expandable_content_22 %}
Standard deviation measures the dispersion or spread of individual data points within a data set. It is calculated as the square root of the variance and is expressed in the same units as the original data.

A larger standard deviation indicates greater uncertainty.
{% endcapture %}

{% capture expandable_content_23 %}
Standard error measures how accurately a sample statistic (such as a mean or proportion) estimates the population parameter. It is calculated as the standard deviation divided by the square root of the sample size and is expressed in the same units as the original data.

A larger standard error indicates greater uncertainty.
{% endcapture %}

{% capture expandable_content_24 %}
A confidence interval indicates the likely range in which an estimated parameter (such as a mean or rate) is likely to fall. A 95% confidence interval indicates that if we repeated the study many times, 95% of the confidence intervals would contain the true population value. 

Wider confidence intervals indicate more uncertainty in the estimate. Overlapping confidence intervals indicate that there may not be a true difference between estimates.
{% endcapture %}

{% capture expandable_content_25 %}
A credible interval is a measure of the degree of uncertainty in an estimate based on both prior belief and the observed data. 95% credible intervals are calculated such that there is a 95% probability of the true value lying within the interval. 

Wider credible intervals indicate more uncertainty in the estimate.
{% endcapture %}

{% capture expandable_content_26 %}
Statistical significance is a measure used in null hypothesis significance testing to assess the likelihood that an observed result is not merely due to random chance. A null hypothesis is a statement that there is no real effect, no real difference or no relationship in the population being studied.

Assessing statistical significance involves comparing the p-value, indicating the probability of obtaining the observed data if the null hypothesis is true, to a predetermined significance level (commonly 5% or 0.05). If the p-value is below this threshold, the results are considered statistically significant, suggesting there is substantial evidence to reject the null hypothesis. If the p-value is above this threshold, the evidence does not convincingly support rejecting the null hypothesis. It does not necessarily prove the null hypothesis, but it does not provide strong support for rejecting it either.
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="21" content=expandable_content_21 title="Variance" %}
  {% include expandable-section.html number="22" content=expandable_content_22 title="Standard deviation" %}
  {% include expandable-section.html number="23" content=expandable_content_23 title="Standard error" %}
  {% include expandable-section.html number="24" content=expandable_content_24 title="Confidence intervals" %}
  {% include expandable-section.html number="25" content=expandable_content_25 title="Credible intervals" %}
  {% include expandable-section.html number="26" content=expandable_content_26 title="Statistical significance" %}
{% include expandable-block-end.html %}



## Sources
1. [Full Fact: How to communicate uncertainty](https://fullfact.org/media/uploads/en-communicating-uncertainty.pdf)

1. [Government Analysis Function: Communicating quality, uncertainty and change](https://analysisfunction.civilservice.gov.uk/policy-store/communicating-quality-uncertainty-and-change/)

1. [Office for Statistics Regulation: Approaches to presenting uncertainty in the statistical system](https://osr.statisticsauthority.gov.uk/publication/approaches-to-presenting-uncertainty-in-the-statistical-system/)

1. [Office for Statistics Regulation: Regulatory guidance on intelligent transparency](https://osr.statisticsauthority.gov.uk/publication/regulatory-guidance-on-intelligent-transparency/)

1. [Uncertainty Toolkit for Analysts in Government](https://analystsuncertaintytoolkit.github.io/UncertaintyWeb/index.html)

1. [van der Bles, A. M., van der Linden, S., Freeman, A. L. J., & Spiegelhalter, D. J. (2020). The effects of communicating uncertainty on public trust in facts and numbers. Proceedings of the National Academy of Sciences of the United States of America, 117(14), 7672–7683.](https://doi.org/10.1073/pnas.1913678117)