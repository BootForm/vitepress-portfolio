<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

// A small facts row for a case study page: who the work was for, what you did, and when. Reads
// the page's own optional `client`, `role` and `year` frontmatter, so each case study file needs
// just one `<CaseFacts />` line, no props. Any field a page doesn't set is left out, and if none
// are set the whole row is skipped (no empty element in the built HTML).
const { frontmatter } = useData()

const facts = computed(() =>
  [
    { label: 'Client', value: frontmatter.value.client, showLabel: true },
    { label: 'Role', value: frontmatter.value.role, showLabel: true },
    // The year reads fine on its own ("2025"), so its label is for screen readers only.
    { label: 'Year', value: frontmatter.value.year, showLabel: false },
  ]
    .filter(({ value }) => value !== undefined && value !== null && String(value).trim() !== '')
    .map((fact) => ({ ...fact, value: String(fact.value) })),
)

// A middle dot before every fact but the first. Kept as one plain string so Tailwind's class
// scanner sees it exactly as written.
const separator = "before:mr-2 before:content-['·'] before:opacity-60"
</script>

<template>
  <!-- `not-prose` keeps this out of the surrounding case study's `prose` styling (and out of
       style.css's revert-layer rule). A <dl> has no unlayered VitePress reset to fight, so plain
       utility classes apply here with no `!`: see AGENTS.md's CSS-layering note. -->
  <dl
    v-if="facts.length"
    class="not-prose -mt-2 mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-black/60 dark:text-white/60"
  >
    <div
      v-for="(fact, i) in facts"
      :key="fact.label"
      class="flex gap-1"
      :class="i > 0 && separator"
    >
      <dt :class="fact.showLabel ? 'font-medium text-black/80 dark:text-white/80' : 'sr-only'">{{ fact.label }}<span v-if="fact.showLabel" aria-hidden="true">:</span></dt>
      <dd>{{ fact.value }}</dd>
    </div>
  </dl>
</template>
