import dotenv from "dotenv";

import { getEnv, getPackageInfo } from "./utils";

dotenv.config({ path: "../../.env" });

if (process.env.INJECTED_SECRETS) {
  process.env = {
    ...process.env,
    ...JSON.parse(process.env.INJECTED_SECRETS),
  };
}

export const { name, version } = getPackageInfo();

export const IS_GOOGLE_CLOUD = process.env.K_SERVICE !== undefined;

export const PORT = 7777;

export const ADDRESS = IS_GOOGLE_CLOUD ? "0.0.0.0" : "127.0.0.1";

export const GCP_SERVICE_ACCOUNT = getEnv("GCP_SERVICE_ACCOUNT");
