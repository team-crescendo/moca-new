import { command, Extension } from "@pikokr/command.ts";
import { Message } from "discord.js";

class Dev extends Extension {
  @command({
    name: "syncCommands",
  })
  async syncCommands(msg: Message) {
    msg = await msg.reply("커맨드 동기화 중...");

    await this.commandClient.getApplicationCommandsExtension()!!.sync();

    msg.edit("커맨드 동기화 완료!");
  }
}

export const setup = async () => new Dev();
