---
title: "Developer Portfolio Platform"
description: "Static portfolio site with content collections, editorial design, and zero runtime dependencies."
technologies: ["Astro", "TypeScript", "Markdown", "CSS"]
status: "in-progress"
date: 2025-01-10
role: "Author & Developer"
problem: "Existing portfolio templates felt generic and prioritized visual effects over readable presentation of technical work."
solution: "Building a static-first portfolio inspired by editorial publications, with structured content collections for projects and articles."
context: "Personal project to present professional work with clarity and maintainability."
challenges:
  - "Balancing editorial aesthetics with technical portfolio requirements"
  - "Designing content schemas flexible enough for varied project types"
learnings:
  - "Content separation from presentation simplifies long-term maintenance"
  - "Typography and whitespace do more for professionalism than animations"
technicalDecisions:
  - "Chose Astro for static generation and minimal JavaScript"
  - "Used Content Collections with Zod schemas for type-safe frontmatter"
  - "Plain CSS with design tokens instead of utility frameworks"
github: "https://github.com/rhyanstudy/portfolio"
featured: false
draft: false
---

The site uses Astro Content Collections for projects and articles. Each project is a Markdown file with structured frontmatter covering problem, solution, and technical decisions. Pages are rendered at build time with no client-side framework.
