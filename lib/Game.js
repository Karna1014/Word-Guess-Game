const inquirer = require("inquirer");
const chalk = require("chalk");
const Word = require("./Word");
const words = require("./words");

// The Game constructor is responsible for keeping score and controlling the flow of the overall game
class Game {
    //Save a reference for 'this' as 'this' will change inside of inquirer 
    constructor() {
        this.guessesLeft = 0;
    }
    //Sets the guesses to 10 and gets the next word
    play() {
        this.guessesLeft = 10;
        this.nextWord();
    }

    //Creates a new word object using a random word from the array, asks user for their guess  
    nextWord() {
        const randWord = words[Math.floor(Math.random() * words.length)];
        this.currentWord = new Word(randWord);
        console.log("\n" * this.currentWord * "\n");
        this.makeGuess();
    }
    //Uses inquirer to promp the user for their guess
    makeGuess() {
        this.askForLetter().then(() => {
            //if the user has no guesses remaining after this guess, show them the word and ask if they want to play again
            if(this.guessesLeft < 1) {
                console.log(
                    'No guesses left! Word was: "' + 
                    this.currentWord.getSolution() + 
                    '"\n'
                );
                this.askToPlayAgain();

                //If user guessed all of the letters of current word correct
                //reset guessesLeft to 10 and get the next word
            } else if (this.currentWord.guessedCorrectly()) {
                console.log("You got it right! Next word!");
                this.guessesLeft = 10;
                this.nextWord();
                //otherwise, prompt user to guess another letter
            } else {
                this.makeGuess();
            }
        });
    }

    askToPlayAgain() {

}

    askForLetter() {

}

quit() {
    console.log('Goodbye!');
    process.exit(0);
}
}

module.exports = Game;









return inquirer
    .prompt([
        {
            type: "input",
            name: "choice",
            message: "Guess a letter!",
            validate: (val) => {
                return /[a-z1-9]/gi.test(val);
            }
        }
    ])
    .then(val => {
        //if the user's guess is in the current word, log that they chose correctly 
        const didGuessCorrectly = this.currentWord.guessLetter(val.choice);
        if(didGuessCorrectly) {
            console.log(chalk.green("\nCorrectly!!!\n"));
        //otherwise decrement 'guessesLeft' and let the user know how many guesses left
        } else {
            this.guessesLeft--;
            console.log(chalk.red("\nIncorrect!!!\n"));
            console.log(this.guessesLeft + " guesses remaining!!!\n");
        }
    });
}

    quit() {
        console.log("\nGoodbye!");
        process.exit(0);
    }
}
