// @ts-nocheck
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  base: "/",
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    format: "directory",
  },
});
