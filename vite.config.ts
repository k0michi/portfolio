import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  base: mode === "production" && process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
    : "/",
}));