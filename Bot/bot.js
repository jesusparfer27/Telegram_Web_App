const { Telegraf } = require("telegraf");
const TOKEN = "8559491752:AAFz6gFQ8fUs0CUFCrDHE3aPNwLN8IrZH_M";
const bot = new Telegraf(TOKEN);

const web_link = "https://celebrated-torte-184681.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
