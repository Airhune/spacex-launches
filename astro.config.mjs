// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://astro.100x100.net",
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: "0.0.0.0",
    port: 4321,
  },
});
