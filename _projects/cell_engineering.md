---
layout: page
title: Cell engineering
description: Developments for MiME group for Force Traction Microscopy
img: assets/img/projects/cell_engineering/cell_engineering.png
importance: 3
category: Biomechanics & Applications
---

### Methodology for Identifying Cell Forces: A Computational Approach

This work introduces an innovative method for identifying the `forces exerted by cells` on surfaces, crucial in understanding `cellular interactions` with their environment. Key features of this study include:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/cell_engineering/cell_animation.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fibroblast cells analysed in the study.
</div>

- **Dual Method Approach:** Proposing both a `local` and `non-local method` for force identification. The local method assumes a rotation-free field of `surface tractions`, while the non-local approach incorporates an `intrinsic length scale`.

- **Experimental Basis for Force Identification:** Grounded in experimental observations, specifically measuring `displacements` in a material caused by cellular forces. This involves tracking `embedded beads` within the substrate.

- **Advancements Over Previous Work:** Building on prior research, enhancing the calculation of cell forces and addressing limitations of earlier methods. Employing a `finite element approach` for analyzing `heterogeneous materials`, `nonlinear behavior`, and `complex geometries`.

- **Analytical Framework:** Involves analyzing `displacements` on an arbitrary surface, different from the traction application surface. The scenario studied includes a body covered by a `stiff gel layer` over a `soft gel volume`.

- **Summary of Contributions:** Presents three main novelties: generalization for `heterogeneous materials`, development of a `non-local variant`, and a `robust solution technique`. Utilizes `hierarchical and heterogeneous approximation bases` of arbitrary order.

This work marks a significant advancement in the computational identification of `cellular forces`, offering new perspectives in `cell mechanics` and `material interactions`.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/cell_engineering/cell_forces.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/projects/cell_engineering/cell_forces_vis.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true loop=true %}
    </div>
</div>
<div class="caption">
    Visulisation of cell forces
</div>
