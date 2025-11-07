import 'dotenv/config';
import { Client, GatewayIntentBits, Events } from 'discord.js';
import { env } from '#env.ts';

// Created by ChatGPT

const token = env.DISCORD_TOKEN;
if (!token) {
  console.error('DISCORD_TOKEN이 설정되어 있지 않습니다. .env 확인');
  process.exit(1);
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once(Events.ClientReady, c => {
  console.log(`로그인 성공: ${c.user?.tag}`);
});

client.on(Events.MessageCreate, message => {
  // 봇 자신이 보낸 메시지나 DM은 무시
  if (message.author.bot) return;
  if (!message.guild) return;

  const content = message.content.trim();

  if (content === '!ping') {
    message.reply('Pong!');
  }
});

client.login(token).catch(err => {
  console.error('로그인 실패:', err);
});
