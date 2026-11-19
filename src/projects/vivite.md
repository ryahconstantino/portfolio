---
title: Vivite Saúde | Case study
description: Presença digital, especialidades médicas e aquisição local para uma clínica multidisciplinar em Sorocaba.
---

# Vivite Saúde

## Visão geral

A Vivite Saúde é uma clínica multidisciplinar em Vila Lucy, Sorocaba, com mais de 1.000 m², consultas, exames laboratoriais e de imagem. O site apresenta mais de 19 especialidades, agilidade de agendamento, atendimento humanizado e uma jornada clara até o WhatsApp ou telefone.

A proposta posiciona a clínica como complemento ao SUS: cuidado próximo, em poucos dias, sem substituir o sistema público, mas oferecendo uma alternativa quando a espera não é uma opção.

## Desafio de negócio

Uma clínica com muitas especialidades precisa explicar o que faz, para quem faz e como marcar, sem transformar a home em um menu burocrático. O visitante chega com intenções diferentes: clínico geral rápido, exame específico, especialidade da família ou simplesmente entender se a estrutura inspira confiança.

O desafio foi organizar prova social, especialidades, exames, equipe, endereço e horários em uma jornada local que reduz a fricção até o agendamento.

## Solução entregue

- Hero com promessa de cuidado próximo e CTA de agendamento.
- Blocos de autoridade com pacientes atendidos, volume de exames, especialidades e área construída.
- Grade de especialidades com caminho próprio para clínico geral, pediatria, ginecologia e demais áreas.
- Destaque para exames laboratoriais e de imagem, incluindo Holter, MAPA, ultrassom, raio X e mamografia.
- Prova de estrutura, equipe e responsável técnico para reforçar confiança.
- Endereço, horários e telefones visíveis, com WhatsApp como rota principal de conversão.
- Conteúdo preparado para SEO local em Sorocaba e campanhas de especialidade.

## Tecnologia, tracking e SEO

A arquitetura deve conectar home, especialidades, exames, equipe e contato com metadados únicos. Páginas de especialidade e exame precisam de título, description, heading e dados estruturados `MedicalClinic` / `MedicalProcedure` consistentes com o Perfil da Empresa no Google.

Cada CTA de WhatsApp e telefone deve preservar UTM, especialidade e tipo de exame até o atendimento. Eventos como `view_specialty`, `view_exam`, `click_whatsapp`, `click_phone` e `generate_lead` permitem comparar intenção clínica, imagem e laboratório. Imagens do espaço exigem WebP, dimensões explícitas e lazy loading para proteger LCP sem perder a percepção de acolhimento.

## KPIs do cenário ilustrativo

> Cenário demonstrativo para orientar instrumentação; não representa resultados auditados da Vivite Saúde.

<div class="project-metrics-grid">

<ProjectMetric label="Conversas de agendamento" :before="100" :after="148" before-label="100" after-label="148" change="+48%" description="CTA contextualizado por especialidade e exame." before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="CCA" :before="38" :after="27.4" before-label="R$ 38,00" after-label="R$ 27,40" change="-28%" description="Melhor alinhamento entre busca local e oferta." :lower-is-better="true" before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="Impressões locais qualificadas" :before="8000" :after="12480" before-label="8.000" after-label="12.480" change="+56%" description="Cobertura para especialidades e exames em Sorocaba." before-caption="Antes" after-caption="Depois" />

<ProjectMetric label="Taxa de avanço para contato" :before="4.2" :after="6.1" before-label="4,2%" after-label="6,1%" change="+45%" description="Jornada mais clara da especialidade ao agendamento." before-caption="Antes" after-caption="Depois" />

</div>

## Como medir em produção

O KPI primário é o agendamento realizado, não apenas o clique. O funil recomendado é `sessão > especialidade ou exame visualizado > CTA > conversa respondida > consulta ou exame marcado`. O CRM deve registrar especialidade, tipo de exame, origem, campanha e unidade. Dados de endereço, telefone e horário precisam permanecer idênticos no site, no Google e no atendimento.

## Acessar o projeto

[Visitar o site da Vivite Saúde](https://www.vivite.com.br){target=_blank rel=noreferrer}
