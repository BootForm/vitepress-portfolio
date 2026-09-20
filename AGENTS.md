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
  time. `work/index.md`'s list of case studies uses this, since it's plain text.
- **A raw HTML `<a href="/path">`** does not, and 404s once deployed to a subpath while working
  fine in `npm run dev`. Never write one for an internal link.
- **A dynamic `:href` binding** (`:href="withBase('/work/checkout-redesign')"`) needs `withBase()`,
  imported from `vitepress`, by hand. `index.md`'s "Selected work" cards use this, because they
  wrap block-level content (a heading and a paragraph inside the link), which plain markdown link
  syntax cannot do.

**`<router-link>` looked like the right tool for the "Selected work" cards and isn't.** It's
vue-router's own component, global in a VitePress site, and in theory should resolve `to="..."` to
a base-aware href the same way `withBase()` does. In practice, tried and confirmed on this exact
page: both `<RouterLink>` and lowercase `<router-link>`, wrapping the same block-level card
content, rendered as empty `<!---->` comment placeholders in the built HTML, no visible content,
no error, no build warning. The working fix was the same `:href="withBase(...)"` pattern
`vitepress-blog` already uses for its dynamic links, on a plain `<a>` instead. **If you're tempted
to reach for `<router-link>` for a link wrapping more than plain text, don't: use `withBase()`
directly, and verify by grepping the actual built `dist/` HTML for the real `href`, not by trusting
that the page rendered without an error** (this failure mode produces literally nothing on the
page, not visibly broken output, so a passing build and a glance at `npm run dev` both miss it).

## The constraints that define this repo

- **A real build step**, same as `vitepress-marketing` and `vitepress-blog`. Node.js, `npm
  install`, a terminal.
- **`base` in `config.mts` must match how the site is actually served.** Same reasoning as
  `vitepress-marketing`'s `AGENTS.md`: a GitHub Pages project site is served from a subpath, and
  every built asset link needs to know that subpath at build time or it 404s in production while
  working fine in `npm run dev`.
- **Tailwind via `@tailwindcss/vite`, plus `@tailwindcss/typography`**, installed from the start.
  `work/index.md` and both example case studies are plain markdown prose, wrapped in `prose
  dark:prose-invert`, the same reasoning `vitepress-marketing`'s `AGENTS.md` documents in full: a
  markdown file's rendered headings, paragraphs and lists carry no classes at all, and Tailwind's
  preflight reset strips their default browser styling, so without `prose` they render completely
  flat.
- **Two or three case studies, hand-maintained, not `vitepress-blog`'s generated list.** A
  portfolio doesn't need tags, dates, pagination or RSS; that repo exists for when that's actually
  the point. Don't add `createContentLoader`-based listing here.
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
