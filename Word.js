//require Letter.js
var Letter = require("./Letter");

var Word = function(wordArray){

    for(var i = 0; i < wordArray.length; i ++){
        var Letter1 = new Letter(wordArray[i]);
    }
    //export the file to be accesed by Letter
    module.export = Letter;
}

var Word = new Word(['D','A','Y']);