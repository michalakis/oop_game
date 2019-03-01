/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

document.querySelector("#btn__reset").addEventListener("click", event => {
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});
