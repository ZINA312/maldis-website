// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Кастомный домен maldis.by — сайт отдаётся с корня (base: '/')
const site = process.env.SITE_URL || 'https://maldis.by';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  integrations: [tailwind()],
  output: 'static',
});
