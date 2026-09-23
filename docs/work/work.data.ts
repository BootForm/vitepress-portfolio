import { createContentLoader } from 'vitepress'

export interface WorkItem {
  title: string
  description: string
  image: string
  order: number
  url: string
}

declare const data: WorkItem[]
export { data }

// The glob is relative to docs/ (VitePress's srcDir), not to this file, and matches every case
// study file next to this one, but not this file itself (a .ts file, never matched by *.md) and
// not work/index.md, filtered out below by URL. Runs at build time (and on save in `npm run dev`),
// so adding a new case study file adds both a homepage card and a Work page card automatically,
// with no other file to touch: this is what makes the listing "generated," the same underlying
// mechanism vitepress-blog uses for its post list, just without that repo's tags/dates/RSS.
export default createContentLoader('work/*.md', {
  transform(raw): WorkItem[] {
    return raw
      .filter(({ url }) => url !== '/work/')
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title ?? 'Untitled',
        description: frontmatter.description ?? '',
        image: frontmatter.image ?? '',
        order: frontmatter.order ?? 0,
        url,
      }))
      // Frontmatter `order` keeps the list intentional (your best work first) instead of
      // alphabetical by filename. The home page shows the first 4.
      .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))
  },
})
