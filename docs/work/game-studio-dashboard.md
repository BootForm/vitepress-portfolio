---
layout: page
title: An analytics dashboard for an indie game studio
description: Turning a spreadsheet nobody trusted into a dashboard the whole team actually opened.
image: /work/game-studio-dashboard.jpg
link: https://example.com
---

<script setup>
import { withBase } from 'vitepress'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<img :src="withBase(frontmatter.image)" alt="" class="aspect-video w-full object-cover">

<div class="prose dark:prose-invert mx-auto max-w-2xl px-6 py-16">

# An analytics dashboard for an indie game studio

<p class="lead">{{ frontmatter.description }}</p>

<a v-if="frontmatter.link" :href="frontmatter.link" target="_blank" rel="noopener" class="not-prose inline-block rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white! no-underline hover:bg-brand-600">
  Visit the live site ↗
</a>

**The problem.** Three different people kept three different spreadsheets of the same player
numbers, and none of them agreed. Decisions got made on whichever spreadsheet was open.

**What changed.** One dashboard, pulling from the actual event data instead of a manual export,
with exactly the six numbers the team checked daily and nothing else.

**The result.** The spreadsheets stopped getting updated within a month, on their own, because
nobody needed them anymore.

[Back to all work](/work/)

</div>
