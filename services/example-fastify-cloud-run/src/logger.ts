import { pino } from "pino";
import type { Logger, LoggerOptions } from "pino";

import { name } from "./config";

export { Logger };

export const logger: Logger = createLogger(name);

export function createLogger(
  name: string,
  opts?: {
    enabled?: boolean;
    prettyPrint?: boolean;
    redact?: string[];
    serializers?: LoggerOptions["serializers"];
  },
): Logger {
  const PinoLevelToSeverity = {
    trace: "DEBUG",
    debug: "DEBUG",
    info: "INFO",
    warn: "WARNING",
    error: "ERROR",
    fatal: "CRITICAL",
  } as const;

  type PinoLevel = keyof typeof PinoLevelToSeverity;

  const nameWithoutPrefix = name.replace("@endearhq/", "");
  const shouldPrettyPrint =
    typeof opts?.prettyPrint === "boolean"
      ? opts.prettyPrint
      : process.env.NODE_ENV !== "production";
  const shouldEnable = typeof opts?.enabled === "boolean" ? opts.enabled : true;

  const logger = pino({
    enabled: shouldEnable,
    name: nameWithoutPrefix,
    serializers: opts?.serializers,
    redact:
      process.env.NODE_ENV !== "production"
        ? opts?.redact
        : ["req.headers.cookie", ...(opts?.redact ?? [])],
    level:
      process.env.NODE_ENV === "test"
        ? "warn"
        : process.env.NODE_ENV !== "production"
        ? "debug"
        : "info",
    formatters: {
      level: (label: string, level: number) => {
        return {
          severity:
            PinoLevelToSeverity[label as PinoLevel] ??
            PinoLevelToSeverity["info"],
          level,
        };
      },
    },
    transport: shouldPrettyPrint ? { target: "pino-pretty" } : undefined,
  });

  return logger;
}

export function createFastifyLogger(logger: Logger): Logger {
  return logger.child(
    { type: "http" },
    {
      serializers: {
        res(res: { statusCode: any }) {
          return {
            statusCode: res.statusCode,
          };
        },
        req(req: {
          method: any;
          url: any;
          path: any;
          parameters: any;
          headers: any;
        }) {
          return {
            method: req.method,
            url: req.url,
            path: req.path,
            parameters: req.parameters,
            headers: req.headers,
          };
        },
      },
    },
  );
}
