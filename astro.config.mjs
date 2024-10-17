// @ts-check
import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://anorak.dev",
  integrations: [
    icon({
      include: {
        hugeicons: ["mail-02", "github", "twitter"]
      }
    })
  ]
});
