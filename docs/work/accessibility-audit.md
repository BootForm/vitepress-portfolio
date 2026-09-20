---
layout: page
title: An accessibility audit for Harborview Health's patient portal
description: Finding the fixes that actually mattered, not the whole checklist at once.
image: /work/accessibility-audit.jpg
link: https://example.com
---

<script setup>
import { withBase } from 'vitepress'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<img :src="withBase(frontmatter.image)" alt="" class="aspect-video w-full object-cover">

<div class="prose dark:prose-invert mx-auto max-w-2xl px-6 py-16">

# An accessibility audit for Harborview Health's patient portal

<p class="lead">{{ frontmatter.description }}</p>

<a v-if="frontmatter.link" :href="frontmatter.link" target="_blank" rel="noopener" class="not-prose inline-block rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white no-underline hover:bg-brand-600">
  Visit the live site ↗
</a>

**The problem.** An automated scanner returned 340 issues. Nobody had time to fix 340 issues, so
nobody fixed any of them.

**What changed.** A manual pass with a screen reader found the dozen that actually blocked someone
from booking an appointment, ranked by how many people they blocked, not by scanner severity.

**The result.** Twelve fixes shipped in a week instead of 340 sitting in a backlog forever. The
appointment-booking flow, the one that mattered, now works start to finish with a keyboard alone.

[Back to all work](/work/)

</div>
