// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Для локальной разработки используются значения по умолчанию.
// При деплое на GitHub Pages переменные задаются автоматически в workflow.
const site = process.env.SITE_URL || 'https://YOUR_USERNAME.github.io';
const base = process.env.BASE_PATH || '/maldis-website';

export default defineConfig({
  site,
  base,
  integrations: [tailwind()],
  output: 'static',
});
