var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    var number = 0;
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
        // !ping
        case 'ping':
            bot.sendMessage({
                to: channelID,
                message: 'Pong!'
            });
        break;

        // !mom
        case 'mom':
          bot.sendMessage({
            to: channelID,
            message: 'Anna (pippintully) is my mom!'
          });
        break;

        // !choice
        case 'choice':
          number = (Math.floor((Math.random() * 10))) % 2;
          if (number != 0) {
            bot.sendMessage({
              to: channelID,
              message: 'Yessir!'
            });
          } else {
             bot.sendMessage({
               to: channelID,
               message: 'Nope!'
             });
          }
          break;

          //!d20
          case 'd20':
            number = (Math.floor((Math.random() * 20)));
            if (number == 20) {
              bot.sendMessage({
                to: channelID,
                message: number + '! AYYYY CRIT!!!'
              });
            } else if (number > 10) {
              bot.sendMessage({
                to: channelID,
                message: number + ', not bad!'
              });
            } else if (number == 1) {
              bot.sendMessage({
                to: channelID,
                message: number + '... I just hope you live.'
              });
            } else {
              bot.sendMessage({
                to: channelID,
                message: number + ', could be better!'
              });
            }
            break;

            // !hello
            case 'hello':
            bot.sendMessage({
              to: channelID,
              message: 'Hello you beautiful human!'
            });
            break;
         }
     }
});
