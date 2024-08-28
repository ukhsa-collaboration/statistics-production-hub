---
title: "Creating clear and accessible spreadsheets"
layout: guidance-page
---


> ## Main messages
> - Before publishing a spreadsheet of data (including as a supplementary table to a written report), consider why you are publishing it and what the best format for it might be.
> - Where users will want to open, view and read the contents of a spreadsheet in a manual fashion (rather than only wanting to read the data into analytical software), that data should be presented in an accessible ODS spreadsheet file.
> - The accessibility of a spreadsheet should be considered at each level, from the overall workbook down to individual cells where special formatting might be needed. 

{% include sources-text.md %}



## Accessibility and different publication formats

### Why is accessibility important?

Accessibility means making content clear and easy to find, access, use and understand, for people of all access needs and abilities. Good accessibility brings benefits to all users, improving the quality and value of our statistics, and the trust users have in us as an organisation. It is particularly important for people with disabilities, remembering that [20% of the working-age population report having a disability](https://www.gov.uk/government/statistics/the-employment-of-disabled-people-2021/the-employment-of-disabled-people-2021#:~:text=1%20in%205%20of%20the%20working%2Dage%20population%20are%20classed%20as%20disabled,-Figure%203a%3A%20Proportion&text=Source%3A%20Annual%20Population%20Survey%20%E2%80%93%20data,to%20question%201%20(see%20below)).

For public bodies, making online content accessible is also now mandated by law. [The Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/852/contents/made), building on the [Equality Act 2010](https://www.legislation.gov.uk/ukpga/2010/15/contents), requires that all content published online by public bodies must be accessible in ways that make them “perceivable, operable, understandable and robust”. In the [Code of Practice for Statistics](https://code.statisticsauthority.gov.uk/the-code/), there is a similar requirement that data and related guidance should be easily accessible to users, considering the needs of a range of users, using accessible communication formats.


### Publication formats

There are 3 main types of tables that might be produced, each of which lend themselves to different publication formats. You should first consider which of these formats are the most appropriate for what you are trying to achieve through the presentation of your data.

{% capture card_content_1 %}
These are used to help make or reinforce a particular point in a clear and simple way. They are best placed in the body of a report so that users can access the information quickly, and do not need to leave the page to find it.
{% endcapture %}

{% capture card_content_2 %}
These are used to provide more detailed data for users to see, at a level that might be too much for including in the body of a report. They should be provided alongside a report in an accessible ODS spreadsheet format.
{% endcapture %}

{% capture card_content_3 %}
These are specifically used to allow users to carry out more detailed analyses of their own on the data, or for merging with other datasets. They are best provided in a CSV spreadsheet format that is optimised for machine readability, for example, to load into R or Python.
{% endcapture %}


{% include cards-container-start.html %}
  {% include card.html content=card_content_1 title="Demonstration tables" %}
  {% include card.html content=card_content_2 title="Reference tables" %}
  {% include card.html content=card_content_3 title="Machine readable datasets" %}
{% include cards-container-end.html %}


It is important to further note the distinction between reference tables and machine readable datasets, and their different accessibility requirements. Specifically:

* wherever you might expect users to want to open, view and read the contents of a spreadsheet in a manual fashion, you should provide that spreadsheet in an accessible ODS format (open formats such as ODS do not rely on users having access to specific software such as Excel)
* where you would only expect users to want to load your spreadsheet into analytical software for more detailed analysis, or to combine it with other datasets, accessibility legislation does not apply; in those cases, CSV files can be used, accompanied by a JSON metadata file for information about the data
* in some cases, you may need to provide both file formats (ODS and CSV), to offer one version that is accessible for users to view the contents, and one version that is optimised for machine readability; we would advise, however, that this approach should be taken only when a CSV file is a key user need as it can cause version control issues and complicate the user journey when the same information is presented in two different formats

XLS and XLSX files should be avoided in all cases as they are neither as accessible as ODS files nor as optimised for machine readability as CSV files.

Note that while machine readable datasets are not subject to accessibility legislation, this does not mean that you should ignore usability. Equally, when presenting data in ODS format, you should still try to bear good machine readability in mind, so that users can load your data into analytical software should they wish to do so.


## Detailed guidance for accessible reference tables

The main focus of the current guidance is on reference tables as those will be used for most statistical releases.

The guidance in this section is derived from multiple sources which contain more detail than that presented here. In particular, see:

- [the Government Analysis Function guidance on releasing data in spreadsheets](https://analysisfunction.civilservice.gov.uk/policy-store/releasing-statistics-in-spreadsheets/)
- [the Government Analysis Function guidance on using symbols and shorthand](https://analysisfunction.civilservice.gov.uk/policy-store/symbols-in-tables-definitions-and-help/)
- [the Office for National Statistics guidance on accessibility](https://style.ons.gov.uk/category/accessibility/)
- [the Central Digital and Data Office guidance on creating and sharing spreadsheets](https://www.gov.uk/guidance/creating-and-sharing-spreadsheets)

Note that we will only focus on the more common issues we tend to observe and the citations provided may help you find more exhaustive advice. UKHSA colleagues can contact us via <UKHSA_HOPSTATS@ukhsa.gov.uk> for any specific questions not answered here.

Many of the same principles presented here will also apply to demonstration tables found within reports and to machine-readable datasets. UKHSA colleagues can again contact us for advice on these if needed. 

For an example of what an accessible reference table workbook might look like, click the download button below. ([The Government Analysis Function have also provided examples of their own](https://analysisfunction.civilservice.gov.uk/policy-store/releasing-statistics-in-spreadsheets/#section-10).)


<button class="download-button" onclick="location.href='https://github.com/ukhsa-collaboration/statistics-production-hub/raw/main/docs/assets/downloads/Accessible%20workbook%20example.ods'" type="button">Download example accessible workbook</button>


In the sections to follow, we give detailed guidance on what you need to do to make a spreadsheet accessible. In each sub-section, a checklist of key points is provided first. More detailed information is then given beneath each checklist to explain each point.


### Tools for automating accessibility

Some tools have been developed that can help automate the production of accessible reference tables, such as the ‘[a11ytables](https://co-analysis.github.io/a11ytables/)’ (accessibility tables) package for R, and the ‘[gptables](https://github.com/best-practice-and-impact/gptables)’ (good practice tables) package for Python. Both have been produced by the Government Analysis Function. These are not intended to produce perfectly accessible tables, so do still require human input and review, but they may help automate many of the required features, in line with the principles of [Reproducible Analytical Pipelines (RAP)](rap).

For UKHSA colleagues wanting support on implementing these packages, please contact <UKHSA_HOPSTATS@ukhsa.gov.uk>.


### Formatting a workbook

#### Checklist

A workbook is a file that contains multiple worksheets (tabs). Every workbook should:

- be provided in an ODS file format
- include clear and useful document metadata
- provide a cover sheet containing information about the data
- avoid the use of images such as charts
- not have any floating text boxes



{% capture expandable_content_1 %}
Reference tables, particularly those for publication on GOV.UK should be presented in an ODS file. This is so that specific software is not needed to open them, which can be a barrier to some users.

You can produce an ODS file from Excel via “File” and “Save As”, then choose “OpenDocument Spreadsheet (*.ods)“.
{% endcapture %}

{% capture expandable_content_2 %}
Providing clear and useful metadata helps users to find your content via search engines, which use this information to rank search results.

To edit metadata in Excel, you should go to “File”, “Info”, “Properties” (on the upper right hand side of the screen), “Advanced properties”.

Under “Summary”, you should add:

- the correct document title in the “Title” box
- your organisation (for example, “UKHSA”) in the “Author” box (avoid using names of individuals)
- The full title, then keywords from the title and subject matter separated by commas, in the “Keywords” box
{% endcapture %}

{% capture expandable_content_3 %}
A cover sheet is important as it helps convey information about the data to users.

All cover sheet content should be kept in Column A, not in a floating text box or in other columns, for good accessibility.

Cover sheets should include:

- the document title
- a brief summary of contents including links to a report or other background information
- a table of contents (with hyperlinks to other tabs)
- your organisation and contact details
- version information (if applicable)
- a publication date

Other information might also be given. For example, notes might be included to explain the data source and any caveats or other important information. Notes should explain any shorthand used throughout the workbook, although any shorthand used in specific tables may be best explained on those tabs instead.
{% endcapture %}

{% capture expandable_content_4 %}
Avoid including images in spreadsheets as they can complicate navigation for some users of assistive technologies. If charts are needed, they are best placed in a separate report document. Departmental logos are usually not needed as departmental names can be stated in text instead.
{% endcapture %}

{% capture expandable_content_5 %}
Screen reader software often cannot access content inside text boxes so these should not be used. Instead, keep all content within spreadsheet cells. 
{% endcapture %}


{% include expandable-block-start.html %}
  {% include expandable-section.html number="1" content=expandable_content_1 title="Provide workbooks in an ODS file format" %}
  {% include expandable-section.html number="2"  content=expandable_content_2 title="Include clear and useful document metadata" %}
  {% include expandable-section.html number="3" content=expandable_content_3 title="Provide a cover sheet" %}
  {% include expandable-section.html number="4"  content=expandable_content_4 title="Avoid the use of images such as charts" %}
  {% include expandable-section.html number="5" content=expandable_content_5 title="Do not have any floating text boxes" %}
{% include expandable-block-end.html %}



### Formatting worksheets within workbooks

#### Checklist

By worksheet, we mean each tab of a workbook. Every worksheet should:

- have a descriptive tab name
- have a descriptive title, and subtitle if needed
- contain any notes and explanations of shorthand above the table(s)
- have only one table, or otherwise be clear how many tables there are
- not use blank rows or columns for separation
- not have “freeze panes” enabled
- avoid anything beneath the table


{% capture expandable_content_6 %}
Tabs should be named to give some indication of their content for easier navigation. For example, “Table_1_Infections_by_age”.
{% endcapture %}

{% capture expandable_content_7 %}
Having a descriptive title and subtitle helps the user quickly understand the content.

Screen readers usually navigate down Column A first so everything a user needs to know should be in Column A. Cell A1 should therefore be the table title; Cell A2 should contain the subtitle where needed.
{% endcapture %}

{% capture expandable_content_8 %}
Notes can be used to give more information about the data. Shorthand might also need to be explained, including what the shorthand looks like and where to find it in the table.

It is important that this information is presented in Column A only, and notes should always be above the table to ensure that they are not missed (which can easily happen if they are presented beneath a table, particularly a long one). Each subsequent note should be on a new row.

Where the same notes apply to multiple tabs, you may decide to explain those notes either on the cover sheet or a separate notes tab instead of above each individual table. If you do this, you should still explain above each table where explanations of notes can be found. For example: "Some cells refer to notes. An explanation of these can be found on the separate notes tab." It is best not to add hyperlinks when doing this as it can get annoying for the user when those hyperlinks are accidentally triggered, especially when your workbook contains multiple tabs. 
{% endcapture %}

{% capture expandable_content_9 %}
Ideally, each worksheet should only have one table as this makes the content very clear for users (additional tables might be missed) and having a single table per tab is also better for machine readability.

However, there may be cases where multiple tables per worksheet might be needed, such as when tables are strongly grouped or where there would otherwise be a large number of tabs in the workbook. In those cases, you should give a worksheet title describing the tables contained within the sheet, with “This worksheet contains 3 tables” (for example) in Column A, immediately beneath the title and subtitle. Each table should then be given a separate table number of “Table 1a”, “Table 1b”, and so on (noting that a descriptive title should also be given for each).
{% endcapture %}

{% capture expandable_content_10 %}
Remove all blank rows or columns as they can make a spreadsheet difficult to navigate. If you want to create separation between elements, instead adjust the row height or column width, and then re-align the text as necessary to achieve the desired visual separation.
{% endcapture %}

{% capture expandable_content_11 %}
Do not freeze rows and columns as this can limit the amount of usable space the user has to navigate the content. This can be a particular issue for users who need to zoom in a lot, or for those using mobile devices with smaller screens. 

Note that freeze panes also disappear when saving as an ODS file, which is the recommended file format.
{% endcapture %}

{% capture expandable_content_12 %}
All content should be kept within or above the table, not below it. This is because content beneath a table (such as notes) can be easily missed. See the section above on notes and multiple tables above for more information.
{% endcapture %}


{% include expandable-block-start.html %}
  {% include expandable-section.html number="6" content=expandable_content_6 title="Have a descriptive tab name" %}
  {% include expandable-section.html number="7"  content=expandable_content_7 title="Have a descriptive title, and subtitle if needed" %}
  {% include expandable-section.html number="8" content=expandable_content_8 title="Contain any notes and explanations of shorthand above the table(s)" %}
  {% include expandable-section.html number="9"  content=expandable_content_9 title="Have only one table, or otherwise be clear how many tables there are" %}
  {% include expandable-section.html number="10" content=expandable_content_10 title="Do not use blank rows or columns for separation" %}
  {% include expandable-section.html number="11"  content=expandable_content_11 title="Do not have “freeze panes” enabled" %}
  {% include expandable-section.html number="12" content=expandable_content_12 title="Avoid anything beneath the table" %}
{% include expandable-block-end.html %}



### Formatting tables within worksheets

#### Checklist

By table, we mean the group of cells containing data, including the header row. Every table should:

- be marked up as a table
- have a meaningful name in the table meta information
- have only one header row, with a title in every cell, in bold font
- not have split or merged cells, blank rows or columns, or hidden rows or columns
- be presented in long format in preference to wide format
- avoid very wide columns and wrap text for narrower columns so that it does not get cut off
- left align cells containing text; right align cells containing numbers
- avoid macros
- present rows in a logical order, such as alphabetically or ordinally
- carry out and include relevant calculations for the user, such as totals and percentage changes
- not use colour as the only way to communicate information
- not have filter options enabled
- avoid presenting totals in the middle of a table (for example, after each group)



{% capture expandable_content_13 %}
‘Marking up’ tables is essential for users of assistive technologies as it helps them navigate the content. Defining the header row enables the software to read out the column header alongside each data point, which again helps with navigation.

You can tell a table has already been marked up when the “Table design” tab appears in the ribbon after selecting a table cell.

To mark up a table in Excel:

1. Highlight the table you need to mark up.
2. Press Ctrl + T.
3. Make sure “My table has headers” is ticked and press OK.
4. Select a table cell.
5. On the Table Design tab, apply the “None” table style for plain formatting.
6. On the Data tab, deselect “Filter” to remove the filter arrows (these can obstruct content).
{% endcapture %}

{% capture expandable_content_14 %}
Giving a meaningful name here can help with navigation, particularly for users of assistive technologies.

In Excel, you can name a table by clicking on a table cell and then “Table Design” in the ribbon (after marking up the table; see the section above). You will then see a “Table Name” property.

Note that words need to be separated by an underscore here, as spaces are not allowed. For example: "Table_1_Infections_by_age".
{% endcapture %}

{% capture expandable_content_15 %}
Because the above navigation features only work on a single header row, it is important not to have any secondary header rows. These also cause complications for machine readability.

Where needed, multiple pieces of header information can be combined into a single row through the use of colons. For example, “Heading level 1: Heading level 2”.

Ensuring that every column has a heading is important for accessibility and usability. Bold text helps the header row stand out from the rest of the table.
{% endcapture %}

{% capture expandable_content_16 %}
Having blank rows or columns, or split or merged cells in a table is bad for accessibility as it makes the content harder to navigate, particularly for users of assistive technologies but also for other users as well (for example, those wishing to load your data into analytical software).

If you wish to apply some visual separation between rows or columns, you should instead adjust the row height or column width, changing the text alignment as appropriate.

For similar reasons, you should also avoid hidden rows or columns as these can cause confusion for all users.
{% endcapture %}

{% capture expandable_content_17 %}
A tall narrower table tends to be easier to read and navigate compared to a short wider one. This is because users usually find it easier to scroll down content, rather than scrolling across, particularly on mobile devices.
{% endcapture %}

{% capture expandable_content_18 %}
Keeping columns relatively narrow also makes it easier to navigate the content by cutting down on the need for horizontal scrolling. You should, however, ensure that no text is hidden from users by being cut off in a narrow column. You can wrap text to avoid this.
{% endcapture %}

{% capture expandable_content_19 %}
Right aligning numerical columns helps users more quickly identify different sized numbers as the tens, hundreds, thousands and units are on top of one another. This is particularly important when negative numbers are present, as these do not follow this pattern when left aligned.
{% endcapture %}

{% capture expandable_content_20 %}
Macros in spreadsheets might be difficult to access for certain users, such as those relying on assistive technologies and those that only use a keyboard. Macros can also be confusing for any user when it is not clear how they work. It is therefore best to avoid these, providing static tables instead. 

An online interactive dashboard can be used if the interactivity is important.
{% endcapture %}

{% capture expandable_content_21 %}
Columns and rows should be presented in a logical order, for example alphabetically or ordinally. This allows users to find the information they need quickly.
{% endcapture %}

{% capture expandable_content_22 %}
Performing calculations such as totals, averages and percentage changes for the user prevents them from having to do it (and potentially making errors in the process).
{% endcapture %}

{% capture expandable_content_23 %}
The use of colour to communicate information can be difficult or impossible to access for some users with visual impairments, so should be avoided. 

Colour can be used for emphasis (for example, to highlight cells affected by notes), so long as the colour contrast is good and users do not need to rely on colour alone to access the information being conveyed by the colour. For example, when presenting a coloured heatmap, numerical values should also be presented within each cell. 
{% endcapture %}

{% capture expandable_content_24 %}
Enabling filter dropdown options can obscure content in the header row. It is therefore best to disable these by default. The user can always enable filtering themselves if they wish.
{% endcapture %}

{% capture expandable_content_25 %}
Total rows should not be presented in the middle of a table. This is because they can be easily passed over by the user and might be accidentally included when calculating column totals, for example.
{% endcapture %}


{% include expandable-block-start.html %}
  {% include expandable-section.html number="13" content=expandable_content_13 title="Mark up each table" %}
  {% include expandable-section.html number="14"  content=expandable_content_14 title="Have a meaningful name in the table meta information" %}
  {% include expandable-section.html number="15"  content=expandable_content_15 title="Have only 1 header row, with a title in every cell, in bold font" %}
  {% include expandable-section.html number="16"  content=expandable_content_16 title="Do not have split or merged cells, blank rows or columns, or hidden rows or columns" %}
  {% include expandable-section.html number="17"  content=expandable_content_17 title="Present tables in long format in preference to wide format" %}
  {% include expandable-section.html number="18"  content=expandable_content_18 title="Avoid very wide columns and wrap text for narrower columns so that it does not get cut off" %}
  {% include expandable-section.html number="19"  content=expandable_content_19 title="Left align cells containing text; right align cells containing numbers" %}
  {% include expandable-section.html number="20"  content=expandable_content_20 title="Avoid macros" %}
  {% include expandable-section.html number="21"  content=expandable_content_21 title="Present rows in a logical order" %}
  {% include expandable-section.html number="22"  content=expandable_content_22 title="Carry out and include relevant calculations for the user, such as totals and percentage changes" %}
  {% include expandable-section.html number="23"  content=expandable_content_23 title="Do not use colour as the only way to communicate information" %}
  {% include expandable-section.html number="24"  content=expandable_content_24 title="Do not have filter options enabled" %}
  {% include expandable-section.html number="25"  content=expandable_content_25 title="Avoid presenting totals in the middle of a table (for example, after each group)" %}
{% include expandable-block-end.html %}




### Formatting cells within tables

#### Checklist

Some formatting requirements may apply to individual cell contents. Cells should:

- only contain numbers in numerical columns (except to say that a number is not applicable, not available or has been suppressed)
- only communicate a single number in each cell
- avoid the use of symbols for shorthand
- comma separate numbers in the thousands
- precede decimals of less than 1 with a zero


{% capture expandable_content_26 %}
Ensuring that numerical columns do not contain non-numeric characters helps ensure that the data is machine readable and that any calculations performed on that column are done so correctly.

Where a cell contains any characters or symbols (for example, a number with an asterisk), that cell will usually be omitted when a user tries to sum that column, or calculate an average, leading to incorrect results. Any notes relating to specific cells should instead be provided above the table, or in a separate “notes” column, alongside but separate to the numerical data column.

Shorthand used to denote an omission (for example, due to [missing data](missing-data), or because a value has been suppressed to protect confidentiality) is acceptable within numerical columns. This is because those cells would not need to be included in any calculations. 
{% endcapture %}

{% capture expandable_content_27 %}
If you are presenting multiple numbers, such as a value followed by its upper and lower confidence interval limits, it is best to place each of these numbers in separate columns. This helps to avoid any confusion as to what the numbers mean but more importantly it enables better machine-readability, removing the need for the user to try and separate out the different numbers through code.

(See our separate guidance on [communicating uncertainty](communicating-uncertainty).)
{% endcapture %}

{% capture expandable_content_28 %}
Symbols, such as asterisks, and superscript text, often go against accessibility requirements. This is because symbols are often skipped over by assistive technologies such as screen-reader software, and asterisks and superscript text can be difficult to see for people with visual impairments. Symbols can also be confusing for all users when their meaning is not made clear. 

Instead of symbols, letters or short words within square brackets should be used, such as “[x]” or “[note 1]”. Where multiple notes need to be referenced, they should be presented in their own brackets as “[note 1][note 2]”, rather than “[note 1,2]”, as this is better for machine readability and it is less likely that users may skim over the fact that 2 notes have been given. 

Widely recognised unit markers such ‘%’ and ‘£’ may be acceptable for accessibility as they are recognised by most assistive technologies. However, it may be better to present unit information within the column header rather than against each value, so as to not affect the machine readability of numerical columns.

[The Government Analysis Function has suggested the following shorthand for common use cases](https://analysisfunction.civilservice.gov.uk/policy-store/symbols-in-tables-definitions-and-help/):

- \[c\] = confidential (for example, when suppressing values for statistical disclosure control)
- \[e\] = estimated
- \[k\] = zero when rounded (for example, when rounding down values to zero, to separate these values from true zero)
- \[x\] = not available
- \[z\] = not applicable

Numerals can be added to make more notes of the same type. For example, if 2 cells were estimated for different reasons, you can present “[e1]” and “[e2]”, with the differences explained above the table or on the coversheet.

Note that “[NA]” is discouraged as it is ambiguous: it could mean not applicable or not available.

Academics often use asterisks to denote statistical significance but these are not accessible for the reasons already explained. Instead, it is recommended to either state significance in words (“Significant at 0.001 level”), or to use accessible shorthand as follows (from the same Government Analysis Function guidance on use of shorthand):

- [ns] = not statistically significant
- [s] = significant to 0.05 level
- [ss] = significant to 0.01 level
- [sss] = significant to 0.001 level

Using consistent shorthand across all of our publications is a good thing because it increases understanding, makes it easier to compare different datasets, reduces risks of misinterpretation, and helps improve accessibility. Each of these points make for better and more efficient product for the user.

It is best to provide shorthand alongside table titles, column headers, row labels or in a separate notes column. They should not be in numerical cells as those values would then be ignored in any calculations performed by the user, unless they denote a missing value. Where notes or other shorthand apply to the whole table, or entire columns or rows, they can be explained above the table, or on the cover sheet or a separate notes sheet if they apply to multiple tables. Where they apply only to specific cells, they can be explained in a separate “notes” column next to the numerical column, containing text such as, “[note 1]: For cells A5 and B5, note that…”.
{% endcapture %}

{% capture expandable_content_29 %}
Comma separating numbers in the thousands is advised because it helps the user to more quickly identify differently sized numbers.
{% endcapture %}

{% capture expandable_content_30 %}
Preceding decimals with a 0 makes it clear that these are decimal values. Otherwise, users may miss the decimal point, misinterpreting them as integer values.
{% endcapture %}


{% include expandable-block-start.html %}
  {% include expandable-section.html number="26"  content=expandable_content_26 title="Only contain numbers in numerical columns (except to say that a number is not applicable, not available or has been suppressed)" %}
  {% include expandable-section.html number="27"  content=expandable_content_27 title="Only communicate a single number in each cell" %}
  {% include expandable-section.html number="28"  content=expandable_content_28 title="Avoid the use of symbols for shorthand" %}
  {% include expandable-section.html number="29"  content=expandable_content_29 title="Comma separate numbers in the thousands" %}
  {% include expandable-section.html number="30"  content=expandable_content_30 title="Precede decimals of less than 1 with a zero" %}
{% include expandable-block-end.html %}




## Sources

1. [Central Digital and Data Office: Creating and sharing spreadsheets](https://www.gov.uk/guidance/creating-and-sharing-spreadsheets)
1. [Central Digital and Data Office: Record information about data sets you share with others](https://www.gov.uk/guidance/record-information-about-data-sets-you-share-with-others#where-to-record-and-store-your-metadata)
1. [Central Digital and Data Office: Tabular data standard](https://www.gov.uk/government/publications/recommended-open-standards-for-government/tabular-data-standard)
1. [Central Digital and Data Office: Understanding accessibility requirements for public sector bodies](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps)
1. [Equality Act 2010](https://www.legislation.gov.uk/ukpga/2010/15/contents)
1. [Government Analysis Function: Making analytical publications accessible](https://analysisfunction.civilservice.gov.uk/policy-store/making-analytical-publications-accessible/)
1. [Government Analysis Function: Releasing statistics in spreadsheets](https://analysisfunction.civilservice.gov.uk/policy-store/releasing-statistics-in-spreadsheets/)
1. [Government Analysis Function: Using symbols and shorthand](https://analysisfunction.civilservice.gov.uk/policy-store/symbols-in-tables-definitions-and-help/)
1. [GOV.UK: Content design: planning, writing and managing content](https://www.gov.uk/guidance/content-design/tables)
1. [ODI Leeds: Open data tips](https://github.com/odileeds/open-data-tips)
1. [Office for National Statistics: Accessibility](https://style.ons.gov.uk/category/accessibility/)
1. [The Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/852/contents/made)
1. [UK Statistics Authority: Code of Practice for Statistics](https://code.statisticsauthority.gov.uk/the-code/)