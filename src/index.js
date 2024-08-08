const TelegramBot = require("node-telegram-bot-api");

const token = "7475675503:AAEQZWQrcVZXNbo3mEmA6Gz3LJDzoVqjJUQ";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === "/start") {
    await bot.sendMessage(chatId, "hi there");
  }
});
