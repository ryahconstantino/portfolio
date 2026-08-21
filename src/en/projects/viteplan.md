---
title: VitePlan System | Case study
description: Digital acquisition and conversion architecture for a healthcare benefits card.
---

# VitePlan System

## Overview

VitePlan is a healthcare benefits card offering individual and family plans from R$ 49.90 per month. Members get discounts on consultations, exams, medication and other healthcare specialties, with no waiting period or age limit.

## Business challenge

- Explain the difference between a benefits card and health insurance.
- Reduce friction between plan discovery and commercial assistance.
- Organize benefits, specialties and terms into a trackable architecture.
- Build an acquisition foundation for campaigns and experimentation.

## Solution

The information architecture follows user intent: benefits, plans, specialties, affiliates and contact. The main flow uses contextual WhatsApp CTAs. In production, each action should carry UTM parameters and a plan identifier into the CRM.

The SEO strategy uses plan and specialty pages to cover high-intent searches without promising coverage the product does not provide. Responsive components, progressive image loading, conversion events and A/B testing support the same commercial goal.

## Illustrative KPI scenario

> These figures are simulated planning examples, not audited VitePlan results.

<div class="project-metrics-grid">

<ProjectMetric label="Visitor-to-lead conversion" :before="3.2" :after="4.8" before-label="3.2%" after-label="4.8%" change="+50%" description="Clearer offer and contextual CTA." />

<ProjectMetric label="CCA" :before="25.6" :after="18.4" before-label="R$ 25.60" after-label="R$ 18.40" change="-28%" description="More efficient media allocation." :lower-is-better="true" />

<ProjectMetric label="Qualified leads" :before="100" :after="142" before-label="100" after-label="142" change="+42%" description="Form and message with stronger commercial context." />

<ProjectMetric label="Media ROAS" :before="2.1" :after="3.1" before-label="2.1x" after-label="3.1x" change="+48%" description="Attributed revenue divided by spend." />

</div>

## Measurement plan

The primary KPI should be a confirmed sale, not a WhatsApp click. Track `session > plan view > CTA > answered conversation > sale`. GA4 and Search Console measure behavior and reach; the CRM should own revenue, margin and lead quality.

## Visit the live project

[Visit the VitePlan website](https://beneficios.viteplan.com.br/){target=_blank rel=noreferrer}
