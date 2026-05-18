import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://generics.studio',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/imprint'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
