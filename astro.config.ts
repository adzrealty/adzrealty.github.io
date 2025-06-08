// astro.config.ts
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
// REMOVE: import decapCmsOauth from "astro-decap-cms-oauth";
import { SITE } from "./src/config";

export default defineConfig({
  site: 'https://adz.ph',
  output: 'static',  // ADD: Explicitly set static output
  integrations: [
    sitemap({
      filter: (page: string) => SITE.showArchives || !page.endsWith("/archives"),
    }),
    // REMOVE: decapCmsOauth integration entirely
  ],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
    layout: "constrained",
  },
});
