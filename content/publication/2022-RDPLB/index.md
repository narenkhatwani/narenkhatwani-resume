---
title: 'Arachne: An Arkouda Package for Large-Scale Graph Analytics'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Zhihui Du
  - Joseph T. Patchett
  - Fuhuan Li
  - David A. Bader

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2022-09-01T00:00:00Z'
# doi: '10.1109/HPEC49654.2021.9622860'

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

abstract: Due to the emergence of massive real-world graphs, whose sizes may extend to terabytes, new tools must be developed to enable data scientists to handle such graphs efficiently. These graphs may include social networks, computer networks, and genomes. In this paper, we propose a novel graph package, Arachne, to make large-scale graph analytics more effortless and efficient based on the open-source Arkouda framework. Arkouda has been developed to allow users to perform massively parallel computations on distributed data with an interface similar to NumPy. In this package, we developed a fundamental sparse graph data structure and then built several useful graph algorithms around our data structure to form a basic algorithmic library. Benchmarks and tools were also developed to evaluate and demonstrate the use of our graph algorithms. The graph algorithms we have implemented thus far include breadth-first search (BFS), connected components (CC), k-Truss (KT), Jaccard coefficients (JC), triangle counting (TC), and triangle centrality (TCE). Their corresponding experimental results based on realworld and synthetic graphs are presented. Arachne is organized as an Arkouda extension package and is publicly available on GitHub (https://github.com/Bears-R-Us/arkouda-njit).

# Summary. An optional shortened abstract.
# summary:

# tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Buy
#   url: https://www.taylorfrancis.com/books/edit/10.1201/9781003033707/massive-graph-analytics-david-bader

url_pdf: content/publication/2021-DRB/2022-rdplb.pdf
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
