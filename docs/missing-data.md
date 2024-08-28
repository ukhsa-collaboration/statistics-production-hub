---
title: "Handling missing data"
layout: guidance-page
---


> ## Main messages
> - Try to understand the causes of missing data and minimise the chance of it happening.
> - Assess input data for missing values to understand which variables and records are affected, how much is missing and whether there might be bias in the missingness.
> - Decide how to deal with missing data: update, discard or replace it.
> - Tell your users about the prevalence and treatment of missing data.

{% include sources-text.md %}

## Assessing missingness before analysis begins

Data is missing when no value is provided for a given variable. This is common for many datasets and missing values can reduce statistical power and introduce bias if not handled appropriately.

You should try to understand the extent, causes and type of missingness as soon as you receive your input data. This knowledge will help inform how you handle the data, analyse it and communicate your results. The earlier an issue can be recognised, the quicker a plan can be developed for how to address it.

### Check for presence and extent of missingness
You should inspect for missingness each time you receive a dataset, whether it's part of a routine or one-off data collection.

This could be as simple as counting or visualising the missing values in your dataset to understand their volume and location. Most software records missing data as a blank value or as ‘NA’ (not available), but check with your data providers in case they have used other special symbols. Pay particular attention to unexpected patterns, which may expose new underlying data quality issues.

Input validation tests (‘assertions’) are also encouraged early in your analytical pipelines so that you can 'sense check' your data. These tests should be automated when you need to re-run the same checks frequently, such as for routine data collections, for greater efficiency (according to principles of [Reproducible Analytical Pipelines (RAP)](rap)).

You should be aware of whose job it is to check for missing data. The responsible analyst has ownership of missing data and that the assurer must ensure that checks have taken place. You can refer to our [quality assurance guidance](quality-assurance) for further information.


### Understand causes of missingness
The presence of missing data may indicate problems with the way the data has been collected or processed. Understanding the causes can help you to fix the underlying problem and allow you to be more transparent with users of your data.

Some examples include:

- measurement error, which could be caused by using defective tools for data collection; for example, a faulty machine may fail to take a reading from a patient’s sample
- handling errors, which can be caused by administrative lapses during data entry; for example, someone might fail to transcribe a handwritten value into a recording system
- data processing errors, which can be introduced when handling or analysing data; for example, naively coercing a text string to numeric type in R will result in a ‘NA’ value (so '4%' would become 'NA' rather than 4)
- survey-related errors, including non-response and sampling biases; these can occur when participants fail to respond to a question and when a survey sample is unrepresentative of the target population
- data providers could not or did not provide data ahead of deadlines


### Understand the type of missingness
It is important to understand how missingness may be distributed through your dataset and whether it can be explained. This impacts the strategies you might take to replace missing values or analyse your data.

Typically, [three main types of missing data are recognised](https://stefvanbuuren.name/fimd/sec-MCAR.html). Data for a given variable can be:

{% capture card_content_1 %}
When missingness is independent of any variable. An example of this would be if a batch of blood samples from a fully randomised set of patients is dropped and broken. This is true randomness.
{% endcapture %}

{% capture card_content_2 %}
When there’s a pattern to the missingness that can be explained by another variable. For example, you might have missing blood-sample data that can be explained by men being less likely than women to submit a sample. Values are still missing at random within each group, but one group has more missing values than the other. A better term is perhaps ‘missing conditionally at random’.
{% endcapture %}

{% capture card_content_3 %}
When there’s a pattern of missingness that’s unrelated to any variable we know about. This might occur if blood samples became contaminated and unusable due to the failure of a certain manufacturer’s vials, a variable we didn’t collect information about.
{% endcapture %}



{% include cards-container-start.html %}
  {% include card.html content=card_content_1 title="Missing completely at random (MCAR)" %}
  {% include card.html content=card_content_2 title="Missing at random (MAR)" %}
  {% include card.html content=card_content_3 title="Missing not at random (MNAR)" %}
{% include cards-container-end.html %}


It can be difficult in practice to identify the type of missing data. In particular, the difference between MCAR and MNAR hinges on a relationship that may or may not exist with variables you haven’t collected. MAR may be a good default position if you’ve designed your collection to cover variables that explain the missingness, but they may not be obvious and it may not be practical to do this.

## Handle missing data
According to the [Code of Practice for Statistics](https://code.statisticsauthority.gov.uk/the-code/), producers of statistical publications are required to 'identify and address' any 'limitations in data sources'. As such, you must decide how to handle missing data in order to maintain reliability and transparency of your outputs. This is a good principle to follow even if you are not producing a statistical publication. 

This section describes three broad approaches for dealing with missing data:

1. Update the missing data.
1. Discard the missing data.
1. Generate replacement values.


### Update the missing data
In the first instance, you should try to improve completion rates. Failing this, you may also be able to recover missing data by returning to the source of collection, by using data collected from another source, or by deductive reasoning on the basis of other variables.

#### Return to the source
It may be possible to go back to your data suppliers and recover data that was lost through administrative error, for example, or to request a re-collection of data for the cases where it’s missing. This may be difficult in practice, however, because of the effort required. (The [Code of Practice for Statistics](https://code.statisticsauthority.gov.uk/the-code/) also states that you must ‘reduce the burden on those providing their information, and on those involved in collecting, recording and supplying data’.)

#### Infer from other variables
You may be able to use other variables to deduce the true value of a missing data point. For example, if a user writes ‘Kent’ in a ‘county’ field, but doesn’t complete the ‘region’ field, it can be assumed that the region is ‘South East England’. Arguably the data isn’t really ‘missing’ because it’s derived from other fields. As a result, you should consider whether it’s worth collecting this kind of derived information in the first place.

Regardless, you should consider carefully whether your inference is appropriate. For example, you are likely to make an error if you infer gender or ethnicity from a person’s name.

#### Match to another dataset
You might be able to fill gaps in your collection by matching to another dataset on some unique identifier, like patient NHS numbers. The dataset being joined might not be complete either, but the combination of sources could help to reduce missingness.  If the dataset being joined has complete information for the variable of interest, you should consider whether it's worth collecting that data or whether you should prefer to join it from secondary sources. 

Beware: the matched data could have its own biases. [The Goldacre Review](https://www.gov.uk/government/publications/better-broader-safer-using-health-data-for-research-and-analysis) cites an Electronic Health Record (EHR) example for which completeness of ethnicity data is improved by matching Hospital Episode Statistics (HES), though this only improves coverage for the population subset that is most ill. 

### Discard the missing data
You could analyse your dataset by ignoring missingness in some way. This may only be useful when your dataset is mostly complete or if you have reason to believe that your missing data is MCAR.

For example, you could use only the:

- complete cases, which are the records that have a response value in every variable in the dataset (‘listwise deletion’)
- available cases, which are the non-missing values that remain within a given variable (a process known as ‘pairwise deletion’)

Both approaches are straightforward and require no additional calculation. Of these, complete-case analysis may be preferred where there is little data missing across the whole dataset, since the available-case approach could result in different samples being used for each variable in your analysis. Both methods ignore whether there’s any bias in the missingness and could result in a lot of useful data being thrown away, particularly if you use only the complete cases.

### Generate replacement data
There are several methods for generating replacements for missing values. The method used will depend on the type and cause of your missingness, as well as how much of it is missing. This section is intended as a non-exhaustive and non-technical introduction to some possible approaches.

#### Single imputation
[Single imputation methods](https://www.researchgate.net/profile/Geert-Van-Der-Heijden/publication/6814409_Review_A_gentle_introduction_to_imputation_of_missing_values/links/6048b70a299bf1e0786bfbfe/Review-A-gentle-introduction-to-imputation-of-missing-values.pdf) are simple approaches that use non-missing values to generate replacements for missing values.

Average imputation is when you generate a replacement value from a simple average of the non-missing values within a variable. This is typically the mean for continuous variables and the mode (most common) value for categorical variables. Note that mean imputation will maintain the overall mean of a variable, but will reduce its variance.

Regression imputation is when you predict missing values from a model involving other variables in the dataset. For example, height and weight may be correlated, so regression imputation could help you to infer missing values. This is preferential to average imputation because it takes account of the relationships between variables, but it can be sensitive to outliers or misspecification of the model.

#### Interpolation
If you have data collected over time, you can use prior information to generate a replacement value. The simplest approach would be to reuse the last known value, known as 'Last Observation Carried Forward' (LOCF). This within-record context helps reduce bias but ignores the potential and magnitude of change.

Interpolation is typically used to predict a value for an unsampled point, but we can use it to replace missing values as well. For example, you could fit a model to the data over time and predict the missing value. The quality of this method is dependent on selecting an appropriate model for the data. It could be a simple linear model if appropriate, for example, or could build in seasonality.

#### Multiple imputation
[Multiple imputation](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2714692/) acknowledges that there’s uncertainty in generating one replacement value, like in single imputation. To overcome this, you can generate more than one prediction.

The general process for multiple imputation involves two steps:

1. Create many different ‘complete’ copies of the dataset where a statistical model has been used to generate plausible imputations.
2. Fit your model to each dataset copy and pool the results.

One specific technique is called [Multiple Imputation by Chained Equations](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3074241/) (MICE). It follows these steps:

1. Perform simple imputation (for example, mean imputation) for all variables. These will be treated as ‘placeholders’ for now.
2. For one variable, remove the placeholders and regress against the other variables. Use the predictions to replace the missing values.
3. Repeat the steps above for the remaining variables in the dataset to complete one ‘cycle’.
4. Perform multiple cycles to help converge the imputations.

Incorporating variance into the replacement values can result in a better estimate of ‘true’ values and therefore a less-biased outcome compared to single imputation. The method is more complicated, however, given the need for selecting and specifying an appropriate imputation model. It may also be more difficult to communicate this method to end-users. 

## Communicate about missing data
Transparency is required when reporting on the prevalence and handling of missingness, statistical methods for imputation, and the limitations of the approaches taken. However, the level of detail should be proportionate to the complexity of methods used.

When you publish your report you should describe the characteristics of missing data and how it was handled. There are usually three places where you can do this:

1. A detailed breakdown in a dedicated Quality and Methodology Information (QMI) document published alongside your release.
1. A brief explanation within the text of the published report.
1. In the documentation for data releases, such as the notes and placeholder symbols of a published spreadsheet.


### 1. In the Quality and Methodology Information (QMI) report
We recommend that you create a separate QMI document to provide extra detail that caters to the needs of different users and provides full transparency about how the outputs were produced.

Examples of specific information to include are:

- the volume of missing data by variable
- biases in the presence of missing data, for example if prevalence was greater for records with certain characteristics
- possible reasons for missing data, especially if the rate is different compared to prior or similar publications
- any statistical methods used to take account of missingness, such as imputation or removal
- steps you will take to maximise completeness in future, if possible


### 2. In written reports

#### The main body text
The main publication should include brief information about data, quality, and methods, but only to the extent necessary to understand the data. The report should refer users to the QMI document for greater depth on missing data, where appropriate.

If the incomplete data is because of a data provider failing to submit, explain at the start of the affected section the figures impacted and outline plans for when and how updates will be made once the data does become available. 

The [Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework-guidance) asks producers to communicate the trade-offs between timeliness of data and its completeness. Missing data may be a consequence of needing to publish within a given time frame, which is perhaps more likely in an urgent setting like a national health threat. In these cases, it's important to highlight that missing data may become available in future and so a ‘provisional’ label could be applied to data or analysis to make this clear to users. Information about the impact of late-arriving data can also be expressed in a separate QMI report published alongside the main report.


#### Strategies for tables and charts
You should represent missing data in data summaries like tables and charts so that the user is aware that data is incomplete. This will also ensure that missingness is acknowledged if the table or chart are used elsewhere in isolation and out of context. 

Specifically for tables, you must use placeholder symbols that highlight when a value is missing. [The Government Analysis Function guidance on symbols](https://analysisfunction.civilservice.gov.uk/policy-store/symbols-in-tables-definitions-and-help/) suggests using '[b]' for a break in time series, or '[u]' if the value is of low reliability, which could happen when summarising a variable that contains a lot of missing data. To give an example: if data wasn't collected in 2020 due to the coronavirus pandemic, a placeholder symbol '[b]' should be given in a table to highlight the break to users. 

A placeholder symbol allows you to provide information about why a data point is missing, which is not apparent if you leave the cell blank. A blank cell may also lead to accessibility issues for users of assistive technology.

Where data is missing, you should include a note under each affected table or chart to explain how it has been impacted by the missing data and explain why.


{% capture card_content_4 %}
Example 1: table of fictional annual values, England, 2018 to 2023.

| Year | Value |
|------|-------|
| 2018 | 2     |
| 2019 | 3     |
| 2020 |       |
| 2021 | 4     |
| 2022 | 3     |
| 2023 | 5     |
{% endcapture %}

{% capture card_content_5 %}
Example 2: table of fictional annual values, England, 2018 to 2023. 

| Year | Value |
|------|-------|
| 2018 | 2     |
| 2019 | 3     |
| 2020 | [b]   |
| 2021 | 4     |
| 2022 | 3     |
| 2023 | 5     |

Note: The shorthand '[b]' is used to denote where there was a break in the time series due to the coronavirus (COVID-19) pandemic.
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_4 title="❌ To be avoided: leaving a blank space in a table where data is missing." %}
  {% include card.html content=card_content_5 title="✔️ Best practice: use a placeholder symbol to indicate that data is missing and include a note beneath the table." %}
{% include cards-container-end.html %}


Where a value has been estimated or imputed, official guidance suggests adding '[e]' for estimated. As an example, let's say that we interpolated the value missing in 2020. When you present this data in a table, you should add the placeholder symbol '[e]' in a separate column, in this case for the year 2020, and include a short text note underneath the table explaining the shorthand. Avoid adding more than one value or piece of information to a single cell, as this can be difficult to interpret for users of assistive technology.

{% capture card_content_6 %}
Example 3: table of fictional annual values, England, 2018 to 2023.

| Year | Value |
|------|-------|
| 2018 | 2     |
| 2019 | 3     |
| 2020 |       |
| 2021 | 4     |
| 2022 | 3     |
| 2023 | 5     |
{% endcapture %}

{% capture card_content_7 %}
Example 4: table of fictional annual values, England, 2018 to 2023. 

| Year | Value | Note |
|------|-------|------|
| 2018 | 2     |      |
| 2019 | 3     |      |
| 2020 | 4     | [e]  |
| 2021 | 4     |      |
| 2022 | 3     |      |
| 2023 | 5     |      |

Note: The shorthand '[e]' is used to indicate that the value in 2020 has been estimated.
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_6 title="❌ To be avoided: leaving a blank space in a table where data is missing." %}
  {% include card.html content=card_content_7 title="✔️ Best practice: use a placeholder symbol to indicate that data has been estimated and include a note beneath the table." %}
{% include cards-container-end.html %}


You should also highlight discontinuities in time series data when presenting charts, for example by leaving a gap between points in a line chart to show where data is missing between them. You could also use dashed lines or shade the chart background to highlight where data is missing, and add a short text note underneath to explain the reason.


{% capture card_content_8 %}
Example 5: line chart of fictional annual values, England, 2018 to 2023.

<img src="assets/img/missing data/missing-data_bad-chart-example.png" alt="A line chart which does not clearly show that there is a missing value">

This figure shows a line chart with a discontinuity. It joins two data points in 2019 and 2021, despite a missing data point in 2020.

{% endcapture %}

{% capture card_content_9 %}
Example 6: line chart of fictional annual values, England, 2018 to 2023.

<img src="assets/img/missing data/missing-data_good-chart-example.png" alt="A line chart which clearly shows a missing value by leaving a gap in the line, marking out the gap with dashed lines and an annotation">

This figure shows a line chart with a discontinuity. It leaves a gap in the line and marks out the gap with two vertical dashed lines and annotation stating the data was not collected in 2020 due to the coronavirus (COVID-19) pandemic.
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_8 title="❌ To be avoided: ignoring missing data in a line chart by joining the next nearest available data points." %}
  {% include card.html content=card_content_9 title="✔️ Best practice: leave a gap in a line chart where there is missing data and highlight it with dashed lines and a text explanation." %}
{% include cards-container-end.html %}


{% capture expandable_content_1 %}

```
# Create data frame:
df <- data.frame(year = seq(2018, 2023, 1),
                  value = c(2, 3, NA, 4, 3, 5))
 
library(ggplot2) # load data viz package
 
# Make plot:
# Note: `theme_af()` is available from the data visualisation guidance page
df |>
  ggplot(aes(year, value)) +
  geom_vline(xintercept = c(2019, 2021),
             linetype = "dashed",
             colour = "#D9D9D9",
             linewidth = 1.5) +
  geom_line(linewidth = 1.5) +
  geom_point(size = 4) +
  scale_y_continuous(breaks = seq(0, 5, 1),
                     expand = expansion(mult = c(0, 0.04)),
                     limits = c(0, 5)) +
  labs(subtitle = "Value",
       y = NULL,
       x = "Year") +
  theme_af(tick_mark = "x",
           font_size = 18) +
  annotate("text",
           label = "No data for 2020\n(COVID-19 pandemic)",
           x = 2020,
           y = 2,
           size = 18 * 5/14)
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="1" content=expandable_content_1 title="Example 6 R code" %}
{% include expandable-block-end.html %}


You can read more about best practice for data visualisation in our [data visualisation guidance pages](data-vis).

### 3. In data files
It's possible that some users may use data releases without referring to the main report or QMI document. It's important that supporting data files have sufficient information to provide context for the presence and handling of missing data, where appropriate. 

#### In spreadsheets
You should provide notes and a note sheet in your published spreadsheets, which allow for short written explanations about issues like missing data and how it was prepared or analysed. You should also use symbolic shorthand to explain why data is missing from certain cells. For example, '[b]' for a break in a time series, '[e]' for estimated data and '[z]' to indicate that a variable was ‘not applicable’ to a particular record. These symbols are preferable to using blank cells, NA or '..' from the perspective of clarity and accessibility.

You can read more in our [guidance on accessible reference tables in spreadsheets](spreadsheets).

#### In machine-readable data files
It can be difficult to provide contextual information for certain types of data files, like machine-readable comma-separated Values (CSV) files. In this case, you should provide to users a data dictionary to explain how you’ve represented missing data. Like spreadsheets, you should consider using symbolic placeholders where data is missing.

You might also consider using the comma-separated Values on the Web (CSVW) format, which allows you to supply metadata information alongside the data. With CSVW you can set ‘null’ and ‘default’ properties in the metadata that could be used to indicate missing values. You can also use the special ‘required’ property as a validation check if you were expecting a field to be complete.


## Sources

1. [Government Analysis Function: Communicating quality, uncertainty and change](https://analysisfunction.civilservice.gov.uk/policy-store/communicating-quality-uncertainty-and-change/)
1. [Government Analysis Function: Data visualisation: tables](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-tables/)
1. [Government Analysis Function: Using symbols and shorthand](https://analysisfunction.civilservice.gov.uk/policy-store/symbols-in-tables-definitions-and-help/)
1. [Government Analysis Function: Data visualisation: charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/)
1. [Government Analysis Function: Making spreadsheets accessible: a checklist of the basics](https://analysisfunction.civilservice.gov.uk/policy-store/making-spreadsheets-accessible-a-brief-checklist-of-the-basics/)
1. [Government Data Quality Hub: The Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework)
1. [Government Data Quality Hub: The Government Data Quality Framework -guidance](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework-guidance)
1. [Office for National Statistics: The Duck Book - Quality assurance of code for analysis and research](https://best-practice-and-impact.github.io/qa-of-code-guidance/)
1. [The Aqua Book: guidance on producing quality analysis for government](https://www.gov.uk/government/publications/the-aqua-book-guidance-on-producing-quality-analysis-for-government)
1. [The Goldacre Review: Better, broader, safer: using health data for research and analysis](https://www.gov.uk/government/publications/better-broader-safer-using-health-data-for-research-and-analysis)
1. [UK Statistics Authority: Code of Practice for Statistics](https://code.statisticsauthority.gov.uk/the-code/)
