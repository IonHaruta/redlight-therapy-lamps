import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// Producție (GitHub Pages): subfolder. Dev: rădăcină, ca să meargă http://localhost:8080/ fără mesaj.
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/redlight-therapy-lamps/" : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3001",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
