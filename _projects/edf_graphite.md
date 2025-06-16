---
layout: page
title: Fractures in nuclear graphite
description: Collaboration with EDF Energy and Jacobs/Amentum
img: assets/img/projects/graphite_edf/edf_brick1.png
importance: 1
category: Industrial Technologies
related_publications: true
---

### UK Nuclear Power Plant Safety

The team that founded Mesh-Oriented Solutions worked together successfully on developing MoFEM to meet the needs of the UK nuclear industry—EDF Energy and Jacobs/Amentum. The work focused on providing simulation capabilities to predict fracture in the cores of UK nuclear power plants. MoFEM delivered an advanced crack propagation simulation tool that predicted fractures far more accurately than any commercial or open-source code. EDF Energy commissioned two independent audits of MoFEM, in 2017 and 2019. Based on these, MoFEM was approved for use in safety cases supporting the continued operation of UK nuclear power plants. Since then, MoFEM has been used consistently by engineers at EDF Energy and Jacobs/Amentum. The work resulted in:

- **Impact on Nuclear Safety:** Facilitating the use of novel technology for simulations supporting safety cases for the UK's `nuclear power plants` operations, thanks to sustainable development practices within the MoFEM team.

- **REF2021 Impact Case Submission:** Submitting an impact case to `REF2021`, demonstrating significant cross-disciplinary applications of the research.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/graphite_edf/experiments.jpeg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The simulated crack paths coincide very well with observed fractures in nuclear graphite
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/graphite_edf/srgw_validation.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Formation of debris: comparison between the experiment and MoFEM simulation {% cite athanasiadis2023computational %}
</div>



---

### Configurational Mechanics in Heterogeneous Materials

Accuracy and robustness of crack propagation in nuclear graphite were achieved by implementing a novel computational framework in MoFEM,  
"Configurational Mechanics for Modelling Continuous Crack Propagation in Heterogeneous Materials" which extends the principles of `configurational mechanics` to modelling `crack propagation` in `brittle`, `heterogeneous materials`. Key aspects of this work include:

- **Theoretical Basis:** Utilizing principles of `configurational mechanics`, based on the local form of the `first law of thermodynamics`, for establishing equilibrium conditions for the `crack front`.

- **Crack Propagation Direction:** Applying the principle of `maximal energy dissipation` to determine the direction of crack propagation in line with `configurational forces`.

- **Handling Heterogeneous Materials:** Extending previous formulations to include the influence of `spatially varying material stiffness`, introducing an additional force influencing the crack front movement.

- **Monolithic Solution Strategy:** Simultaneously solving for `material` and `spatial displacements`, enabling discrete displacement discontinuity resolution without the need for `mesh refinement` or `enrichment techniques`.

- **Advanced Numerical Techniques:** Implementing `arc-length procedures` for dissipative loading path tracing and `mesh smoothing` for maintaining mesh quality.

- **Demonstration of Efficacy:** Validating the performance of this formulation through numerous `numerical simulations`, showcasing both accuracy and robustness.

This research marks a significant contribution to both the fields of `engineering mechanics` and `nuclear safety`, demonstrating the versatility and impact of the methodologies developed in MoFEM.


<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/projects/graphite_edf/full_crack.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true loop=true %}
    </div>
</div>
<div class="caption">
    Primary crack propagation in nuclear graphite brick (MoFEM simulation)
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/projects/graphite_edf/SRGW_chrome_safe.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true loop=true %}
    </div>
</div>
<div class="caption">
    Secondary crack propagation in graphite brick (MoFEM simulation)
</div>

