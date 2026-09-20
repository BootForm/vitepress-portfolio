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
import { data as work } from './work/work.data.ts'
</script>

<!-- ───── Selected work ─────
     Generated at build time by work/work.data.ts (createContentLoader), the same mechanism
     vitepress-blog uses for its post list, scoped down to image/title/description instead of that
     repo's tags/dates/RSS. Add a new case study file under work/ (with `title`, `description` and
     `image` frontmatter) and a card appears here and on the Work page automatically, with no
     other file to touch. <ProductCard> is a real reusable component (docs/.vitepress/theme/components),
     not a one-off; see AGENTS.md for why it uses withBase() internally on both its image and its
     link. -->

<div class="mx-auto max-w-3xl px-6 py-16">

<h2 class="mb-6 text-2xl font-bold tracking-tight">Selected work</h2>

<div class="grid gap-6 sm:grid-cols-2">
  <ProductCard
    v-for="item in work"
    :key="item.url"
    :title="item.title"
    :description="item.description"
    :image="item.image"
    :to="item.url"
  />
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
