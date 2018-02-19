var Letter = require("./letter.js");
var inquirer = require("inquirer");

var game = "";

var guesses = 0;
var hangman = [
    "¯",
    "¯|",
    "¯L",
    "¯L_(",
    "¯L_(ツ",
    "¯L_(ツ)",
    "¯L_(ツ)_",
    "¯L_(ツ)_/",
    "¯L_(ツ)_/¯"
]; 
var inputArray = [];
var inputString = "";

function newGame() {
    game = new Letter();
    game.letterRender();  
}
newGame();

var GameOn = function(){
  

    inquirer.prompt([

        {
          type: "input",
          name: "userInput",
          message: "Guess a letter!"
        }
    
      
      ]).then(function(answer) {

        
        if (inputString.indexOf(answer.userInput.toLowerCase()) !== -1){
            console.log("Please guess different letter!!")
            GameOn();
           
        } else{
            inputArray.push(answer.userInput); 
            inputString = inputArray.join('');
    
            var lowerCase = game.wordArray.join("").toLowerCase().split("");
        

            for (var i = 0; i < game.wordArray.length; i++){
                if (answer.userInput.toLowerCase() == lowerCase[i]){
                       
                    game.underscoreArray[i] = answer.userInput;
                    game.underscoreString = game.underscoreArray.join(" ");   
                    console.log("\x1b[32m","CORRECT!!");
                }
            }   
    
    
            if (lowerCase.indexOf(answer.userInput.toLowerCase()) == -1 ){
                guesses++;
                console.log(hangman[guesses]);
                console.log("\x1b[31m", "WRONG!!!")
            }
            console.log("\x1b[37m" + game.underscoreString);
            GameOn();
         
            if (game.underscoreString.indexOf("_") == -1){
                console.log("you win!!")
                setTimeout(stopGame, 2000);
            }
    
            if (guesses == 9){
                console.log("L")
                setTimeout(stopGame, 2000);
            }
        } 

        });
   }

   GameOn();


function stopGame() {
     inquirer.prompt([
        {
            type: "list",
            name: "what",
            message: "Do you wanna play it again??",
            choices: ["Yeap!", "Meh"]
          } 
     ]).then (function(answer){
         if (answer.what === "Yeap!"){
             newGame();
             GameOn();
    
         } else {
             console.log("Thanks for playing!")
             process.exit();
         }
     })
}



