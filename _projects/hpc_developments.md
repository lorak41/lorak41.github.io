---
layout: page
title: HPC tailored solvers in MoFEM
description: High Performance computing studies and optimisations
img: assets/img/projects/hpc/hpc_example.png
importance: 3
category: Industrial Technologies
---


## High-Performance Computing (HPC) Optimized Solvers in MoFEM

At MoFEM, significant effort is devoted to implementing algorithms that solve multi-physics problems for solving large scale complex problems. These are essential for creating `scalable solvers` that maximize `HPC resources efficiency`, an imperative for the upcoming exascale computing era. The block structure of MoFEM facilitates the use of `scalable Krylov solvers` and `off-the-shelf scalable preconditioners` such as multigrid, additive Schwarz method, and block-Jacobi, among others.

<!-- document the code -->

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/hpc/hpc_example.png" class="img-fluid rounded z-depth-1" zoomable=false %}
    </div>
    <div class="caption">
      Parallel partitions (left) and solution of shallow wave equation (right) on the Earth's surface, from the MoFEM shallow wave tutorial.
    </div>
</div>

The `generic data structures` in MoFEM are tailored to power `efficient block solvers`, providing practical, hands-on examples to tackle real-world problems.

<div class="row justify-content-sm-center">
   <div class="col-sm-6 col-md-4 text-center mt-1 mt-md-0">
        {% include figure.liquid path="assets/img/projects/hpc/schur_on_blocks.png" max-width = "350px" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Consecutive Schur complements applied on a sparse block matrix, allowing to increase efficiency of an iterative solver.
</div>

---

MoFEM's versatility also extends to the integration of `GPU accelerators`, allowing for:

- `Matrix-free methods` that significantly reduce memory bandwidth while increasing floating point operations (FLOPs).
- An architecture that aligns with modern HPC infrastructures, especially those utilizing `accelerated hardware`.
- A cost-effective computation per degree of freedom (DoF) by combining `matrix-free and high-order methods`, surpassing traditional low-order methods.

A `pilot study` demonstrated considerable promise, particularly in problem classes that benefit from matrix-free methods like `multifield plasticity`.

---

Below one can find interesting materials regarding HPC optimisations:

- [Lectures on performance optimisations](https://www.youtube.com/watch?v=o7h_sYMk_oc&list=PLUl4u3cNGP63VIBQVWguXxZZi0566y7Wf&index=2&t=1835s) 
- [Data locality](https://kaushikghose.wordpress.com/2020/01/30/cpu-caches-and-data-locality-a-small-demonstration/) 
- [Small overview on single node optimisations for HPC](http://www.archer.ac.uk/training/courses/craytools/pdf/single-node-opt.pdf)
- [Cachegrind tool tutorial](https://courses.cs.washington.edu/courses/cse326/05wi/valgrind-doc/cg_main.html)

