import "dotenv/config";
import { MocaClient } from "#client.ts";
import { config } from "#config";

(async () => {
  const token = config.discordToken;

  const client = new MocaClient();

  client.discord.login(token);
})();
