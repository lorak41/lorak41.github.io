### MoFEM: the engine behind our simulation tools

[MoFEM](https://mofem.eng.gla.ac.uk/) is a C++ finite element engine developed at the University of Glasgow by the team behind Mesh-Oriented Solutions {% cite kaczmarczyk2020mofem %}. MOS builds specialist tools on this engine so clients can run simulations, investigate component behaviour and compare designs in their own engineering workflows.

MoFEM supports coupled physics, mixed and higher-order finite elements, and evolving meshes. Its formulations include `H1`, `H(curl)`, `H(div)` and `L2` spaces, giving developers different ways to represent the physical fields in a problem. These foundations are useful in applications ranging from solid and fluid mechanics to heat transfer and electromagnetism.

#### Capabilities that matter in practice

- **Error indicators:** Estimate where the numerical solution needs closer attention, rather than treating every part of a model equally.
- **Automatic refinement:** Adapt the mesh or approximation order where error indicators show more resolution is needed.
- **Stability and robustness:** Use mixed formulations and block solvers to tackle demanding, coupled problems.
- **Automatic meshing:** Incorporate mesh generation and remeshing into a workflow, including when a model's geometry or interfaces evolve.
- **Optimisation:** Use adjoint-based methods for shape optimisation and topology optimisation to explore design choices and material distribution.
- **GPU scalability:** Integrate GPU-oriented, matrix-free methods for suitable workloads. Performance and scaling depend on the application and hardware.

EDF Energy selected MoFEM to model brittle crack propagation in nuclear graphite bricks after other tools could not reliably predict the complex crack paths. The challenge combines intricate brick geometry, contact between neighbouring bricks, and exposure to high temperatures and neutron irradiation. MoFEM's use in this demanding engineering setting demonstrates the kind of specialist simulation tool MOS can build for clients. Explore [selected projects](/projects/) or [contact us](mailto:contact@mesh-oriented-solutions.com) to discuss your application.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/graphite_edf/edf_brick_higher_res.png" title="Nuclear graphite brick fracture simulation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    MoFEM simulation of brittle crack propagation in a nuclear graphite brick
</div>
