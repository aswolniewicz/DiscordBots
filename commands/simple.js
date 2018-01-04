//!ping --> Pong!
var ping = function(args, user) {
  if (args[0] == 'ping'){
    return 'Pong!';
  } else {
    return null;
  }
};

//!mom --> Anna is my mom!
var mom = function(args, user) {
  if (args[0] == 'mom'){
    return 'Anna is my mom!';
  } else {
    return null;
  }
};

//!Hello
var hello = function(args, user) {
  if (args[0] == 'hello'){
    return 'Hello lovely ' + user + '!'
  } else {
    return null;
  }
};

module.exports.commands = [ping, mom, hello];
