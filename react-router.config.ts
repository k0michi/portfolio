import type { Config } from "@react-router/dev/config";

export default {
  basename: process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
    : "/",

  prerender: true,
  ssr: false,
} satisfies Config;