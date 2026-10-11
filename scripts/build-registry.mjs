#!/usr/bin/env node
/**
 * Generates registry.json for `shadcn build`.
 *
 * - hoshikuzu-theme: converted from src/styles/hoshikuzu.css into shadcn's
 *   cssVars/css shape, so installing it overwrites the consumer's default
 *   :root/.dark variables instead of fighting them.
 * - one registry:ui item per file in src/components/ui and src/components/atlas
 * - one registry:hook item per file in src/hooks
 *
 * Dependencies are inferred from imports.
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs"
import { basename, dirname, join, relative } from "node:path"
import { fileURLToPath } from "node:url"
import postcss from "postcss"

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..")
const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"))

export const REGISTRY_URL =
  process.env.REGISTRY_URL ?? "https://startust.github.io/hoshikuzu-ui/r"

const itemUrl = (name) => `${REGISTRY_URL}/${name}.json`
const posix = (p) => p.split("\\").join("/")

// --------------------------------------------------------------------------
// Theme
// --------------------------------------------------------------------------

function declsToObject(node, { stripDashes = false } = {}) {
  const out = {}
  node.each((child) => {
    if (child.type === "decl") {
      const key = stripDashes ? child.prop.replace(/^--/, "") : child.prop
      const value = child.value.replace(/\s+/g, " ").trim()
      out[key] = child.important ? `${value} !important` : value
    } else if (child.type === "rule") {
      out[child.selector.replace(/\s+/g, " ")] = declsToObject(child)
    } else if (child.type === "atrule") {
      // Body-less at-rules such as `@apply ...;` become empty objects.
      out[`@${child.name} ${child.params}`.trim()] = child.nodes
        ? declsToObject(child)
        : {}
    }
  })
  return out
}

function buildTheme() {
  const source = readFileSync(join(ROOT, "src/styles/hoshikuzu.css"), "utf8")
  const tree = postcss.parse(source)

  const cssVars = { theme: {}, light: {}, dark: {} }
  const css = {}

  tree.each((node) => {
    if (node.type === "rule" && node.selector.includes(":root")) {
      // Night atlas: the default for both :root and .dark.
      node.each((decl) => {
        if (decl.type !== "decl") return
        if (decl.prop.startsWith("--")) {
          const key = decl.prop.slice(2)
          cssVars.light[key] = decl.value
          cssVars.dark[key] = decl.value
        }
      })
      css[':root, .dark, [data-atlas-mode="night"]'] = { "color-scheme": "dark" }
    } else if (node.type === "rule") {
      // Archive sheet keeps its own selector.
      css[node.selector.replace(/\s+/g, " ")] = declsToObject(node)
    } else if (node.type === "atrule" && node.name === "theme") {
      node.each((child) => {
        if (child.type === "decl") {
          cssVars.theme[child.prop.slice(2)] = child.value
            .replace(/\s+/g, " ")
            .trim()
        } else if (child.type === "atrule" && child.name === "keyframes") {
          css[`@keyframes ${child.params}`] = declsToObject(child)
        }
      })
    } else if (node.type === "atrule") {
      css[`@${node.name} ${node.params}`.trim()] = declsToObject(node)
    }
  })

  return {
    name: "hoshikuzu-theme",
    type: "registry:theme",
    title: "Hoshikuzu Theme",
    description:
      "Night atlas and archive sheet tokens, type, radius, shadows, motion and utilities.",
    dependencies: ["tw-animate-css"],
    cssVars,
    css,
    docs: 'Night is the default. Set <html data-atlas-mode="archive"> for the light archive sheet, or use AtlasModeProvider from @hoshikuzu/atlas-mode.',
  }
}

// --------------------------------------------------------------------------
// Components
// --------------------------------------------------------------------------

const TITLE_OVERRIDES = { "input-otp": "Input OTP", "ui": "UI" }

const toTitle = (name) =>
  TITLE_OVERRIDES[name] ??
  name
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ")

const DESCRIPTIONS = {
  "atlas-mode":
    "Night atlas / archive sheet provider, toggle and pre-hydration script.",
  "atlas-link": "Quiet link with a hairline underline that draws in on hover.",
  "bottom-nav": "Mobile bottom navigation with a one-pixel active marker.",
  "data-list": "Instrument readouts: label, mono value, status aside.",
  "floating-actions": "Corner utility controls with annotation labels.",
  "index-label": "Tracked uppercase metadata label and section rule.",
  measurement: "Light-numeral readings on a hairline grid.",
  "page-header": "Eyebrow, light display title, description and actions.",
  "star-panel": "The signature mapped-object panel with an optional connector.",
  starfield: "Decorative star dots (night) or graticule (archive) backdrop.",
  "status-dot": "Status points of light, with an optional live halo.",
  timeline: "Time-indexed log for transcripts and activity.",
}

function npmPackage(specifier) {
  if (specifier.startsWith(".") || specifier.startsWith("@/")) return null
  const parts = specifier.split("/")
  return specifier.startsWith("@") ? parts.slice(0, 2).join("/") : parts[0]
}

const IMPLICIT = new Set(["react", "react-dom"])

function analyze(file) {
  const source = readFileSync(file, "utf8")
  const deps = new Set()
  const registryDeps = new Set()
  const importRe = /(?:import|export)[^"']*?from\s+["']([^"']+)["']/g
  for (const match of source.matchAll(importRe)) {
    const specifier = match[1]
    const local = specifier.match(/^@\/(components\/(?:ui|atlas)|hooks)\/(.+)$/)
    if (local) {
      registryDeps.add(itemUrl(local[2]))
      continue
    }
    const name = npmPackage(specifier)
    if (name && !IMPLICIT.has(name)) deps.add(name)
  }
  return { deps: [...deps].sort(), registryDeps: [...registryDeps].sort() }
}

function versioned(name) {
  const version =
    pkg.dependencies?.[name] ?? pkg.devDependencies?.[name] ?? undefined
  if (!version) {
    throw new Error(
      `Dependency "${name}" is imported by a registry file but missing from package.json`
    )
  }
  return name
}

function componentItems(dir, type, fileType, extraDeps = []) {
  const absolute = join(ROOT, dir)
  return readdirSync(absolute)
    .filter((file) => /\.tsx?$/.test(file))
    .sort()
    .map((file) => {
      const name = basename(file).replace(/\.tsx?$/, "")
      const path = posix(relative(ROOT, join(absolute, file)))
      const { deps, registryDeps } = analyze(join(absolute, file))
      return {
        name,
        type,
        title: toTitle(name),
        ...(DESCRIPTIONS[name] ? { description: DESCRIPTIONS[name] } : {}),
        dependencies: deps.map(versioned),
        registryDependencies: [
          ...extraDeps,
          ...registryDeps.filter((dep) => dep !== itemUrl(name)),
        ],
        files: [{ path, type: fileType }],
        ...(dir.endsWith("atlas") ? { categories: ["atlas"] } : {}),
      }
    })
}

const theme = buildTheme()
const themeUrl = itemUrl(theme.name)

const items = [
  theme,
  ...componentItems("src/components/ui", "registry:ui", "registry:ui", [themeUrl]),
  ...componentItems("src/components/atlas", "registry:ui", "registry:ui", [themeUrl]),
  ...componentItems("src/hooks", "registry:hook", "registry:hook"),
]

const names = new Set()
for (const item of items) {
  if (names.has(item.name)) throw new Error(`Duplicate registry item: ${item.name}`)
  names.add(item.name)
}

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "hoshikuzu",
  homepage: "https://startust.github.io/hoshikuzu-ui",
  items,
}

writeFileSync(join(ROOT, "registry.json"), JSON.stringify(registry, null, 2) + "\n")
console.log(`registry.json: ${items.length} items (${REGISTRY_URL})`)
