#!/usr/bin/env node
/**
 * Consumer smoke test: builds the registry against a local URL, serves it,
 * scaffolds a fresh shadcn base-nova Vite app, installs the theme and every
 * item, then type-checks and builds the app.
 */
import { spawn } from "node:child_process"
import { createReadStream, existsSync, mkdtempSync, readFileSync, rmSync, statSync } from "node:fs"
import { createServer } from "node:http"
import { tmpdir } from "node:os"
import { dirname, extname, join } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..")
const PORT = Number(process.env.SMOKE_PORT ?? 4789)
const BASE = `http://127.0.0.1:${PORT}/r`
const SHADCN = join(ROOT, "node_modules", ".bin", process.platform === "win32" ? "shadcn.cmd" : "shadcn")
const work = mkdtempSync(join(tmpdir(), "hoshikuzu-smoke-"))
const servedDir = join(work, "served")

// Async on purpose: the registry server runs in this process, so a blocking
// spawnSync would stop it from answering the CLI's requests.
function run(command, args, options = {}) {
  console.log(`\n$ ${command} ${args.join(" ")}`)
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: "inherit",
      shell: process.platform === "win32",
      ...options,
    })
    child.on("error", reject)
    child.on("exit", (code) =>
      code === 0
        ? resolve()
        : reject(new Error(`${command} exited with ${code}`))
    )
  })
}

function serve(dir) {
  return createServer((req, res) => {
    const file = join(dir, decodeURIComponent(new URL(req.url, BASE).pathname))
    if (!existsSync(file) || !statSync(file).isFile()) {
      res.writeHead(404).end()
      return
    }
    const type = extname(file) === ".json" ? "application/json" : "text/plain"
    res.writeHead(200, { "content-type": type })
    createReadStream(file).pipe(res)
  }).listen(PORT, "127.0.0.1")
}

let server
try {
  await run("node", ["scripts/build-registry.mjs"], {
    cwd: ROOT,
    env: { ...process.env, REGISTRY_URL: BASE },
  })
  await run(SHADCN, ["build", "-o", join(servedDir, "r")], { cwd: ROOT })
  // Restore the committed registry.json (built for the public URL).
  await run("node", ["scripts/build-registry.mjs"], { cwd: ROOT })

  server = serve(servedDir)

  await run(SHADCN, ["init", "-t", "vite", "-b", "base", "-p", "nova", "-n", "consumer", "-y", "--no-monorepo", "--no-rtl"], { cwd: work })
  const app = join(work, "consumer")

  const registry = JSON.parse(readFileSync(join(ROOT, "registry.json"), "utf8"))
  const urls = registry.items.map((item) => `${BASE}/${item.name}.json`)
  await run(SHADCN, ["add", "-y", "-o", ...urls], { cwd: app })

  await run("npx", ["tsc", "-b"], { cwd: app })
  await run("npx", ["vite", "build"], { cwd: app })
  console.log(`\nSmoke test passed: ${urls.length} items installed and built.`)
} finally {
  server?.close()
  if (!process.env.SMOKE_KEEP) rmSync(work, { recursive: true, force: true })
}
