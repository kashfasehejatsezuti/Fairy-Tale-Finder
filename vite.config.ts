import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Fairy-Tale-Finder/", // 👈 repo name exactly
});
