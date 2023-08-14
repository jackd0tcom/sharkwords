const alphabet = "abcdefghijklmnopqrstuvwxyz";

function setupGuesses(element, handleGuess) {
  // splitting up our alphabet string and looping over it
  alphabet.split("").forEach((letter) => {
    // for each letter in the alphabet we create a button element
    const btn = document.createElement("button");
    // for each letter button we add in the correct letter
    btn.innerText = letter;
    // adding a listener that attaches the even to handleGuess
    btn.addEventListener("click", (e) => handleGuess(e, letter));
    // appending the button
    element.append(btn);
  });
}

export default setupGuesses;
