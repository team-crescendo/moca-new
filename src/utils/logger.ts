import { Logger } from "tslog";

export const createLogger = (id: string) =>
  new Logger({
    name: id,
    prettyLogTemplate:
      "{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}}\t[{{name}}]\t",
    prettyInspectOptions: {
      depth: 3,
    },
  });
