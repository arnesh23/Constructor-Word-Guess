// Letter Constructor 
// This Constructor displays an underlying character or a blank placeholder
var Letter = function(character){

    this.character = character;
    this.correctLetterGuessed = false;
    this.showCharacter = function(){
        if(this.correctLetterGuessed){
            console.log(this.character);
        }
        else
        console.log("_");
    }
    //export the file to be accesed by Letter
    module.export = Letter;
}
    var letter1 = new Letter('a');
    letter1.showCharacter();




