var word = prompt("Player 1, enter a word with a minimum of 8 letters:");
var hiddenWord = "";
var guesses = [];
var remainingGuesses = 10;


    function letter() {
      let foundLetter = false;
      for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === letter) {
          hiddenWord[i] = letter;
          foundLetter = true;
        }
        letter();
      }
      return foundLetter;
    }
    
  
    while (incorrectGuesses < maxIncorrectGuesses) {
      console.log("Guessed Letters: " + guessedLetters.join(", "));
    }
     
      let guess = prompt("Player 2, enter a letter:");
    
     
      while (!/^[a-z]$/.test(guess)) {
        guess = prompt("Please enter a valid letter (a-z):")
      }
    
      if (guessedLetters.includes(guess)) {
        console.log("You have already guessed that letter. Try again!");
       
      }
    
    
    


    
    
    
    
    