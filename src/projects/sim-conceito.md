---
title: Sim Conceito | Case study
description: Catálogo digital e jornada comercial para piscinas de cerâmica e acessórios.
---

# Sim Conceito

## Visão geral

A Sim Conceito comercializa piscinas personalizáveis produzidas em cerâmica, acessórios, pastilhas e oportunidades para revendedores. O site apresenta modelos como Guarujá, Camburi, Guaecá, Lagoinha, Riviera e Raia, além de catálogo e contato comercial.

## Desafio de negócio

Piscinas são uma compra de consideração: o visitante precisa visualizar o modelo, entender as possibilidades, consultar acessórios e conversar com um vendedor. O desafio foi fazer o catálogo trabalhar como um vendedor digital, sem transformar a página em uma lista fria de produtos.

## Solução entregue

- Catálogo navegável por modelos e páginas individuais.
- Separação entre piscinas, acessórios, catálogo, contato e revendedor.
- CTAs distribuídos em momentos de alta intenção, incluindo orçamento e WhatsApp.
- Área de conteúdo visual para associar produto a estilo de vida e uso.
- Página de revendedor para criar um segundo funil B2B.
- Estrutura de conteúdo preparada para dados de produto, imagens descritivas e links internos.

## Experiência e tecnologia

O fluxo combina apresentação visual, dados de produto e contato assistido. A camada administrativa permite manter modelos, banners, acessórios e catálogos sem depender de alteração manual em cada página. Em uma operação madura, o catálogo deve ser tratado como uma fonte única de dados para evitar preço, nome ou disponibilidade divergentes entre canais.

O carregamento de imagens é um ponto crítico. Compressão WebP, `srcset`, dimensões explícitas e lazy loading preservam a percepção premium sem comprometer Core Web Vitals.

## SEO e crescimento orgânico

Cada modelo deve ter URL própria, título único, descrição orientada à intenção e marcação `Product` quando houver dados suficientes. A malha interna entre piscina, acessórios, catálogo e revendedor distribui autoridade e ajuda o buscador a entender a arquitetura comercial.

## KPIs do cenário ilustrativo

> Cenário demonstrativo para orientar instrumentação; não representa dados reais da Sim Conceito.

<div class="project-metrics-grid">

<ProjectMetric label="Solicitações de orçamento" :before="100" :after="162" before-label="100" after-label="162" change="+62%" description="Mais pontos de contato e melhor contexto." before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="CCA" :before="42" :after="32.3" before-label="R$ 42,00" after-label="R$ 32,30" change="-23%" description="Menor desperdício entre visita e oportunidade." :lower-is-better="true" before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="Cliques orgânicos em páginas de produto" :before="1000" :after="1550" before-label="1.000" after-label="1.550" change="+55%" description="Ganho de cobertura para buscas específicas." before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="Taxa de avanço para contato" :before="5.4" :after="7.6" before-label="5,4%" after-label="7,6%" change="+41%" description="Catálogo mais próximo da decisão." before-caption="Antes" after-caption="Depois" />

</div>

## Como medir em produção

Eventos essenciais: `view_item`, `select_content`, `view_catalog`, `generate_lead`, `click_whatsapp` e `become_reseller`. O KPI final deve separar orçamento de consumidor e lead de revendedor. Essa segmentação evita otimizar campanhas B2C por volume de contatos B2B ou vice-versa.

## Acessar o projeto

[Visitar o site da Sim Conceito](https://www.simconceito.com){target=_blank rel=noreferrer}
