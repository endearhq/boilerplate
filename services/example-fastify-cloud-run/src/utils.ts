export function getPackageInfo() {
  const name = process.env["npm_package_name"];
  const version = process.env["npm_package_version"];

  if (!name || !version) {
    throw new Error(
      "Could not resolve package name or version. This usually happens if you run the node script without using 'npm run ...', 'pnpm run ...', or 'yarn run ...'.",
    );
  }

  return { name, version };
}

export function getEnv<K extends string>(envVarName: string, oneOf?: K[]): K {
  const envVar = process.env[envVarName];

  if (envVar === undefined) {
    throw new Error(`Invalid or missing environment variable (${envVarName})`);
  }

  if (oneOf && !oneOf.includes(envVar as K)) {
    const oneOfMessage = oneOf.join(", ");

    throw new Error(
      `Invalid or missing environment variable (${envVarName}) not in ${oneOfMessage} is ${envVar}`,
    );
  }

  return envVar as K;
}
