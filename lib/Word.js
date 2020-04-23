const Letter = require("./Letter");

// The Word class is responsible for creating an array of Letter objects and determining if the user guessed every Letter correctly
class Word {
    constructor(word) {
        //word.split - splits word into array of letters
        this.letters = word.split("").map(char => {
            return new Letter(char);
        });
    }

    getSolution() {
        return this.letters.map(
            letter => {
              //iterate over each letter   
                return letter.getSolution(); //return the solution for each to form an array of solved letters
            })
            .join(""); //create a string from array of solved letters
    }
    // setting 'toString()' as a method lets us concatenate it like we would a string 
    toString() {
        this.letters.join("");
    }

    guessLetter() {

    }

    guessedCorrectly() {

    }
}



module.exports = Word;
