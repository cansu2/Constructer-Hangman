var Word = require("./word.js");

var Letter = function(){
    this.wordArray = [];
    this.underscoreArray = [];
    this.underscoreString ="";
    this.addToArray = function(){
        for (var i =0; i < gameWord.length; i++){
            this.wordArray.push(gameWord[i]);
        }
    }

    this.letterRender = function(){
        this.addToArray();
        for (var i=0 ; i< this.wordArray.length; i++){

            if (this.wordArray[i]== " "){
                this.underscoreArray.push(" ");
            } else if (this.wordArray[i] != " ") {
                this.underscoreArray.push("_");
            } 
    
        }
        
        this.underscoreString = this.underscoreArray.join(" ");
        console.log(this.underscoreString);
    }
      
}

module.exports = Letter;