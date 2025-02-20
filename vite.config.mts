import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import pluginChecker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => ({
  build: { outDir: "build" },
  plugins: [
    tsconfigPaths(),
    react(),
    pluginChecker({ typescript: true }),
    tailwindcss(),
  ],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  server: { port: 3000 },
}));
