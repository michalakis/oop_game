/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

document.querySelector("#btn__reset").addEventListener("click", event => {
    game.startGame();
});

document.querySelector("#qwerty").addEventListener("click", event => {
    if(event.target.tagName === "BUTTON") {
        game.handleInteraction(event.target);
    }
});