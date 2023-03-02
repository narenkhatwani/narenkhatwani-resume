---
title: 'Enabling Exploratory Large Scale Graph Analytics through Arkouda'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Zhihui Du
  - admin
  - David A. Bader

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2021-09-01T00:00:00Z'
doi: '10.1109/HPEC49654.2021.9622860'

# Schedule page publish date (NOT publication's date).
publishDate: '2022-06-01T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *High Performance Extreme Computing*
publication_short: In *HPEC*

abstract: Exploratory graph analytics helps maximize the informational value from a graph. However, increasing graph sizes makes it impossible for existing popular exploratory data analysis tools to handle dozens of terabytes or even larger data sets in the memory of a common laptop/personal computer. Arkouda is a framework under early development that brings together the productivity of Python at the user-side with the high performance of Chapel at the server-side. In this paper, we present our initial work on overcoming the memory limit and high-performance computing coding roadblocks for high-level Python users to perform large graph analyses. Based on a simple and succinct graph data structure, a high-level Chapel-based graph algorithm, Breadth-First Search (BFS), is presented to show the scalable and parallel graph algorithm development method in a productive way through Arkouda. The reverse Cuthill–McKee (RCM) algorithm is implemented in Chapel to relabel the vertices of a graph as a preprocessing step to improve the performance of BFS and one low-level BFS algorithm is also developed to compare with the performance of high-level method. Both synthetic graphs and typical graph benchmarks are used to evaluate the performance of the provided graph algorithms. The experimental results show that, based on the proposed high-level algorithm framework, the performance of BFS can be improved significantly and easily by simply selecting suitable Chapel high-level data structures and parallel constructs. Our code is open source and available from GitHub (https://github.com/Bader-Research/arkouda).

# Summary. An optional shortened abstract.
# summary:

# tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Buy
#   url: https://www.taylorfrancis.com/books/edit/10.1201/9781003033707/massive-graph-analytics-david-bader

url_pdf: content/publication/2021-DRB/2021-drb.pdf
# url_code: ''
# url_dataset: ''
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: ''
# url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# image:
#   caption: ''
#   focal_point: ''
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#   -

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides:
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/). -->
