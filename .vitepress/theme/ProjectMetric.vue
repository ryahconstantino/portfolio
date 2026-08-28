<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  label: string
  before: number
  after: number
  beforeLabel: string
  afterLabel: string
  change: string
  description: string
  lowerIsBetter?: boolean
  beforeCaption?: string
  afterCaption?: string
}>(), {
  lowerIsBetter: false,
  beforeCaption: 'Before',
  afterCaption: 'After',
})

const scale = computed(() => Math.max(props.before, props.after, 1))
const beforeWidth = computed(() => `${Math.max((props.before / scale.value) * 100, 5)}%`)
const afterWidth = computed(() => `${Math.max((props.after / scale.value) * 100, 5)}%`)
</script>

<template>
  <article class="project-metric" :class="{ 'project-metric--inverse': lowerIsBetter }">
    <header class="project-metric__header">
      <h3>{{ label }}</h3>
      <span class="project-metric__change">{{ change }}</span>
    </header>

    <div class="project-metric__values">
      <div>
        <span>{{ beforeCaption }}</span>
        <strong>{{ beforeLabel }}</strong>
      </div>
      <div>
        <span>{{ afterCaption }}</span>
        <strong>{{ afterLabel }}</strong>
      </div>
    </div>

    <div class="project-metric__chart" role="img" :aria-label="`${label}: antes ${beforeLabel}, depois ${afterLabel}`">
      <div class="project-metric__bar-row">
        <span class="project-metric__bar-label">{{ beforeCaption }}</span>
        <span class="project-metric__track"><span class="project-metric__bar project-metric__bar--before" :style="{ width: beforeWidth }" /></span>
      </div>
      <div class="project-metric__bar-row">
        <span class="project-metric__bar-label">{{ afterCaption }}</span>
        <span class="project-metric__track"><span class="project-metric__bar project-metric__bar--after" :style="{ width: afterWidth }" /></span>
      </div>
    </div>

    <p>{{ description }}</p>
  </article>
</template>

<style scoped>
:global(.project-metrics-grid) {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin: 20px 0 32px;
}

.project-metric {
  min-width: 0;
  margin: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 20px;
  background: linear-gradient(145deg, var(--vp-c-bg-soft), var(--vp-c-bg));
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
}

.project-metric__header,
.project-metric__values,
.project-metric__bar-row {
  display: flex;
  align-items: center;
}

.project-metric__header {
  justify-content: space-between;
  gap: 12px;
}

.project-metric__header h3 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 15px;
  line-height: 1.35;
}

.project-metric__change {
  flex: 0 0 auto;
  border-radius: 999px;
  padding: 5px 9px;
  background: rgba(16, 185, 129, 0.14);
  color: #047857;
  font-size: 12px;
  font-weight: 800;
}

.project-metric--inverse .project-metric__change {
  background: rgba(37, 99, 235, 0.14);
  color: #1d4ed8;
}

.project-metric__values {
  flex-wrap: wrap;
  gap: 28px;
  margin: 20px 0 16px;
}

.project-metric__values div {
  display: grid;
  gap: 3px;
}

.project-metric__values span,
.project-metric__bar-label {
  color: var(--vp-c-text-2);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-metric__values strong {
  color: var(--vp-c-text-1);
  font-size: 22px;
  letter-spacing: -0.03em;
}

.project-metric__chart {
  display: grid;
  gap: 9px;
}

.project-metric__bar-row {
  gap: 10px;
}

.project-metric__bar-label {
  width: 46px;
  flex: 0 0 auto;
  font-size: 9px;
}

.project-metric__track {
  display: block;
  width: 100%;
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--vp-c-divider);
}

.project-metric__bar {
  display: block;
  height: 100%;
  border-radius: inherit;
}

.project-metric__bar--before {
  background: #94a3b8;
}

.project-metric__bar--after {
  background: linear-gradient(90deg, #2563eb, #06b6d4);
}

.project-metric p {
  margin: 16px 0 0;
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.55;
}

@media (max-width: 768px) {
  :global(.project-metrics-grid) {
    grid-template-columns: 1fr;
  }

  .project-metric {
    padding: 16px;
  }

  .project-metric__values strong {
    font-size: 19px;
  }
}
</style>
