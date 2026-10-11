import { create } from "storybook/theming"

/** Night Atlas chrome for the Storybook manager and docs pages. */
export const atlasDocsTheme = create({
  base: "dark",
  brandTitle: "Hoshikuzu UI",
  brandUrl: "https://github.com/yihuil1992/hoshikuzu-ui",
  brandTarget: "_blank",

  colorPrimary: "#f5f0dc",
  colorSecondary: "#aad7dc",

  appBg: "#05070d",
  appContentBg: "#02040a",
  appPreviewBg: "#02040a",
  appBorderColor: "rgba(255, 255, 255, 0.14)",
  appBorderRadius: 2,

  fontBase:
    '"Inter", "Noto Sans JP", "Hiragino Sans", "Yu Gothic UI", "Segoe UI", system-ui, sans-serif',
  fontCode: '"SFMono-Regular", "Cascadia Code", "Consolas", monospace',

  textColor: "#f8fafc",
  textMutedColor: "#aeb8c7",
  textInverseColor: "#02040a",

  barTextColor: "#aeb8c7",
  barSelectedColor: "#aad7dc",
  barHoverColor: "#f8fafc",
  barBg: "#05070d",

  buttonBg: "#101827",
  buttonBorder: "rgba(255, 255, 255, 0.14)",
  booleanBg: "#101827",
  booleanSelectedBg: "#aad7dc",

  inputBg: "#05070d",
  inputBorder: "rgba(255, 255, 255, 0.16)",
  inputTextColor: "#f8fafc",
  inputBorderRadius: 2,
})
