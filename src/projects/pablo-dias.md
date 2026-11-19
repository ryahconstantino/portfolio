---
title: Pablo Dias | Case study
description: Hub pessoal, conteúdo e aquisição para a marca de um mentor de empresários.
---

# Pablo Dias

## Visão geral

O site de Pablo Dias funciona como hub da marca pessoal: redes sociais, blog e um projeto em destaque, o Método RS1. A página concentra Instagram, YouTube, TikTok e textos sobre crescimento, liderança e operação de empresas, em vez de espalhar a audiência em destinos soltos.

O trabalho foi estruturado para transformar presença em redes e conteúdo editorial em um caminho mensurável até os projetos comerciais.

## Desafio de negócio

Uma marca pessoal de mentoria precisa de autoridade sem parecer um cartão de visitas estático. O visitante chega pelo Instagram, pelo YouTube, por um artigo ou por indicação e precisa entender rapidamente quem é Pablo, o que ele ensina e qual projeto merece o próximo clique.

O desafio foi organizar bio, redes, blog e oferta principal em uma jornada curta, com cookies, privacidade e termos tratados com clareza.

## Solução entregue

- Home como hub de marca, não como landing única de venda.
- Atalhos para Instagram, YouTube e TikTok com a mesma identidade visual.
- Blog com artigos sobre crescimento, direção da empresa, liderança e mobilização de times.
- Projeto em destaque apontando para a mentoria Método RS1.
- Páginas legais e consentimento de cookies alinhados à medição de audiência.
- Arquitetura preparada para receber novos projetos sem diluir o posicionamento.

## Tecnologia, tracking e SEO

A home, o blog e o projeto em destaque precisam de titles, descriptions e Open Graph próprios. Os artigos devem ter autoria, data e um caminho interno até a oferta, sem transformar cada texto em um anúncio. Dados estruturados `Person` e `BlogPosting` ajudam o buscador a entender a marca e o conteúdo.

UTM e eventos como `click_social`, `view_article`, `select_featured_project` e `generate_lead` conectam rede social, leitura e pré-cadastro. O cookie banner precisa coexistir com a medição de audiência, sem perder a origem da visita.

## KPIs do cenário ilustrativo

> Cenário demonstrativo para orientar instrumentação; não representa resultados auditados da marca Pablo Dias.

<div class="project-metrics-grid">

<ProjectMetric label="Cliques para o projeto em destaque" :before="100" :after="164" before-label="100" after-label="164" change="+64%" description="Hub mais claro entre conteúdo e oferta." before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="Leitura de artigos do blog" :before="1000" :after="1470" before-label="1.000" after-label="1.470" change="+47%" description="Conteúdo editorial com caminho interno." before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="CTR de redes para o site" :before="1.8" :after="2.6" before-label="1,8%" after-label="2,6%" change="+44%" description="Bio e destino alinhados à mesma marca." before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="CCA assistido por conteúdo" :before="52" :after="39.5" before-label="R$ 52,00" after-label="R$ 39,50" change="-24%" description="Artigos reduzindo o custo da conversa comercial." :lower-is-better="true" before-caption="Antes" after-caption="Depois" />

</div>

## Como medir em produção

O hub não deve ser medido só por sessão. O funil útil é `rede ou busca > hub > artigo ou projeto > pré-cadastro > conversa`. GA4 e Search Console mostram alcance; a origem da conversa comercial precisa chegar ao CRM com UTM, artigo de entrada e projeto clicado.

## Acessar o projeto

[Visitar o site de Pablo Dias](https://pablodias.me){target=_blank rel=noreferrer}
