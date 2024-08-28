---
title: "Creating clear and accessible data visualisations"
layout: guidance-page
---

> ## Main messages
>- Data visualisations such as graphs and charts must be compliant with current accessibility legislation.
>- You should choose an appropriate and consistent way to visualise different types of data.
>- Colours, text, and formatting should be carefully applied in order to aid interpretation of data visualisations.
>- Data visualisations should be easy to understand for users of all backgrounds.

{% include sources-text.md %}

## How to use this guidance

Good accessibility brings benefits to all users, improving the quality and value of our statistics, and the trust users have in us.

This guidance is intended as a practical handbook for creating charts and charts. It condenses the most relevant government resources on data visualisation together with our own experience of producing analytical outputs. While the information on this page is by no means comprehensive, we hope that it provides a useful overview of best practices and how to implement them.

R code to produce a minimal reproducible example is available under each chart. They were made using a standard ggplot2 theme which can be found inside the expandable section below. If you have any questions about our R resources or need any assistance using them, don't hesitate to email us at <UKHSA_HOPSTATS@ukhsa.gov.uk> and we'll be happy to help in any way that we can!



{% capture expandable_content_1 %}

```
theme_af <- function(font_size = 12, font_family = NULL, grid = "y", tick_mark = NULL, ...){
 
  # Base theme:
  theme <- theme_grey(base_size = font_size) +
 
    # Analysis Function chart style:
    theme(
 
      # Pass in the dots:
      ...,
 
      # Panel:
      panel.background = ggplot2::element_blank(),
      panel.border = ggplot2::element_blank(),
 
      # Global font size:
      text = ggplot2::element_text(size = font_size),
 
      # Title:
      plot.title.position = "plot", # applied to subtitle too.
 
      # Sub-title (y-axis label):
      plot.subtitle = ggplot2::element_text(
        family = font_family,
        size = font_size,
        margin = ggplot2::margin(b = 10)),
 
      # ...and my axe(s):
      axis.title = ggplot2::element_text(
        family = font_family,
        size = font_size,
        colour = "#000000"
      ),
 
      axis.text = ggplot2::element_text(
        family = font_family,
        size = font_size,
        colour = "#000000"
      ),
 
      # Legend:
      legend.title = ggplot2::element_blank(),
      legend.text = ggplot2::element_text(family = font_family,
                                          size = font_size,
                                          colour = "#000000"),
 
      # Caption:
      plot.caption.position = "plot",
      plot.caption = ggplot2::element_text(family = font_family,
                                           size = font_size,
                                           colour = "#000000"),
 
      # Facets:
      strip.background = ggplot2::element_blank(),
      strip.text = ggplot2::element_text(family = font_family,
                                         size = font_size,
                                         hjust = 0), # Don't want bold face
 
    )
 
  #
  if (inherits(grid, "character")) {
 
    grid <- tolower(grid)
 
    if (regexpr("x", grid)[1] > 0) theme <- theme + theme(panel.grid.minor = ggplot2::element_blank(),
                                                          panel.grid.major.x = ggplot2::element_line(colour = "#D9D9D9"),
                                                          panel.grid.major.y = ggplot2::element_blank(),
                                                          axis.line.x = ggplot2::element_blank(),
                                                          axis.line.y = ggplot2::element_line(colour = "#D9D9D9"))
 
    if (regexpr("y", grid)[1] > 0) theme <- theme + theme(panel.grid.minor = ggplot2::element_blank(),
                                                          panel.grid.major.x = ggplot2::element_blank(),
                                                          panel.grid.major.y = ggplot2::element_line(colour = "#D9D9D9"),
                                                          axis.line.x = ggplot2::element_line(colour = "#D9D9D9"),
                                                          axis.line.y = ggplot2::element_blank())
 
    if (regexpr("xy", grid)[1] > 0) theme <- theme + theme(panel.grid.minor = ggplot2::element_blank(),
                                                           panel.grid.major.x = ggplot2::element_line(colour = "#D9D9D9"),
                                                           panel.grid.major.y = ggplot2::element_line(colour = "#D9D9D9"),
                                                           axis.line.x = ggplot2::element_line(colour = "#D9D9D9"),
                                                           axis.line.y = ggplot2::element_line(colour = "#D9D9D9"))
 
  } else {
 
    theme <- theme + theme(panel.grid = ggplot2::element_blank())
 
  }
 
  if (inherits(tick_mark, "character")) {
 
    tick_mark <- tolower(tick_mark)
 
    if(grepl("x", tick_mark)) {
 
      theme <- theme + theme(axis.ticks.x = ggplot2::element_line(colour = "#D9D9D9"))
      theme <- theme + theme(axis.ticks.y = ggplot2::element_blank())
 
    }
 
    if(grepl("y", tick_mark)) {
 
      theme <- theme + theme(axis.ticks.x = ggplot2::element_blank())
      theme <- theme + theme(axis.ticks.y = ggplot2::element_line(colour = "#D9D9D9"))
 
    }
 
    if(grepl("xy", tick_mark)) {
 
      theme <- theme + theme(axis.ticks.x = ggplot2::element_line(colour = "#D9D9D9"))
      theme <- theme + theme(axis.ticks.y = ggplot2::element_line(colour = "#D9D9D9"))
 
    }
 
  } else {
 
    theme <- theme + theme(axis.ticks.x = ggplot2::element_blank())
    theme <- theme + theme(axis.ticks.y = ggplot2::element_blank())
 
  }
 
  theme
 
}
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="1" content=expandable_content_1 title="Analysis Function ggplot2 theme" %}
{% include expandable-block-end.html %}

## Choosing the right chart

Charts are particularly effective when used to highlight key points in a publication. You should choose the type of chart based on the type of data and the trend you are trying to show. 

This section gives some specific recommendations for presenting categorical data or time series data in an accessible way. 

### Categorical data

Bar charts work well for comparing different categories.

When making a bar chart, consider whether there is a logical ordering to the bars that groups similar categories together. For example, you could order age groups from lowest to highest or place bars to adjacent geochartical regions next to each other. If there is no logical ordering, it is often most helpful to present bars in order of size.

Stacked or clustered bar charts can be used to display two different categorical variables in one chart. However, each individual stack or cluster should usually contain no more than four categories as a rule of thumb, to avoid clutter. This is especially the case for stacked bar charts, as a larger number of categories makes comparisons between bars much more difficult. If you have a large number of categories, it is usually best to split your data into several bar charts. The section "[how to reduce clutter in charts](#how-to-reduce-clutter-in-charts)" contains examples of ways to break down charts that contain too many categories, including reformatting them as small multiples charts.

It is best practice when making clustered bar charts to leave a small gap between each bar in a cluster to help users distinguish more easily between bars. A wider gap should be left between clusters, again to help users easily distinguish different clusters.

{% capture card_content_1 %}
Example 1: Percentage of positive tests for three disease strains at five testing centres in England, 2024
<div>
    <img src="assets/img/data viz/Example 1.png" width="450px" class="center" alt="A clustered bar chart with no gap between the bars within a cluster" style ="display: block; margin: auto;">
    </div>
{% endcapture %}

{% capture card_content_2 %}
Example 2: Percentage of positive tests for three disease strains at five testing centres in England, 2024
<div>
   <img src="assets/img/data viz/Example 2.png" width="450px" class="center" alt="A clustered bar chart that contains a small gap between bars within a cluster, and a bigger gap between clusters" style ="display: block; margin: auto;">
   </div>
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_1 title="❌ To be avoided: no space within clusters " %}
  {% include card.html content=card_content_2 title="✔️ Best practice: applying spacing to clustered bar charts" %}
{% include cards-container-end.html %}


{% capture expandable_content_2 %}
```
# Create data frame:
df <- data.frame(Strain = c(rep("Strain A", 5), rep("Strain B", 5), rep("Strain C", 5)),
                Centre = c(rep(c("Centre 1", "Centre 2", "Centre 3", "Centre 4", "Centre 5"))),
                Positivity = c(1, 1.2, 1.3, 1.4, 1.5, 3.1, 3.5, 5, 4.9, 4.4, 4.4, 5.1, 5.2, 5.6, 5.7),
                check.names = F)
 
# Load ggplot2 package:
library(ggplot2)
 
# Make chart:
ggplot(df, aes(x = Centre, y = Positivity, fill = Strain)) +
  geom_bar(stat = "identity",
           position = position_dodge(0.8),
           width = 0.7) +
  scale_y_continuous(breaks = seq(0, 7, 1),
                     expand = expansion(mult = c(0, 0.02)),
                     limits = c(0, 7)) +
  scale_fill_manual(values = af_colours(type = "categorical", n = 3)) +
  labs(subtitle = "Per cent positive (%)",
       x = NULL,
       y = NULL) +
  theme_af(font_size = 20,
           legend.position = "bottom",
           tick_mark = "x")
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="2" content=expandable_content_2 title="R code for Example 2" %}
  {% include expandable-block-end.html %}
  
### Time series data

Line charts are most often used to show time series data. They work well for showing how multiple variables change over a period of time.

If you are only showing one time series variable, a bar chart can also be used. However, stacked and clustered bar charts should not be used for displaying multiple time series variables as they make comparisons difficult.

Below, the stacked bar chart on the left makes non-adjacent categories in the same bar difficult to compare: here, the “All” and “Male” categories appear the same size in many of the bars. Furthermore, it is difficult to see how categories other than the bottom one change over time. Changes in the “Male” bar are clearly displayed, but trends in the other two categories are harder to identify at a glance. (Note that stacking totals on top of individual categories is also not good practice here.) Where there is only one category, a bar chart is easy to read, as can be seen on the right.

{% capture card_content_3 %}
Example 3: Annual unemployment rates by gender, UK, 2008 to 2024
<div>
    <img src="assets/img/data viz/Example 3.png" width="450px" class="center" alt="A stacked bar chart being used to show trends over time" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% capture card_content_4 %}
Example 4: Annual unemployment rates for all genders, UK, 2008 to 2024
<div>
   <img src="assets/img/data viz/Example 4.png" width="450px" class="center" alt="A single-category being used to show a trend over time" style ="display: block; margin: auto;">
   </div>
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_3 title="❌ To be avoided: showing multiple categories in time series data with stacked bar charts" %}
  {% include card.html content=card_content_4 title="✔️ Best practice: using bar charts or line charts for time series data only when there is one category" %}
{% include cards-container-end.html %}

{% capture expandable_content_3 %}
```
# Load dplyr, tidyr (for data manipulation) and ggplot2 (for data visualisation):
library(tidyverse)
 
# Create data frame:
df <- data.frame(year = 2008:2024,
                Male = c(4.1,5.2,6.4,7.5,8.0,9.0,9.5,9.7,9.4,8.2,7.1,6.0,6.2,6.7,7.6,8.0,7.2),
                Female = c(6.4,7.3,8.7,9.1,8.5,11.2,11.1,11.1,11.7,10.4,9.1,8.0,6.8,9.7,8.4,8.2,8.2),
                check.names = F) %>%
  mutate(All = (Male + Female)/2) %>%
  pivot_longer(cols = 2:4, names_to = "gender", values_to = "unemployed")
 
# We want to show tick marks for every year not just the x-axis labels:
year_seq <- seq(2008, 2024, 1)
year_seq[seq(2008, 2024, 1) %% 4 != 0] <- ""
 
# Make chart:
df |>
  filter(gender == "All") |>
  ggplot(aes(x = year, y = unemployed)) +
  geom_bar(stat = "identity",
           width = .8,
           fill = "#12436D") +
  scale_x_continuous(breaks = 2008:2024,
                     labels = year_seq) +
  scale_y_continuous(breaks = seq(0, 12, 2),
                     expand = expansion(mult = c(0, 0.02)),
                     limits = c(0, 12)) +
  labs(subtitle = "Annual unemployment rate (%)",
       x = NULL,
       y = NULL) +
  theme_af(font_size = 20,
           legend.position = "bottom",
           tick_mark = "x")
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="3" content=expandable_content_3 title="R code for Example 4" %}
{% include expandable-block-end.html %}
  
Below, the clustered bar chart on the left resolves some of the issues with comparability seen in the stacked bar chart above, but is more visually crowded as the bars become thinner and harder to focus on. Stacked and clustered bar charts are also not a good choice when you wish to display the total of all categories alongside the individual groups. The inclusion of a separate bar for "All" in the two bar charts above can incorrectly imply to users that this is a third, distinct category.

When multiple categories are involved, it is best practice to use a line chart like the one on the right. In this chart, differences between categories and time points are easy to identify. The overall trends are clearly displayed and can be understood at a glance. Note that the lines have been labelled directly rather than with a legend: this is how line charts should be labelled (see [communicating without colour](#communicating-without-colour) for more information).

{% capture card_content_5 %}
Example 5: Annual unemployment rates by gender, UK, 2008 to 2024
<div>
    <img src="assets/img/data viz/Example 5.png" width="450px" class="center" alt="A clustered bar chart with many bars, making individual lines thin and difficult to read" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% capture card_content_6 %}
Example 6: Annual unemployment rates by gender, UK, 2008 to 2024
<div>
   <img src="assets/img/data viz/Example 6.png" width="450px" class="center" alt="A line chart with 3 lines, clearly showing trends over time for each line" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_5 title="❌ To be avoided: using a clustered bar chart when there are many lines to display" %}
  {% include card.html content=card_content_6 title="✔️ Best practice: using a line chart to clearly show trends over time for multiple groups" %}
{% include cards-container-end.html %}
  
  
{% capture expandable_content_4 %}
```
# Here we will use the data frame `df` from Example 4:
ggplot(df, aes(x = year, y = unemployed, colour = gender)) +
  geom_line(linewidth = 1.2) +
  scale_x_continuous(breaks = 2008:2024,
                     expand = expansion(mult = c(0.02, 0.2)),
                     labels = year_seq) +
  scale_y_continuous(breaks = seq(0, 12, 2),
                     expand = expansion(mult = c(0, 0.02)),
                     limits = c(0, 12)) +
  scale_fill_manual(values = af_colours(type = "categorical", n = 3)) +
  labs(subtitle = "Annual unemployment rate (%)",
       x = NULL,
       y = NULL) +
  theme_af(font_size = 20,
           legend.position = "none",
           tick_mark = "x") +
  coord_cartesian(clip = "off") +
  geom_text_repel(aes(label = gender, x=year, y = unemployed),
                  size = 6, # Font size
                  xlim = max(df_36$year) + 2,  # Limits for where on the x-axis the label can appear
                  ylim = c(4, 11), # Limits for where on the y-axis the label can appear
                  force = .1,
                  point.size = NA,
                  box.padding = 1,
                  segment.color = "#D9D9D9",
                  data = df_36 %>%
                    group_by(gender) %>%
                    filter(year == max(year)))
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="4" content=expandable_content_4 title="R code for Example 6" %}
{% include expandable-block-end.html %}
  

### Weekly and quarterly time series data

Some types of time series data, especially health data, are often gathered and interpreted on a weekly or quarterly basis. 

If you are using a bar chart to show quarterly data, you should not colour every bar according to quarter as this can be difficult to read. 

One of the benefits of using week or quarter numbers is that it allows the same point in time to be compared across multiple years: for instance, comparing data from the most recent quarter with data from the same quarter last year. If you would like users to compare specific values in this way, this may be better achieved with plain text or a table than a chart. [Government Analysis function guidance](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/) notes that “a well structured table can often be as powerful as a chart” in these situations, and that another option is to include both.

{% capture card_content_7 %}
Example 7: Quarterly survey respondents, England and Wales, 2022 to 2023
<div>
    <img src="assets/img/data viz/Example 7.png" width="450px" class="center" alt="A single-category bar chart where a different colour is used for each bar" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% capture card_content_8 %}
Example 8: Quarterly survey respondents, England and Wales, 2022 to 2023
<div>
   <img src="assets/img/data viz/Example 8.png" width="450px" class="center" alt="A single-category bar chart where each bar is the same colour" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_7 title="❌ To be avoided: using colours to indicate quarter number on a bar chart" %}
  {% include card.html content=card_content_8 title="✔️ Best practice: label all quarters directly and use the same colour for each" %}
{% include cards-container-end.html %}

{% capture expandable_content_5 %}
```
# Create data frame:
df <- data.frame(Year = c(rep(2022, 4), rep(2023, 4)),
                Quarter = c(rep(c("Q1", "Q2", "Q3", "Q4"), 2)),
                count = rnorm(8, mean = 30, sd=5),
                check.names = F)
 
library(tidyverse)
library(tsibble) # for yearquarter()
 
# Make plot:
df |>
  as_tibble() |>
  mutate(quarter = yearquarter(paste(Year, Quarter, sep = " "))) |>
  ggplot(aes(quarter, count)) +
  geom_col(fill = "#12436D") +
  scale_x_yearquarter(date_labels = "Q%q %Y") +
  scale_y_continuous(breaks = seq(0, 50, 10),
                     expand = expansion(mult = c(0, 0.02)),
                     limits = c(0, 50)) +
  labs(subtitle = "Number of survey respondents",
       x = NULL,
       y = NULL) +
  theme_af(font_size = 20,
           legend.position = "bottom",
           tick_mark = "x")
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="5" content=expandable_content_5 title="R code for Example 8" %}
{% include expandable-block-end.html %}
  
ISO weeks are a useful standardisation that allows data to be compared easily with previous years. However, many users may not be familiar with how to interpret week numbers, especially when data starts midway through a calendar year and/or covers multiple years. Therefore when displaying weekly data, it may be helpful to give a brief explanation of this measurement system, or replace the labels on your x-axis with calendar dates that correspond to the start of each week.

When showing weekly data, one option might be to include some calendar dates below the week numbers. To avoid clutter, you do not need to label every week number, but should at least label the beginning and end of the series.

{% capture card_content_9 %}
Example 9: weekly test positivity rates, UK, past 52 weeks (no calendar dates)
<div>
<img src="assets/img/data viz/Example 9.png" width="450px" class="center" alt="A line chart with ISO week numbers on the x-axis" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% capture card_content_10 %}
Example 10: weekly test positivity rates, UK, past 52 weeks (including calendar dates)
<div>
<img src="assets/img/data viz/Example 10.png" width="450px" class="center" alt="A line chart with dates on the x-axis" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_9 title="❌ To be avoided: using only week numbers to indicate time" %}
  {% include card.html content=card_content_10 title="✔️ Best practice: including month and year information" %}
{% include cards-container-end.html %}

{% capture expandable_content_6 %}
```
set.seed(123)
# Create data set for Figure 9 and 10:
df_910 <- tibble(year = c(rep(2023, 27), rep(2024, 26)),
                 week = factor(as.numeric(c(27:53, 1:26))),
                 percent = rnorm(53, mean = 40, sd = 5)) %>%
  mutate(week = factor(week, levels = week))
 
week_seq <- df_910$week
week_seq <- as.character(week_seq)
index <- seq(1, 53, 2)
week_seq[-seq(1, 53, 5)] <- ""
 
# Re-format date:
df_910 <- df_910 |>
  mutate(week = if_else(nchar(as.character(week)) == 1, paste("0", week, sep = ""), week),
         yearweek = paste(year, week, "0", sep = ""),
         week_ending = as.Date(yearweek, format = "%Y%U%w"))
 
xtick_910 <- df_910 |>
  mutate(week_ending = format(week_ending, "%e %b %y"),
         week_ending = trimws(week_ending)) |>
  pull(week_ending)
 
xlabels_910 <- xtick_910
xlabels_910[c(2:17, 19:35, 37:52)] <- ""
 
# Make plot:
fig10 <- df_910 |>
  ggplot(aes(week_ending, percent)) +
  geom_line(colour = af_palette(1),
            linewidth = 1.5) +
  scale_x_date(breaks = df_910$week_ending,
               labels = xlabels_910) +
  scale_y_continuous(breaks = seq(0, 60, 10),
                     expand = expansion(mult = c(0, 0.02)),
                     limits = c(0, 60)) +
  labs(subtitle = "Positivity rate (%)",
       x = "Week ending",
       y = NULL) +
  theme_af(font_size = 20,
           legend.position = "bottom",
           tick_mark = "x",
           plot.margin = unit(c(6, 24, 6, 6), "pt"))
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="6" content=expandable_content_6 title="R code for Example 10" %}
{% include expandable-block-end.html %}


## Guidance for all charts

All published charts must include the following:

- an accessible alternative such as a text description or table (either within the surrounding text or a linked spreadsheet)
- a data source referenced in the surrounding text
- an appropriately tagged title (including figure number)
- axis and series labels

See inside the expandable sections below for more information. 

{% capture expandable_content_7 %}
It is a legal requirement under UK accessibility legislation that all non-text web content published by the Government also be presented in an alternative format that conveys the same information.

For a chart, you may choose between providing a table or a text description. Think about what would be most beneficial to the user: if they would want to understand a trend, this might be best served via a description in the text. If they would want to read exact values then a table may be better. 

If you choose to use a table, you can provide a link to a downloadable [accessible spreadsheet document](spreadsheets). Small tables can also be placed directly beneath a chart, displayed as HTML rather than an image (although it is best not to simply repeat information already given in the chart).

In most cases, it is advised to provide a text description (often in addition to a link to a spreadsheet). This text is best placed directly above or beneath the chart. Text descriptions should clearly indicate which figure they refer to, such as "Figure X shows...". Your description should aim to provide users with an understanding of the relationships and patterns that your chart is trying to communicate. It does not need to state every single feature or data point displayed, particularly when this information can be gleaned from a linked spreadsheet.

GOV.UK and other platforms that support HTML allow you to add a hidden "alt text" attribute in the image metadata, but you should not put your text description there. Placing it near the image instead makes the text easier to find and share to all users.
{% endcapture %}

{% capture expandable_content_8 %}
Be clear about the source of your data and whether the data is available to download and make this information as easy to find as possible. In most cases, a link to an underlying dataset will suffice. For external sources, try to provide the name of the publication or data set which you are referencing, being as specific as possible and providing a direct link if one is available. If your publication uses multiple external data sources, you should provide a link under each chart.
{% endcapture %}

{% capture expandable_content_9 %}
The title should communicate the figure number as well as the geography, time period, and variables that are displayed.

Titles should be provided in the body of the publication text rather than generated within the chart image. If you are publishing on GOV.UK or another platform in an HTML format, this allows them to be tagged correctly as headings using HTML.

{% endcapture %}

{% capture expandable_content_10 %}
Both the x and y axes should be given an appropriate title, including units if applicable. An x-axis title is not necessary when the name of the variable it shows can be easily determined based on the axis labels. For instance, a line chart whose x-axis shows years does not necessarily need to be labelled "Year", and a bar chart with a bar for each region of England does not need a label saying "Region": this information is evident from the labels and plot title. Axes that show day or week numbers should still be titled.
{% endcapture %}


{% include expandable-block-start.html %}
  {% include expandable-section.html number="7" content=expandable_content_7 title="Accessible alternative" %}
  {% include expandable-section.html number="8" content=expandable_content_8 title="Data source" %}
  {% include expandable-section.html number="9" content=expandable_content_9 title="Title" %}
  {% include expandable-section.html number="10" content=expandable_content_10 title="Axis and series labels" %}
{% include expandable-block-end.html %}

### Ranking

Bar charts are a good option to show data ranked in ascending or descending order. Always rank bars by value, unless there is a natural order, for example, age or time.


{% capture card_content_11 %}
Example 11: top 10 average recorded wingspan of British birds
<div>
<img src="assets/img/data viz/Example 11.png" width="450px" class="center" alt="A bar chart where bars are not in a sensible order" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% capture card_content_12 %}
Example 12: top 10 average recorded wingspan of British birds, ranked
<div>
<img src="assets/img/data viz/Example 12.png" width="450px" class="center" alt="A bar chart where bars are ordered according to their value" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% include cards-container-start.html %}
{% include card.html content=card_content_11 title="❌ To be avoided: showing un-ranked bars in a bar" %}
{% include card.html content=card_content_12 title="✔️ Best practice: show bars ranked in ascending or descending order" %}
{% include cards-container-end.html %}


{% capture expandable_content_11 %}
```
# Create data frame:
# Source: https://thebirdersview.co.uk/the-10-largest-birds-in-the-uk/
wingspan_df <- data.frame(bird = c("Grey heron", "Cormorant", "Gannet", "Canada goose", "Capercaillie", "Golden eagle", "White-tailed eagle", "Common crane", "Whooper swan", "Mute swan"),
                          wingspan = c(94, 90, 163, 100, 105, 212, 220, 233, 220, 223))
 
# Load the tidyverse meta-package:
library(tidyverse)
 
# Make plot:
wingspan_df |>
  mutate(bird = fct_reorder(bird, wingspan)) |>
  ggplot(aes(wingspan, bird)) +
  geom_col(fill = "#12436D") +
  scale_x_continuous(breaks = seq(0, 250, 50),
                     expand = expansion(mult = c(0, 0.08)),
                     limits = c(0, 250)) +
  labs(x = "Average recorded wingspan (cm)",
       y = NULL) +
  theme_af(font_size = 20,
            legend.position = "bottom",
            grid = "x",
            tick_mark = "y")
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="11" content=expandable_content_11 title="R code for Example 12" %}
{% include expandable-block-end.html %}
  

### Breaking the axis

“Breaking” an axis occurs when part of a continuous axis is left out. Rather than starting at 0, the axis may begin at a higher value, or it may begin at 0 but exclude a range of values that contain no data points.

This can be a useful way to compare categories that have very small differences between them. However, it is best practice in bar charts to avoid this for the y-axis. This is because the bars in a bar chart are intended to be proportional representations of the different categories.

{% capture card_content_12 %}
Example 13: Number of cases, UK, 2014 to 2024
<div>
<img src="assets/img/data viz/Example 13.png" width="450px" class="center" alt="A bar chart where the y-axis does not start at zero" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% capture card_content_13 %}
Example 14: Number of cases, UK, 2014 to 2024
<div>
<img src="assets/img/data viz/Example 14.png" width="450px" class="center" alt="A bar chart where the y-axis starts at zero" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_12 title="❌ To be avoided: breaking the y-axis when using a bar chart" %}
  {% include card.html content=card_content_13 title="✔️ Best practice: start the y-axis at zero in bar charts" %}
{% include cards-container-end.html %}
  
{% capture expandable_content_12 %}
```
# Create data frame:
df <- data.frame(year = seq(2014, 2024, 1),
                      cases = rnorm(n = 11, mean = 45, sd = 1))
 
# We want to show tick marks for every year not just the x-axis labels. Make every second x-axis label blank:
year_seq <- seq(2014, 2024, 1)
year_seq[seq(2014, 2024, 1) %% 2 != 0] <- ""
 
#
df |>
  ggplot(aes(year, cases)) +
  geom_col(fill = "#12436D") +
  coord_cartesian(y = c(40, 50)) +
  scale_x_continuous(breaks = 2014:2024,
                     labels = year_seq) +
  scale_y_continuous(breaks = seq(40, 50, 2),
                     expand = expansion(mult = c(0, 0.02)),
                     limits = c(0, 50)) +
  labs(subtitle = "Number of cases",
       x = NULL,
       y = NULL) +
  theme_af(font_size = 20,
           tick_mark = "x")
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="12" content=expandable_content_12 title="R code for Example 14" %}
{% include expandable-block-end.html %}
  

Above, the bar chart on the left shows an example of a misleading break in the y-axis. In the bar chart on the right, best practice has been followed for formatting a y-axis that starts at 0.

If you need to break the y-axis, you should use a line chart, dot plot, or other alternative chart and indicate the break clearly on the chart by:

- making the break in the y-axis clear using a [broken axis symbol](https://en.wikipedia.org/wiki/File:Y-axis_break.svg) (two parallel lines striking diagonally through the axis)
- making the x-axis line the same colour and thickness as the gridlines
- making the y-axis and the axis break symbol thicker and darker than the gridlines and x-axis

Axis breaks should only be used to show that the y-axis does not start at zero. Where you would like to display data points that contain an outlier, you should never break the axis halfway through.

  
### Chart colours and text

The colours and formatting of a chart can make a significant difference in its legibility. To ensure your chart can be read and understood by as many people as possible, it is best practice to:

- use a suitable and accessible colour palette
- ensure that you do not rely on colour alone to communicate information
- use white for the background
- use light grey for gridlines
- avoid any images, patterns, or shading
- use black or dark grey text in a sans serif font
- avoid slanted or vertical text
- ensure that text is large enough to be read easily
  
#### Using a suitable and accessible colour palette

It is an accessibility requirement that visual elements such as charts use colours that have a contrast ratio of at least 3:1 with their backgrounds. The [WebAim site](https://webaim.org/resources/contrastchecker/) contains more information on this requirement and has a contrast checker you can use to make sure that your colours are appropriate.

It is best to:

- not rely on colour alone to communicate information (directly label line charts or use a legend in the same order as categories in bar charts)
- avoid using a palette of more than 4 colours; do not use palettes of more than 6 colours (split charts up instead)
- for ordinal categories (such as age), use single-hue palettes (for example, different shades of blue) but ensure all colours have a good contrast with a white background
- not use single-hue palettes for non-ordinal categories (use different colours instead)
- use the [Analysis Function colour palette](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/)

#### Communicating without colour

It is an accessibility requirement that charts do not rely on colour alone to communicate. This means that charts should be just as easy to understand if they are displayed in greyscale as they are in full colour. 

Example 15 below relies entirely on colour to communicate which line represents which category, presenting an accessibility issue. There is a particular issue here because the legend is not in the same order as the lines on the chart, which could be misleading. Example 16 instead has each line labelled directly in accordance with best practice accessibility standards. 

It is possible to use different data marker shapes or textured lines such as dotted or dashed lines to distinguish between variables on a line chart. However, these also increase clutter and caution is advised in using them.

{% capture card_content_14 %}
Example 15: Annual unemployment rates by gender, UK, 2008 to 2024
<div>
<img src="assets/img/data viz/Example 15.png" width="450px" class="center" alt="A line chart where each line is identified through the use of a coloured legend" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% capture card_content_15 %}
Example 16: Annual unemployment rates by gender, UK, 2008 to 2024
<div>
<img src="assets/img/data viz/Example 16.png" width="450px" class="center" alt="A line chart where each line is directly labelled" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_14 title="❌ To be avoided: relying on colour alone to distinguish categories" %}
  {% include card.html content=card_content_15 title="✔️ Best practice: labelling the categories directly" %}
{% include cards-container-end.html %}



{% capture expandable_content_13 %}
```
# Here we will use the data frame `df` from Example 4:
ggplot(df, aes(x = year, y = unemployed, colour = gender)) +
  geom_line(linewidth = 1.2) +
  scale_x_continuous(breaks = 2008:2024,
                     expand = expansion(mult = c(0.02, 0.2)),
                     labels = year_seq) +
  scale_y_continuous(breaks = seq(0, 12, 2),
                     expand = expansion(mult = c(0, 0.02)),
                     limits = c(0, 12)) +
  scale_fill_manual(values = af_colours(type = "categorical", n = 3)) +
  labs(subtitle = "Annual unemployment rate (%)",
       x = NULL,
       y = NULL) +
  theme_af(font_size = 20,
            legend.position = "none",
            tick_mark = "x") +
  coord_cartesian(clip = "off") +
  geom_text_repel(aes(label = gender, x=year, y = unemployed),
                  size = 6, # Font size
                  xlim = max(df_36$year) + 2,  # Limits for where on the x-axis the label can appear
                  ylim = c(4, 11), # Limits for where on the y-axis the label can appear
                  force = .1,
                  point.size = NA,
                  box.padding = 1,
                  segment.color = "#D9D9D9",
                  data = df_36 %>%
                    group_by(gender) %>%
                    filter(year == max(year)))
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="13" content=expandable_content_13 title="R code for Example 16" %}
{% include expandable-block-end.html %}


You should not use patterns on chart bars to distinguish different categories as these can make charts very hard to read, especially at smaller sizes. Instead, stacked and clustered bar charts can include direct labels, or you can include a legend in the same order as the categories and add a note that you have done so.

{% capture card_content_16 %}
Example 17: Number of buyers of eight car models by age, UK, 2024
<div>
<img src="assets/img/data viz/Example 17.png" width="450px" class="center" alt="A bar chart where patterns have been applied to the bars" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% capture card_content_17 %}
Example 18: Number of buyers of eight car models by age, UK, 2024
<div>
<img src="assets/img/data viz/Example 18.png" width="450px" class="center" alt="A bar chart where simple block colours have been applied to the bars" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_16 title="❌ To be avoided: using patterns to distinguish categories on a bar chart" %}
  {% include card.html content=card_content_17 title="✔️ Best practice: using a legend in the same order as the categories" %}
{% include cards-container-end.html %}


{% capture expandable_content_14 %}
```
# Load tidyverse meta-package:
library(tidyverse)
 
# Create data frame:
df <- crossing(model = LETTERS[1:8],
                age = c("0 to 24", "25 to 64", "65 to 74", "75 plus")) |>
        mutate(households = rnorm(32, mean = 5, sd = 2))
 
#
df |>
  ggplot(aes(model, households, fill = age)) +
  geom_col() +
  scale_fill_manual(values = af_colours("categorical", n = 4)) +
  scale_y_continuous(breaks = seq(0, 40, 10),
                     expand = expansion(mult = c(0, 0.02)),
                     limits = c(0, 40)) +
  labs(subtitle = "Number of households (thousands)",
       x = "Car model",
       y = NULL) +
  theme_af(font_size = 20,
            tick_mark = "x",
            legend.position = "bottom")
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="14" content=expandable_content_14 title="R code for Example 18" %}
{% include expandable-block-end.html %}


#### Text orientation

If your labels are too long to fit horizontally on the bottom of the chart, you should not tilt them diagonally or vertically to fit as this can be hard to read. For bar charts showing categorical data, a horizontal bar chart is often a good solution as it allows plenty of space for labels. When showing time series data, you do not need to include a label for every time point if there is not space.


{% capture card_content_18 %}
Example 19: Market shares of four largest importers for a product, USA, 2024
<div>
<img src="assets/img/data viz/Example 19.png" width="450px" class="center" alt="A bar chart labelled using vertical text" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% capture card_content_19 %}
Example 20: Market shares of four largest importers for a product, USA, 2024
<div>
<img src="assets/img/data viz/Example 20.png" width="450px" class="center" alt="A bar chart labelled using horizontal text" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_18 title="❌ To be avoided: vertical text labels" %}
  {% include card.html content=card_content_19 title="✔️ Best practice: rotate chart (categorical data)" %}
{% include cards-container-end.html %}

{% capture expandable_content_15 %}
```
# Load tidyverse meta-package:
library(tidyverse)
 
# Create data frame:
df <- tibble(country = c("Italy", "Netherlands", "Switzerland", "United Kingdom"),
             percent = c(26, 11, 10, 7))
 
# Make plot:
df |>
  mutate(country = fct_reorder(country, percent)) |>
  ggplot(aes(percent, country)) +
  geom_col(fill = "#12436D") +
  scale_x_continuous(breaks = seq(0, 30, 10),
                     expand = expansion(mult = c(0, 0.02)),
                     limits = c(0, 30)) +
  labs(subtitle = "Per cent of market (%)",
       x = NULL,
       y = NULL) +
  theme_af(font_size = 20,
           grid = "x",
           tick_mark = "y")
```
{% endcapture %}


{% include expandable-block-start.html %}
  {% include expandable-section.html number="15" content=expandable_content_15 title="R code for Example 20" %}
{% include expandable-block-end.html %}



Slanted text can pose a particular accessibility barrier for some users with visual impairments. It is therefore best to keep all text horizontal, including y-axis labels. 
  
{% capture card_content_20 %}
Example 21: Annual unemployment rate for females, UK, 2008 to 2024
<div>
<img src="assets/img/data viz/Example 21.png" width="450px" class="center" alt="A line chart with slanted x-axis labels" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% capture card_content_21 %}
Example 22: Annual unemployment rate for females, UK, 2008 to 2024
<div>
<img src="assets/img/data viz/Example 22.png" width="450px" class="center" alt="A line chart with horiztonal x-axis labels" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_20 title="❌ To be avoided: slanted text labels" %}
  {% include card.html content=card_content_21 title="✔️ Best practice: omit some labels and rotate text" %}
{% include cards-container-end.html %}


{% capture expandable_content_16 %}
```
# Load tidyverse meta-package:
library(tidyverse)
 
# Make data frame:
df <- tibble(year = 2008:2024,
        percent = seq(1, 8, length.out = 17) + abs(rnorm(17, mean = 0, sd = 1)))
 
# We want tick marks for every year and labels for every 4 years:
year_seq <- 2008:2024
year_seq[year_seq %% 4 != 0] <- ""
 
#
ggplot(df, aes(year, percent)) +
  geom_line(linewidth = 1.2,
            colour = "#12436D") +
  scale_x_continuous(breaks = 2008:2024,
                     labels = year_seq) +
  scale_y_continuous(breaks = seq(0, 10, 2),
                     expand = expansion(mult = c(0, 0.02)),
                     limits = c(0, 10)) +
  labs(subtitle = "Unemployment rate (%)",
       x = NULL,
       y = NULL) +
  theme_af(font_size = 20,
           tick_mark = "x"
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="16" content=expandable_content_16 title="R code for Example 22" %}
{% include expandable-block-end.html %}
  
### Consistency 

A publication is easier for users to understand when all charts take a consistent approach to data visualisation. Following these steps will allow readers to spend less time trying to understand how to go about interpreting each chart and more time focusing on what the intended message is. Accordingly:

- when variables appear in multiple charts, they should be the same colour in each chart
- style elements such as line weight and font size should be the same in all charts
- units, labels, and titles should follow the same format for each chart, where applicable
- similar types of data should be presented using the same type of data visualisation wherever possible


### Clarity

In general, the GOV.UK standard is to use simple language and avoid unnecessary complexity. In fact, it has been shown that even users with a high degree of specialist understanding appreciate simple writing that allows them to process information as quickly as possible (see the [writing for GOV.UK guidance](https://www.gov.uk/guidance/content-design/writing-for-gov-uk)).

Of course, it is often necessary to write about specialist topics in a way that requires more difficult language. Any technical or specialist elements on your chart should be explained in some way. It is important to consider your users and their understanding of the subject matter to decide how much explanation is needed. 

Even if you believe that a publication will primarily be of interest to specialists, releasing it to the public means that it is available to users from a wide range of backgrounds. Even users who are not experts in the subject matter should still be able to understand the main points of your data visualisations. You should explain:

- representations of uncertainty, such as confidence intervals and p-values
- technical language and potentially unfamiliar abbreviations and units of measurement

{% capture expandable_content_17 %}
Confidence intervals are common measures of statistical uncertainty, but some users may not be familiar with what they mean. If you include confidence intervals or other metrics of uncertainty on your chart, you should clearly explain to users what they are and how to interpret them (for example, what it means when a confidence interval is larger or smaller). 

See our guidance on [communicating uncertainty](communicating-uncertainty), including some stock explanatory text that can be used.
{% endcapture %}

{% capture expandable_content_18 %}
Any unit of measurement, abbreviation, or notation that is not widely understood should be explained or replaced with a more accessible alternative. It is preferable to use a simpler alternative, but there are often instances where this is not feasible. A good way to provide definitions is to include a glossary in your publication that allows users to find word definitions easily without searching the entire text.
{% endcapture %}


{% include expandable-block-start.html %}
  {% include expandable-section.html number="17" content=expandable_content_17 title="Representations of uncertainty" %}
  {% include expandable-section.html number="18" content=expandable_content_18 title="Technical language, abbreviations and notation" %}
{% include expandable-block-end.html %}


## How to reduce clutter in charts

It can be tempting to try to fit as much information as possible onto one set of axes. However, a very busy chart risks telling the wrong story to your users or confusing them. A helpful rule of thumb is “If you cannot write down the message your chart is giving in a few sentences, you should think again about the chart you have chosen.”

Best practice for avoiding chart clutter includes:

- using only one set of axes on a chart
- minimising the number of colours and other potential distractions 
- including a maximum of four categories in line charts, clustered bar charts, and stacked line charts 

### One chart, one set of axes

Charts should only have one x-axis and one y-axis. 

Using two different scales of measurement on one chart can easily over-emphasise or mask the relationship between variables and can make your chart cluttered. The Government Analysis Function have provided
a useful demonstration of this risk, showing how dual y-axes can be manipulated to show almost any relationship between two variables ([see the "manipulation example" section here](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/)). 

Similarly, it is usually best to use only one type of chart on each set of axes. If you wish to show how two variables with different scales or units of measurement change in tandem with each other, a good option is simply to put them on two side-by-side or stacked charts. 


{% capture card_content_20 %}
Example 23: Annual unemployment rate and number unemployed, UK, 2008 to 2024
<div>
<img src="assets/img/data viz/Example 23.png" width="450px" class="center" alt="A chart with 2 y-axes, showing both a bar chart and a line chart on the same image" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_20 title="❌ To be avoided: two sets of axes on a chart" %}
{% include cards-container-end.html %}



{% capture card_content_21 %}
Example 24a: Number unemployed in the UK, 2005 to 2021
<div>
<img src="assets/img/data viz/Example 24a.png" width="450px" class="center" alt="A side by side chart: this image shows a bar chart, the next shows a line chart" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% capture card_content_22 %}
Example 24b: Annual unemployment rate in the UK, 2005 to 2021
<div>
<img src="assets/img/data viz/Example 24b.png" width="450px" class="center" alt="A side by side chart: this image shows a line chart, the previous shows a bar chart" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_21 title="✔️ Best practice: side by side charts" %}
  {% include card.html content=card_content_22 title="✔️ Best practice: side by side charts" %}
{% include cards-container-end.html %}



### Minimising colours and distractions

Shading, borders, textures, and unnecessary embellishments should be avoided. Bar charts do not need to have borders around each bar and patterns should not be used to distinguish between bars. Bar charts which are not stacked or clustered should not have bars in different colours as this does not aid in chart interpretation but can be visually distracting.

{% capture card_content_23 %}
Example 25: Population growth of different towns, South West England, 2000 to 2020
<div>
<img src="assets/img/data viz/Example 25.png" width="450px" class="center" alt="A single-category bar chart where each bar is a different colour" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% capture card_content_24 %}
Example 26: Population growth of different towns, South West England, 2000 to 2020
<div>
<img src="assets/img/data viz/Example 26.png" width="450px" class="center" alt="A single-category bar chart where each bar is the same colour" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_23 title="❌ To be avoided: different colours for each bar" %}
  {% include card.html content=card_content_24 title="✔️ Best practice: only use different colours if absolutely necessary" %}
{% include cards-container-end.html %}


### Limiting the number of categories

If multiple variables or categories of a single variable are measured on the same scale, a chart can be a useful way of comparing between them. However, as the number of variables on a single chart increases, charts can easily become cluttered and hard to read. 
Presenting more than four lines on a line chart can be done, but it often results in the chart becoming too cluttered, so we advise that charts should not contain more than four categories unless there is a clear statistical justification. This is best practice for all types of charts, including line charts, stacked bar charts, and clustered bar charts.

{% capture card_content_25 %}
Example 27: Daily test positivity rates in June for an infectious disease, UK, 2019 to 2024
<div>
<img src="assets/img/data viz/Example 27.png" width="450px" class="center" alt="A line chart with 6 different overlapping lines" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% capture card_content_26 %}
Example 28: Daily test positivity rates in June for an infectious disease, UK, 2019 to 2024
<div>
<img src="assets/img/data viz/Example 28.png" width="450px" class="center" alt="A small multiples plot, showing each line on a separate panel" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_25 title="❌ To be avoided: crowded line charts with more than four different lines" %}
  {% include card.html content=card_content_26 title="✔️ Best practice: using a small multiples chart " %}
{% include cards-container-end.html %}


{% capture expandable_content_19 %}
```
# Load tidyverse meta-package:
library(tidyverse)
 
# Make data frame:
df <- crossing(day = 1:30,
                    year = 2019:2024) |>
  mutate(x = rnorm(180, mean = 10, sd = 3)) |>
  mutate(is_latest = year == max(year),
         year = factor(year))
 
# Create vector from 1 to 30 with blanks for all numbers except 1, 10, 20 and 30:
day_seq <- seq(0, 30, 1)
day_seq[day_seq %% 10 != 0] <- ""
day_seq <- c("1", day_seq[-c(1, 2)])
 
# Make plot:
ggplot(df, aes(day, x, colour = year)) +
  geom_line(linewidth = 1.2,
            colour = "#12436D") +
  scale_x_continuous(breaks = seq(1, 30, 1),
                     labels = day_seq) +
  scale_y_continuous(breaks = seq(0, 20, 10),
                     expand = expansion(mult = c(0, 0.02)),
                     limits = c(0, 20)) +
  labs(subtitle = "Per cent positive (%)",
       x = "Day",
       y = NULL) +
  theme_af(font_size = 20,
           tick_mark = "x",
           legend.position = "none") +
  facet_wrap(vars(year))
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="19" content=expandable_content_19 title="R code for Example 28" %}
{% include expandable-block-end.html %}

### Focus charts

Where you would like to call attention to one category, for instance when you are comparing data from the current year to data from previous years, you can use a “focus chart” where one line is a different colour to the rest. In this case, you can include more than four lines on your chart, but they should be noticeably lighter than the “focus” line, for instance a light grey, and still should be labelled.

{% capture card_content_27 %}
Example 29: Daily test positivity rates in June for an infectious disease, UK, 2019 to 2024
<div>
<img src="assets/img/data viz/Example 29.png" width="450px" class="center" alt="A focus chart where one line is in bold and the other lines are in a lighter grey colour in the background" style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_27 title="✔️ Best practice: using a focus chart to call attention to one category" %}
{% include cards-container-end.html %}


{% capture expandable_content_20 %}
```
# Load tidyverse meta-package:
library(tidyverse)
 
# Make data frame:
df <- crossing(day = 1:30,
                    year = 2019:2024) |>
  mutate(x = rnorm(180, mean = 10, sd = 3)) |>
  mutate(is_latest = year == max(year),
         year = factor(year))
 
# Create vector from 1 to 30 with blanks for all numbers except 1, 10, 20 and 30:
day_seq <- seq(0, 30, 1)
day_seq[day_seq %% 10 != 0] <- ""
day_seq <- c("1", day_seq[-c(1, 2)])
 
# Make plot:
df |>
  mutate(year = as.numeric(as.character(year)),
         label = if_else(day == max(day) & year == max(year), as.character(year), NA_character_)) %>%
  ggplot(aes(day, x, colour = is_latest, group = year)) +
  geom_line(linewidth = 1.2) +
  scale_x_continuous(breaks = seq(1, 30, 1),
                     labels = day_seq,
                     expand = expansion(mult = c(0.04, 0.2))) +
  scale_y_continuous(breaks = seq(0, 20, 5),
                     expand = expansion(mult = c(0, 0.02)),
                     limits = c(0, 20)) +
  scale_colour_manual(values = c("#BFBFBF", "#12436D")) +
  coord_cartesian(clip = "off") +
  labs(subtitle = "Per cent positive (%)",
       x = "Day",
       y = NULL) +
  theme_af(font_size = 20,
           tick_mark = "x",
           legend.position = "none")  +
  geom_label_repel(aes(label = label),
                   color = "black",
                   label.size = NA,
                   size = 7,
                   xlim = 31,  # Limits for where on the x-axis the label can appear
                   #ylim = 9.5, # Limits for where on the y-axis the label can appear
                  e = .1,
                   point.size = NA,
                   box.padding = 0,
                   segment.color = "#D9D9D9",
                   na.rm = TRUE)
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="20" content=expandable_content_20 title="R code for Example 29" %}
  {% include expandable-block-end.html %}

  
The chart above shows a good way to highlight the most recent year in a multi-year time series. However, with an increasing number of lines, there will be more overlap and so it will become harder to distinguish the individual lines in grey. There is no fixed maximum number of lines in a focus chart, but you should make sure that the main message of the chart is still easily communicated.

Alternatively, you can combine small multiples and focus charts into one, showing the focal category in one colour and the other categories in a different colour.

{% capture card_content_28 %}
Example 30: Rate of new infections, UK, 2018 to 2024
<div>
<img src="assets/img/data viz/Example 30.png" width="450px" class="center" alt="A series of focus charts where one line is in bold and the other lines are in a lighter grey colour in the background. Each panel is used to highlight a different line. " style ="display: block; margin: auto;">
</div>
{% endcapture %}

{% include cards-container-start.html %}
  {% include card.html content=card_content_28 title="✔️ Best practice: combing small multiples and focus charts to call attention to one category" %}
{% include cards-container-end.html %}

{% capture expandable_content_21 %}
```
# Load the necessary pkgs:
library(gghighlight)
library(tidyverse)
library(gghighlight)
 
fig28c <- df_2728 |>
  ggplot(aes(x = day, y = x, color = year)) +
  geom_line(colour = "#12436D",
            linewidth = 1.5,
            show.legend = FALSE) +
  gghighlight(use_direct_label = FALSE,
              unhighlighted_params = list(colour = alpha("#BFBFBF", 1))) +
  scale_x_continuous(breaks = seq(1, 30, 1),
                     labels = day_seq) +
  scale_y_continuous(breaks = seq(0, 20, 10),
                     expand = expansion(mult = c(0, 0.02)),
                     limits = c(0, 20)) +
  facet_wrap(vars(year), scales = "free_x") +
  ggaf::theme_af(font_size = 18,
                 tick_mark = "x") +
  theme(panel.spacing.x = unit(2, "lines")) +
  labs(x = "Day",
       y = NULL,
       subtitle = "Rate of new infections (%)")
```
{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="21" content=expandable_content_21 title="R code for Example 30" %}
  {% include expandable-block-end.html %}

## Maps and geography standards

The Analysis Function have produced a ['How To Make A Good Map'](https://onsgeo.github.io/geospatial-training/docs/make_a_good_map) e-learning course which introduces the most common types of maps used to present statistics, and provides guidance on what to think about when making a statistical map.

The Office for National Statistics have also produced guidance to provide the [recommended presentation order for standard geographies](https://geoportal.statistics.gov.uk/datasets/424dfacb33594856a29c4e64f546a219/about). This is so that Official Statistics are geographically comparable, consistent and fit for purpose.

## Sources

1. [Government Analysis Function: data visualisation: charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/)
1. [Government Analysis Function: data visualisation: tables](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-tables/)
1. [Government Analysis Function: data visualisation: colours](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/)
1. [Government Analysis Function: Making charts accessible – material, links and answers to questions from dataConnect22 session](https://analysisfunction.civilservice.gov.uk/support/communicating-analysis-old/making-charts-accessible-dataconnect22/)
1. [Government Digital Service: Content design: planning, writing and managing content](https://www.gov.uk/guidance/content-design)
1. [The Office for National Statistics: Service Manual: Data visualisation](https://service-manual.ons.gov.uk/data-visualisation)
1. [The Office for Statistics Regulation: Approaches to presenting uncertainty in the statistical system](https://osr.statisticsauthority.gov.uk/publication/approaches-to-presenting-uncertainty-in-the-statistical-system/)