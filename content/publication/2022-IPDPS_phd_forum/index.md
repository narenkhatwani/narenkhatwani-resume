---
title: 'Adapting Arkouda for Enabling Large Scale Graph Algorithms'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - David A. Bader

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2022-05-30T00:00:00Z'
doi: '10.1109/HPEC49654.2021.9622860'

# Schedule page publish date (NOT publication's date).
publishDate: '2022-06-01T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *International Parallel & Distributed Processing Symposium*
publication_short: In *IPDPS*

abstract: Large scale graph algorithms are required to help extract useful information from graphs. One of the main challenges arises when the size of the graph expands outside of the memory capacity that a typical computer can handle. Solutions must then be developed to allow data scientists to efficiently handle and analyze large graphs, using machines that have the capacity to handle massive graph sizes. Not only do these solutions need to be efficient, but they must also help simplify the implementation steps taken by data scientists. Arkouda is a software package under early development created with the intent to bridge the gap between massive parallel computations and data scientists wishing to perform exploratory data analysis by providing a NumPy-like interface for terabyte datasets. Arkouda is open source, and it is driven by a Python front-end with a Chapel back-end. Chapel is a programming language created by HPE and Cray to facilitate parallel program development. In this poster, we highlight the recent contributions to incorporate graph algorithms in Arkouda, their importance, the challenges that presented themselves, and future steps that need to be taken. This work can help further bridge the gap between high-performance computing (HPC) software and data science to create a framework that is straightforward for all data scientists to use. Our results show promise in using Arkouda for simplifying the interfaces required for graph analytical algorithms from conception to implementation. We especially acknowledge NSF grant number CCF-2109988 for funding this research.

# Summary. An optional shortened abstract.
# summary:

# tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Buy
#   url: https://www.taylorfrancis.com/books/edit/10.1201/9781003033707/massive-graph-analytics-david-bader

url_pdf: content/publication/2021-DRB/poster_IPDPS22.pdf
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
