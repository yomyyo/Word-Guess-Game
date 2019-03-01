var guessingWords = ["hello", "hi"];

var randomNum = Math.floor(Math.random() * guessingWords.length);

var remainingGuesses = 12;

var wins = 0;

var lettersGuessed = [];

var guessedCorrectly = loadGuessedCorrectly(guessingWords, [], randomNum);

function loadGuessedCorrectly(wordArray, underArray, randomNumber){
    for(var i = 0; i < wordArray[randomNumber].length; i++){
        underArray.push('_');
    }
    return underArray;
}

function insideString(charInput, str){
    var charArray = str.split('');
    for(var i = 0; i < charArray.length; i++){
        if(charInput == charArray[i]){
            return true;
        }
    }
    return false;
}

function insideChar(charInput, charArray){
    for(var i = 0; i < charArray.length; i++){
        if(charInput == charArray[i]){
            return true;
        }
    }
    return false;
}

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

function startGame(){
    document.onkeyup = function(event){ 
        var letter = event.key;
        if(!insideChar(letter, guessedCorrectly)){
            if(insideString(letter, guessingWords[randomNum])){
                var curr = indexOfAll(guessingWords[randomNum], letter);
                for(var i = 0; i < curr.length; i++){
                    guessedCorrectly[curr[i]] = letter;
                }
                console.log(guessedCorrectly);
            }
        }
        
        if(!insideChar(letter, lettersGuessed)){
            if(!insideString(letter, guessingWords[randomNum])){
                lettersGuessed.push(letter);
                remainingGuesses--;
                console.log(lettersGuessed);
            }
        }

        if(guessedCorrectly.join("") == guessingWords[randomNum]){
            alert("you win!");
        }

        if(remainingGuesses == 0){
            alert("you lose");
        }
    }
}

startGame();
