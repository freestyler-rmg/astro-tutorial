// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://famous-quokka-7ff705.netlify.app/",
  integrations: [preact()],
});