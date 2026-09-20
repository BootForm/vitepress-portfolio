# Working in this repo

This is a teaching template: a portfolio for a freelancer or small studio, built with VitePress,
configured as a marketing site instead of the documentation site its defaults assume. Someone
(human or AI agent) clones it, edits a few files, and gets a real multi-page site with case
studies and a working contact form. Keep it that way.

## The one rule this whole org's VitePress templates exist to teach

**Every page needs `layout: home` or `layout: page` in its frontmatter. Never leave a marketing
page on VitePress's default `layout: doc`.** See `vitepress-marketing`'s `AGENTS.md` for the full
reasoning; every page in this repo already follows it.

## Internal links: three different mechanisms, three different failure modes

This repo hits every variant of the base-path problem `vitepress-marketing` and `vitepress-blog`
each hit one of individually:

- **A literal markdown link** (`[text](/work/)`) gets `base` handling automatically, at build
  time. The "Back to all work" link in each case study uses this, since it's plain text.
- **A raw HTML `<a href="/path">`** does not, and 404s once deployed to a subpath while working
  fine in `npm run dev`. Never write one for an internal link.
- **A dynamic `:href` (or `:src`) binding built from runtime data** needs `withBase()`, imported
  from `vitepress`, by hand: `ProductCard.vue`'s image and link, and each case study page's own
  hero image (bound to `frontmatter.image`), are all this case. Neither goes through markdown-it's
  link transform at all, since neither is markdown-syntax text.

**`<router-link>` looked like the right tool for a card wrapping block-level content and isn't.**
It's vue-router's own component, global in a VitePress site, and in theory should resolve `to="..."`
to a base-aware href the same way `withBase()` does. In practice, tried and confirmed on an earlier
version of this exact page: both `<RouterLink>` and lowercase `<router-link>`, wrapping a heading
and a paragraph, rendered as empty `<!---->` comment placeholders in the built HTML, no visible
content, no error, no build warning. `ProductCard.vue`'s `:href="withBase(to)"` is the fix that
actually works. **If you're tempted to reach for `<router-link>` for a link wrapping more than
plain text, don't: use `withBase()` directly, and verify by grepping the actual built `dist/` HTML
for the real `href`, not by trusting that the page rendered without an error** (this failure mode
produces literally nothing on the page, not visibly broken output, so a passing build and a glance
at `npm run dev` both miss it).

## The constraints that define this repo

- **A real build step**, same as `vitepress-marketing` and `vitepress-blog`. Node.js, `npm
  install`, a terminal.
- **`base` in `config.mts` must match how the site is actually served.** Same reasoning as
  `vitepress-marketing`'s `AGENTS.md`: a GitHub Pages project site is served from a subpath, and
  every built asset link needs to know that subpath at build time or it 404s in production while
  working fine in `npm run dev`.
- **Tailwind via `@tailwindcss/vite`, plus `@tailwindcss/typography`**, installed from the start.
  Each case study's own body text is plain markdown prose, wrapped in `prose dark:prose-invert`,
  the same reasoning `vitepress-marketing`'s `AGENTS.md` documents in full: a markdown file's
  rendered headings, paragraphs and lists carry no classes at all, and Tailwind's preflight reset
  strips their default browser styling, so without `prose` they render completely flat.
- **The case study grid is generated, not hand-written.** `docs/work/work.data.ts` uses
  `createContentLoader('work/*.md', ...)`, the same mechanism `vitepress-blog` uses for its post
  list, scoped down to just `title`/`description`/`image` (no tags, dates, pagination or RSS; that
  repo exists for when those are actually the point). Both the home page's "Selected work" section
  and the Work page itself read from this one loader and `v-for` a `<ProductCard>` per entry.
  **Adding a new case study means adding one `.md` file under `docs/work/` with `title`,
  `description` and `image` frontmatter, and nothing else.** It appears on both pages
  automatically, confirmed by actually adding a throwaway file and rebuilding while developing
  this repo, not just by reading the loader code and assuming it works.
- **`ProductCard.vue` (`docs/.vitepress/theme/components/`) is a real, original component**,
  registered globally in `theme/index.ts`'s `enhanceApp` (the same convention the real
  bootform.com marketing site uses for its own reusable components). It is not copied from any
  third-party component library, CodyHouse included: plain Tailwind utility classes, no external
  UI kit dependency. Keep it that way if you extend it.
- **A case study's own page reuses its `image` frontmatter as a full-width hero banner**, above
  the `prose`-wrapped body, via `frontmatter.image` bound through `useData()` and `withBase()`.
  Its optional `link` frontmatter (an external URL, "visit the live site") renders as a button
  right under the description if present, and is simply omitted (`v-if="frontmatter.link"`) if
  not; it's an ordinary external absolute URL, so it never needs `withBase()` itself.
- **The site-wide footer is a `theme/index.ts` override, not a `themeConfig.footer` entry**, and
  the logo is one file (`docs/public/logo.svg`) referenced twice by two different mechanisms (the
  header's built-in `logo:` config option, base-prefixed automatically; the footer's own `<img>`,
  needing `withBase()` by hand). See `vitepress-marketing`'s `AGENTS.md` for the full explanation
  of both; this repo copies the same pattern exactly.
- **Comments in the frontmatter and config are the lesson**, not clutter. Keep `CHANGE ME` markers
  where the reader is meant to edit, and keep them rare enough to still mean something.

## The form

`contact.md`'s form ships the literal placeholder `https://f.bootform.com/__YOUR_FORM_ID__`.

**Never replace it with a real form ID.** A form ID is the entire claim credential: whoever claims
one first owns it permanently, and every fork then delivers its visitors' messages to that person.
The reader generates their own in step 3 of the README. This is not negotiable and is not a
placeholder-for-convenience.

The honeypot input must stay. It is hidden, unlabelled to screen readers, and filtering depends on
it being submitted empty.

**Every input needs a visible border and a focus ring, not just `outline-none`.** An early version
of this form used `border-black/15`, faint enough to be hard to see against the page background,
and relied on `focus:border-brand-500` alone for focus feedback. `border-black/30` (light) /
`border-white/30` (dark) plus `focus:ring-2 focus:ring-brand-500/25` is the fixed version, and
matches the convention `first-website`/`one-page-site` already use (`focus:ring-2
focus:ring-accent/25`), so keep new form fields consistent with it.

`contact.md` is two columns on a wide screen (`grid-cols-1 md:grid-cols-2`): contact details on
the left (location with a plain Google Maps search link, phone, email, each an ordinary external
`<a href>` so none of them need `withBase()`), the form on the right in its own bordered card.
This page exists to make the case for BootForm's own form, not just host one, so it gets more
visual treatment than a bare form would.

## Writing style

- Second person, present tense, short sentences.
- Say what will happen before asking them to run something, and say what they should see after.
- **No em dashes or en dashes.** Use a comma, a colon, a full stop, or brackets.
- No AI attribution in commits or pull requests, here or anywhere else in this organisation.
- Never claim BootForm offers EU data residency, a DPA, or an uptime SLA. It does not.

## Before changing anything

Run `npm run build` locally before committing, and check the actual built HTML in
`docs/.vitepress/dist/` for what a link's real `href` ended up being, not just whether the page
rendered without an error. The `<router-link>` failure documented above produced a perfectly
successful build and a page that looked fine in every way except the two links that were supposed
to be there weren't.
