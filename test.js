const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('Mzk4MDAzODA1NjAzNDk1OTM2.DS7j5w.Wnf5wlbKRRlz63bOXkMQ_QfMj94');
