import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://docs.astro.build/en/guides/integrations-guide/tailwind/
export default defineConfig({
  integrations: [tailwind()],
});