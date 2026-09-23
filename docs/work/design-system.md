---
layout: page
title: A design system three engineers could maintain
# CHANGE ME: `description` shows on this case study's card, on both the home page and the Work
# page. `image` is that same card's thumbnail, and this page's own hero banner below. The current
# image is a real, freely-licensed photo (Unsplash, via Picsum Photos), not a screenshot of actual
# work: swap it for one of your own before this goes live.
description: Building for a team with no dedicated design tooling budget.
image: /work/design-system.jpg
order: 1
# CHANGE ME: an external link, "visit the live site" or similar. Delete this line (and the link
# block below) if there's nothing public to link to.
link: https://example.com
---

<script setup>
import { withBase } from 'vitepress'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<img :src="withBase(frontmatter.image)" alt="" class="aspect-video w-full object-cover">

<div class="prose dark:prose-invert mx-auto max-w-2xl px-6 py-16">

# A design system three engineers could maintain

<p class="lead">{{ frontmatter.description }}</p>

<a v-if="frontmatter.link" :href="frontmatter.link" target="_blank" rel="noopener" class="not-prose inline-block rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white! no-underline hover:bg-brand-600">
  Visit the live site ↗
</a>

*CHANGE ME: another example case study. Two case studies, linked from `work/index.md`, is enough
to show the pattern; delete both and write your own whenever you're ready.*

**The problem.** A small team had three slightly different button components, none of them quite
matching the mockups, because nobody owned "the design system" as a real job.

**What changed.** Instead of a large component library nobody would keep updated, the actual
deliverable was a dozen components, each with exactly one variant, plus a short document
explaining when to add a thirteenth instead of a prop. Small enough that any of the three
engineers could maintain it without design involvement for every change.

**The result.** New screens stopped introducing new one-off button styles, and the one place that
did need a real design review (a genuinely new pattern) got flagged automatically, because it
didn't fit anything already in the library.

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
