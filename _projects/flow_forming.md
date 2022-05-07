---
layout: page
title: Flow forming
description: An integrated framework for fundamental understanding and process optimisation
img: assets/img/main_projects/proper_flow_forming.png
importance: 1
category: main
---

[Good markdown  reference](https://gist.github.com/roachhd/779fa77e9b90fe945b0c)
<!-- cheatsheet markdown -->

In this project supported by EPSRC ([EP/T008415/1](https://gow.epsrc.ukri.org/NGBOViewGrant.aspx?GrantRef=EP/T008415/1))  I am building predictive models for Incremental Cold Flow Forming (ICFF) - a metal forming process for the production of high-quality, rotationally-symmetric, hollow engineering components as widely utilised by the aerospace, automotive and oil and gas sectors.

<a href="{{ site.baseurl }}/assets/pdf/case_for_support_ICCF.pdf">PDF to proposal</a>
<a href="{{ site.url }}/al-folio/assets/pdf/case_for_support_ICCF.pdf">PDF to proposal</a>

Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

<iframe width="560"
        height="315"
        src="https://www.youtube.com/embed/581MZC-hW0k"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen></iframe>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/main_projects/flow_forming/gif_test.gif" url="http://jekyllrb.com" title="example image" class="img-fluid rounded z-depth-1" zoomable=false %}
    </div>
</div>
<div class="caption">
    This is a test gif caption.
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/main_projects/flow_forming/gif_test.gif" title="example image" class="img-fluid rounded z-depth-1" zoomable=true caption="testing Jekyll caption" %}
    </div>
</div>


<!-- [<img src="https://img.youtube.com/vi/581MZC-hW0k/maxresdefault.jpg" width="50%">](https://youtu.be/581MZC-hW0k) -->

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, *bled* for your project, and then... you reveal it's glory in the next row of images.


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}
```html
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
```
{% endraw %}
