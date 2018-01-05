//!ping --> Pong!
var ping = function(user, userID, channelID, message, evt, args) {
  if (args[0] == 'ping'){
    return 'Pong!';
  } else {
    return null;
  }
};

//!mom --> Anna is my mom!
var mom = function(user, userID, channelID, message, evt, args) {
  if (args[0] == 'mom'){
    return 'Anna (pippintully) is my mom!';
  } else {
    return null;
  }
};

//!Hello --> Hello lovely!
var hello = function(user, userID, channelID, message, evt, args) {
  if (args[0] == 'hello'){
    return 'Hello lovely!';
  } else {
    return null;
  }
};

//!help --> ask for help!
var help = function(user, userID, channelID, message, evt, args) {
  if (args[0] == 'help'){
    return "Ask Anna ( @pippintully ) for help! I'm still learning.";
  } else {
    return null;
  }
}

module.exports.commands = [ping, mom, hello, help];
