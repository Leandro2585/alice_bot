const bot = require('./setup');

bot.hears(/Pizza/i, (context) => context.reply('Sexta feira é dia de pizza, hmm!'));
bot.hears([/pizza/i, /buguer/i, /pastel/i], context => {
  context.reply('Você está com fome de que?');
});

bot.startPolling();