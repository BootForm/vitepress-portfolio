---
# `layout: page` gives a plain page with no sidebar and no docs-style prose column width, the same
# way the home page uses `layout: home`. Leave this frontmatter out and this becomes a regular docs
# article instead, which is the exact mistake this whole template exists to prevent.
layout: page
title: Work
---

<script setup>
import { data as work } from './work.data.ts'
</script>

<!-- This grid is generated at build time by work.data.ts (createContentLoader), not hand-written.
     Add a new case study file next to this one (with `title`, `description` and `image`
     frontmatter) and it appears here, and on the home page, automatically. See AGENTS.md.
     max-w-6xl, not max-w-3xl, since a real 4-column row needs the room. -->

<div class="mx-auto max-w-6xl px-6 py-16">

<h1 class="mb-8 text-3xl font-bold tracking-tight">Work</h1>

<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  <ProductCard
    v-for="item in work"
    :key="item.url"
    :title="item.title"
    :description="item.description"
    :image="item.image"
    :to="item.url"
  />
</div>

<p v-if="work.length === 0" class="opacity-60">No case studies yet.</p>

</div>
