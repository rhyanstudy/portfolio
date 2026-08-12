---
title: "API Documentation Generator"
description: "CLI tool that generates readable API reference documentation from OpenAPI specifications and codebase annotations."
technologies: ["TypeScript", "Node.js", "OpenAPI", "Markdown"]
status: "completed"
date: 2024-06-20
role: "Sole Developer"
problem: "The development team maintained API documentation manually, leading to outdated endpoints and inconsistent formatting across services."
solution: "Created a CLI that parses OpenAPI specs and TypeScript route definitions, producing structured Markdown documentation with examples and change detection."
context: "Built during my time at Meridian Digital to standardize documentation across 6 microservices."
challenges:
  - "Reconciling differences between OpenAPI specs and actual route implementations"
  - "Generating useful examples without exposing sensitive data"
learnings:
  - "Documentation tools succeed when they integrate into existing workflows, not when they require separate maintenance"
results:
  - "Reduced documentation update time from hours to minutes"
  - "Adopted by two additional teams within the company"
technicalDecisions:
  - "Used AST parsing for TypeScript routes to catch undocumented endpoints"
  - "Output Markdown for easy version control and review in pull requests"
github: "https://github.com/alexmorgan/openapi-docgen"
demo: "https://openapi-docgen-demo.example.com"
featured: false
draft: false
---

## Technical Implementation

The tool scans project directories for OpenAPI YAML/JSON files and TypeScript route files. It merges both sources into a unified schema, flagging discrepancies as warnings during CI runs.

Generated documentation includes endpoint summaries, request/response schemas, authentication requirements, and curl examples. A diff mode highlights changes between versions, useful for release notes.
