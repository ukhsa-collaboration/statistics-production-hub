---
title: "Ensuring good quality assurance"
layout: guidance-page
---

> ## Main messages
>- In high quality analysis, quality assurance operates throughout the data journey and isn’t something that can just be added at the end of production.
>- Quality assurance should be planned in advance, with roles, responsibilities, and the extent of assurance activities understood fully by the entire team.
>- Quality assurance should be appropriate and proportionate to the scope, risks, methodology, and data source of a piece of analysis.
>- Understanding user needs is important when measuring the quality of your data. Perfect data quality may not always be achievable and therefore focus should be given to ensuring the data is as fit for purpose as it can be.
>- Teams should hold discussions to review quality and plan quality assurance on a semi-regular basis, identifying gaps in current procedures (our [quality review conversation tool](https://github.com/ukhsa-collaboration/statistics-production-hub/raw/main/docs/assets/downloads/QA%20review%20conversation%20tool.xlsx) can help facilitate this).
>- A quality assurance log should be created and maintained (see our [QA log template](https://github.com/ukhsa-collaboration/statistics-production-hub/raw/main/docs/assets/downloads/QA%20log%20template.xlsx)). This is a crucial tool to help teams plan, record, and sign off on quality; it provides an audit trail of everything that was checked and what the outcomes were.
>- The quality assurance process and any outstanding quality concerns should be clearly communicated alongside the final results of the analysis.


{% include sources-text.md %}


## What is quality?


The quality of an analytical output may be thought of in simple terms as its “fitness for purpose”. When data is fit for purpose, it is less likely to be misleading and we can make effective decisions using the data. The [UK Statistics Authority Code of Practice](https://code.statisticsauthority.gov.uk/) uses the [5 Dimensions of Quality of the European Statistical System (ESS) Code of Practice](https://analysisfunction.civilservice.gov.uk/wp-content/uploads/2016/01/ESS-Dimensions-of-Quality.pdf) as its criteria for assessing fitness for purpose of statistical outputs. These 5 dimensions are:

1. Relevance
2. Accuracy and reliability
3. Timeliness and Punctuality
4. Comparability and Coherence
5. Accessibility and Clarity

All quality assessments of official statistics should be conducted in line with these dimensions and both our [QA review conversation tool](https://github.com/ukhsa-collaboration/statistics-production-hub/raw/main/docs/assets/downloads/QA%20review%20conversation%20tool.xlsx) and [QA log template](https://github.com/ukhsa-collaboration/statistics-production-hub/raw/main/docs/assets/downloads/QA%20log%20template.xlsx) sets out these dimensions for you to consider.

See inside the expandable sections below for example questions you might consider as part of each dimension.


{% capture expandable_content_1 %}
- Who are the current and potential users of the output?
- What are the needs of your users?
- How well does the output suit user needs?
{% endcapture %}

{% capture expandable_content_2 %}
- Has every step of the code been tested?
- Do charts and tables agree with the text?
- Are outputs realistic?
- Have manual steps been double checked?
{% endcapture %}

{% capture expandable_content_3 %}
- Is the release of outputs sufficiently soon after the collection of data?
- Is all data made available in a timely manner?
{% endcapture %}

{% capture expandable_content_4 %}
- Are the statistics consistent over time and comparable between regions and countries?
- Is it possible to combine and make joint use of related data from different data sources?
- Are your results going to be used in combination with other data on the same topic?
- Do you use [harmonised concepts and definitions](https://analysisfunction.civilservice.gov.uk/policy-store/?keyword=&area=&doctype=harmonisation-guidance-and-principles&submit=Go) wherever they are available?
{% endcapture %}

{% capture expandable_content_5 %}
- Are charts, tables, and formatting compliant with accessibility laws?
- Has quality and methodology information been provided?
{% endcapture %}


{% include expandable-block-start.html %}
  {% include expandable-section.html number="1" content=expandable_content_1 title="Relevance" %}
  {% include expandable-section.html number="2" content=expandable_content_2 title="Accuracy and reliability" %}
  {% include expandable-section.html number="3" content=expandable_content_3 title="Timeliness and punctuality" %}
  {% include expandable-section.html number="4" content=expandable_content_4 title="Comparability and coherence" %}
  {% include expandable-section.html number="5" content=expandable_content_5 title="Accessibility and clarity" %}
{% include expandable-block-end.html %}

## Quality trade-off
<div class="image-text-container">
    <img src="assets/img/quality assurance/Quality_trade_off.png" width="460px" alt="A pentagon showing the 5 Dimensions of Quality of the European Statistical System (ESS) Code of Practice: Relevance, Accuracy and Reliability, Timeliness and Punctuality, Comparability and Coherence and Accessibility and Clarity">
    <p>
<br>
<br>
The 5 dimensions of statistical output quality are not mutually exclusive. There are relationships between them and there are instances where improvements in one dimension would lead to deterioration in another dimension.<br>
Statistics should always be produced to a level of quality that meets users’ needs, and quality assurance should be proportionate to the nature of the quality issues and the importance of the statistics in serving the public good.<br>
Understanding user needs is really important when measuring the quality of your data. Perfect data quality may not always be achievable and therefore focus should be given to ensuring the data is as fit for purpose as it can be.
    </p>
</div>

There may need to be trade-offs between different dimensions of data quality, depending on the needs and priorities of your users. You should prioritise the data quality dimensions that align with your user and business needs. For example, if the timeliness of a data set is the most important dimension for the user, this may come at the expense of the data set’s accuracy, and vice versa. It is important to communicate these trade-offs to the users of your data to avoid ambiguity and misuse of the data.

In practice, the nature and extent of quality assurance activities that are carried out for each project should depend on what is considered appropriate and proportionate, defined as follows:

- Appropriate: fit for purpose for the analysis depending on its complexity, timeframe of delivery, available resources, and other factors
- Proportionate: relative to the level of risk entailed by the project


## What do we mean by quality assurance?
Quality assurance (QA) plays an essential part in any analytical project to ensure high quality analysis; it is so much more than just ‘getting the numbers right'. Effective QA ensures that decisions are made with an appropriate understanding of evidence and risks, and helps analysts ensure the integrity of the analytical output. (It therefore forms a crucial part of the [UKHSA's strategic priority to "improve action on public health through data and insight"](https://www.gov.uk/government/publications/ukhsa-strategic-plan-2023-to-2026/ukhsa-strategic-plan-2023-to-2026-executive-summary).)

<div style="text-align:center; margin-bottom:50px">
  <img src="assets/img/quality assurance/high_quality_analysis.png" style = "max-width:1000px; width:100%; margin:auto;" alt="In high quality analysis: You can transfer knowledge about the data, your calculations are correct, your methods are appropriate, others can test and replicate your analysis and your data and assumptions are fit for purpose. These can be summarised as 5 key areas: documentation and planning, verification, validation, project reproducibility and communication and outputs.">
</div>


## The 'QA mindset'

In high quality analysis, we should know how data got from the initial input through to the final output. We refer to this as the 'data journey'. 

QA should operate throughout the  entire data journey and is not something that can be added at the end of production. This means that we should be thinking about QA at each stage of our analytical project, from project governance and planning to producing outputs and communicating findings. We need to be thinking about the data sources and their appropriateness, whether our methods are sound and if the interpretation of results is robust, communicating any caveats that need sharing with users. This is known as having a 'QA mindset'. 

It is important for analysts to be curious about data and not take it at face-value. If there are values that look inaccurate or unusual they should be investigated and verified. Analysts should understand the full data journey and be able to identify steps that are vulnerable and could introduce errors.

There are 4 key areas of a QA mindset to consider when embarking on an analytical project:


{% capture card_content_1 %}
Good governance and planning is an essential part of quality assurance. This involves understanding who will be involved in the QA process and who will be benefiting from the analysis. Find out who your users are and consider who could use your outputs. Check that the work will meet these user needs appropriately.
{% endcapture %}

{% capture card_content_2 %}
Verification and validation are two important processes aimed at ensuring that outputs will meet requirements and satisfy user needs. To ensure quality, we need to be confident that the methods and processes chosen are appropriate and that they have been implemented correctly. It is important to be curious about data and not take it at face-value. If there are values that look inaccurate they should be investigated and verified.
{% endcapture %}

{% capture card_content_3 %}
Reproducible analysis relies on a transparent production process, so that anyone can follow our steps and understand our results. This transparency eases reuse of methods and results. Easy reproducibility helps our colleagues test and validate what we have done and increases trust in the statistics. Reproducible pipelines are also easier to quality assure than manual processes, leading to higher quality.
{% endcapture %}

{% capture card_content_4 %}
It is our role as analysts to explain how any limitations in our outputs might impact on the decisions that users take. Being clear about these issues is absolutely vital. It protects the integrity of the findings and supports the users of our outputs in drawing the correct conclusions to inform the decisions they make. 
{% endcapture %}


{% include cards-container-start.html %}
  {% include card.html content=card_content_1 title="Governance and planning" %}
  {% include card.html content=card_content_2 title="Verification and validation" %}
  {% include card.html content=card_content_3 title="Reproducibility" %}
  {% include card.html content=card_content_4 title="Communication of outputs" %}
{% include cards-container-end.html %}



These key stages along the data journey, alongside the 5 Dimensions of Quality of the European Statistical System (ESS), form the basis of our [QA review conversation tool](https://github.com/ukhsa-collaboration/statistics-production-hub/raw/main/docs/assets/downloads/QA%20review%20conversation%20tool.xlsx) and [QA log template](https://github.com/ukhsa-collaboration/statistics-production-hub/raw/main/docs/assets/downloads/QA%20log%20template.xlsx).


## Roles and responsibilities
The AQUA Book defines 3 key roles for QA of analysis: the commissioner, the analyst, and the assurer. These roles are used by many teams to delegate responsibility during QA. In addition, the [Aqua Book](https://www.gov.uk/government/publications/the-aqua-book-guidance-on-producing-quality-analysis-for-government) and [Macpherson Review](https://www.gov.uk/government/publications/review-of-quality-assurance-of-government-models) state that analysis which is business critical should have a single senior responsible officer (SRO).

In practice, the exact nature of roles required may differ based on project scope and needs, but these roles provide a useful framework for considering the different ways QA should be built into the life cycle of a project. 

See a summary of each of these roles inside the expandable sections below.


{% capture expandable_content_6 %}

The person commissioning analysis  ('the commissioner') is responsible for:

- developing the question of interest and communicating this to the analyst and assurer so that they can identify the most appropriate methods for analysis and QA
- clearly expressing the needs of the project and risks that are entailed so that proportionate levels of QA can be decided upon by the analyst

People of all levels of seniority commission analysis. The commissioner may be acting on behalf of a government decision-maker or other customer, or they may be a policy lead in the area where work is being commissioned. However, the commissioner assumes accountability for the success of the overall project, so the commissioner should be someone who holds a view on the overall purpose of the project outputs and what users’ needs might be.
{% endcapture %}

{% capture expandable_content_7 %}
The person leading the analysis  ('the analyst') is responsible for:

- working with the commissioner to help develop the question of interest in a way that allows it to be answered appropriately and meets the needs of the commissioner
- planning how they will conduct QA and demonstrate assured quality to the commissioner, assurer, and end users of their analytical output
- providing final results and records of all work they have done
- communicating to the commissioner and other end-users the implications of their results, including strengths, limitations, uncertainty, and context

In practice, there may often be more than one analyst involved in a project. In this case, the roles of 'the analyst' may be delegated and managed among several colleagues by a senior analyst. This person should have a well-developed knowledge of the methodology that will be used, the analytical production process, and how to ensure that best practices for producing analysis are being followed. Often, this entails experience as a project manager for analysis.
{% endcapture %}

{% capture expandable_content_8 %}
The person responsible for analytical assurance  ('the assurer') is responsible for:

- ensuring that appropriate quality assurance is taking place throughout by requesting evidence of QA activity
- providing intermediate and final sign-offs for the output
- advising the commissioner on whether quality concerns have been sufficiently addressed and the implications of any remaining risks

This person is not directly involved in conducting QA and does not need to be an analyst. However, QA may benefit from an assurer who understands the analytical methods used in the project so that they can identify issues with the output. Because the assurer signs off on the QA activities, they should have enough seniority to take responsibility for the output. For example, they might be a senior analyst or analytical project manager and may also be the same person as the SRO if the analysis is business critical. For official statistics, this person is often a Senior Statistician or someone with an equivalent of higher grade.
{% endcapture %}

{% capture expandable_content_9 %}
Some analytical projects may require a senior responsible officer ('the SRO'), who takes responsibility for the project and its outputs throughout every stage of its life cycle, from planning and development to application. Where needed, the SRO may be the same person as the assurer. 

An SRO should be in place for any type of analysis that is considered business critical. They should be of sufficient seniority to take responsibility for project, and should formally give their sign off that the analysis is fit for purpose prior to its use. While only business critical projects necessarily require an SRO, the Aqua Book notes that it is good practice for all models to have an SRO, to ensure that there is one individual with overall accountability throughout all stages of its development and use.

If the work is being used for a new purpose, the analytical assurer should obtain confirmation from the SRO that it will be appropriate for the new application. As with the assurer, the SRO may be of any background, but may benefit from a prior understanding of the analytical and policy background of the project. 


{% endcapture %}


{% include expandable-block-start.html %}
  {% include expandable-section.html number="6" content=expandable_content_6 title="The commissioner" %}
  {% include expandable-section.html number="7" content=expandable_content_7 title="The analyst" %}
  {% include expandable-section.html number="8" content=expandable_content_8 title="The assurer" %}
  {% include expandable-section.html number="9" content=expandable_content_9 title="The senior responsible officer" %}
{% include expandable-block-end.html %}


## How can I adopt a QA mindset?
 We have created two tools to help teams discuss, plan, record and sign off on quality:

1. QA review conversation tool
2. QA log template

<div style="display:flex; flex-wrap:wrap;">
  <button class="download-button" onclick="location.href='https://github.com/ukhsa-collaboration/statistics-production-hub/raw/main/docs/assets/downloads/QA%20review%20conversation%20tool.xlsx'" type="button">
           Download QA review conversation tool</button>
           
  <button class="download-button" onclick="location.href='https://github.com/ukhsa-collaboration/statistics-production-hub/raw/main/docs/assets/downloads/QA%20log%20template.xlsx'" type="button">
           Download QA log template</button>
</div>

### What is the QA review conversation tool?
Our [QA review conversation tool](https://github.com/ukhsa-collaboration/statistics-production-hub/raw/main/docs/assets/downloads/QA%20review%20conversation%20tool.xlsx) was created to provide a useful starting point for thinking about the QA of statistical outputs in line with the five European Statistical System (ESS) Quality Dimensions. It has been designed to facilitate team discussions about quality at either the start of a new project or at regular intervals for cyclical releases to help teams plan QA, identifying gaps in current procedures. We have compiled discussion questions that teams can use to reflect on the quality of their analysis, identify areas for improvement, and consider how to communicate quality to users. The outcomes of these discussions should inform QA plans and QA logs which teams should be using during QA activities. 

### What is the QA log template?
To help teams record and sign off on quality, we have also created a [QA log template](https://github.com/ukhsa-collaboration/statistics-production-hub/raw/main/docs/assets/downloads/QA%20log%20template.xlsx). This approach is standard practice across government statistics and should ensure that a QA mindset is present when conducting analytical projects. A QA log should be used every time you are producing a publication.

A QA log will:

- provide a consistent, more standardised approach to QA across different analytical projects

- give the analyst ideas on what to look out for when conducting QA and help discussion within teams

- give the assurer clearer sight of what exactly has been checked and any issues identified

- provide an audit trail of everything that was checked and what the outcomes and actions taken were

An audit trail can be particularly helpful if something goes wrong; it allows you go back and review your processes to see what how any errors might have slipped through and whether you might need to make any changes to the checks you are doing for next time.

## Utilising these tools
In both templates, there are sheets relating to the different stages of the QA process as outlined in the 'QA mindset' section that relate to the ESS quality dimensions.

In the review conversation tool, each sheet contains space for the analyst to comment on how well requirements are being met and to note any outstanding issues or actions to improve quality or how they communicate quality to users. There is also space for the assurer to provide their sign off that they’re satisfied with the QA process at each stage.

In the QA log template, suggested criteria are given in order to attain a high level of quality. Each criterion is given one row, with space for an assurer to describe whether the criterion has been met, the steps that have taken to assess the project against that criterion, and any outstanding work that may need to be completed. This template was created with the intention that teams can adapt and customise it dependent on their needs to create a comprehensive overview. While it is not a complete list of QA concerns, the template provides a starting point for thinking about the assurance process.

The expandable sections below cover in more detail the five main stages of a traditional publication cycle, giving guiding questions to consider and links to further resources, to help you customise your QA logs based on your project and user needs.


{% capture expandable_content_10 %}
## Project governance

Project governance is the most preliminary stage of analysis and focuses on deciding the guiding question, scope, and context of the planned analysis. While there may be few outputs at this step relating to QA, the decisions made will define the level of QA necessary at later stages. It’s important at this stage that everyone knows and understands their responsibilities, and there is a clear reason for the analysis being conducted. For recurring publications, this stage may not be needed for each release, but the topics covered should still remain under regular review to continually ensure that project needs are met. 
  
The table below gives some considerations when completing this section of the review conversation tool and the QA log.
  
| Guiding questions | Specific considerations | Why do I need to know the answer to this? | What help is available? |
|-------------------|-------------------------|-------------------------------------------|-------------------------|
| What is the need for this analysis or statistical release?         | Does the output contribute something new that cannot be found in existing research or literature?<br><br>Has there been a clear user need for this analysis shown through user consultation?                                                                                                                                  | Understanding why the analysis is needed and what it will be used for is critical for understanding whether what you have done is fit for purpose.<br><br>If you are responsible for part of an analytical process, understanding the end use will help you to make sure that your part of the output does what is needed to meet user needs.                                                                                         | [Guidance: The Aqua Book (HM Treasury)](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/416478/aqua_book_final_web.pdf)<br><br><br>[Guidance: Analysis Functional Standard (Government Analysis Function)](https://www.gov.uk/government/publications/government-analysis-functional-standard--2)                                                                                                                                           |
  | Who uses your analysis or statistical release?                     | Does the work meet user needs appropriately?<br><br>Have you addressed feedback obtained from recent user consultations?<br><br>What are the expectations of my users?<br><br>Are the length and content of the publication appropriate for its users?<br><br>Are terms defined for your less-technical users?                | Understanding who uses your analytical output will help you to make sure that it meets their needs.<br><br>It also helps you to tailor your outputs to make sure all your users are fully supported in using the outputs effectively.                                                                                                                                                                                                        | [Guidance: User engagement top tips (Government Analysis Function)](https://analysisfunction.civilservice.gov.uk/policy-store/user-engagement-top-tips/)                                                                                                                                                                                                                                                                                                                      |
  | What analytical question you are addressing?                       | Are questions suitably explicit and do they clearly reflect the evidence gaps the analysis is intended to fill?<br><br>Will the output align with overarching departmental or programme goals?                                                                                                                                   | Having a clear understanding of the problem your team is trying to solve ensures that the analysis you design is fit for purpose.<br><br>If you do not know how your work is contributing to answering an analytical need, you may be unaware of important requirements or limitations for your part of the work.                                                                                                                                       | [Guidance: The Aqua Book (HM Treasury) ](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/416478/aqua_book_final_web.pdf)<br><br><br>[Guidance: Analysis Functional Standard (Government Analysis Function)](https://www.gov.uk/government/publications/government-analysis-functional-standard--2)<br><br><br>[UKHSA Data Strategy (UK Health Security Agency)](https://intranet.ukhsa.gov.uk/sites/data-analytics-and-surveillance/SitePageModern/49668/data-strategy) |
  | Is everyone aware of their role and responsibility in the process? | Is a Senior Responsible Officer (SRO) required as the analysis is business critical?<br><br>What is the role of the commissioner in your project? Are there any key changes to the publications that need flagging?<br><br>Does the assurer understand the analytical methods used in the project? Are there any skills gaps? | For effective quality assurance, you need to be clear on roles and responsibilities throughout the chain of production. It is not enough to say that an individual will carry out some QA.<br><br>Assigning the roles set out in the AQUA book provide a useful framework for considering the different ways QA should be built into the life cycle of a project.<br><br>For more information, see Roles and responsibilities section of this guidance. | [Guidance: The Aqua Book (HM Treasury)](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/416478/aqua_book_final_web.pdf) 
  
{% endcapture %}


{% capture expandable_content_11 %}
## Project planning
  
Effective project planning serves as the roadmap that guides any analytical project from conception to completion. It ensures that the correct documentation is available, risks are mitigated, and deadlines are met. There should be a clear, proportionate QA plan and a consistent project structure with version control.
  
The table below gives some considerations when completing this section of the review conversation tool and the QA log.

 |Guiding questions                                                      | Specific considerations                                                                                                                                                                                                                                                                                                                 | Why do I need to know the answer to this?                                                                                                                                                                                                                                                                                                                                                                                                                                              | What help is available?                                                                                                                                                    |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Is all of your documentation about the project easy to find?           | Is there a single location (for example, on GitHub or SharePoint) where all project documentation is either stored or linked?<br><br>Have you got a link to your project code repository within the documentation?                                                                                                                  | Your analysis must be well documented so that somebody new can understand it and pick it up. Poor documentation means that other people will not understand why the process is configured as it is, how the process works or how to run the process safely, potentially leading to errors.                                                                                                                                                                                            | [Guidance: The Aqua Book (HM Treasury)](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/416478/aqua_book_final_web.pdf)<br><br>[Guidance: QA of Code for Analysis and Research (Government Analysis Function)](https://best-practice-and-impact.github.io/qa-of-code-guidance/intro.html)                                                                                       |
| Have you got a consistent project structure set up?                    | Does the project structure align with other analytical projects in your organisation?<br><br>Is there a clear system to track version control within your project?                                                                                                                                                                                     | All projects should have appropriate version control including a clear system for version labelling and a version control log.<br><br>It is recommended to use a project template such as [govcookiecutter](https://github.com/best-practice-and-impact/govcookiecutter). A template provides a consistent project structure and some built-in automated QA.                                                                                                                                                                                              | [govcookiecutter (GitHub link)](https://github.com/best-practice-and-impact/govcookiecutter)<br><br>[Guidance: GitHub docs (GitHub)](https://docs.github.com/en/get-started/start-your-journey/hello-world)                                                      |
| Is there a recorded plan for the analysis?                             | Has an appropriate plan been agreed with adequate consideration of time, resource quantity and skills required?<br><br>Will the proposed time frames allow for adequate quality assurance?<br><br>Where are the highest risk points for errors in the process? What measures do you or could you take to mitigate risk at these points? | Analysis will often involve a trade off between time, resource and quality.<br><br>Discussions about the desired and achievable levels of QA should take place at the very start of a project. The reality is that most analysis will be carried out under time and resource pressure and we will not be able to carry out all the QA activity we would ideally like to. In these circumstances, QA activities will need to be prioritised based on the risk of not carrying them out. | [Guidance: The Aqua Book (HM Treasury)](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/416478/aqua_book_final_web.pdf)<br><br>[The Government Data Quality Framework (Government Data Quality Hub)](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework)<br><br>[Guidance: Tips for urgent quality assurance of data (Government Analysis Function)](https://analysisfunction.civilservice.gov.uk/policy-store/tips-for-urgent-quality-assurance-of-data) |
| Can you summarise and explain the end-to-end process of your analysis? | How does your work feed in to the bigger analytical picture?                                                                                                                                                                                                                                                                            | Having an overview of the analysis (especially if you only work on part of it) ensures that you and your team understand how your work feeds into the wider product.<br><br>It can help you to identify potential quality risks or issues, both upstream and downstream of your own work as well as how your activity supports and underpins downstream processing.                                                                                                                     | [Generic Statistical Business Process Model (GSBPM; United Nations Economic Commision for Europe)](https://unece.org/statistics/modernstats/gsbpm)


{% endcapture %}

{% capture expandable_content_12 %}
## Verification and validation
    
Whilst verification focuses on confirming that the analysis is being developed correctly according to the specified requirements, validation ensures that the final product meets user needs and answers the defined research question. Both processes are essential for ensuring the quality and reliability of our analytical projects. 

The key output from the verification process concerns the extent to which the agreed work has been conducted appropriately. The key output from the validation process is a judgement, based on evidence, concerning the extent to which the work is 'fit for purpose'
    
The table below gives some considerations when completing this section of the review conversation tool and the QA log.

| Guiding questions                                                           | Specific considerations                                                                                                                                                                                                                                                                                                                                                       | Why do I need to know the answer to this?                                                                                                                                                                                                                                                                                                                                                                                                                            | What help is available?                                                                                                                                                                                                          |
|-----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Is the input data quality well-understood and sufficient for project needs? | Are the source, collection methods, size, accuracy, and precision of the data known?  Have you checked for missing and duplicated data? Have you addressed these?  Have the data been checked for any extreme or implausible values?  Do any data quality concerns pose a risk for the final outcomes of the analysis?                                                        | The quality of input data directly affects the validity of any results or conclusions drawn from it. Understanding the data quality helps you assess the reliability and trustworthiness of findings.  You should assess your datasets for missing values to understand which variables and records are affected, how much is missing and whether there might be bias in the missingness. Always tell your users about the prevalence and treatment of missing data. | [Guidance: Missing data (internal link)](missing-data)  [Guidance: Quality statistics in government (Government Analysis Function)](https://analysisfunction.civilservice.gov.uk/policy-store/quality-statistics-in-government/) |
| How do you know the method you are using is appropriate?                    | Are the methods agreed to be the most suited for the project needs compared to other potential alternatives?  Does the methodology deliver the required degree of certainty and precision?  When changes have been made to methodologies, are they justified, well-documented, and clearly communicated?                                                                      | You should be able to explain why the method(s) you use are suitable for this analysis and be able to support your choice with evidence. This might include reference to academic peer-reviewed publications or other projects that are similar.  If you cannot explain why you chose the methods you use and why they are right for your analysis and the data you are using, you cannot be sure that your approach is sound.                                       |                                                                                                                                                                                                                                  |
| Is the code or software functioning as expected?                            | Have an appropriate range of automated checks been built into the analytical pipeline?  Has the code or other implementation of the analysis been checked by an independent analyst?  Have intermediate outputs from every stage of analysis been checked?                                                                                                                    | You need to be sure that your analysis produces the outputs that you think it should and that the processes you run work as expected.  If you cannot demonstrate that code and processes you have set up are functioning correctly, you cannot confirm the quality of the results.                                                                                                                                                                                   | [Guidance: RAP Framework - Bronze, Silver and Gold standards (internal link)](rap-framework)                                                                                                                                     |
| Do the outputs appear realistic?                                            | Are there any anomalies or unexpected trends in the data? Have they been sufficiently investigated?  Does the output appear realistic for the real-world behaviour that is being analysed?  Are outputs consistent with results from historical data or other data from other regions?  Have the methodology and outputs been peer reviewed to ensure they appear reasonable? | Stakeholders rely on analytical outputs to make informed decisions. You need to ensure that these decisions are based on accurate and plausible data, and so if the data looks different to previous trends this should be investigated and communicated clearly to users.                                                                                                                                                                                           |                                                                                                                                                                                                                                  |

{% endcapture %}

{% capture expandable_content_13 %}
## Project reproducibility
    
When we produce analysis or an analytical output, we need to produce it using the most robust method to remove any question around how it was created. The focus is then directed to what the report is showing. 

[Reproducible Analytical Pipelines (RAP)](rap) is a set of principles and working practices that help you create more efficient, more robust, and more transparent analytical processes. By making our analysis reproducible, we make it easier for others to quality assure, assess, critique and re-use our methods and results, and for colleagues to assure the quality of what we have done.
    
The table below gives some considerations when completing this section of the review conversation tool and the QA log.

| Guiding questions                                                                                                               | Specific considerations                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Why do I need to know the answer to this?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | What help is available?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|---------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Has the code been properly documented?                                                                                          | Has version control software such as Git and GitHub been used to track and manage changes?  Is code documentation embedded in the project rather than saved elsewhere?  Have functions been documented and wrapped up in a package where useful to do so?                                                                                                                                                                                                                                                                                                                                                                                                                             | Your code must be well documented so that somebody new can understand it and pick it up. Poor documentation means that other people will not understand why the process is configured as it is, how the process works or how to run the process safely, potentially leading to errors.  Good version control ensures that you have a full understanding of when, why and how changes were made to your analysis process. If it is hard to track changes, this makes it hard to retrace steps if there is a problem and means you do not fully understand the process. | [Guidance: GitHub docs (GitHub)](https://docs.github.com/en/get-started/start-your-journey/hello-world)  [Guidance: Quality Assurance of Code for Analysis and Research (Government Analysis Function)](https://best-practice-and-impact.github.io/qa-of-code-guidance/intro.html)                                                                                                                                                                                                                                            |
| Is the process from initial data extraction to final report fully reproducible?                                                 | Without any input from the analytical project team, could a third party reproduce our results?  Have manual steps in data extraction, analysis, and report creation been automated where possible?  If mathematical formulas have been used to describe methodology, have these been presented with all terms and steps defined?  Where manual steps were involved, have these been thoroughly documented?  Has a standard operating procedure (SOP) been produced if necessary?  Have the documentation and quality assurance logs been peer reviewed to ensure that the process is reproducible?  If we repeat our processes with different software, will we get the same results? | If the process from initial extraction to the final report contains manual steps, then these steps need to be documented so that the team can understand the process. Manual steps can lead to a higher risk of human error, so they need to be clearly understood.                                                                                                                                                                                                                                                                                                   | [Guidance: Quality Assurance of Code for Analysis and Research (Government Analysis Function)](https://best-practice-and-impact.github.io/qa-of-code-guidance/intro.html)  [Guidance: The Aqua Book (HM Treasury)](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/416478/aqua_book_final_web.pdf)  [Guidance: Reproducible Analytical Pipelines (RAP): an introduction (internal link)](rap)                                                                                 |
| Have best practices for coding been followed?                                                                                   | Has an agreed-upon style guide been followed in all of the code written for analysis?  Does code adhere to best practice standards?  Are there plans in place to ensure there is sufficient capability within the team to use and modify the pipeline as needed in the future?                                                                                                                                                                                                                                                                                                                                                                                                        | If best practices have not been followed, there may be a higher risk of error. By understanding the team's agree-upon styles and standards, you can ensure consistency when modifying the pipeline.                                                                                                                                                                                                                                                                                                                                                                   | [Guidance: Quality Assurance of Code for Analysis and Research (Government Analysis Function)](https://best-practice-and-impact.github.io/qa-of-code-guidance/intro.html)  [Guidance: The Aqua Book (HM Treasury)](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/416478/aqua_book_final_web.pdf)  [Guidance: Quality Assurance of Code for Analysis and Research (Government Analysis Function)](https://best-practice-and-impact.github.io/qa-of-code-guidance/intro.html) |
| Do you consistently use peer review to check scripts and code, documentation, implementation of methods, processes and outputs? | Have the methodology and outputs been peer reviewed to ensure they appear reasonable?  Is your code or analysis ever peer reviewed by someone outside your team?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Peer review is a standard part of analysis best practice. It is helpful because it helps to identify where steps are unclear, documents are hard to understand or there might be problems with calculations or implementation of methods. Routine peer review helps to improve the quality of processes and to reduce risk by identifying potential problems.                                                                                                                                                                                                         | [Guidance: Quality Assurance of Code for Analysis and Research (Government Analysis Function)](https://best-practice-and-impact.github.io/qa-of-code-guidance/intro.html)  [Guidance: Quality statistics in government (Government Analysis Function)](https://analysisfunction.civilservice.gov.uk/policy-store/quality-statistics-in-government/#quality-assurance)                                                                                                                                                         |

{% endcapture %}

{% capture expandable_content_14 %}
## Communication and outputs
  
In this context, the output is defined broadly as the analysis that is officially published, or one that is used for further research or analysis. Quality at this stage refers to how well your ‘final’ outputs meet your users’ needs. Strengths and limitations of your analysis should be communicated clearly to users so that they can understand the data and use it appropriately. For each output, information on quality and methods should be communicated to users both within the main statistical release and in a Quality and Methodology Information (QMI) report.
    
The table below gives some considerations when completing this section of the review conversation tool and the QA log.

| Guiding questions                                                                                                  | Specific considerations                                                                                                                                                                                                                                                                            | Why do I need to know the answer to this?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | What help is available?                                                                                                                                                                                                                                                   |
|--------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Are your outputs clear, concise and accurate?                                                                      | Is there agreement between figures that appear in multiple places, such as in text, tables, and charts?<br><br>Does the publication follow organisational house style and structure for analytical outputs?<br><br>Are sources cited and correctly linked?<br><br>Have technical terms been defined, if necessary?    | Clear and concise outputs are easier for users to understand quickly and accurately. They reduce the cognitive load on the user, making it easier for them to grasp the information or action required.                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                     |
| Are data visualisations accessible and easy to understand?                                                         | Do graphs and charts follow best practice guidance?<br><br>Have all graphs and data sources been cited and linked?                                                                                                                                                                                 | Data visualisations must be compliant with current accessibility legislation and easy to understand for users of all backgrounds.<br><br>You should choose an appropriate and consistent way to visualise different types of data. Colours, text, and formatting should be carefully applied in order to aid interpretation of data visualisations.                                                                                                                                                                                             | [Guidance: Data visualisation (internal link)](data-vis)<br><br>[Guidance: Using our colour palettes in Microsoft, R and Python (Government Analysis Function)](https://analysisfunction.civilservice.gov.uk/policy-store/codes-for-accessible-colours/)                                                                                                        |
| Have strengths and limitations been communicated clearly and effectively to users, stakeholders, and team members? | Have you assessed the impact of the limitations and set out how they will affect the quality and use of the outputs?<br><br>Has a Quality and Methodology Information (QMI) report been created, showing how outputs were produced and communicating the strengths and limitations of the data? | No analysis is perfect and no data are completely correct. You should be able to explain how you have assessed and measured the uncertainty that affects your analysis.<br><br>Informing users about your data quality is important for them to understand the data and use it appropriately. If the QA log highlights any problem areas in the data, caveat these when telling users about the data quality.<br><br>It is important to clearly communicate the quality of your data so that users can understand whether it meets their needs. | [Guidance: Communicating uncertainty in statistics (internal link)](communicating-uncertainty)<br><br>[Guidance: Communicating quality, uncertainty and change (Government Analysis Function)](https://analysisfunction.civilservice.gov.uk/policy-store/communicating-quality-uncertainty-and-change/) |
| Will the data used in analysis be published openly as long as there is no valid reason to withhold it?             | Do spreadsheets follow spreadsheet accessibility guidance, including publication as an .ODS file?<br><br>Has data been anonymised by applying proper statistical disclosure control (SDC) measures?                                                                                                | Openly publishing data ensures transparency in our processes. It allows others to review the data, methods, and results, promoting trust and credibility in the findings. This aligns closely with the principles set out in the [Code of Practice for Statistics (UK Statistics Authority)](https://code.statisticsauthority.gov.uk/).                                                                                                                                                                                                                                                                               | [Guidance: Releasing statistics in spreadsheets (Government Analysis Function)](https://analysisfunction.civilservice.gov.uk/policy-store/releasing-statistics-in-spreadsheets/)<br><br>[Guidance: Accessible reference tables in spreadsheets (internal link)](spreadsheets)              |
{% endcapture %}


{% include expandable-block-start.html %}
  {% include expandable-section.html number="10" content=expandable_content_10 title="1. Project governance" %}
  {% include expandable-section.html number="11" content=expandable_content_11 title="2. Project planning" %}
  {% include expandable-section.html number="12" content=expandable_content_12 title="3. Verification and validation" %}
  {% include expandable-section.html number="13" content=expandable_content_13 title="4. Project reproducibility" %}
  {% include expandable-section.html number="14" content=expandable_content_14 title="5. Communication and outputs" %}
{% include expandable-block-end.html %}



## Common questions
The expandable sections below are designed to address the most common queries we receive about quality assurance. Please get in touch with us if there's anything missing that you would like to see.

{% capture expandable_content_15 %}

You should be reviewing the key areas of your quality assurance process regularly, but the frequency and scale of this will be specific to your data and publication frequency. Major reviews should be planned at key points, when incorporating a change to the specification, or at regular intervals. At these major review points, it is recommended to use the QA review conversation tool to discuss all aspects of quality within your teams.

For example, a team leading on a a weekly report would conduct verification and validation and output checks every week for their output. However, they would not be updating their governance, planning or RAP procedures that frequently, and would instead do this at planned points in the year alongside a whole data journey review.
{% endcapture %}

{% capture expandable_content_16 %}
Providing evidence of quality in official statistics should be structured around the ESS quality dimensions outlined earlier. QA should be logged in two ways:

1. An internal QA log that keeps track of actions carried out by the producers of the analysis.

2. A quality and methodology information (QMI) report to be published along with the analytical output.

QMI reports are for detailed information about the data sources and methods used to produce the statistics, and the quality of the statistics. They allow users to better understand how the statistics were produced, which helps them to trust the statistics. QMI reports should be published for all official statistics. We provide this detailed information because:

- we must be transparent about how the statistics and data were produced
- the extra detail caters to the needs of different users
- it allows the public, our users, other experts, and the Office for Statistics Regulation (OSR) to hold us to account
- doing this helps to build trust in our statistics
- including more detailed information here allows you to simplify the main publication

The Office for Statistics Regulation (OSR) and Analysis Function (AF) publish case studies exhibiting successful application of their QA principles for official statistics. The publications presented in these studies contain helpful examples of what quality reporting can look like in a wide range of contexts. 

[OSR case studies](https://code.statisticsauthority.gov.uk/the-code/quality/q3-assured-quality/)

[Analysis function case studies](https://analysisfunction.civilservice.gov.uk/government-statistical-service-and-statistician-group/gss-quality-strategy-case-studies/#department-for-levelling-up-housing-and-communities-reviewing-quality-assurance)

{% endcapture %}

{% capture expandable_content_17 %}
Below is a summary of five key documents as they relate to QA. This is not a comprehensive list, but encompasses some of the most widely used sources of Government guidance about QA. Click on the title of any document to access the full text. 

| Source                                                              | Requirement for QA                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Why QA is needed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [The Aqua Book](https://www.gov.uk/government/publications/the-aqua-book-guidance-on-producing-quality-analysis-for-government)<br>(HM Treasury)                                     | "The right modelling environment involves a culture where leaders value and recognise good quality assurance. It requires adequate capacity, including specialist skills and sufficient time to conduct quality assurance effectively. It also needs a set of controls, including a clear internal chain of responsibility and a route for challenge where analysts have concerns."                                                                                  | "By considering quality from the start of the analysis, the analysis is more likely to be right the first time and thus save time and resources overall. However, quality management and control processes are also deployed to manage mistakes, handle changes to the analysis requirements and ensure the appropriate re-use of analysis for different purposes."<br><br>"If analysis and any supporting models, data and assumptions are not fit-for-purpose then the consequences can be severe ranging from financial loss through to reputational damage and legal challenge. In the most severe of consequences, lives and livelihoods can be affected." |
| [Code of Practice for Statistics](https://code.statisticsauthority.gov.uk/the-code/)<br>(UK Statistics Authority) | "Producers of statistics and data should explain clearly how they assure themselves that statistics and data are accurate, reliable, coherent and timely."                                                                                                                                                                                                                                                                                                          | "A producer of official statistics is more likely to be perceived as trustworthy where the data they provide are clearly of high quality. High-quality statistics are much more likely to provide useful answers to key questions than lower-quality statistics."                                                                                                                                                                                                                                                                                                                                                                                               |
| [The Duck Book](https://best-practice-and-impact.github.io/qa-of-code-guidance/intro.html)<br>(Government Analysis Function)                                | "Good quality analysis requires good Quality Assurance (QA)... This is true for analysis carried out using any medium, including code."<br><br>"Guarantees of quality assurance should be published alongside any report, or be taken into consideration by decision makers."                                                                                                                                                                                     | "When we do analysis it must be fit for purpose. If it isn't, we risk misinforming decisions. Bad analysis can result in harm or misallocation of public funds. As such, we must take the right steps to ensure high quality analysis."                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Government Functional Standard 10: Analysis](https://www.gov.uk/government/publications/government-analysis-functional-standard--2)<br>(Government Analysis Function)  | "Organisations should have a defined and established approach to assurance, which should be applied proportionately to the risk and value of the activity, and integrated with the organisation's overall assurance framework."                                                                                                                                                                                                                                      | "The purpose of assurance is to provide, through a systematic set of actions, confidence to senior leaders and stakeholders that work is controlled and supports safe and successful delivery of policy, strategy and objectives."                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [GSS Quality strategy](https://analysisfunction.civilservice.gov.uk/policy-store/government-statistical-service-gss-quality-strategy/)<br>(Government Statistical Service)            | "We are all responsible for the quality of statistics we produce. Quality needs to be built into the whole process and at the forefront of analysts' minds to produce high quality statistics.<br><br>"Clear quality management, structures and practices should be implemented in each department to monitor, measure and improve statistical quality and ensure all those involved in producing statistics understand how their role directly impacts on quality." | "Improving the quality of statistics across the GSS will increase trustworthiness in the statistics and in us as producers. Thereby ensuring our statistics serve the public good."                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [MacPherson Review](https://www.gov.uk/government/publications/review-of-quality-assurance-of-government-models)<br>(HM Treasury)                              | "All business critical models in government should have appropriate quality assurance of their inputs, methodology and outputs in the context of the risks their use represents."                                                                                                                                                                                                                                                                                    | "Quality assurance (QA) provides decision makers with key information about how a model works, and its risks and limitations. This is essential if a model's outputs are to be used with genuine understanding and confidence. As such, QA is a key aspect of the effective risk management of business critical models, and the decisions they help inform."                                                                                                                                                                                                                                                                                                   |

{% endcapture %}

{% include expandable-block-start.html %}
  {% include expandable-section.html number="15" content=expandable_content_15 title="How often should I be performing QA checks?" %}
  {% include expandable-section.html number="16"  content=expandable_content_16 title="How do I document that my QA is appropriate and proportionate?" %}
  {% include expandable-section.html number="17"  content=expandable_content_17 title="What guidance has the government released regarding QA?" %}
{% include expandable-block-end.html %}

## Sources

1. [Department for Education: Quality Assurance Framework](https://www.gov.uk/government/organisations/department-for-education/about/research#quality-assurance-framework)
1. [Government Analysis Function: Government Statistical Service (GSS) Quality Strategy](https://analysisfunction.civilservice.gov.uk/policy-store/government-statistical-service-gss-quality-strategy/)
1. [Government Analysis Function: Quality assurance of code for analysis and research \["The Duck Book"\]](https://best-practice-and-impact.github.io/qa-of-code-guidance/intro.html)
1. [Government Analysis Function: Quality statistics in government](https://analysisfunction.civilservice.gov.uk/policy-store/quality-statistics-in-government/)
1. [Government Analysis Function: Communicating quality, uncertainty and change](https://analysisfunction.civilservice.gov.uk/policy-store/communicating-quality-uncertainty-and-change/)
1. [Office for Statistics Regulation: Regulatory guidance - thinking about quality when producing statistics](https://osr.statisticsauthority.gov.uk/publication/regulatory-guidance-thinking-about-quality-when-producing-statistics/pages/2/)
1. [The Aqua Book: guidance on producing quality analysis for government](https://www.gov.uk/government/publications/the-aqua-book-guidance-on-producing-quality-analysis-for-government)
1. [UK Statistics Authority: Code of Practice for Statistics](https://code.statisticsauthority.gov.uk/the-code/)