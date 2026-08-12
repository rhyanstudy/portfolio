---
title: "Por que Prefiro Sites Estáticos em Projetos Pessoais"
description: "Um argumento prático pela arquitetura static-first ao construir sites pessoais e ferramentas pequenas."
category: "Arquitetura"
date: 2025-01-05
draft: false
---

Projetos pessoais raramente precisam da complexidade de uma stack completa de aplicação. Quando construo um portfólio, site de documentação ou landing page de ferramenta pequena, começo com uma pergunta simples: **o que realmente precisa executar no momento da requisição?**

Para a maioria dos sites pessoais, a resposta é nada. O conteúdo é conhecido em build time. As páginas mudam quando faço deploy, não quando um usuário visita. Isso torna a geração estática um encaixe honesto — não uma limitação a contornar.

## Velocidade como Recurso

Sites estáticos servem HTML pré-construído. Não há consulta a banco de dados, atraso de renderização server-side ou cold start. Em hospedagem modesta, páginas carregam em milissegundos. Essa velocidade não é micro-otimização; afeta se alguém lê seu trabalho ou sai.

## Manutenibilidade ao Longo do Tempo

Frameworks vêm e vão. Dependências se acumulam. Um site estático com conteúdo Markdown e CSS puro tem área de superfície pequena. Quando retorno a um projeto após seis meses, consigo entendê-lo rapidamente. Isso importa mais do que qualquer feature que eu possa adicionar em um fim de semana.

## Quando Estático Não Basta

Estático não é universal. Se você precisa de contas de usuário, dados em tempo real ou lógica server-side em cada requisição, precisa de backend. Mas muitos projetos rotulados como "apps" são realmente documentos com navegação. Tratá-los como documentos primeiro mantém a arquitetura honesta.

## Conclusão

Para trabalho pessoal — portfólios, blogs, documentação de projetos — uso geração estática por padrão. Respeita o tempo do leitor, respeita minha sanidade futura e deixa espaço para adicionar complexidade apenas quando o problema genuinamente exige.
