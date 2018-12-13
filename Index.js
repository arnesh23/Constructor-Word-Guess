var prompt = require("prompt");
var colors = require("colors/safe");
//
// Setting these properties customizes the prompt.
//
prompt.message = colors.rainbow("Question!");
prompt.delimiter = colors.green("><");
prompt.delimiter = colors.cyan("><");
prompt.start();

prompt.get({
  properties: {
    name: {
      description: colors.magenta("Words?")
    }
  }
}, function (err, result) {
  console.log(colors.cyan("You said your name is: " + result.name));
});