import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
import mdx from '@astrojs/mdx';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'nord',
      wrap: true,
    },
  },
  site: 'https://einenlum.github.io',
  base: '/blog-astro',
  trailingSlash: 'always',
});
