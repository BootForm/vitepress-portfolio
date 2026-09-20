---
layout: page
title: Onboarding redesign for a personal finance app
description: Getting someone to their first real number, not a tutorial, in under a minute.
image: /work/finance-onboarding.jpg
link: https://example.com
---

<script setup>
import { withBase } from 'vitepress'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<img :src="withBase(frontmatter.image)" alt="" class="aspect-video w-full object-cover">

<div class="prose dark:prose-invert mx-auto max-w-2xl px-6 py-16">

# Onboarding redesign for a personal finance app

<p class="lead">{{ frontmatter.description }}</p>

<a v-if="frontmatter.link" :href="frontmatter.link" target="_blank" rel="noopener" class="not-prose inline-block rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white no-underline hover:bg-brand-600">
  Visit the live site ↗
</a>

**The problem.** New users sat through nine onboarding screens explaining features before ever
seeing their own spending, and most of them never made it to screen nine.

**What changed.** Connect one account, see one real number (this month's spending) within the
first minute, and explain every other feature only when someone actually reached for it.

**The result.** The number of people who connected a second account, the real sign someone was
sticking around, roughly doubled.

[Back to all work](/work/)

</div>
