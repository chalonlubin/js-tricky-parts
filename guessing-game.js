function guessingGame() {
  let count = 0;
  let ranNum = Math.floor(Math.random() * 100);
  let won = false;

  return function inner(x) {
    if (won) return "The game is over, you already won!";
    count += 1;

    if (ranNum === x) {
      won = true;
      return `You win! You found ${ranNum} in ${count} guesses.`;
    } else {
      return x > ranNum ? `${x} is too high!` : `${x} is too low!`;
    }
  };
}

let game = guessingGame();

game(10);
game(20);
game(25);
game(30);
module.exports = { guessingGame };
