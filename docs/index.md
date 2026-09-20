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
     link. Wider than the rest of the home page's sections (max-w-6xl, not max-w-3xl/max-w-2xl),
     since a real 4-column row needs the room; a narrower container would cramp it. -->

<div class="mx-auto max-w-6xl px-6 py-16">

<h2 class="mb-6 text-2xl font-bold tracking-tight">Selected work</h2>

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

<!-- ───── Call to action ─────
     A contained, elevated card (rounded-2xl, its own shadow), not a flat edge-to-edge tinted
     band: the rest of the home page is a series of centered max-w-* sections, and a full-bleed
     band broke that rhythm and read as flat rather than as a deliberate call to action. Solid
     brand-colour background with an inverted (white background, brand-coloured text) button, the
     one deliberate exception to "primary buttons are always bg-brand-500 with white text", since this
     button sits ON a brand-coloured surface, so inverting it is what keeps it legible, not a
     contradiction of that rule.

     The link itself is still markdown syntax ([<span>...</span>](/contact)), not a raw <a href>
     or a Vue binding, because the link text is a single styled inline element, not block-level
     content: the same "put classes on an inline element inside link text" trick pricing.md uses
     in vitepress-marketing, which still gets base-path handling for free since it's real markdown
     link syntax underneath. See AGENTS.md's link-handling section for the other two cases this
     doesn't cover. -->

<div class="mx-auto max-w-6xl px-6 py-16">
  <div class="rounded-2xl bg-brand-500 px-6 py-8 text-center shadow-lg sm:px-10 sm:py-10">
    <h2 class="border-t-0! pt-0! text-2xl! font-bold! tracking-tight text-white sm:text-3xl!">Have a project in mind?</h2>
    <p class="mx-auto! mt-3 max-w-md text-center text-white/80">
      Tell me what you're building. I read every message myself and reply within a day or two.
    </p>

[<span class="mt-6 inline-block rounded-md bg-white px-6 py-3 font-medium text-brand-600! hover:bg-white/90">Get in touch</span>](/contact)

  </div>
</div>
