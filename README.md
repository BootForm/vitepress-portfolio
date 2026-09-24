# A portfolio site for VitePress

A portfolio without a working contact form is just a gallery. This template is
[vitepress-marketing](https://github.com/BootForm/vitepress-marketing)'s sibling, built for a
freelancer or small studio: a home page, real case studies, and a form that actually reaches you.

By the end you will have a home page, eight example case studies in a generated grid, and a
working contact form, built with [VitePress](https://vitepress.dev) and deployed automatically by
GitHub Actions.

**[See what you are building →](https://bootform.github.io/vitepress-portfolio/)**

---

## Before you start

You need:

- A free GitHub account.
- [Node.js](https://nodejs.org) 20 or later installed on your computer.
- Some comfort with a terminal. `git clone`, `npm install`, `npm run dev`, that level.

Don't have some of this yet, or not sure how? [Setting up your
computer](https://bootform.com/docs/computer-setup) walks through installing Git and Node.js, a
basic terminal tutorial, and installing and using VS Code, from scratch.

If any of that sounds like too much right now, [first-website](https://github.com/BootForm/first-website)
needs none of it and still ends with a real site and a working form.

---

## Step 1: Make your own copy

Click **Use this template**, then **Create a new repository**. Name it `vitepress-portfolio`, or
whatever you like.

> **Naming it something other than `vitepress-portfolio`?** Open `docs/.vitepress/config.mts` and
> change `base: '/vitepress-portfolio/'` (and the favicon path under `head`, in the same file) to match (`/your-repo-name/`). Get this wrong and the
> deployed site looks completely unstyled, while `npm run dev` still works fine locally, since the
> dev server never uses `base`.

Then clone *your* new repository to your computer:

```bash
git clone https://github.com/yourname/vitepress-portfolio.git
cd vitepress-portfolio
npm install
npm run dev
```

Open the address it prints. That's your site, running on your own computer. It still says Maya
Torres. We'll fix that next.

---

## Step 2: Make it yours

Look for the lines marked `CHANGE ME`, across a few files:

- **`docs/.vitepress/config.mts`**: your name, site description, and the nav links.
- **`docs/public/logo.svg`**: your logo. Replace the file itself (any image format works, keep the
  filename `logo.svg` or update the two places that reference it, listed in `AGENTS.md`) and it
  updates in both the header and the footer.
- **`docs/.vitepress/theme/style.css`**: your brand colour. One value, used everywhere: buttons,
  links, VitePress's own accent colour.
- **`docs/index.md`**: the home page. The `hero` and `features` blocks are plain YAML frontmatter.
  The "Selected work" cards below them, and the Work page's own grid, are both generated: neither
  needs editing when you add or remove a case study.
- **`docs/work/*.md`**: eight example case studies, enough to see the grid at its full 4-column
  width. Each one's frontmatter (`title`, `description`, `image`, `order`, and an optional `link` to
  a live site) is what shows up on its card, and `order` sets where it sits in the grid (the home
  page shows the first 4); the markdown below that is the page itself, with the same
  `image` reused as a hero banner at the top. The images that ship with this template are real
  photos, not mockups: free-to-use ([Unsplash License](https://unsplash.com/license), via
  [Picsum Photos](https://picsum.photos)), so the demo looks like a real site, but they're
  standing in for actual screenshots of your own work. Replace them before this goes live. Delete
  the ones you don't need; the grid and column count adjust automatically.
- **`docs/contact.md`**: the hero heading, and the location, phone and email in the left-hand
  info column (or delete any of those three blocks you don't want to list).

**Adding a new case study:** copy one of the example files, change its frontmatter and body, and
you're done. It appears as a card on both the home page and the Work page automatically, with
no other file to touch. Deleting a case study file removes its card the same way.

> **Picking a colour is the hard part.** If you have no idea, `--color-brand-500: #2563eb` (a
> plain blue) is a safe default.

---

## Step 3: Make the contact form actually work

Here is the bit most tutorials skip.

A static site has no program running behind it, so there is nowhere for a form to send anything.
We will use [BootForm](https://bootform.com), because you can point a form at it and it works
immediately, with no account.

**3a. Generate your form ID.**

It is just a random UUID, and it has to be yours alone. Open BootForm's own [UUID
generator](https://bootform.com/uuidgenerator) and copy what it shows you (or run
`crypto.randomUUID()` in any browser console). You'll get something like
`11111111-1111-4111-8111-111111111111`, though a real one won't repeat digits like that.

> **Use your own.** Do not use the one printed above, and do not use a friend's. Whoever claims a
> form ID first owns it, and everything sent to it goes to them. Yours should be a fresh random one
> that nobody else has seen.

**3b. Paste it into `docs/contact.md`**, replacing `__YOUR_FORM_ID__` in the `action` attribute.

**3c. Try it, then claim it** at the claim link it gives you, **before** the site goes live
publicly. Held submissions are kept for 48 hours before they're deleted.

---

## Step 4: Deploy it

```bash
git add -A
git commit -m "Make it mine"
git push
```

In your repository, **Settings → Pages → Source → GitHub Actions** (not "deploy from a branch").
The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every push to `main`.

**Optional: a real domain.** The same steps as
[one-page-site's Step 5](https://github.com/BootForm/one-page-site#step-5-put-it-on-your-own-domain)
apply here: a `CNAME` file in `docs/public/`, DNS records at your registrar, then **Enforce HTTPS**
in the same Pages settings. Also change `base: '/vitepress-portfolio/'` to `base: '/'` in
`docs/.vitepress/config.mts`, since a custom domain serves from the root, not a subpath.

---

## That's it

You have a real portfolio, with case studies and a working contact form, built the way VitePress
is meant to be used for this, not the docs-site defaults.

### Where to go next

- [`site-skills`](https://github.com/BootForm/site-skills) if you use Claude Code: commands to add
  page sections, add a new kind of content (books, team members, events), change the theme and
  swap icons, all following this template's conventions.
- [`site-sections`](https://bootform.github.io/site-sections/) for copy-paste page sections (heroes,
  pricing, FAQs, footers) that survive VitePress's own styles.
| | |
|---|---|
| **A blog** | [vitepress-blog](https://github.com/BootForm/vitepress-blog) if you want to write about your work too, with real post tags and RSS. |
| **A fuller marketing site** | [vitepress-marketing](https://github.com/BootForm/vitepress-marketing) if you need a pricing page and more sections than a portfolio calls for. |
| **More form options** | File uploads, autoresponders, Discord and Slack: [bootform.com/docs](https://bootform.com/docs/). |

### Stuck?

Open an [issue](https://github.com/BootForm/vitepress-portfolio/issues) and say what happened.

---

## Frequently hit problems

**`npm run build` fails.** Check `node --version`; this needs Node.js 20 or later.

**The site deploys but looks completely unstyled.** `base` in `docs/.vitepress/config.mts` almost
certainly doesn't match your actual repo name. See the note in Step 1.

**A new case study doesn't show up as a card.** Check its frontmatter has `title`, `description`
and `image` set, and that the file lives directly in `docs/work/` (not a subfolder), matching
`work/work.data.ts`'s `work/*.md` pattern.

**A card's image is broken, or a card links nowhere.** These are both built from runtime data
(`ProductCard.vue`'s props), not markdown text, so if you're editing that component directly
rather than just adding a case study file, see `AGENTS.md`'s link-handling section: both `:src`
and `:href` need `withBase(...)`, not a plain string.

**The form shows raw text instead of a nice page.** You are seeing the response as JSON. That is
normal for now. Once you claim the form you can set a redirect so people land back on your site.

## Licence

MIT. Do whatever you like with it, including using it for a real business.
