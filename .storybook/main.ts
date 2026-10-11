import type { StorybookConfig } from "@storybook/react-vite"
import tailwindcss from "@tailwindcss/vite"
import { resolve } from "node:path"
import remarkGfm from "remark-gfm"

const config: StorybookConfig = {
  stories: ["../src/stories/**/*.mdx", "../src/stories/**/*.stories.tsx"],
  addons: [
    {
      // GFM gives MDX pages tables, task lists and autolinks.
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../public/static"],
  core: {
    disableTelemetry: true,
  },
  viteFinal(config) {
    config.plugins = [...(config.plugins ?? []), tailwindcss()]
    config.resolve = config.resolve ?? {}
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string>),
      "@": resolve(import.meta.dirname, "../src"),
    }
    return config
  },
}

export default config
