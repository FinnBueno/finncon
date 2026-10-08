import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/finncon/" : "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        activiteiten: resolve(import.meta.dirname, "activiteiten.html"),
        verblijf: resolve(import.meta.dirname, "verblijf.html"),
      },
    },
  },
});
