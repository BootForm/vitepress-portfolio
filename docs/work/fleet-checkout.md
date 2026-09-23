---
layout: page
title: Redesigning checkout for Fleet, a food delivery app
description: Cutting the time from "hungry" to "ordered" on a phone, not a desktop.
image: /work/fleet-checkout.jpg
order: 3
link: https://example.com
---

<script setup>
import { withBase } from 'vitepress'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<img :src="withBase(frontmatter.image)" alt="" class="aspect-video w-full object-cover">

<div class="prose dark:prose-invert mx-auto max-w-2xl px-6 py-16">

# Redesigning checkout for Fleet, a food delivery app

<p class="lead">{{ frontmatter.description }}</p>

<a v-if="frontmatter.link" :href="frontmatter.link" target="_blank" rel="noopener" class="not-prose inline-block rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white! no-underline hover:bg-brand-600">
  Visit the live site ↗
</a>

**The problem.** Fleet's checkout was designed on a desktop monitor and never really rethought
for a thumb on a five-inch screen, one-handed, on the way out the door.

**What changed.** Everything a returning customer needed (address, card, tip) defaulted to their
last order, with one tap to confirm instead of re-entering three screens of information.

**The result.** A returning customer can now reorder their usual in under ten seconds, which
turned out to be most of Fleet's actual order volume.

</div>

<div class="mx-auto max-w-6xl px-6 pb-16">
  <div class="rounded-2xl bg-brand-500 px-6 py-8 text-center shadow-lg sm:px-10 sm:py-10">
    <h2 class="border-t-0! pt-0! text-2xl! font-bold! tracking-tight text-white sm:text-3xl!">Have a project in mind?</h2>
    <p class="mx-auto! mt-3 max-w-md text-center text-white/80">
      Tell me what you're building. I read every message myself and reply within a day or two.
    </p>

[<span class="mt-6 inline-block rounded-md bg-white px-6 py-3 font-medium text-brand-600! hover:bg-white/90">Get in touch</span>](/contact)

  </div>
</div>

<div class="pb-16 text-center text-sm">

[Back to all work](/work/)

</div>
