const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log('I am ready!');
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("Pong!");
  }
  // If the message is "what is my avatar"
 if (message.content === 'what is my avatar') {
   // Send the user's avatar URL
   message.reply(message.author.avatarURL);
 }

 // check to see if message is a bad word
 if (message.content.toLowerCase() === 'poop') {
   // send emssage and alert them
   message.reply(message.author);
   message.channel.send("That's a bad word!");
 }
});

client.login("Mzk4OTI0ODc3NjYwMjkxMDcz.DTFo1g.XeaF8Z3Ct9x0hbdH2yyTO3rINvg");
