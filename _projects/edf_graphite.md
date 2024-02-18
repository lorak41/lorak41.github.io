---
layout: page
title: Fractures in nuclear graphite
description: Work for EDF Energy
img: assets/img/projects/graphite_edf/edf_brick1.png
importance: 1
category: Industrial Technologies
related_publications: true
---

<!-- 
    Although my PhD research was focused on bone fatigue fracture prevention, it has turned into contribution to assessing the structural integrity of nuclear power plants in the UK. I paused my PhD for three months to support project on modelling of fracture in irradiated graphite bricks in Advanced Gas-Cooled Reactors in collaboration with industrial partners (EDF Energy and Jacobs). I was responsible for extending the functionality of MoFEM to efficiently map the heterogeneous fields and improve the postprocessing, to enhance the code’s HPC capabilities. Furthermore, I gained experience in interaction with the industry through numerous technical sessions and progress meetings. I contributed to organisation of the two workshops at UofG in 2020 aimed at advising our partners in performing simulations using our code. Thanks to sustainable development practices adopted in the MoFEM team, our industrial partners were able to use novel technology to perform simulations required to support safety cases for the UK nuclear power plants’ operations. This work led to the submission of an impact case to REF2021 (The Research Excellence Framework).  
-->


### Expanding PhD Research to Nuclear Power Plant Safety

PhD research, initially focused on `bone fatigue fracture prevention`, has been uniquely applied to enhance the `structural integrity assessment` of `nuclear power plants` in the UK. Key highlights of this interdisciplinary application include {% cite athanasiadis2023computational %}:

- **Industrial Collaboration:** Temporarily pausing my PhD to contribute to a project on modelling `fracture in irradiated graphite bricks` in `Advanced Gas-Cooled Reactors`. This project involved collaboration with `EDF Energy` and `Jacobs`.

- **Extension of MoFEM:** Extending the functionality of `MoFEM`, developed during my PhD, to efficiently map `heterogeneous fields` and enhance `postprocessing` features for `High-Performance Computing (HPC)` capabilities.

- **Industry Interaction:** Gaining valuable experience through technical sessions and progress meetings with `industrial partners`.

- **Workshop Organization:** Organizing two workshops at the `University of Glasgow` in 2020, aimed at training partners in using our code for simulations.

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


---

### Configurational Mechanics in Heterogeneous Materials

"Configurational Mechanics for Modelling Continuous Crack Propagation in Heterogeneous Materials" extends the principles of `configurational mechanics` to modelling `crack propagation` in `brittle`, `heterogeneous materials`. Key aspects of this work include:

- **Theoretical Basis:** Utilizing principles of `configurational mechanics`, based on the local form of the `first law of thermodynamics`, for establishing equilibrium conditions for the `crack front`.

- **Crack Propagation Direction:** Applying the principle of `maximal energy dissipation` to determine the direction of crack propagation in line with `configurational forces`.

- **Handling Heterogeneous Materials:** Extending previous formulations to include the influence of `spatially varying material stiffness`, introducing an additional force influencing the crack front movement.

- **Monolithic Solution Strategy:** Simultaneously solving for `material` and `spatial displacements`, enabling discrete displacement discontinuity resolution without the need for `mesh refinement` or `enrichment techniques`.

- **Advanced Numerical Techniques:** Implementing `arc-length procedures` for dissipative loading path tracing and `mesh smoothing` for maintaining mesh quality.

- **Demonstration of Efficacy:** Validating the performance of this formulation through numerous `numerical simulations`, showcasing both accuracy and robustness.

This research marks a significant contribution to both the fields of `engineering mechanics` and `nuclear safety`, demonstrating the versatility and impact of the methodologies developed during bone fracture research.


<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/projects/graphite_edf/full_crack.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true loop=true %}
    </div>
</div>


