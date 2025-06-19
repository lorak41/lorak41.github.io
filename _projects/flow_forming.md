---
layout: page
title: Flow forming
description: An integrated framework for fundamental understanding and process optimisation
img: assets/img/projects/flow_forming/proper_flow_forming.png
importance: 2
category: Industrial Technologies
related_publications: true
---


Introducing a breakthrough in the field of manufacturing technology: our innovative research on Incremental Cold Flow Forming (ICFF). This project was supported by EPSRC ([EP/T008415/1](https://gtr.ukri.org/projects?ref=EP%2FT008415%2F1)) This cutting-edge approach revolutionizes the production of `axisymmetric components`, enhancing geometrical accuracy and material properties beyond traditional methods. High-quality, rotationally-symmetric, hollow engineering components are widely utilised by the aerospace, automotive and oil and gas sectors. 
This research tackles the complex challenges inherent in ICFF, such as extreme `plastic deformations`, `roller contact`, and `heat dissipation`, which have historically hindered effective simulation and industry adoption {% cite lewandowski2023multifield %}.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/projects/flow_forming/forming_vid1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/projects/flow_forming/forming_vid2.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Incremental Cold Flow Forming process and produced parts. 
</div>


Key highlights of our research include:

**Development of a Massively Parallel Multifield Plasticity Approach**: We have engineered a novel method that diverges from classical techniques. This approach uniquely approximates measures of `plastic deformation` using finite element basis functions in `L2 space`, enabling more robust and accurate simulations.

**Innovative Solution Techniques**: The research employs a `global system` level solution with a `monolithic Newton-Raphson scheme`, striking a balance between complexity and flexibility. This allows for seamless integration with other physical phenomena.

**Efficient Utilization of Block-Structured Tangent Stiffness Matrix**: Our method capitalizes on the `block-structure` of the tangent stiffness matrix, utilizing `scalable block preconditioners` for enhanced efficiency.

**Integration of Additive Kinematic Approach**: Adopting the approach proposed by Miehe et. al. (2002) for `finite strain plasticity`, our research enables the use of classical constitutive models within a small-strain framework. This is achieved through the introduction of a `logarithmic strain measure`.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/projects/flow_forming/full_flow_forming.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>

**Pioneering in Computational Plasticity**: This new approach for plasticity opens entirely new possibilities, akin to the 'holy grail' of computational plasticity: the `Arbitrary Lagrangian Eulerian (ALE)` formulation. In this formulation, the evolution of plastic internal variables is not associated with the mesh, offering unprecedented flexibility and accuracy in simulations.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/projects/flow_forming/ale_plast1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/projects/flow_forming/ale_plast2.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Prototype simulations of multifield plasticity in Arbitrary Lagrangian-Eulerian kinematic framework.
</div>

**Validation through Benchmark Studies**: The performance and effectiveness of our implementation are rigorously tested through `classical benchmark studies` and extensive `large-scale` simulations of ICFF processes using `HPC`.

This research marks a significant leap in manufacturing technology, promising to unlock the full potential of ICFF and open new horizons in precision manufacturing.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/projects/flow_forming/flow_benchmark.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>

