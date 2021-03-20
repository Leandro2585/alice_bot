const bot = require('./setup');
const axios = require('axios');

bot.on('voice', async (context) => {
  const id = context.update.message.voice.file_id;
  const response = await axios.get(`${env.apiURL}/getFile?file_id=${id}`);
  context.replyWithVoice({ url: `${env.apiFileURL}/${response.data.result.file_path}`});
});

bot.on('photo', async (context) => {
  const id = context.update.message.photo[0].file_id;
  const response = await axios.get(`${env.apiURL}/getFile?file_id=${id}`);
  context.replyWithPhoto({ url: `${env.apiFileURL}/${response.data.result.file_path}`});
});

bot.startPolling();