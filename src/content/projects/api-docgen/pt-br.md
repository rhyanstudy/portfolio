---
title: "Gerador de Documentação de API"
description: "Ferramenta CLI que gera documentação legível de referência de API a partir de especificações OpenAPI e anotações no código."
technologies: ["TypeScript", "Node.js", "OpenAPI", "Markdown"]
status: "completed"
date: 2024-06-20
role: "Desenvolvedor Único"
problem: "A equipe de desenvolvimento mantinha documentação de API manualmente, resultando em endpoints desatualizados e formatação inconsistente entre serviços."
solution: "Criei uma CLI que analisa specs OpenAPI e definições de rotas TypeScript, produzindo documentação Markdown estruturada com exemplos e detecção de mudanças."
context: "Desenvolvido durante meu período na Meridian Digital para padronizar documentação em 6 microsserviços."
challenges:
  - "Reconciliar diferenças entre specs OpenAPI e implementações reais de rotas"
  - "Gerar exemplos úteis sem expor dados sensíveis"
learnings:
  - "Ferramentas de documentação funcionam quando se integram aos fluxos existentes, não quando exigem manutenção separada"
results:
  - "Reduziu o tempo de atualização de documentação de horas para minutos"
  - "Adotado por duas equipes adicionais na empresa"
technicalDecisions:
  - "Usei parsing AST para rotas TypeScript para detectar endpoints não documentados"
  - "Saída em Markdown para versionamento fácil e revisão em pull requests"
github: "https://github.com/rhyanstudy/openapi-docgen"
demo: "https://openapi-docgen-demo.example.com"
featured: false
draft: false
---

## Implementação Técnica

A ferramenta escaneia diretórios do projeto em busca de arquivos OpenAPI YAML/JSON e arquivos de rotas TypeScript. Mescla ambas as fontes em um schema unificado, sinalizando discrepâncias como avisos durante execuções de CI.

A documentação gerada inclui resumos de endpoints, schemas de request/response, requisitos de autenticação e exemplos curl. Um modo diff destaca mudanças entre versões, útil para release notes.
