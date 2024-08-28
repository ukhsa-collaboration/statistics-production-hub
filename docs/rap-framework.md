---
title: "Reproducible Analytical Pipelines (RAP): bronze-silver-gold framework"
layout: guidance-page

page-group-title: "Reproducible Analytical Pipelines (RAP)"
page1: 
  url: rap
  name: "Introduction to RAP"
page2: 
  url: rap-framework
  name: "<u>Bronze-silver-gold framework</u>"
---


<!---Specific styling for the table on this page--->
<style>
  td, th{
    width: 30%;
  }
  
  td:first-child{
    background-color:unset;
  }
</style>


{% include sources-text.md %}

For an introduction on what RAP is, and what benefits it can bring, please see the [introduction to RAP page](rap).

### How to use this framework

The framework outlined on this page includes a number of standards to work towards when developing and improving upon a Reproducible Analytical Pipeline (RAP). We present bronze, silver and gold standards, offering major benchmarks to work towards, with each subsequent standard reflecting a more transparent, reproducible and robust pipeline. 

You do not need to aim for gold for every project; instead, the standard you should aim for depends on the needs of the project. 

These standards are largely based upon the [“minimum” and “further” standards of RAP developed by the Government Analysis Function](https://analysisfunction.civilservice.gov.uk/policy-store/reproducible-analytical-pipelines-strategy/). In the [appendix](#appendix) section, we explain how our standards differ from theirs. Our standards also align with those presented within the [Health RAP playbook](https://nhsengland.github.io/Health-RAP-Playbook-Alpha/). 

While we would encourage all analysts to eventually meet one of these standards in their projects, it is important to stress that RAP does not need to be an all or nothing exercise. Even implementing just some of the principles outlined here will bring about improvements to processes and outputs. Trying to achieve all of these standards in one go may be too daunting a task and so incremental improvements are the suggested way to go.

It is also important to recognise that some of principles that form these standards may not always be possible. For example, where remote connections to databases are not permitted, this cannot be automated (which is one of the principles in our bronze standard). In such cases, the aim should be to apply RAP to the other areas where principles can be applied. (Note though that it is preferred to have a direct connection to databases wherever possible, as any “black-box” or manual processes in extracting and preparing data for analysis might undermine some of the benefits of RAP.)

UKHSA colleagues can contact <UKHSA.RAP@ukhsa.gov.uk> for more support on how to meet these standards, including for information on how to join our helpful RAP community.


## Overview

The following table gives a quick overview of the principles that form each standard. More detailed explanations are given in the sub-sections to follow.

| The Bronze standard 🥉 | The Silver standard 🥈 | The Gold standard 🥇 |
|:------- |:------- |:------- |
| Use open source analytical software | Meet the Bronze standard | Meet the Bronze and Silver standards |
| Have minimal manual steps for data extraction and analysis | Have minimal manual steps for the production of outputs | Have unit testing for functions |
| Follow good practice for quality assurance, integrating quality assurance checks throughout the pipeline | Use functions as reusable blocks of code | Have error handling for functions |
| Have well-commented code and project documentation | Adhere to a common code style | Include documentation for functions |
| Make code available to other analysts | Have automated input data validation | Use packaging |
| Use version control | - | Log data and analysis checks |
| Use peer review to ensure reproducibility (checking whether pipelines meet these standards) | - | Implement continuous integration |
| - | - | Implement dependency management |



## The Bronze standard 🥉

To meet the bronze standard for RAP, your project should :

- use open source analytical software (preferably R or Python)
- have minimal manual steps (for example, minimal copy-paste, point-click, drag-drop operations) for data extraction where permissions allow (for example, using SQL code), and for the analysis steps used to produce numbers, tables and charts
- follow good practice in quality assurance, integrate quality assurance checks throughout the analysis, automated where appropriate, supplemented with semi-automated and manual checks ([see our other guidance on quality assurance](quality-assurance))
- have well-commented code and documentation embedded as part of the project, rather than being saved elsewhere
- be open and available to other analysts (including external users where appropriate) on a shared drive or on GitHub or GitLab, rather than a personal storage area 
- use version control software such as Git and GitHub or GitLab to create and maintain a recorded history of the project, and version control your input data
- use peer review to ensure that the pipeline meets the rest of this standard


See inside the expandable sections below for more detailed guidance. 


{% capture bronze_1 %}
Modern tools such as R or Python are preferred over tools such as SPSS, Stata or SAS because they are better at reading a range of different data formats, support modularised code, and can be used to automate the creation of outputs in a range of different formats (for example, markdown, HTML, Word, Excel and PowerPoint files, which will become important for meeting the silver standard principles later on). They also reduce (or eliminate) the number of times where data needs to be moved from one programme into another (for example, from SPSS into Excel into Word). 

Open source software, such as R and Python, are also better for transparency compared to other proprietary software where licenses are required to run the code. Those licenses can also be expensive, whereas there are no costs involved for most applications of R and Python. 

The use of open source software is also encouraged by the [Technology Code of Practice](https://www.gov.uk/guidance/the-technology-code-of-practice#be-open-and-use-open-source).

UKHSA and other health-sector colleagues might want to refer to this handy guide: [R for applied epidemiology and public health](https://epirhandbook.com/en/index.html). 

{% endcapture %}


{% capture bronze_2 %}
Minimising the number of manual steps through automation helps reduce the risk of human error and improves efficiency.

Data extraction and analysis should be automated as much as possible, recognising that some manual steps may be required in some situations (for example, where direct connections to databases are not possible). 

Automation should ideally be done in R or Python (see the "use open source analytical software" principle) and various other principles in the framework help with how to write good code (for example, including good documentation, using functions, applying good code style).

While automation is encouraged, this does not mean that the entire pipeline needs to be run in one single step. For example, trying to pull and shape data and produce outputs in the same line(s) of code might make it difficult to debug errors. It can also make it difficult for other analysts to follow what you are doing or reuse parts of your code for similar projects. Your project should therefore instead be structured in a clear and sensible way. 

{% endcapture %}


{% capture bronze_3 %}
Simply being reproducible does not mean that you are doing your analysis correctly. It is important to quality assure each stage of the process, not just the end product (though this of course also remains important!). Quality assurance should align with the principles outlined in the [Aqua Book](https://www.gov.uk/government/publications/the-aqua-book-guidance-on-producing-quality-analysis-for-government), and the [Code of Practice for Statistics](https://code.statisticsauthority.gov.uk/the-code/) for those who have adopted the code.

Please refer to [our more detailed guidance on quality assurance](quality-assurance) for more information.

Checks should be built in at various points throughout the code to flag anything unexpected for further (human) exploration. These might print warning messages into the console for example, or output more detailed markdown files flagging where potential issues might exist. Note that while many quality assurance checks can be automated, some human input will always be needed, such as for final proof readings and checking that automated text still matches the figures. 

Broader, more manual checks should also take place, such as checking that the analysis and outputs meet user needs and checking that any assumptions about the model or method are likely to be true. Code reviews are also advised. 

To formalise your quality assurance processes and to keep an audit trail, it is a good idea to have defined roles (particularly the "assurer" and "analyst" roles), and keep detailed QA logs. Both of these are described within our [guidance on quality assurance](quality-assurance).

{% endcapture %}


{% capture bronze_4 %}
Having good quality documentation accompanying your code is important for reproducibility. The simplest form of documentation is code comments. These can be supplemented with additional documentation such as a “README” file. Standard Operating Procedures (SOPs), QA logs, assumptions logs are other good methods of documentation. 

Good documentation will help improve the reuse of code, either by other analysts using it for the first time or by the same analyst using it in the future. It should explain what the code does and how it can be used, including what options or parameters are available, examples of how to run it, and an explanation of any software or environment dependencies. It should ideally be embedded as part of the project, rather than being saved elsewhere, so that it can be easily found. If it is saved elsewhere, it should be clearly linked from within the project so that analysts are aware of it and where to find it. 

There are no set "requirements" for what documentation you should have in place as it will be very dependent upon the needs of each project. A good test, however, is to think about whether someone else would be able to confidently pick up, understand and run your project if you were suddenly absent from work (for example, due to sickness). If you think it would be difficult for someone to do that, then you likely need to improve your documentation. 

{% endcapture %}


{% capture bronze_5 %}
It is a good idea to make code available to others because this means that the pipeline can be reproduced should the usual analyst go on annual or sick leave, or leave the organisation. It should be stored in a place that is accessible to others (in other words, not just on a local drive that nobody else can access). 

Keeping your project in a repository such as GitHub (ensuring others know where to find, and have permissions to access this!) can make it easy for others to pick up your work and also provides other benefits outlined in the "use version control" principle to follow. But otherwise the project should be kept on a shared network drive. 

Ideally, the code should be made publicly available for transparency, but this may not always be appropriate. Please adhere to any organisational policy on this.

{% endcapture %}


{% capture bronze_6 %}
Version control is important for documenting what changes have been made when, why, and by whom, as well as helping to ensure that people running your code know that they are using the right version. It can act as a safety net, allowing you to roll back to earlier versions of code in the event of an issue, or to review how an earlier report was produced.

GitHub (or GitLab) can be used as a central repository to store your code and version history, allowing it to be easily accessed by others. Sharing code via GitHub can also help avoid duplication of work when other analysts are looking to perform similar tasks. It can also be used as a place for analysts to be open about areas they have identified for improvement via an issues log, also inviting ideas from others. 

Private repositories can be used for internal use only, or public repositories can be used to make your code more openly available. Please adhere to any organisational policy on creating open repositories.

It is important not to commit anything sensitive to version control repositories, such as datasets, secret keys and credentials. Datasets should be excluded to avoid disclosing any personal information. It is recommended that keys and credentials should be saved in a separate file that can still be used within the project, but which is excluded from the repository. Pre-commit hooks, such as those included within the [UKHSA Project Template](https://github.com/ukhsa-collaboration/ukhsa-project-template) (or the cross-government [“govcookiecutter” tool](https://best-practice-and-impact.github.io/govcookiecutter/#govcookiecutter)), or “.gitignore” exclusions can help mitigate this risk. 

Remember that even when sensitive information is included deep within the version history, these can be checked out and viewed! So you should adhere to these security principles right from the start of the project, or otherwise create a new repository with a clear version history. 

While datasets are usually not committed to repositories, it is still important to ensure that some form of version control is applied to the source data, so that others know what version of the data was used for the analysis. If your project relies on snapshot CSV files, rather than connecting to a database directly, it is good idea to store those files in a read-only folder, to prevent them being modified or deleted; any changes like this could make it difficult to reproduce the same outputs in the future. For these files, it is important to ensure that they are saved prior to any data cleaning taking place, so that that data cleaning process can be documented within the production pipeline.

Even where direct connections to databases are made, it may be a good idea to save a copy of a tidy dataset (the minimum dataset needed to produce an output, rather than the full underlying dataset) at some point in the pipeline to keep a record of the data used, and so that it can also be reused in other projects. 

Please adhere to proper information governance procedures when saving datasets, particularly avoiding saving copies of anything that might be considered sensitive.

{% endcapture %}


{% capture bronze_7 %}
The purpose of the peer review principle here is to ensure that the analytical pipeline is fully reproducible and that it does indeed appropriately meet the principles outlined the framework. 

(Note that you should also do some peer review for quality assurance as part of some of the other principles; the principle here is concerned only with checking that RAP principles have been met.)

It can, for example, involve asking a peer to test whether they can successfully run your code on their machine, checking that documentation is clear and complete, and checking that version control has been appropriately implemented. 

A peer review can also provide a useful opportunity to more thoroughly question your pipeline and may help identify areas for improvement that have otherwise not been identified previously (for example, including questions on methodology). This is likely best done by someone not already very familiar with the existing pipeline. 

The peer review should not just focus on the bronze standard but should also review silver and gold standard principles where they have been applied. Having this principle in the bronze standard is just about ensuring that a peer review process is in place for all pipelines. 
{% endcapture %}


{% include expandable-block-start.html %}
  {% include expandable-section.html number="1" content=bronze_1 title="Use open source analytical software" %}
  {% include expandable-section.html number="2"  content=bronze_2 title="Have minimal manual steps for data extraction and analysis" %}
  {% include expandable-section.html number="3"  content=bronze_3 title="Follow good practice for quality assurance, integrating quality assurance checks throughout the pipeline" %}
  {% include expandable-section.html number="4"  content=bronze_4 title="Have well-commented code and project documentation" %}
  {% include expandable-section.html number="5"  content=bronze_5 title="Make code available to other analysts" %}
  {% include expandable-section.html number="6"  content=bronze_6 title="Use version control" %}
  {% include expandable-section.html number="7"  content=bronze_7 title="Use peer review to ensure reproducibility (checking whether pipelines meet these standards)" %}
{% include expandable-block-end.html %}



## The Silver standard 🥈

To meet the silver standard for RAP, your project should:

- achieve all of the principles included in the bronze standard
- have minimal manual steps (for example, minimal copy-paste, point-click, drag-drop operations) for the production of outputs such as reports, spreadsheets, interactive dashboards and others
- use functions as reusable blocks of code
- adhere to a common best practice code style
- have automated input data validation

See inside the expandable sections below for more detailed guidance. 


{% capture silver_1 %}
Automating the production of outputs, such as reports, spreadsheets or dashboards, further reduces the risk of human error that might be associated with manual copy-pasting or other transfers of numbers and charts.

Note that this does not mean your outputs should necessarily be entirely automated. In some cases, this might be appropriate; in other cases, manual input may be needed for providing narrative in a report, for example. 

There are packages available to help produce reports automatically, such as [RMarkdown](https://rmarkdown.rstudio.com/), [Python-Markdown](https://pypi.org/project/Markdown/) and [Quarto](https://quarto.org/).

Spreadsheet workbooks can similarly be produced using the [a11ytables package for R](https://github.com/co-analysis/a11ytables) or [gptables for Python](https://github.com/best-practice-and-impact/gptables), for example.

Producing outputs in these ways means that you know all elements of the output are in sync, as everything is produced from that single pipeline. With more manual approaches, forgetting to update the charts, for example, may mean that they are no longer in sync with what is presented in the text or tables. 

A good test for how well automated your end-to-end pipeline is might be to think whether or not you would be happy to delete your outputs. If you would not want to delete your outputs, because it would take time and energy to re-make them, then your end-to-end pipeline is not fully automated.
{% endcapture %}


{% capture silver_2 %}
Functions are particularly useful when you are repeating the same operations at multiple points in your code. Rather than writing out the same code each time you need to carry out an operation, you can create a function and call that each time instead.

This lessens the risk of error because if you need to change that operation, you only need to change the function definition, not each place in the code where it is run (some of which may otherwise be missed, causing inconsistencies). 

Functions also lend themselves nicely to sharing snippets of functional code with others, removing duplication of effort in other projects.
{% endcapture %}


{% capture silver_3 %}
Working to a common code style makes your code neater and makes it easier for other analysts to pick up your code as they will be able to interpret and understand it more quickly. 

For R users, the [tidyverse style guide](https://style.tidyverse.org/) is the most commonly used style in the global community; "[PEP 8](https://peps.python.org/pep-0008/)" is an alternative for Python users. 

You should also consult the [Duck Book](https://best-practice-and-impact.github.io/qa-of-code-guidance/intro.html) for guidance on coding standards, which also includes some [handy checklists for quality assuring your code](https://best-practice-and-impact.github.io/qa-of-code-guidance/checklists.html). 
{% endcapture %}


{% capture silver_4 %}
Validating your input data is important as the quality of your outputs will necessarily depend on the quality of the inputs. Remember: “[garbage in, garbage out](https://dictionary.apa.org/garbage-in-garbage-out)”.

This principle is intended to build upon the bronze standard quality assurance principle, introducing a more thorough interrogation of your input data in addition to quality assuring your analytical steps. 

Validating inputs in an automated way at the very start of the pipeline allows you to quickly identify and address any quality issues early. You might produce code to check, for example, for missing data, incorrect data types, extreme or outlier values, and whether there have been any unexpectedly large changes in the latest iteration of a longitudinal dataset. Other sense checks can also be performed, depending on the nature of the project. You could have your code produce a markdown document which flags any rows that may warrant further exploration - this may be particularly useful for any reports which are run on a regular basis.
{% endcapture %}


{% include expandable-block-start.html %}
  {% include expandable-section.html number="8" content=silver_1 title="Have minimal manual steps for the production of outputs" %}
  {% include expandable-section.html number="9"  content=silver_2 title="Use functions as reusable blocks of code" %}
  {% include expandable-section.html number="10"  content=silver_3 title="Adhere to a common code style" %}
  {% include expandable-section.html number="11"  content=silver_4 title="Have automated input data validation" %}
{% include expandable-block-end.html %}



## The Gold standard 🥇

To meet the gold standard for RAP, your project should:

- achieve all of the principles included in the bronze and silver standards
- have unit testing for functions
- have error handling for functions
- include documentation of functions (usually included as part of a package)
- use packaging
- log data and analysis checks
- implement continuous integration
- implement dependency management

See inside the expandable sections below for more detailed guidance. 


{% capture gold_1 %}
Unit testing is where functions are tested with controlled inputs, to check that expected outputs are returned. This can be a useful method to raise alarms if changes made to code elsewhere in the project, or some other environment change, adversely affects the function’s operation.

The principle behind unit testing is that where the functionality of the smallest units of the code can be guaranteed, it is more likely that the overall project is running as expected. They also encourage analysts to focus their thinking more on quality assurance, and what the purpose of each piece of code is. They also act as another layer of documentation: it tells users what the intention behind a certain piece of code was and what the expected inputs and outputs are.

You should also consider including [assertive programming methods](https://www.milesmcbain.com/posts/assertive-programming-for-pipelines/) into your code, as a way of checking that your functions are operating as expected. 
{% endcapture %}


{% capture gold_2 %}
Error handling for functions involves stating how the function should behave when it encounters something unexpected, such as a missing or incorrectly formatted parameter passed through the function call. 

Common actions might include stopping the code with an error message, or printing a warning message but allowing the code to continue.
{% endcapture %}

{% capture gold_3 %}
It is sensible to provide documentation for your functions so that others know how to use them. 

Aspects of functions to document include its purpose, the parameters required in function calls along with any default values, and expected inputs and outputs. The preferred place to include this documentation would be within package help files and vignettes.
{% endcapture %}

{% capture gold_4 %}
A package more formally captures all the code and documentation required for a project or collection of functions in one place. It also allows for easier sharing of all the functions needed for a pipeline, or indeed the whole pipeline itself, as well as enhanced version control for the project (via package version numbers). 

Packages are particularly useful when you have a set of general functions, as converting these into a package can facilitate their use across other projects. 
{% endcapture %}

{% capture gold_5 %}
Producing logs of data and analysis checks can help analysts, users and quality assurers to understand whether anything is going wrong with the pipeline, and to understand how and where to respond to any issues. They also act as a useful audit trail, to help diagnose how errors might have been missed, when the do occur. 

These logs might include, for example, the outputs of any input data validation, unit tests, other checks, messages and warnings, as well as more manual checks (for example, via QA logs). 

Please see our [guidance on quality assurance](quality-assurance) for more information on the kinds of things you might want to check and log.
{% endcapture %}

{% capture gold_6 %}
Continuous Integration (CI) describes the managed process of accepting and integrating changes made by individual analysts into a definitive main version of a project. For example, it includes the management of conflicts and the running of regular (automated) tests to ensure that no bugs have been introduced by recent changes. CI helps project leads to identify and resolve any conflicts and bugs early, and helps keep individual collaborators up to date with developments. 

[Pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) can be used in GitHub as part of this purpose, to require a sign-off step before any new code is accepted into the main pipeline. [Branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) can also be used to work on changes without the affecting the main pipeline until you are ready, for example to build in a new feature or when fixing a bug. [GitHub Actions](https://docs.github.com/en/actions) can be used to run automated checks before merging code. 
{% endcapture %}

{% capture gold_7 %}
Dependency management is important as your code is ultimately dependent on the specific state of the software used at the time the analysis is run. If the environment differs for another analyst, or for the same analyst in the future (for example, following software and package updates), then outputs may differ.

[A simple illustration of this kind of issue is provided by the Turing Way Community](https://the-turing-way.netlify.app/reproducible-research/renv.html#motivation-and-background): A basic division of 1 by 5 can either return 0 or 0.2, depending on which version of Python is being used (Python 2 defaults to integer division; Python 3 does not).

To combat risks such as these, details of the environment can be stored, such as via the [renv package for R](https://cran.r-project.org/web/packages/renv/index.html) or via a [Docker container image](https://www.docker.com/). These tools save a record of the environment in which the analysis was originally performed, allowing others to restore that same environment.

Workflow management packages such as [Targets](https://books.ropensci.org/targets/) and [Orderly](https://cran.r-project.org/web/packages/orderly/readme/README.html) in R can also help manage internal dependencies within the code, handling external data dependencies (data, code, templates, outputs from other modules) and the sequence in which modules of your code need to be run.
{% endcapture %}


{% include expandable-block-start.html %}
  {% include expandable-section.html number="12" content=gold_1 title="Have unit testing for functions" %}
  {% include expandable-section.html number="13" content=gold_2 title="Have error handling for functions" %}
  {% include expandable-section.html number="14" content=gold_3 title="Include documentation for functions" %}
  {% include expandable-section.html number="15" content=gold_4 title="Use packaging" %}
  {% include expandable-section.html number="16" content=gold_5 title="Log data and analysis checks" %}
  {% include expandable-section.html number="17" content=gold_6 title="Implement continuous integration" %}
  {% include expandable-section.html number="18" content=gold_7 title="Implement dependency management" %}
{% include expandable-block-end.html %}


## Sources

1. [Government Analysis Function: Reproducible Analytical Pipelines (RAP) strategy](https://analysisfunction.civilservice.gov.uk/policy-store/reproducible-analytical-pipelines-strategy/)
1. [Government Analysis Function: Reproducible Analytical Pipelines (RAP)](https://analysisfunction.civilservice.gov.uk/support/reproducible-analytical-pipelines/)
1. [Government Analysis Function: Why take a more sophisticated approach to building your pipeline](https://analysisfunction.civilservice.gov.uk/support/reproducible-analytical-pipelines/why-take-a-more-sophisticated-approach-to-building-your-pipeline/)
1. [NHS Digital: RAP community of practice](https://github.com/NHSDigital/rap-community-of-practice)
1. [NHS England: Health RAP playbook](https://nhsengland.github.io/Health-RAP-Playbook-Alpha/)
1. [NHS National Services Scotland: Reproducible Analytical Pipelines](https://www.isdscotland.org/About-ISD/Methodologies/_docs/Reproducible_Analytical_Pipelines_paper_v1.4.pdf)
1. [Office for National Statistics: The Duck Book - Quality assurance of code for analysis and research](https://best-practice-and-impact.github.io/qa-of-code-guidance/)
1. [Office for Statistics Regulation: Reproducible Analytical Pipelines - Overcoming barriers to adoption](https://osr.statisticsauthority.gov.uk/publication/reproducible-analytical-pipelines-overcoming-barriers-to-adoption/)
1. [The Aqua Book: guidance on producing quality analysis for government](https://www.gov.uk/government/publications/the-aqua-book-guidance-on-producing-quality-analysis-for-government)
1. [The Goldacre Review: Better, broader, safer: using health data for research and analysis](https://www.gov.uk/government/publications/better-broader-safer-using-health-data-for-research-and-analysis)
1. [The Turing Way: Handbook to reproducible, ethical and collaborative data science - Guide for Reproducible Research](https://the-turing-way.netlify.app/reproducible-research/reproducible-research.html)
1. [UK Government Data Science: RAP Companion](https://ukgovdatascience.github.io/rap_companion/)
1. [UK Statistics Authority: Code of Practice for Statistics](https://code.statisticsauthority.gov.uk/the-code/)


## Appendix
### Our standards versus those produced by the Government Analysis Function

Our guidance draws upon the principles developed by the [Government Analysis Function in their RAP strategy](https://analysisfunction.civilservice.gov.uk/policy-store/reproducible-analytical-pipelines-strategy/) (supported by other sources listed above). However, we have separated them out into 3 standards ("bronze", "silver" and "gold") instead of the Analysis Function’s 2 ("minimum" and "further"). This is to make it easier for teams to progress through the standards in smaller leaps.

In our silver standard, some principles have come from the Analysis Function’s minimum standard, and others from their further standards. Specifically:

- “minimise manual steps” has been separated out into two principles covering manual steps during analysis and manual steps during the production of outputs, with the former remaining in the minimum bronze standard and the latter being moved to our silver standard; this is to recognise the fact that many analysts will develop the more basic programming skills needed for analysis first, before developing other skills around Rmarkdown, for example
- “validating input data”, “using functions”, and “adhere to a common best practice code style” have all been moved to our silver standard from the further standard because we have found that these are usually easier to implement than the other further standard principles

Aside from these differences, all other Analysis function “minimum” standard principles are in our bronze standard, and all other Analysis Function “further” standard principles are in our gold standard.