# A portfolio site for VitePress

A portfolio without a working contact form is just a gallery. This template is
[vitepress-marketing](https://github.com/BootForm/vitepress-marketing)'s sibling, built for a
freelancer or small studio: a home page, real case studies, and a form that actually reaches you.

By the end you will have a home page, two example case studies, and a working contact form, built
with [VitePress](https://vitepress.dev) and deployed automatically by GitHub Actions.

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
> change `base: '/vitepress-portfolio/'` to match (`/your-repo-name/`). Get this wrong and the
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
- **`docs/index.md`**: the home page. The `hero` and `features` blocks are plain YAML frontmatter,
  and the "Selected work" cards below them link to your case studies.
- **`docs/work/checkout-redesign.md`** and **`docs/work/design-system.md`**: the two example case
  studies. Replace them with your own work, and update `docs/work/index.md`'s list and the two
  cards on the home page to match.

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

**A link on the home page goes nowhere, or 404s.** If you added a new "Selected work" card, make
sure its `href` uses `withBase(...)`, not a plain string. See `AGENTS.md`'s link-handling section;
this is the single easiest mistake to make on this page specifically.

**The form shows raw text instead of a nice page.** You are seeing the response as JSON. That is
normal for now. Once you claim the form you can set a redirect so people land back on your site.

## Licence

MIT. Do whatever you like with it, including using it for a real business.
