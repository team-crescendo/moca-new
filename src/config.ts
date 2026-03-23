import fs from "fs";
import path from "path";
import z from "zod";

export const configSchema = z.object({
  discordToken: z.string().regex(/[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+/g),
  slashCommand: z.object({
    guild: z.array(z.string()).nullable(),
  }),
});

export type Config = z.infer<typeof configSchema>;

const configPath = path.resolve(__dirname, "../config.js");
if (!fs.existsSync(configPath)) {
  console.error("Could not find config.js. Please refer to config.example.js to create a file.");
  process.exit(1);
}

const _config = require(configPath).default;

export const config = configSchema.parse(_config);
