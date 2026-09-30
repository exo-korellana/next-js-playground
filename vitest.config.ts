import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // simula el DOM del navegador
    setupFiles: ["./vitest.setup.ts"],
    globals: true, // permite usar describe/it/expect sin importarlos
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."), // igual que el alias @/* de tsconfig.json
    },
  },
});
