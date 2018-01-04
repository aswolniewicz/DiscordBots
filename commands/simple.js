//!ping --> Pong!
var ping = function(args) {
  if (args[0] == 'ping'){
    return 'Pong!';
  } else {
    return null;
  }
};

//!mom --> Anna is my mom!
var mom = function(args) {
  if (args[0] == 'mom'){
    return 'Anna is my mom!';
  } else {
    return null;
  }
};

module.exports.commands = [ping, mom];
