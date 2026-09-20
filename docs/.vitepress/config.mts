import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // CHANGE ME: your name and a one-line description.
  title: 'Maya Torres',
  description: 'Freelance product designer. Case studies, and a form that actually reaches me.',

  // CHANGE ME if you rename the repo, or set to '/' once you're serving from a custom domain
  // instead of yourname.github.io/vitepress-portfolio/. GitHub Pages serves a repo that isn't
  // named yourname.github.io from a subpath, and every built asset link has to know that subpath
  // at build time, or they all 404 once deployed. Get this wrong and the site looks completely
  // unstyled in production while working fine in `npm run dev`, since the dev server always
  // serves from the root and never hits this.
  base: '/vitepress-portfolio/',

  vite: {
    plugins: [tailwindcss()],
  },

  themeConfig: {
    // CHANGE ME: replace docs/public/logo.svg with your own image (any format, same filename, or
    // update this path to match).
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Work', link: '/work/' },
      { text: 'Contact', link: '/contact' },
    ],

    // No `sidebar` key at all, on purpose: a portfolio is a marketing surface, not documentation.
    // See vitepress-marketing's AGENTS.md for the full reasoning, which applies here identically.
    socialLinks: [
      // CHANGE ME: your links, or delete any you don't want.
      { icon: 'github', link: 'https://github.com/yourname' },
    ],
  },
})
