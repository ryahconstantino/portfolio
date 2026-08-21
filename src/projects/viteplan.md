---
title: Sistema VitePlan | Case study
description: Estratégia digital e arquitetura de conversão para um cartão de benefícios em saúde.
---

# Sistema VitePlan

## Visão geral

O VitePlan é um cartão de benefícios voltado à saúde, com planos individuais e familiares a partir de R$ 49,90 por mês. A proposta conecta usuários a descontos em consultas, exames, medicamentos e outras especialidades, sem carência e sem limite de idade.

O trabalho foi estruturado para transformar uma oferta com muitas regras comerciais em uma jornada objetiva: entender o benefício, comparar o plano e iniciar uma conversa de contratação.

## Desafio de negócio

- Explicar a diferença entre cartão de benefícios e convênio médico.
- Reduzir a fricção entre a página de planos e o atendimento comercial.
- Organizar benefícios, especialidades e condições em uma arquitetura rastreável.
- Criar uma base técnica preparada para campanhas e otimização contínua.

## Solução entregue

### Arquitetura de informação

A navegação foi organizada em torno de intenção: benefícios, planos, especialidades, afiliados e contato. A hierarquia permite que uma pessoa em descoberta avance para uma ação sem precisar interpretar um texto institucional extenso.

### Conversão e tracking

O fluxo principal direciona o usuário para uma ação de WhatsApp com mensagem contextualizada. Em uma implementação de produção, cada CTA deve carregar `utm_source`, `utm_medium`, `utm_campaign` e um identificador de plano para conectar origem, conversa e venda no CRM.

### SEO e alcance

As páginas de planos e especialidades formam uma matriz de buscas de alta intenção. O plano editorial pode explorar termos como cartão de benefícios, desconto em consultas e assistência à saúde, sempre com conteúdo responsável e sem prometer cobertura que o produto não oferece.

### Tecnologia

- Componentes responsivos para páginas de aquisição.
- Conteúdo estruturado para facilitar manutenção comercial.
- Eventos de conversão para CTA, WhatsApp e visualização de planos.
- Base para testes A/B de oferta, prova social e ordem dos benefícios.
- Otimização de imagens e carregamento progressivo para reduzir LCP.

## Impacto esperado no funil

O ganho não está apenas em receber mais visitas. Uma página que esclarece elegibilidade, preço e benefício reduz dúvidas no atendimento, melhora a taxa de conversa qualificada e permite que a mídia seja otimizada para pessoas com intenção real.

## KPIs do cenário ilustrativo

> Os números abaixo são uma simulação de acompanhamento, não resultados auditados do VitePlan.

<div class="project-metrics-grid">

<ProjectMetric label="Conversão visita para lead" :before="3.2" :after="4.8" before-label="3,2%" after-label="4,8%" change="+50%" description="Clareza da oferta e CTA contextualizado." before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="CCA" :before="25.6" :after="18.4" before-label="R$ 25,60" after-label="R$ 18,40" change="-28%" description="Melhor distribuição de verba entre campanhas." :lower-is-better="true" before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="Leads qualificados" :before="100" :after="142" before-label="100" after-label="142" change="+42%" description="Formulário e mensagem com contexto comercial." before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="ROAS de mídia" :before="2.1" :after="3.1" before-label="2,1x" after-label="3,1x" change="+48%" description="Receita atribuída dividida pelo investimento." before-caption="Antes" after-caption="Depois" />

</div>

## Como medir em produção

O KPI primário deve ser a venda confirmada, não apenas o clique no WhatsApp. O funil recomendado é `sessão > plano visualizado > CTA acionado > conversa respondida > venda`. GA4 e Search Console medem comportamento e alcance; o CRM deve ser a fonte da verdade para receita, margem e qualidade do lead.

## Acessar o projeto

[Visitar o site do VitePlan](https://beneficios.viteplan.com.br/){target=_blank rel=noreferrer}
