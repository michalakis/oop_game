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
            "You cant handle the truth",
            "I ll be back",
            "Merry Christmas you filthy animal",
            "Luke I am your father",
            "Frankly my dear I dont give a damn"
         ];

         return phrases;
     }
 }