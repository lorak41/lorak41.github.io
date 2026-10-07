---
layout: page
title: Failure in composites and coatings
description: Cracking and interface separation
img: assets/img/images_for_slider/composite_failure.png
importance: 5
category: Industrial Technologies
delivery: mos
related_publications: false
---

High-performance `composites and coatings` rely on the integrity of their materials and the bonds between them. Cracking and `interface separation` can reduce structural stiffness or compromise a protective layer, even before damage becomes visible. Understanding how failure develops is essential for choosing materials and designing durable components.

These failure mechanisms are particularly relevant to:

* `Automotive`: high-performance coatings protect component surfaces under demanding contact conditions. Cracking or loss of adhesion can compromise that protection. Modelling these failures helps assess coating durability and compare material choices.
* `Aerospace`: lightweight composites help reduce aircraft weight, but cracking and separation between layers can compromise structural strength. Understanding how this damage develops supports safer, damage-tolerant designs.

At `Mesh-Oriented Solutions`, we are developing simulation tools in `MoFEM` to model `progressive fracture` alongside `contact`. Our mixed formulation treats `stress as an independent unknown field`, providing a direct description of the forces transmitted across interfaces. An `energy-based cohesive model` relates these forces to the opening and sliding of neighbouring surfaces, capturing how their bonds weaken as damage accumulates.

Key capabilities include:

* `Combined opening and sliding` at interfaces under complex loading
* `Irreversible damage`, retaining the effects of previous loading
* `Crack-face contact`, allowing damaged surfaces to close without restoring their original bond
* `Material-specific calibration` using interface stiffness, strength and fracture energy

### Composite interface fracture

The first demonstration shows how cracks develop and interfaces separate in a composite under tension. Tracking this interaction helps identify vulnerable regions and assess the influence of interface bonding on overall failure.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/projects/composites_coatings/composite_interface_fracture.mp4" poster="/assets/img/projects/composites_coatings/composite_interface_fracture.jpg" class="img-fluid rounded z-depth-1" title="Composite cracking and interface separation under tension" caption="Composite under tension: two views of crack growth and interface separation." controls=true autoplay=true muted=true loop=true %}
    </div>
</div>

### Indentation-driven fracture

The second demonstration illustrates a rounded tool pressing into a brittle surface layer. This contact-driven example highlights the cracking mechanisms relevant to `coating damage` under localised loading.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/projects/composites_coatings/indentation_fracture.mp4" poster="/assets/img/projects/composites_coatings/indentation_fracture.jpg" class="img-fluid rounded z-depth-1" title="Indentation-driven cracking in a brittle surface layer" caption="Illustrative indentation model: loaded surface (left) and isolated crack surfaces (right)." controls=true autoplay=true muted=true loop=true %}
    </div>
</div>

These tools support `material selection` and `design assessment`: comparing bonding strategies, exploring resistance to localised damage and focusing physical testing on the most promising designs.
