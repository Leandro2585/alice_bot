const bot = require('./setup');
const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');

let list = [];

const buttons = () => Extra.markup(
  Markup.inlineKeyboard(
    list.map(item => Markup.callbackButton(item, `delete ${item}`)),
    { columns: 3 }
  )
);

bot.start(async (context) => {
  const { first_name } = context.update.message.from;
  await context.reply(`Seja bem vindo, ${first_name}`);
  await context.reply(`Escreva os itens que você deseja adicionar...`);
})

bot.on('text', (context) => {
  const { text } = context.update.message;
  list.push(text);
  context.reply(`${text} adicionado ao seu carrinho!`, buttons());
});

bot.action(/delete (.+)/, (context) => {
  list = list.filter(item => item !== context.match[1]);
  context.reply(`${context.match[1]} deletado!`, buttons());
});

bot.startPolling()