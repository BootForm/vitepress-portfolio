<script setup lang="ts">
import { withBase } from 'vitepress'

// A reusable card: an image, a title, a short description, and the whole card as one link to its
// own page. Used on both the home page and the Work page, fed by work.data.ts. See that file's
// own comment for how a new case study file becomes a new card automatically.
defineProps<{
  title: string
  description: string
  image: string
  to: string
}>()
</script>

<template>
  <!-- Both `src` and `href` are runtime values here (props, not string literals in markdown), so
       both need withBase() explicitly: see AGENTS.md's link-handling section. This is exactly
       the same rule that applies to a plain markdown page's own dynamic links, just inside a
       component instead. -->
  <!-- The `!`-suffixed classes below force these past VitePress's own unlayered `.vp-doc a`
       styling (brand-colored, underlined), which otherwise wins over Tailwind's own (layered)
       utility classes on any page where this component sits inside `.vp-doc` (the home page),
       even though the exact same classes apply correctly on pages that don't (e.g. the Work
       page). See AGENTS.md's CSS-layering note. -->
  <a
    :href="withBase(to)"
    class="group flex flex-col overflow-hidden rounded-lg border border-black/10 no-underline! transition hover:border-brand-500 dark:border-white/10"
  >
    <img
      :src="withBase(image)"
      :alt="title"
      class="aspect-video w-full object-cover"
    >
    <div class="flex flex-col gap-1 p-4">
      <h3 class="font-semibold text-black! group-hover:text-brand-500! dark:text-white!">{{ title }}</h3>
      <p class="text-sm leading-snug text-black/70! dark:text-white/70!">{{ description }}</p>
    </div>
  </a>
</template>
