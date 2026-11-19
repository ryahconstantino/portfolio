---
title: Método RS1 | Case study
description: Landing de mentoria, qualificação de empresários e geração de oportunidades para o setor de piscinas.
---

# Método RS1

## Visão geral

O Método RS1 é uma mentoria e treinamento para empresários que querem vender mais, organizar a operação e sustentar o crescimento. A landing fala com donos e gestores do setor de piscinas, conectando vendas, gestão, liderança, execução de obras e atendimento.

O site concentra a promessa, os pilares da mentoria, o perfil de quem se beneficia e um pré-cadastro para entender o momento da empresa antes da conversa comercial.

## Desafio de negócio

Mentorias fracassam quando atraem curiosidade genérica. A página precisava filtrar empresários com operação real, explicar o método sem entregar um curso genérico e transformar o interesse em um pré-cadastro com contexto: faturamento, desafios e momento do negócio.

O desafio foi construir uma landing de alta intenção, com prova de processo, e não apenas um formulário no fim da página.

## Solução entregue

- Hero orientado a venda, operação e preparação para crescer.
- Pré-cadastro no topo, incluindo média de faturamento, para qualificar a conversa.
- Seis frentes da mentoria: diagnóstico, processo comercial, gestão, time, acompanhamento e novas oportunidades.
- Segmentação por dor: dono sobrecarregado, equipe sem processo, retrabalho e desenvolvimento de liderança.
- Jornada em três etapas: entender o cenário, priorizar e acompanhar a execução.
- FAQ que reduz objeções sobre porte da empresa, formato e próximo passo.
- Encaminhamento da equipe após o envio, em vez de uma compra impulsiva.

## Tecnologia, tracking e SEO

A landing deve preservar UTM do anúncio até o CRM, junto com faturamento informado, origem e respostas do formulário. Eventos `view_lp`, `start_form`, `generate_lead` e `qualified_lead` separam curiosidade de oportunidade. Campos obrigatórios precisam equilibrar qualificação e abandono.

SEO cobre buscas de mentoria para empresários de piscinas, gestão comercial e liderança de operação, sem prometer resultado financeiro que o método não controla. Performance da hero, formulário acessível e mensagens de erro claras protegem conversão em mobile.

## KPIs do cenário ilustrativo

> Cenário demonstrativo para orientar instrumentação; não representa resultados auditados do Método RS1.

<div class="project-metrics-grid">

<ProjectMetric label="Taxa de pré-cadastro" :before="3.4" :after="5.2" before-label="3,4%" after-label="5,2%" change="+53%" description="Oferta e formulário no mesmo contexto da dor." before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="Leads qualificados" :before="100" :after="139" before-label="100" after-label="139" change="+39%" description="Faturamento e momento da empresa no primeiro envio." before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="CCA" :before="86" :after="61.9" before-label="R$ 86,00" after-label="R$ 61,90" change="-28%" description="Menos conversas desalinhadas com o perfil da mentoria." :lower-is-better="true" before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="Início de formulário" :before="100" :after="168" before-label="100" after-label="168" change="+68%" description="CTA de pré-cadastro visível acima da dobra." before-caption="Antes" after-caption="Depois" />

</div>

## Como medir em produção

O KPI primário é a conversa qualificada e a matrícula, não o envio cru do formulário. O funil recomendado é `anúncio ou indicação > landing > início do form > pré-cadastro > contato da equipe > mentoria`. O CRM deve guardar faturamento, gargalo declarado, origem e modalidade apresentada.

## Acessar o projeto

[Visitar o site do Método RS1](https://lp.metodors1.com.br){target=_blank rel=noreferrer}
