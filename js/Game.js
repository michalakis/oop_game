/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
     }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
     createPhrases() {
         const phrases = [
            new Phrase("You cant handle the truth"),
            new Phrase("I ll be back"),
            new Phrase("Merry Christmas you filthy animal"),
            new Phrase("Luke I am your father"),
            new Phrase("Frankly my dear I dont give a damn")
         ];

         return phrases;
     }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);

        return this.phrases[index];
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.querySelector("#overlay").style.display = "none";
        this.activePhrase =  this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };
    
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        const listItems = document.querySelectorAll("#phrase ul li");
        let won = true;
        listItems.forEach( (item, index) => {
            if(item.classList.contains("hide")) {
                won = false;
            }
        });

        return won;
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed++;
        const lives = document.querySelectorAll("#scoreboard ol li img");

        if(this.missed <= 5) {
            for(let i = 0; i < this.missed; i++) {
                lives[i].setAttribute("src", "images/lostHeart.png");
            }
        }

        if(this.missed >= 5) {
            this.gameOver(false);
        } 
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {};
 }
