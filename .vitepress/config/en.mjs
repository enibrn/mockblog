import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Test Nota Root', link: 'dendron/notes/root.md' }
    ]
  }
})
