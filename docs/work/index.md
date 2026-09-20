---
# `layout: page` gives a plain page with no sidebar and no docs-style prose column width, the same
# way the home page uses `layout: home`. Leave this frontmatter out and this becomes a regular docs
# article instead, which is the exact mistake vitepress-marketing's AGENTS.md (and this repo's own)
# warns against.
layout: page
title: Work
---

<!-- `prose` (from @tailwindcss/typography) styles plain markdown (headings, paragraphs, lists,
     links) without a class on every element. This list uses ordinary markdown link syntax
     (`[text](url)`), not a Vue binding, because it's plain text, not the rich cards on the home
     page; plain markdown links already get base-path handling for free at build time. See
     AGENTS.md. -->
<div class="prose dark:prose-invert mx-auto max-w-2xl px-6 py-16">

# Work

<!-- CHANGE ME: this list is hand-maintained, on purpose. A portfolio usually has a handful of
     case studies, not enough to need vitepress-blog's generated post list, tags, and RSS. Add a
     link here each time you add a case study file next to this one. -->

- [Redesigning checkout for Northwind Goods](/work/checkout-redesign)
- [A design system three engineers could maintain](/work/design-system)

</div>
