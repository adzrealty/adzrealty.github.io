// astro.config.ts
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import { SITE } from "./src/config";

export default defineConfig({
  site: 'https://adz.ph',
  integrations: [
    sitemap({
      filter: page => SITE.showArchives || !page.endsWith("/archives"),
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
    // Ensure the service entrypoint is correctly defined and matches what's installed
    service: {
      entrypoint: "astro/assets/services/sharp", // This line is crucial for Sharp
    },
    // The 'layout' property relies on the image service being properly recognized.
    // If 'sharp' is causing issues, removing this and relying on default layout
    // might temporarily resolve the type error, but it's better to fix the root.
    layout: "constrained", // This should be valid IF the image service is correctly set up.
  },
  // Ensure no 'experimental' block here
});