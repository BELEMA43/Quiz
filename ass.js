const message = "HELLO EVERYONE";
const arrayOne = [1, 2, 3, 4];
const arrayTwo = [5, 6];

const divide = (firstNumber, secondNumber) =>
  console.log(firstNumber / secondNumber);

const whisper = (message) => {
  console.log(message.toLowerCase());
};

const shorterThan = (arrayOne, arrayTwo) => {
  if (arrayOne.length < arrayTwo.length) {
    console.log("arrayOne is shorter");
  } else {
    console.log("arrayTwo is shorter");
  }
};

divide(1, 2);
whisper(message);
shorterThan(arrayOne, arrayTwo);

const statementElement = document.getElementById("statement");
const optionButtons = document.getElementById("options").children;
const explanationElement = document.getElementById("explanation");

console.log(optionButtons);

const fact = {
  statement: "JavaScript is the same as Java",
  answer: "false",
  explanation:
    "JavaScript and Java are completely different programming languages.",
};

statementElement.textContent = fact.statement;

const disable = (buttonElement) => buttonElement.setAttribute("disabled", "");

const enable = (buttonElement) => buttonElement.removeAttribute("disabled");

// TODO 5: Declare an isCorrect function that compares a guess to the right answer
// isCorrect(guess) should return true if the guess matches the fact's answer

const isCorrect = (guess) => {
  if (guess === fact.answer) {
    return true;
  } else {
    return false;
  }
};

// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
// TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element

// TODO 7: Within the event handler function,
// Use a for loop to disable all the option buttons

// TODO 8: Within the event handler function,
// Get the guessed value from the clicked button
// Use a conditional to compare the guess to the fact's answer
// and add the "correct"/"incorrect" class as appropriate
