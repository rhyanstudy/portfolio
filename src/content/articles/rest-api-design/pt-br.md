---
title: "Projetando APIs REST que Envelhecem Bem"
description: "Convenções e decisões que mantêm APIs HTTP legíveis e evolutivas ao longo de anos de uso."
category: "Backend"
date: 2024-10-18
draft: false
---

APIs sobrevivem aos autores originais. Os endpoints que você entrega hoje serão consumidos por pessoas que nunca leram seus documentos de design. Isso torna **consistência e previsibilidade** mais valiosas do que engenhosidade.

## Nomeie Recursos, Não Ações

Use substantivos nos paths (`/users`, `/orders`) e deixe os métodos HTTP expressarem ações. Evite `/getUserById` na URL. Isso alinha com como desenvolvedores pensam e como camadas de cache funcionam.

## Versione Explicitamente, Mas com Parcimônia

Inclua um prefixo de versão (`/v1/`) quando esperar mudanças breaking. Não versione cada adição menor. A maior parte da evolução deve acontecer por mudanças aditivas: novos campos, novos parâmetros opcionais, novos endpoints.

## Erros Devem Ser Acionáveis

Retorne formatos de erro consistentes com código legível por máquina, mensagem legível por humanos e, opcionalmente, referência ao campo. `"Formato de e-mail inválido"` ajuda mais do que `"Validação falhou"`.

## Paginação Não É Opcional

Qualquer endpoint retornando listas eventualmente retornará itens demais. Projete paginação baseada em cursor ou offset desde o início. Documente limites padrão e máximos.

## Documente as Regras Não Escritas

Rate limits, esquemas de autenticação, expectativas de idempotência — isso pertence à documentação, não ao conhecimento tribal. Sua API é um produto. Trate sua documentação accordingly.
