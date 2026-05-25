// TODO 1: Declare & assign variables pointing to the corresponding element(s)
// statement should be the "statement" div
// optionButtons should be all the elements within the "options" div
// explanation should be the "explanation" div

let statement = document.querySelector("#statement");
let optionButtons = document.querySelectorAll("#options button");
let explanation = document.querySelector("#explanation");

let restartButton = document.querySelector("#restart");

restartButton.addEventListener("click", () => {
  location.reload();
});

// TODO 2: Declare & assign a variable called fact
// Its value should be an object with a statement, true/false answer, and explanation

// TODO 3: Set the text of the statement element to the fact's statement

const facts = {
  statement: "Is JavaScript the same as Java?",
  answer: "false",
  explanation:
    "JavaScript was formly called ECMAscript but for marketing and publicity purposed the name was changed to JavaScript because at that time the programming language 'Java' was popular at that time.",
};

statement.textContent = facts.statement;

// TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
// disable(button) should set the button element's attribute "disabled" to the value ""
// enable(button) should remove the attribute "disabled" from the button element

const disable = (anwserButton) => anwserButton.setAttribute("disabled", "");
// What's the empty string for?
const enable = (answerButton) => answerButton.removeAttribute("disabled");

// TODO 5: Declare an isCorrect function that compares a guess to the right answer
// isCorrect(guess) should return true if the guess matches the fact's answer
const isCorrect = (guess) => {
  if (guess === facts.answer) {
    return true;
  } else {
    return false;
  }
};

// Please explain the isCorrect function.

// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
// TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element

// TODO 7: Within the event handler function,
// Use a for loop to disable all the option buttons

for (let handler = 0; handler < optionButtons.length; handler++) {
  if (handler === 0) {
    optionButtons[handler].addEventListener("click", () => {
      optionButtons[handler].textContent = "clicked true";
      disable(optionButtons[handler == 0 ? 1 : 0]);
    });
  } else if (handler >= 1) {
    optionButtons[handler].addEventListener("click", () => {
      optionButtons[handler].textContent = "clicked false";
      explanation.textContent = facts.explanation;
      disable(optionButtons[handler == 0 ? 1 : 0]);
    });
  }
}

// TODO 8: Within the event handler function,
// Get the guessed value from the clicked button
// Use a conditional to compare the guess to the fact's answer
// and add the "correct"/"incorrect" class as appropriate
