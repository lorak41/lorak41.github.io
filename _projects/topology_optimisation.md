---
layout: page
title: Topology optimisation
description: MoFEM topology optimisation
img: assets/img/projects/topology/topology_1.png
importance: 7
category: Visualisation & Simulation Tools
---

## Advancements in Topology Optimization 
### Implementing `SIMP` Algorithm with Anisotropic Filtering

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/topology/image_cantilever.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Optimised shape of a cantiliever beam.
</div>

`Topology optimization` is a key mathematical method used in optimizing material distribution within a given domain to enhance structural performance. This research contributes to the field through:

- **Overview of Topology Optimization:** Various approaches have been developed, including `density penalization`, `level set`, `topological derivative`, `phase-field`, and `evolutionary methods`. A comprehensive review is available in `Sigmund and Maute (2013)`.

- **Anisotropic Filtering for Additive Manufacturing:** Highlighting the benefits of `anisotropic filtering` in designing structures for `extrusion` or `additive manufacturing`. This aspect is vital as the strength of parts highly depends on the direction of material deposition.

- **SIMP Algorithm Implementation:** Presenting a straightforward implementation of topological optimization using the `SIMP (Solid Isotropic Material with Penalization)` algorithm.

- **Utilizing a Helmholtz-type PDE Filter:** Employing a `Helmholtz-type Partial Differential Equation (PDE) anisotropic filter`. This facilitates efficient `parallelization` of the approach, enhancing the optimization process.

This contribution simplifies the implementation of topological optimization and aligns it with modern manufacturing techniques, broadening its applicability and efficiency.


<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/projects/topology/cantilever_print.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/projects/topology/topology_vid2.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true loop=true %}
    </div>
</div>



