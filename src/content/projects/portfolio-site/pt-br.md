---
title: "Plataforma de Portfólio"
description: "Site de portfólio estático com content collections, design editorial e zero dependências em runtime."
technologies: ["Astro", "TypeScript", "Markdown", "CSS"]
status: "in-progress"
date: 2025-01-10
role: "Autor e Desenvolvedor"
problem: "Templates de portfólio existentes pareciam genéricos e priorizavam efeitos visuais em vez de apresentação legível de trabalho técnico."
solution: "Construindo um portfólio static-first inspirado em publicações editoriais, com content collections estruturadas para projetos e artigos."
context: "Projeto pessoal para apresentar trabalho profissional com clareza e manutenibilidade."
challenges:
  - "Equilibrar estética editorial com requisitos de portfólio técnico"
  - "Projetar schemas de conteúdo flexíveis o suficiente para tipos variados de projetos"
learnings:
  - "Separação de conteúdo e apresentação simplifica manutenção a longo prazo"
  - "Tipografia e whitespace fazem mais pelo profissionalismo do que animações"
technicalDecisions:
  - "Escolhi Astro para geração estática e JavaScript mínimo"
  - "Usei Content Collections com schemas Zod para frontmatter type-safe"
  - "CSS puro com design tokens em vez de frameworks utilitários"
github: "https://github.com/rhyanstudy/portfolio"
featured: false
draft: false
---

O site usa Astro Content Collections para projetos e artigos. Cada projeto é um arquivo Markdown com frontmatter estruturado cobrindo problema, solução e decisões técnicas. Páginas são renderizadas em build time sem framework client-side.
