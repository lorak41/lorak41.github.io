---
layout: page
title: Automotive bushings
# description: Work for EDF Energy
img: assets/img/projects/bushings/stress.png
importance: 3
category: Industrial Technologies
related_publications: false
---

Bushings play a vital role in vehicle suspension systems by `isolating noise and vibration` while allowing `controlled mechanical movement`. Composed of rubber-like materials, they experience `large, complex deformations`, making `accurate modelling` essential for optimising vibro-acoustic performance. This necessitates `advanced simulation techniques` that can capture `nonlinear, nearly incompressible behaviour` with `high fidelity` and `numerical stability`.

To address these challenges, we employ a `mixed (multifield) formulation` that treats `stress as an independent unknown field`. Key innovations of this approach include:

* `Decoupling of nonlinearities` into separate equations
* `A priori satisfaction of conservation laws`, including momentum flux continuity
* `Optimised memory access`, trading floating point operations for local and temporal memory use
* `Ultra-weak formulation`, well-suited to unilateral constraints from contact and geometric instabilities
* `Sparse dense block structure` for efficient computation
* `GPU-ready architecture`, designed for future high-performance hardware

In addition, we implemented `automatic contact self-detection`, enabling `robust and accurate` handling of contact under large deformations without manual intervention.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/projects/bushings/stress.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true loop=true %}
    </div>
</div>


