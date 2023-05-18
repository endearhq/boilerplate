import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { $ } from "zx";
import { fixSchemaPath } from "./utils.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const src = {
  root: join(__dirname, "../src"),
  primary: join(__dirname, "../src/primary"),
};

const lib = {
  root: join(__dirname, "../lib"),
  primary: join(__dirname, "../lib/primary"),
};

await $`rm -rf ${lib.primary} ${src.primary}`;

await $`npx prisma generate`;

await fixSchemaPath("primary");

await $`cp -r ${lib.primary} ${src.root}`;
