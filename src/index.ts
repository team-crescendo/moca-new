import "dotenv/config";
import { env } from "#env.ts";
import { MocaClient } from "#client.ts";

(async () => {
  const token = env.DISCORD_TOKEN;

  const client = new MocaClient();

  client.discord.login(token);
})();
