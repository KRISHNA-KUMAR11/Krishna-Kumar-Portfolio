import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    css: false,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return
          if (id.includes("framer-motion")) return "motion"
          if (id.includes("react-router") || id.includes("react-dom") || id.includes("node_modules/react/")) {
            return "react"
          }
          if (id.includes("react-hook-form") || id.includes("@hookform") || id.includes("node_modules/zod/")) {
            return "forms"
          }
        },
      },
    },
  },
})
