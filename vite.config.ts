import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const repoBase = "/habu26/";

export default defineConfig({
  base: repoBase,
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icon.svg"],
      manifest: {
        name: "Haushaltsbuch",
        short_name: "HaBu",
        description: "Lokales Haushaltsbuch (Local First)",
        theme_color: "#0f172a",
        background_color: "#f8fafc",
        display: "standalone",
        start_url: repoBase,
        scope: repoBase,
        icons: [
          {
            src: "icon.svg",
            sizes: "192x192",
            type: "image/svg+xml",
            purpose: "any",
          },
        ],
      },
    }),
  ],
  test: {
    environment: "node",
  },
});
