---
title: "Agendador de Tarefas Distribuído"
description: "Agendador leve para coordenar jobs em background entre nós edge com tolerância a falhas e observabilidade."
technologies: ["Go", "Redis", "PostgreSQL", "Docker", "Prometheus"]
status: "completed"
date: 2024-11-15
role: "Desenvolvedor Líder"
problem: "Implantações de edge computing precisavam de uma forma confiável de distribuir e monitorar tarefas em background sem depender de um orquestrador centralizado na nuvem."
solution: "Construí um agendador distribuído usando eleição de líder, filas persistentes de jobs e endpoints de health-check que permitem recuperação graciosa após falhas."
context: "Desenvolvido como projeto de conclusão de curso em engenharia da computação, posteriormente refinado para uso em laboratório de pesquisa com 8 nós edge."
challenges:
  - "Lidar com cenários de split-brain durante partições de rede"
  - "Projetar handlers idempotentes para retries seguros"
  - "Equilibrar justiça no agendamento com filas de prioridade"
learnings:
  - "Simplicidade operacional frequentemente supera otimalidade teórica em sistemas distribuídos"
  - "Observabilidade clara desde o início economiza semanas de debugging depois"
  - "Documentar modos de falha é tão importante quanto documentar APIs"
results:
  - "Processou com sucesso mais de 50.000 jobs em implantações de teste"
  - "Tempo médio de recuperação após falha de nó reduzido para menos de 30 segundos"
  - "Adotado como implementação de referência na documentação do laboratório"
technicalDecisions:
  - "Escolhi Redis para coordenação devido ao pub/sub maduro e operações atômicas"
  - "Usei PostgreSQL para estado durável de jobs e audit logging"
  - "Implementei eleição de líder baseada em heartbeat em vez de biblioteca externa de consenso para reduzir dependências"
github: "https://github.com/rhyanstudy/task-scheduler"
featured: true
draft: false
---

## Implementação Técnica

O agendador consiste em três componentes principais: um **coordenador** responsável pela eleição de líder e atribuição de jobs, **nós worker** que executam jobs e reportam status, e uma **camada de monitoramento** expondo métricas via Prometheus.

A submissão de jobs segue uma API REST simples. Cada job inclui payload, nível de prioridade e contagem máxima de retries. Workers buscam jobs atribuídos, executam handlers registrados na inicialização e confirmam conclusão ou falha.

O mecanismo de eleição de líder usa Redis SET NX com TTL. Quando o heartbeat do líder atual expira, nós elegíveis competem pela liderança. Essa abordagem troca consistência perfeita por simplicidade operacional adequada à escala do projeto.

## Notas de Arquitetura

Handlers são registrados como interfaces Go, tornando o sistema extensível sem modificar a lógica central de agendamento. Jobs falhos entram em uma dead-letter queue após esgotar retries, com replay manual suportado por uma ferramenta CLI.
