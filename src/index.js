const TelegramBot = require("node-telegram-bot-api");

const token = "7213612107:AAEbgt1WTMUG-UPZDd3bnUmb8EYHJj9fEwg";
const webAppUrl = "https://merry-kheer-71ec97.netlify.app/";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === "/start") {
    await bot.sendMessage(chatId, "Вітаємо 👋", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Відкрити застосунок", web_app: { url: webAppUrl } }],
        ],
      },
    });
  }
});
