import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readFile, writeFile } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function fixSchemaPath(schema) {
  const runtimeIndexFilePath = join(__dirname, "../lib", schema, "index.js");
  const file = await readFile(runtimeIndexFilePath, "utf8");
  const updatedfile = file.replace(
    /findSync\(process.cwd\(\)/gm,
    `findSync(path.join(__dirname, "../")`,
  );
  await writeFile(runtimeIndexFilePath, updatedfile, "utf8");
}
