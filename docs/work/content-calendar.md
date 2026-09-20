---
layout: page
title: A content calendar tool for a five-person marketing team
description: Replacing a shared spreadsheet nobody remembered to update.
image: /work/content-calendar.jpg
link: https://example.com
---

<script setup>
import { withBase } from 'vitepress'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<img :src="withBase(frontmatter.image)" alt="" class="aspect-video w-full object-cover">

<div class="prose dark:prose-invert mx-auto max-w-2xl px-6 py-16">

# A content calendar tool for a five-person marketing team

<p class="lead">{{ frontmatter.description }}</p>

<a v-if="frontmatter.link" :href="frontmatter.link" target="_blank" rel="noopener" class="not-prose inline-block rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white! no-underline hover:bg-brand-600">
  Visit the live site ↗
</a>

**The problem.** The shared spreadsheet tracking what was publishing where had four tabs, three
colour-coding systems, and one person who was the only one who understood it.

**What changed.** A single calendar view, one status per item, and a rule that anything not on it
didn't get published. Boring on purpose.

**The result.** The one person who used to be the bottleneck went on a two-week holiday and
nothing missed its date.

[Back to all work](/work/)

</div>
