/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
        this.missed = 0;
        this.phrases = createPhrases();
        this.activePhrase = null;
     }

     createPhrases(){
         const phrases = [
            "You can't handle the truth",
            "I'll be back",
            "Merry Christmas you filthy animal",
            "Luke I am your father",
            "Frankly, my dear, I don't give a damn"
         ];

         return phrases;
     }
 }