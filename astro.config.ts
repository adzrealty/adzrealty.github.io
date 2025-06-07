import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite"; // Note: Tailwind CSS is now `@astrojs/tailwind` for Astro projects
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import { SITE } from "./src/config";

// --- IMPORTANT NOTE ---
// The Astro-Paper template typically uses @astrojs/tailwind,
// not @tailwindcss/vite. If you installed it via pnpm create astro@latest
// and didn't change anything related to Tailwind, you might need to
// ensure @astrojs/tailwind is installed and used as an integration.
// For now, I'll assume your current setup is what you want to maintain
// based on the provided file, but keep this in mind for debugging
// Tailwind issues later if they arise.

// https://astro.build/config
export default defineConfig({
  // site: SITE.website, // Commented out, as you're using a direct URL below
  site: 'https://adz.ph', // Custom domain

  integrations: [
    sitemap({
      filter: page => SITE.showArchives || !page.endsWith("/archives"),
    }),
    // If you're using @astrojs/tailwind, you'd add it here:
    // tailwind({ // Make sure you have @astrojs/tailwind installed
    //   config: {
    //     // Optionally, point to your tailwind.config.ts if it's not in the root
    //     // config: './tailwind.config.ts',
    //   }
    // }),
  ],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },
  vite: {
    plugins: [
      tailwindcss() // Using @tailwindcss/vite as per your original file
    ],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  image: {
    // Corrected property name from 'experimentalLayout' to 'layout'
    // Valid values for layout: 'constrained' | 'fixed' | 'full-width' | 'none'
    // 'constrained' is generally recommended for responsive behavior
    layout: "constrained",
    // service: { // You might need to explicitly define a service if you're using specific image adapters
    //   entrypoint: "astro/assets/services/sharp",
    // },
  },
  // Removed outdated and replaced experimental flags.
  // 'svg' and 'responsiveImages' are generally stable/handled automatically now.
  // 'preserveScriptOrder' might still be an option depending on specific needs,
  // but if you haven't explicitly set it or had issues, removing is safe.
  // No 'experimental' block means no special experimental flags are enabled.
});