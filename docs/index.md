---
# CHANGE ME: everything in this frontmatter block. `layout: home` is what makes this a marketing
# homepage instead of a documentation page. See AGENTS.md's "one rule" section.
layout: home

hero:
  name: "Maya Torres"
  text: "Freelance product designer."
  tagline: I design and ship interfaces for small teams who need a senior designer part-time, not a full-time hire.
  actions:
    - theme: brand
      text: See my work
      link: /work/
    - theme: alt
      text: Hire me
      link: /contact

features:
  - title: Product design
    details: Wireframes through to shipped UI, in Figma and in code review.
  - title: Design systems
    details: Component libraries a small team can actually maintain without a dedicated designer.
  - title: Audits
    details: A focused review of an existing product, with specific, prioritized fixes.
---

<script setup>
import { withBase } from 'vitepress'
</script>

<!-- ───── Selected work ─────
     Hand-written links, not a generated list. Two or three case studies is normal for a
     portfolio; see AGENTS.md for why this repo doesn't reuse vitepress-blog's content-loader
     approach. Uses a Vue binding (:href="withBase(...)"), not a raw <a href>, because these links
     wrap block-level content (a heading and a paragraph), not plain text: a raw <a> would silently
     404 once deployed to a subpath, and plain markdown link syntax can't wrap block content like
     this. See AGENTS.md's link-handling section for the full explanation, including a
     <router-link>-based approach that looks like it should work here and doesn't. -->

<div class="mx-auto max-w-3xl px-6 py-16">

<h2 class="mb-6 text-2xl font-bold tracking-tight">Selected work</h2>

<div class="grid gap-6 sm:grid-cols-2">
  <a :href="withBase('/work/checkout-redesign')" class="flex flex-col gap-2 rounded-lg border border-black/10 p-5 hover:border-brand-500 dark:border-white/10">
    <h3 class="font-semibold">Redesigning checkout for Northwind Goods</h3>
    <p class="text-sm opacity-70">Cutting a 6-step checkout down to 2, and what broke along the way.</p>
  </a>
  <a :href="withBase('/work/design-system')" class="flex flex-col gap-2 rounded-lg border border-black/10 p-5 hover:border-brand-500 dark:border-white/10">
    <h3 class="font-semibold">A design system three engineers could maintain</h3>
    <p class="text-sm opacity-70">Building for a team with no dedicated design tooling budget.</p>
  </a>
</div>

</div>

<!-- ───── Testimonial ───── -->

<div class="mx-auto max-w-2xl px-6 py-16">

<h2 class="mb-6 text-2xl font-bold tracking-tight">What clients say</h2>

<blockquote class="border-l-2 border-brand-500 pl-5 text-lg italic opacity-80">
Maya joined for what was supposed to be a two-week audit and ended up rebuilding half our
onboarding flow. Conversion is up, and so is the number of support tickets that aren't about
being confused.
</blockquote>

<p class="mt-4 text-sm opacity-50">(a happy client, not yet you)</p>

</div>
