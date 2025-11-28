import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// 💡 AÑADE esta línea con el nombre exacto de tu repositorio
const REPO_NAME = "/AGENCIA-IA-INFAMA/";

export default defineConfig({
  plugins: [react()],
  // Configuración de la ruta base para GitHub Pages
  base: "./",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
