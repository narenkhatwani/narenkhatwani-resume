---
title: Interactive Large-Scale Data and Graph Analytics

event: Principles and Practice of Parallel Programming 2023
event_url: https://conf.researchr.org/home/PPoPP-2023

location:
address:
  street:
  city: Montreal
  region: Quebec
  postcode: 
  country: Canada

summary: A tutorial outlining how to use our graph algorithms for large-scale graph and data analytics.
#abstract:

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: '2023-02-26T13:20:00Z'
date_end: '2023-02-26T17:40:00Z'
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: '2017-01-01T00:00:00Z'

authors: [Oliver Alvarado Rodrigues, admin, Zhihui Du, and David Bader]
tags: [tutorial]

# Is this a featured talk? (true/false)
featured: true

image:
  caption: Arkouda + Arachne logos.
  focal_point: Center

links:
url_code: https://github.com/njit-hpc-initiative/tutorial-arkouda-njit
url_pdf: content/event/ppopp23_tutorial/proposal.pdf
# url_slides: ''
# url_video: ''

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
# slides: example

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
# projects:
#   - example
---

<!-- {{% callout note %}}
Click on the **Slides** button above to view the built-in slides feature.
{{% /callout %}}

Slides can be added in a few ways:

- **Create** slides using Wowchemy's [_Slides_](https://wowchemy.com/docs/managing-content/#create-slides) feature and link using `slides` parameter in the front matter of the talk file
- **Upload** an existing slide deck to `static/` and link using `url_slides` parameter in the front matter of the talk file
- **Embed** your slides (e.g. Google Slides) or presentation video on this page using [shortcodes](https://wowchemy.com/docs/writing-markdown-latex/).

Further event details, including [page elements](https://wowchemy.com/docs/writing-markdown-latex/) such as image galleries, can be added to the body of this page. -->
## Abstract 
<p style='text-align: justify;'>
There is an ever-growing need for data analytical tools that can handle massive data sets. Arkouda is a Python framework with a Chapel back-end created with the intention to scale NumPy operations at scale for datasets that exceeds tens of terabytes in size. The Python front-end allows for data scientists to utilize the functionality of Arkouda to carry out expensive high-performance computing (HPC) kernels that require the usage of large distributed arrays. Arkouda is not designed with the intention to totally replace libraries like Pandas or NumPy, but rather provide the capability to handle datasets that are massive in size in a highly-scalable environment. The goal is to create an environment that is beneficial for exploratory data and graph analysis (EDA) while staying simple enough for all data scientists to be able to pick up without an issue. Recently, our group at NJIT has created a new graph analysis library based off Arkouda under the name Arachne. The purpose of this tutorial is to provide a comprehensive view of typical pipelines that can be built and integrated with Arkouda. We will first begin by introducing an overview of Arkouda for and then move to Arachne. Examples will be provided with the questions and problems data scientists may want to answer and how Arkouda and Arachne can fit in to solve said problems. We will conclude with questions and further work that our group is planning for Arachne. Both Arkouda and Arachne are open-source and found on GitHub.
</p>

## Outline
1. Introduction (1:20pm - 2:00pm) [[slides]](https://github.com/njit-hpc-initiative/tutorial-arkouda-njit/blob/main/presentation_slides/introduction.pdf)
2. Data Analytics (2:00pm - 3:20pm) [[slides]](https://github.com/njit-hpc-initiative/tutorial-arkouda-njit/blob/main/presentation_slides/data_analytics.pdf) [[code]](https://github.com/njit-hpc-initiative/tutorial-arkouda-njit/tree/main/tutorial/data_analytics)
3. Break (3:20pm - 3:40pm)
4. Graph Analytics (3:40pm - 4:40pm) [[slides]](https://github.com/njit-hpc-initiative/tutorial-arkouda-njit/blob/main/presentation_slides/graph_analytics.pdf) [[code]](https://github.com/njit-hpc-initiative/tutorial-arkouda-njit/tree/main/tutorial/graph_analytics)
5. Conclusion (4:40pm - 5:00pm) [[slides]](https://github.com/njit-hpc-initiative/tutorial-arkouda-njit/blob/main/presentation_slides/conclusion.pdf)
6. General Discussion and Q&A (5:00pm - 5:40pm)

## Try it yourself! 
**Arkouda docker image:** https://github.com/Bears-R-Us/arkouda-contrib/tree/main/arkouda-docker

**Arachne installation steps:** https://github.com/alvaradoo/arkouda-contrib/tree/main/arachne

## Author Biographies
<p style='text-align: justify;'>
1. Oliver Alvarado Rodriguez - Oliver Alvarado Rodriguez is currently a computer science Ph.D. student at New Jersey Institute of Technology in Newark, NJ. He performs research under the supervision of Dr. David Bader. He received his B.S. in computer science with a minor in mathematics from William Paterson University in Wayne, NJ in May 2020 with summa cum laude honors. During his undergraduate studies, he was a member of the Honors College, a part of the Upsilon Pi Epsilon honor society for computing and information disciplines, and was also awarded the Omicron Omega award for excellence in computer science. His research interests involve the design and implementation of algorithms in the areas of high-performance analytics, machine learning, and graph theory. He has also dabbled with some cryptographical and computer security research during his undergraduate studies. He was recently awarded a best paper presentation award at the 2020 BDML/ICAIP conference for his presentation on the paper titled “A Study of Machine Learning Inference Benchmarks” done in collaboration with Dev Dave and under the tutelage of Dr. Weihua Liu and Dr. Bogong Su. Oliver recently served as the student keynote speaker at the Spring 2022 meeting of the Academic Data Science Alliance, where he presented the keynote talk: “Enabling Exploratory Large Scale Graph Analytics through Arkouda.”
</p>
<p style='text-align: justify;'>
2. Naren Khatwani - Naren Khatwani is a Graduate Student majoring in Computer Science at NJIT in Newark, NJ. He has been working under the supervision of Dr David Bader's Research Group as a Research Assistant. Naren has completed his B.E in Computer Engineering from University of Mumbai, India. His research interests lie in the domain of High Performance Computing and Data Analytics.
</p>
<p style='text-align: justify;'>
3. Zhihui Du - Zhihui Du received the BE degree in 1992 in computer department from Tianjian University. He received the MS and PhD degrees in computer science, respectively, in 1995 and 1998, from Peking University. From 1998 to 2000, he worked at Tsinghua University as a postdoctor. From 2001 to 2019, he worked at Tsinghua University as an associate professor in the Department of Computer Science and Technology. In 2008, he visited Georgia Tech for one year. His research areas include cluster system design, parallel algorithm design, task and message scheduling, resource and QoS management in grid and cloud computing. He has authored/co-authored two books, translated two books and edited three books in parallel computing or related fields. As the PI, he has finished more than 10 parallel computing related projects and published more than 100 parallel computing or related papers. As a major contributor, he designed and built the “DeepSuper- 21C” supercomputer which was included in the top500 list (Nov. 2003, Rank 163). His book on MPI programming is widely used in China in the parallel programming fields. He has served as the Vice Chair/PC member of more than 10 parallel processing or related conferences. He is an IEEE/ACM member.
</p>
<p style='text-align: justify;'>
4. David A. Bader - David A. Bader is a Distinguished Professor and founder of the Department of Data Science and inaugural Director of the Institute for Data Science at New Jersey Institute of Technology. Prior to this, he served as founding Professor and Chair of the School of Computational Science and Engineering, College of Computing, at Georgia Institute of Technology. Dr. Bader is a Fellow of the IEEE, ACM, AAAS, and SIAM, and a recipient of the IEEE Computer Society Sidney Fernbach Award. He advises the White House, most recently on the National Strategic Computing Initiative (NSCI) and Future Advanced Computing Ecosystem (FACE). Dr. Bader is a leading expert in solving global grand challenges in science, engineering, computing, and data science. His interests are at the intersection of high-performance computing and real-world applications, including cybersecurity, massive-scale analytics, and computational genomics, and he has co-authored over 300 scholarly papers and has best paper awards from ISC, IEEE HPEC, and IEEE/ACM SC.
</p>
