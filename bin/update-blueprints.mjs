"use strict";

import { execa } from "execa";
import fs from "fs";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "../");
const tmpDir = join(rootDir, "tmp");

if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir);
}

async function syncBlueprint(type) {
  const dir = join(tmpDir, type);

  if (!fs.existsSync(dir)) {
    await execa("npx", [
      "--yes",
      "-p",
      "ember-cli",
      "ember",
      type === "app" ? "new" : type,
      `test-${type}`,
      "--directory",
      dir,
      "--skip-git",
      "--skip-npm",
    ]);
  }

  const config = (await import(join(dir, ".eslintrc.js"))).default;
  config.extends.push("./index.js");

  fs.writeFile(
    join(rootDir, `ember-${type}.js`),
    `"use strict"; module.exports = ${JSON.stringify(config)}`,
    () => {}
  );

  await execa("pnpm", ["prettier", "--write", `ember-${type}.js`]);
}

await syncBlueprint("app");
await syncBlueprint("addon");

fs.rmSync(tmpDir, { recursive: true });
