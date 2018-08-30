var pcChoice = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j" , "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var userGuess = document.getElementById("userGuess");
var wins = 1;
var loses = 1;
var guessesLeft = 10;



function resetGuess() {
    guessesLeft = 10;
}

function resetUserGuess() {
    userGuess.textContent = " ";
}




document.onkeypress = function displayNum(event){
        
     var guess = event.key;
     var pcGuess = pcChoice[Math.floor(Math.random() * pcChoice.length)];   

        if (guess === pcGuess) { 
            document.getElementById("wins").innerHTML = wins++;   
        } else {
            document.getElementById("guesses-left").innerHTML = guessesLeft--;
            console.log(guess);
            console.log(pcGuess);
        }
        
        if (guessesLeft < 1) {
            document.getElementById("loses").innerHTML = loses++;
             resetGuess();
             resetUserGuess();
        }

        if (wins > 3){
            alert("congrats you win");
        }
        if (loses > 9) {
            alert("you lose");
        }
        userGuess.textContent += event.key + " ";
        
        }
        
    















