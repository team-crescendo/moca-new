import { applicationCommand, Extension, listener } from "@pikokr/command.ts";
import { ApplicationCommandType } from "discord.js";

class Registration extends Extension {
  @applicationCommand({
    type: ApplicationCommandType.ChatInput,
    name: "register",
    nameLocalizations: {
      ko: "가입",
    },
    description: "모카봇에 가입합니다.",
  })
  async register() {
    this.logger.info(`Hello, discord! ${this.client.user?.tag}`);
    await this.commandClient.fetchOwners();
  }
}

export const setup = async () => new Registration();
