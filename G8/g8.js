const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

// Lets me know the bot is on.
client.on("ready", () => {
  console.log('I am ready!');
});

// When the bot recieves a message, this will run.
client.on("message", (message) => {
  // If it is a bot, ignore it.
  if (message.author.bot) return;

  if (message.content.startsWith("+members")) {
    var users = message.guild.memberCount;
    message.channel.send("We have " + users + " members!");
  }

  if (message.content.startsWith("ping")) {
    message.channel.send("Pong! :heart:");
  }
  // If the message is "what is my avatar"
 if (message.content === 'what is my avatar') {
   // Send the user's avatar URL
   message.reply(message.author.avatarURL);
 }

 // check to see if message is a bad word
 if (message.content.toLowerCase() === 'incest') {
   // send emssage and alert them
   var godRole = message.channel.guild.roles.find('name', 'god');
   var modRole = message.channel.guild.roles.find('name', 'angels (mods)');

  // message.reply(message.author);
   message.channel.send(message. author + ", you have said a blacklisted word. The mods have been notified. " + godRole + " " + modRole);
 }
});

client.login(config.token);
