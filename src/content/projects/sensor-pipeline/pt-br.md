---
title: "Pipeline de Dados de Sensores"
description: "Pipeline de ingestão e agregação em tempo real para leituras de sensores IoT em ambiente de pesquisa universitária."
technologies: ["Python", "MQTT", "InfluxDB", "Grafana", "Docker"]
status: "completed"
date: 2022-08-10
role: "Desenvolvedor"
problem: "Sensores do laboratório de pesquisa produziam leituras de alta frequência armazenadas em arquivos planos, tornando a análise lenta e propensa a erros."
solution: "Implementei um pipeline de ingestão baseado em MQTT com armazenamento time-series e dashboards Grafana para visualização em tempo real."
context: "Projeto de estágio apoiando pesquisa de monitoramento ambiental com 24 nós de sensores."
challenges:
  - "Lidar com tráfego em rajada durante eventos de calibração"
  - "Garantir integridade de dados durante interrupções de rede"
learnings:
  - "Bancos de dados time-series simplificam drasticamente fluxos de trabalho com dados de sensores"
  - "Buffering na borda previne perda de dados durante gaps de conectividade"
results:
  - "Permitiu que pesquisadores consultassem 30 dias de dados em menos de 2 segundos"
  - "Pipeline rodou continuamente por 14 meses sem intervenção manual"
technicalDecisions:
  - "Selecionei InfluxDB por otimização nativa para time-series"
  - "Usei MQTT QoS 1 para equilíbrio entre confiabilidade e performance"
github: "https://github.com/rhyanstudy/sensor-pipeline"
featured: false
draft: false
---

## Implementação Técnica

Nós de sensores publicam leituras em um broker MQTT a cada 10 segundos. Um consumer Python valida payloads, aplica conversões de unidade e grava no InfluxDB. Dashboards Grafana fornecem visualizações ao vivo e análise histórica.

Buffer offline em cada nó armazena até 24 horas de leituras localmente, reenviando na reconexão para prevenir lacunas.
