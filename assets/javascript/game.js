//Global Variables
var guessingWords = ["butterfly", "fire", "dna", "danger", "idol", "serendipity", "dope"];
var randomNum = Math.floor(Math.random() * guessingWords.length);
var remainingGuesses = 5;
var wins = 0;
var lettersGuessed = [];
var guessedCorrectly = loadGuessedCorrectly(guessingWords, [], randomNum);

//Dom variables
var pageUnderScore = document.getElementById("underscores");
var pageGuessedWrong = document.getElementById("guessedWrong");
var pageWordBox = document.getElementById("wordBox");

//Dom manipulation
pageGuessedWrong.innerHTML = remainingGuesses  + " Guesses Remaining";
pageWordBox.innerHTML = lettersGuessed.join(" ");
pageUnderScore.innerHTML = guessedCorrectly.join(" ");

//function that loads an array with the correct amount of underscores
function loadGuessedCorrectly(wordArray, underArray, randomNumber){
    for(var i = 0; i < wordArray[randomNumber].length; i++){
        underArray.push('_');
    }
    return underArray;
}

//function to check whether a character is inside of a string
function insideString(charInput, str){
    var charArray = str.split('');
    for(var i = 0; i < charArray.length; i++){
        if(charInput == charArray[i]){
            return true;
        }
    }
    return false;
}

//function to check whether a character is inside of an array
function insideChar(charInput, charArray){
    for(var i = 0; i < charArray.length; i++){
        if(charInput == charArray[i]){
            return true;
        }
    }
    return false;
}

//finds all occurrences of a letter inside of a word
function indexOfAll(word, letter){
    var indexes = [];
    var wordArray = word.split('');
    for(var i = 0; i < word.length; i++){
        if(wordArray[i] == letter){
            indexes.push(i);
        }
    }
    return indexes;
}

//main funtion, used to play the game
function main(){
    document.onkeyup = function(event){ 
        var letter = event.key;

        //check to see if a correct letter has already been guessed
        if(!insideChar(letter, guessedCorrectly)){

            //check to see if the letter is inside selected word, if so, add it to array guessedCorrectly
            if(insideString(letter, guessingWords[randomNum])){
                var curr = indexOfAll(guessingWords[randomNum], letter);
                for(var i = 0; i < curr.length; i++){
                    guessedCorrectly[curr[i]] = letter;
                    pageUnderScore.innerHTML = guessedCorrectly.join(" ");
                }
            }
        }
        
        //check to see if a wrong letter has already been guessed
        if(!insideChar(letter, lettersGuessed)){

            //if the letter is wrong, add it to the lettersGuessed and decrement number of guesses
            if(!insideString(letter, guessingWords[randomNum])){
                lettersGuessed.push(letter);
                pageWordBox.innerHTML = lettersGuessed.join(" ");
                remainingGuesses--;
                pageGuessedWrong.innerHTML = remainingGuesses + " guesses remaining";
                console.log(lettersGuessed);
            }
        }

        //if user wins, reload the page
        if(guessedCorrectly.join("") == guessingWords[randomNum]){
            location.reload();
            alert("you win!");
        }

        //if the user loses, reload the page.
        if(remainingGuesses == 0){
            location.reload();
            alert("you lose");
        }
    }
}

startGame();
