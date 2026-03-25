import { config } from "#config";
import { createLogger } from "#utils/logger";
import { CommandClient } from "@pikokr/command.ts";
import Discord, { Events, GatewayIntentBits } from "discord.js";
import path from "path";
import { Logger } from "tslog";

/**
 * Customized CommandClient for Moca
 *
 * @author DoubleDeltas
 */
export class MocaClient extends CommandClient {
  constructor() {
    const discord = new Discord.Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });
    const logger: Logger<unknown> = createLogger("Moca");

    super(discord, logger);

    this.enableApplicationCommandsExtension({
      guilds: config.slashCommand.guilds,
    });

    this.enableTextCommandsExtension({
      prefix: config.prefix,
    });

    this.registry.loadAllModulesInDirectory(path.join(__dirname, "modules"));

    this.discord.on(Events.ClientReady, () => this.onReady());
    this.discord.on(Events.Debug, (msg) => this.logger.debug(msg));
  }

  onReady() {
    this.logger.info("Moca is ready to serve!");
  }
}
