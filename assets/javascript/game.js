var guessingWords = ["hello", "hi"];

var remainingGuesses = 12;

var key;

var wins = 0;

var lettersGuessed = [];

var guessedCorrectly = [];

var randomNum = Math.floor(Math.random() * guessingWords.length);

/*var alphabet = ['a', 'b', 'c', 'd', 'e', 'f','g', 
'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']*/

function loadGuessedCorrectly(wordArray, underArray, randomNumber){
    for(var i = 0; i < wordArray[randomNumber].length; i++){
        underArray.push('_');
    }
    return underArray;
}

function remove(charArray, charInput, removedArray){
    var removedLetter;
    for(var i = 0; i < charArray.length; i++){ 
        if(charInput == charArray[i]){
            removedLetter = charArray.splice(i, 1);
            removedArray.push(removedLetter[0]);
        }
    }
}

function guessLetter(charInput, str, correctArray, wrongArray, guessesLeft){
    var charArray = str.split('');
    if(insideString(charInput, str)){
        remove(charArray, charInput, correctArray);
    }
    else{
        remove(charArray, charInput, wrongArray);
        guessesLeft = guessesLeft - 1;
    }
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

document.onkeyup = function(event){ 
    key = event.key;  
}
