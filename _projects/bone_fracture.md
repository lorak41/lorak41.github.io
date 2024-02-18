---
layout: page
title: bone remodeling & fracture
description: Advancing equine fracture risk prediction
img: assets/img/projects/bones/better_bone.png
importance: 1
category: Biomechanics & Applications
related_publications: true
---

Quick overview of the research:

<div style="position: relative; width: 100%; padding-top: 56.25%;">
    <iframe 
        src="https://www.youtube.com/embed/HNOs08Hmigg" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen>
    </iframe>
</div>

---

In this PhD project, a computational tool assessing `fracture risk` in horse racing, specifically targeting `metacarpal bone fractures`, has been developed {% cite lewandowski2020thesis lewandowski2021computational lewandowski2020numerical karol2019conf %}.

**Development of Computational Tools:** Implementation of `finite element models`, using state-of-the-art imaging (`CT scans`) and `segmentation algorithms`, enables accurate simulation of `bone remodeling` under specific loads. This aids in assessing the `fracture resistance` of equine metacarpal bones, a critical aspect in preventing racing injuries.

**Accurate Bone Representation:** Utilizing advanced `numerical analysis techniques`, including `Moving Weighted Least Squares approximation` and `L2-projection`, the research accurately captures the complex `geometry` and `material properties` of bones. This precise representation is fundamental in assessing `fracture risks` and understanding bone behavior under stress.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/bones/mwls_procedure.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Procedure of mapping CT-data using MWLS.
</div>

**Simulation of Bone Adaptation:** The research introduces a novel `finite element method` to simulate `adaptive bone changes`, rooted in the `thermodynamics of open systems`. This approach has shown promising potential in accurately simulating long-term bone responses to various training conditions, significantly impacting treatment strategies for `bone implants`.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/bones/bone_implant2.png" class="img-fluid rounded z-depth-1" zoomable=false %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/bones/mc3_remodel-ezgif.com-optimize.gif" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example results for bone remodelling of proximal femur with an implant and equine metacarpal, a phenomenological model utilised in the study
</div>

**Fracture Risk Assessment:** A critical part of the research involved comparing two approaches for `crack propagation analysis`: `smeared phase-field` and `discrete configurational mechanics`. This comparison revealed the capabilities and limitations of each method in predicting `crack paths` in heterogeneous bodies, highlighting the phase-field’s relative inefficiency due to finer `mesh requirements`.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/bones/bone_fracture_heterogeneous.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Assesing fracture propoensity of bones with heterogeneous material properties using fracture mechanics
</div>

**Validation and Implications:** Through rigorous `numerical simulations`, including studies on equine metacarpal bones, the research validated the effectiveness of the developed framework. It demonstrated how `bone adaptation history` and `density distribution` critically influence `fracture resistance` and `crack paths`. These insights provide a novel framework for simulating changes in bone structure in response to exercise and quantifying `fracture likelihood`.

---