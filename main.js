//cache
const boardEl = document.querySelector("#board-wrapper");
const rowEl = document.querySelector(".row");
const cellEl = [...rowEl.children];
const guessBtn = document.querySelector("#enter")

//objects
// const characterList = ["mario", "luigi", "peach",]
import characterList from "./assets/character.js";

let guess = ""
let character = ""

//events

// //chooses random character from list
const characterNames = characterList.map(character => character.name);
const randomIndex = Math.floor(Math.random() * characterNames.length);
character = characterNames[randomIndex].toLowerCase();
console.log(character);




// //gets answer
guessBtn.addEventListener("click", getGuess);
// function getGuess() {
//     let guessInput = document.getElementById("guess");
//     guess = guessInput.value;
//     console.log("User guessed: " + guess);
// }

// function getGuess() {
//     let guessInput = document.getElementById("guess");
//     guess = guessInput.value;
//     console.log("User guessed: " + guess);

//     // Split the guess string into an array of characters
//     const guessArray = guess.split('');

//     // Iterate through the cells and update the content with the guess characters
//     cellEl.forEach((cell, index) => {
//         if (index < guessArray.length) {
//             cell.innerHTML = `<span>${guessArray[index]}</span>`;
//         } else {
//             // If there are no more characters in the guess, clear the cell
//             cell.innerHTML = "";
//         }
//     });
// }

function getGuess() {
    let guessInput = document.getElementById("guess");
    guess = guessInput.value.toLowerCase();
    console.log("User guessed: " + guess);

    const guessedCharacter = characterList.find(character => character.name.toLowerCase() === guess);

    if (guessedCharacter) {
        Object.values(guessedCharacter).forEach((value, index) => {
            cellEl[index].innerHTML = `<span>${value}</span>`;
        });
    } else {
        console.log("Character not found!")
        cellEl.forEach(cell => {
            cell.innerHTML = "";
        });
    }
}