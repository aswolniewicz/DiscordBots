// !choice --> yes or no
var choice = function(args, user) {
  if (args[0] == 'choice'){
    var number = ((Math.floor((Math.random() * 10))) + 1) % 2;
    if (number != 0) {
      return 'Yep!';
    } else {
       return 'Nope!';
     }
  } else {
    return null;
  }
};

// !d20 --> random number from 1 to 20
var d20 = function(args, user) {
  if (args[0] == 'd20'){
    number = (Math.floor((Math.random() * 20)) + 1);
    if (number == 20) {
      return number + "... THAT'S A CRIT AYYYY!";
    } else if (number > 10) {
      return number;
    } else if (number == 1) {
      return number + "... CRITICAL FAIL LOSER";
    } else {
      return number;
    }
  } else {
    return null;
  }
}


module.exports.commands = [choice, d20];
