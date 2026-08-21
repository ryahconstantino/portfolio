---
title: Moura Multicar | Case study
description: Inventário digital, busca de veículos e geração de leads para uma revenda do Litoral Norte.
---

# Moura Multicar

## Visão geral

A Moura Multicar atua na revenda de carros e motos em Caraguatatuba. O site trabalha com inventário de veículos, filtros por marca, páginas detalhadas, avaliação de veículos e atendimento via WhatsApp.

## Desafio de negócio

O estoque muda rápido e cada veículo precisa disputar atenção com dezenas de opções. A experiência deveria permitir encontrar um modelo, avaliar preço e condição, confiar na revenda e falar com um consultor em poucos passos.

## Solução entregue

- Inventário com separação entre carros e motos.
- Busca por marca e páginas indexáveis para cada veículo.
- Detalhes com fotos, preço e especificações do anúncio.
- CTAs para comprar e vender veículo, além de test-drive.
- Prova social com avaliações e veículos vendidos.
- Localização e presença na mídia como elementos de confiança.
- Integração do contato com WhatsApp para reduzir tempo até o atendimento.

## Arquitetura técnica

O catálogo exige uma modelagem de estoque consistente: veículo, marca, categoria, preço, status, imagens e slug. O status deve ser atualizado sem deixar páginas quebradas; quando uma unidade é vendida, a estratégia correta é preservar o histórico ou redirecionar com contexto, em vez de retornar um 404 sem alternativa.

Dados estruturados `Vehicle` ou `Product`, breadcrumbs e Open Graph melhoram a distribuição dos anúncios em busca e redes sociais. Imagens de veículos também precisam de compressão, proporção estável e texto alternativo descritivo.

## SEO local

O conteúdo combina termos de intenção como revenda de carros em Caraguatatuba, carros usados no Litoral Norte e venda de veículo. A presença de endereço, telefone, avaliações e perfil empresarial ajuda a conectar busca local, confiança e visita física.

## KPIs do cenário ilustrativo

> Números hipotéticos para demonstrar o painel de acompanhamento; não são resultados comprovados da Moura Multicar.

<div class="project-metrics-grid">

<ProjectMetric label="Visualizações de detalhes" :before="1000" :after="1780" before-label="1.000" after-label="1.780" change="+78%" description="Melhor descoberta do inventário disponível." before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="Leads iniciados no WhatsApp" :before="100" :after="144" before-label="100" after-label="144" change="+44%" description="CTA associado ao veículo certo." before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="CCA" :before="68" :after="51.7" before-label="R$ 68,00" after-label="R$ 51,70" change="-24%" description="Maior eficiência na distribuição da mídia." :lower-is-better="true" before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="Tempo médio até contato" :before="18" :after="7" before-label="18 min" after-label="7 min" change="-61%" description="Operação comercial mais rápida e acionável." :lower-is-better="true" before-caption="Antes" after-caption="Depois" />

</div>

## Como medir em produção

O relatório deve atribuir cada conversa a `vehicle_id`, campanha, marca e origem. O KPI de negócio não é o clique isolado: é o lead qualificado, o test-drive agendado, a proposta e a venda. ROAS deve considerar margem do veículo e custo de mídia, não apenas valor bruto anunciado.

## Acessar o projeto

[Visitar o site da Moura Multicar](https://www.mouramulticar.com){target=_blank rel=noreferrer}
