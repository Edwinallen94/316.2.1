//Using window methods
// Create a simple guessing game that pushes users toward the correct answer in some iterative way. The game does not need to be practical or complicated.

// Use window object methods to gather input from the user and display information to the user.

// Use DOM manipulation to give a visual indication of the game's progress in some way.

// creating loop for each hint

//created my array with colors and hints
const colors = [
  {
    name: "red",
    hints: [
      `It's the color of superman's cape`,
      `One of the colors in the American flag`,
    ],
  },
  { name: "blue", hints: [`It's a genre of music`, `Steve's cartoon dog!`] },
  {
    name: "green",
    hints: [`The color of the ninja turtles`, `Broccoli?`],
  },
];

let randomeColor = colors[Math.floor(Math.random() * colors.length)];
let turnsLeft = randomeColor.hints.length;
// console.log()
// this would let the user know the guess and statment
let startGame = document.getElementById("startGame");
let guessesLeft = document.getElementById("guesses");
//This will show the alert of your answer

for (let hint of randomeColor.hints) {
  let response = prompt(`${hint}`);

  if (response === randomeColor.name) {
    startGame.textContent = `You've guessed correctly! The color was ${randomeColor.name}.`;
    alert(`You've guess correctly!`);
    break;
  } else {
    turnsLeft--;
    guessesLeft.textContent = `Guesses Left: ${turnsLeft}`;
    startGame.textContent = `You've guess incorrect`;
    // alert(`You've guessed incorrect, you have ${guessesLeft - 1} more guesses`);

    if (turnsLeft - 1 === 0) {
      startGame.textContent = `Sorry, you close! The color was ${randomeColor.name}.`;
      alert(`Sorry, you lose!`);
      break;
    }
  }
}
