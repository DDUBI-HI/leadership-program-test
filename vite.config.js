import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/leadership-program-test/",
  plugins: [react()],
});