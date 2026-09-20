---
layout: page
title: Redesigning checkout for Northwind Goods
# CHANGE ME: `description` shows on this case study's card, on both the home page and the Work
# page. `image` is that same card's thumbnail, and this page's own hero banner below. The current
# image is a real, freely-licensed photo (Unsplash, via Picsum Photos), not a screenshot of actual
# work: swap it for one of your own before this goes live.
description: Cutting a 6-step checkout down to 2, and what broke along the way.
image: /work/checkout-redesign.jpg
# CHANGE ME: an external link, "visit the live site" or similar. Delete this line (and the link
# block below) if there's nothing public to link to.
link: https://example.com
---

<script setup>
import { withBase } from 'vitepress'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<!-- The hero image is a runtime binding (`frontmatter.image`), not a literal path in markdown, so
     it needs withBase() by hand, same as ProductCard's own image. See AGENTS.md. -->
<img :src="withBase(frontmatter.image)" alt="" class="aspect-video w-full object-cover">

<!-- `prose` (from @tailwindcss/typography) styles the plain markdown below it (headings,
     paragraphs) without a class on every element. See AGENTS.md. -->
<div class="prose dark:prose-invert mx-auto max-w-2xl px-6 py-16">

# Redesigning checkout for Northwind Goods

<p class="lead">{{ frontmatter.description }}</p>

<a v-if="frontmatter.link" :href="frontmatter.link" target="_blank" rel="noopener" class="not-prose inline-block rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white no-underline hover:bg-brand-600">
  Visit the live site ↗
</a>

*CHANGE ME: this is an example case study. Replace it with your own, or delete it and start
fresh.*

**The problem.** Northwind's checkout was six steps long, and roughly a third of carts were
abandoned somewhere between step two and step four, mostly at a mandatory account creation screen.

**What changed.** Guest checkout became the default, account creation moved to after the order
confirmed, and the six steps collapsed into two screens: one for shipping and payment together,
one for review. Nothing about the actual payment processing changed, just the number of decisions
a shopper had to make before they could complete one.

**The result.** Cart abandonment at the account-creation step dropped by most of what it used to
be. The lesson worth keeping: the account wasn't the problem, asking for it at the wrong moment
was.

[Back to all work](/work/)

</div>
