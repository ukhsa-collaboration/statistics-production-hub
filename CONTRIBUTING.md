## Contributing instructions

We welcome contributions to our guidance or other resources. If you would like to suggest a change, please either [raise an issue](https://github.com/ukhsa-collaboration/statistics-production-hub/issues), [email us](<mailto:UKHSA_HOPSTATS@ukhsa.gov.uk?subject=Statistics Production Hub>) or raise a pull request. 

The sections below describe the setup of this repository and how to reproduce some of the markdown features used within the guidance pages. 


### Interacting with this repository

#### Cloning the repository

In a new folder, using GitBash (or equivalent), run the following code:

```
git clone https://github.com/ukhsa-collaboration/statistics-production-hub
```

Open the .Rproj file to interact with the contents. You should not need to set any remotes for push/pull operations.

Remember to run `git pull` regularly to keep up to date with the main branch. 

#### Branching

The 'main' branch is protected, meaning you will have to create a new branch to make any changes. 

To do this, on your local machine, first update your 'main' branch using `git pull`. Then run `git checkout -b branch-name` to create and switch to a new branch. You can switch between branches (for example, to work on different fixes) by using `git checkout branch-name`. 

Branch names should be short but descriptive, with each word separated by a hyphen. Author initials should be added to the prefix. For example: `"bc-update-data-vis"`.

Use `git add` and `git commit -m "a clear descriptive commit message"` as usual to stage and commit your changes. 

Once you have finished making your changes, push your branch to GitHub (using `git push` - it may give you instructions for setting an upstream branch). Then log in to GitHub and raise a pull request to have your changes reviewed and merged into 'main'. 


## Building websites with Jekyll and GitHub

[See a useful resource for working with Jekyll in GitHub here](https://carpentries-incubator.github.io/jekyll-pages-novice/). 

### Folder and file structure
The root folder can be used to store any non-website content. 

Anything contained within `docs` is used to render the live site (this can be changed if needed via GitHub > Settings > Pages). 

Individual pages should be contained within the `docs` folder (not in sub-folders), and in .md format. 

The `_includes` folder is used to store .html/.js snippets to be inserted into other files via Liquid commands (for example, `{% include site-nav.html %}`).

The `_layouts` folder is used to store larger template files. 

The `assets` folder is used to store .css stylesheets and images. 

The `_config.yml` file can be used to store sitewide values. These are then inserted to other pages via Liquid commands (for example, `{{ site.email }}`). 

### Creating direct download links for files
Direct download links are used for files such as the QA review conversation tool. 

To get a link:
1. Navigate to the file in the assets/downloads folder in GitHub (click on the actual file).
2. Right-click "Raw", and "Copy link address".
3. Paste that URL into your markdown file, formatting as with any other link. 

### Markdown commands used in this site
Most of what goes into the .md files will be standard markdown. Some other code is custom built for this site, relying on scripts found within the `_includes` folder.

The features used within this site can be replicated as follows.

#### Block quotes

Add an arrow (">") to the start of each line. You can use other markdown tags (headers, bullets) within this. 

```
> ## Main messages
>
> - Message 1
> - Message 2
> - Message 3
```

#### Expandable sections

First include the hidden content within a 'capture' block like below. 

Make sure to add a unique number to the end of each block title. Numbers should be unique across all expandable blocks in the whole document. 

```
{% capture expandable_content_1 %}
Content goes here, written in normal markdown.
{% endcapture %}

{% capture expandable_content_2 %}
This is a second expandable section.
{% endcapture %}
```

Then you can use the following code to include expandable sections with the appropriate titles. 

The 'block-start' and 'block-end' lines are needed for styling. 

The parameter given in 'content' should match the title of the relevant capture block declared above. 

Be careful to use a unique number in each line (numbers should also be unique within the entire markdown file). The title will display within the button used to expand the section. 

```
{% include expandable-block-start.html %}
  {% include expandable-section.html number="1" content=expandable_content_1 title="This is the first title" %}
  {% include expandable-section.html number="2"  content=expandable_content_2 title="This is the second title" %}
{% include expandable-block-end.html %}

```


#### Code blocks
````
```
Code block
line 2
line 3
```
````


#### Images

To add images to a page, first add the file to the `docs/assets/img/` folder.

Then link using the following code, adding the correct filepath and alt-text:

`<img src="assets/img/laptophands.jpg" alt="A picture of a person working at a laptop">`


##### Image and text side-by-side
If you want to have an image next to some text, you can do that using the code below. 

Note that you should specify the image width and height. 


```
<div class="image-text-container">
    <img src="assets/img/image.png" width="460px" height="318px" alt="provide some alternative text here">
    <p>The text goes here</p>
</div>
```

#### Title+content cards (like the ones found in the QA guidance)

First include the card content within a 'capture' block like below. 

Make sure to add a unique number to the end of each block title. Numbers should be unique across all cards in the whole document. 

```
{% capture card_content_1 %}
Content goes here, written in normal markdown.
{% endcapture %}

{% capture card_content_2 %}
This is content for a second card.
{% endcapture %}
```

Then you can use the following code to include cards with the appropriate titles. 

The 'container-start' and 'container-end' lines are needed for styling. 

The parameter given in 'content' should match the title of the relevant capture block declared above. 

```
{% include cards-container-start.html %}
  {% include card.html content=card_content_1 title="This is the first title" %}
  {% include card.html content=card_content_2 title="This is the second title" %}
{% include cards-container-end.html %}

```


### Setting up a local testing environment
Unless you set up a local testing environment, the only way to see what your changes will look like is to push them to main and have GitHub rebuild the live site. This obviously comes with inherent risks. 

[Follow this guide](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).

First, you will need to install Ruby. Then run `gem install bundler` to install the bundler gem. Getting this to work around permission restrictions can be difficult. You should get in touch with your IT department to support with this, and ChatGPT can also be your friend in understanding how to get around certain error messages! 

Once you have managed to install Ruby and the Bundler gem, you should create a Gemfile and add it to your project (you can copy the example in the root of this project). Then run `bundler install` in your terminal. Make sure to run `bundler update github-pages` on a semi-regular basis, otherwise your local testing environment might look different to the published version.

To create the locally hosted site, navigate to the 'docs' folder in GitBash (for example, using `cd docs`), then run the following command: `bundler exec jekyll serve`. This will give a server address; navigate there to see your site.  
