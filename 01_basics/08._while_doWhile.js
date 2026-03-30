// While loop example
let startIndex = 0;

// while (startIndex <= 10) {
//     console.log(`Value of index is ${startIndex}`);
//     startIndex = startIndex + 2;
// }

// Array iteration using while loop
let superheroNames = ['flash', "batman", "superman"];

let currentPosition = 0;

while (currentPosition < superheroNames.length) {
    console.log(`Hero name is ${superheroNames[currentPosition]}`);
    currentPosition = currentPosition + 1;
}

// Do-while loop example
let gameScore = 11;

do {
    console.log(`Score is ${gameScore}`);
    gameScore++;
} while (gameScore <= 10);