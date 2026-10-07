---
layout: page
title: projects
permalink: /projects/
description: Explore projects we're delivering at Mesh-Oriented Solutions and earlier work by our founding team.
nav: true
order: 2
project_sections:
  - id: mos
    title: MOS projects
  - id: founding_team
    title: Founding team track record
    description: Selected projects delivered by our founding team before MOS.
horizontal: false
---

<div class="projects">
  {% for section in page.project_sections %}
    {% assign section_projects = site.projects | where: "delivery", section.id | sort: "importance" %}
    <section class="project-section" aria-labelledby="{{ section.id }}-heading">
      <h2 class="category" id="{{ section.id }}-heading">{{ section.title }}</h2>
      {% if section.description %}
        <p>{{ section.description }}</p>
      {% endif %}
      {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {% for project in section_projects %}
            {% include projects_horizontal.liquid %}
          {% endfor %}
        </div>
      </div>
      {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in section_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
      {% endif %}
    </section>
  {% endfor %}
</div>
