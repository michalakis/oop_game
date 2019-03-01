/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
 
let game = null;

document.querySelector("#btn__reset").addEventListener("click", event => {
    game = new Game();
    game.startGame();
});

document.querySelector("#qwerty").addEventListener("click", event => {
    if(event.target.tagName === "BUTTON") {
        game.handleInteraction(event.target);
    }
});