const env = require('../.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.start(context => {
  const { from } = context.update.message;

  context.reply(`Seja bem vindo, ${from.first_name}`)
});

bot.on('text', (context) => {
  const { text } = context.update.message;
  
  context.reply(`Texto '${text}' recebido com sucesso!`);
});

bot.on('location', (context) => {
  const { location } = context.update.message;

  context.reply(`Suas coordenadas são:
    Latitude: ${location.latitude},
    Longitude: ${location.longitude}
    `);
});

bot.on('contact', (context) => {
  const { contact } = context.update.message;
  
  context.reply(`Vou guardar o ${contact.first_name} - ${contact.phone_number} um de seus contatos favorito`);
});

bot.on('voice', (context) => {
  const { voice } = context.update.message;

  context.reply(`Audio recebido, ele possui ${voice.duration} segundos`);
});

bot.on('photo', (context) => {
  const { photo } = context.update.message;

  photo.forEach((image, index) => {
    context.reply(`Foto ${index} tem resolução de ${image.width}x${image.height}`);
  });
});

bot.on('sticker', (context) => {
  const { sticker } = context.update.message;

  context.reply(`Você acabou de enviar um ${sticker.emoji} do conjunto ${sticker.set_name}`);
});

bot.startPolling();