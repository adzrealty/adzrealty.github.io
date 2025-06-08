// astro.config.ts
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import decapCmsOauth from "astro-decap-cms-oauth";  // ADD THIS LINE
import { SITE } from "./src/config";

export default defineConfig({
  site: 'https://adz.ph',
  integrations: [
    sitemap({
      filter: (page: string) => SITE.showArchives || !page.endsWith("/archives"),
    }),
    decapCmsOauth({  // ADD THIS INTEGRATION
      decapCMSVersion: "3.3.3",
    }),
  ],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
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
