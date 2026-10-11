import { addons } from "storybook/manager-api"

import { atlasDocsTheme } from "./theme"

addons.setConfig({
  theme: atlasDocsTheme,
  sidebar: {
    showRoots: true,
  },
})
