const statement = document.querySelector("#statement");
const optionButtons = document.querySelector("#options").children;
const explanation = document.querySelector("#explanation");
const exit = document.querySelector("#exit").children;
const restart = document.querySelector("#restart").children;

restart[0].addEventListener("click", () => {
  location.reload();
});

const fact = [
  {
    statement:
      "JavaScript is a programming language that is commonly used to create interactive effects within web browsers?",
    answer: "True",
    explanation:
      "JavaScript is indeed a programming language that allows developers to create dynamic and interactive web content. It is widely used for client-side scripting in web development.",
  },
  {
    statement: "JavaScript is a statically typed programming language.",
    answer: "False",
    explanation:
      "JavaScript is a dynamically typed programming language, which means that variable types are determined at runtime rather than compile time.",
  },
  {
    statement:
      "JavaScript can be used for both front-end and back-end development.",
    answer: "True",
    explanation:
      "JavaScript can be used for front-end development (client-side) to create interactive web pages, as well as for back-end development (server-side) using environments like Node.js.",
  },
  {
    statement: "JavaScript was created in 1995 by Brendan Eich.",
    answer: "True",
    explanation:
      "JavaScript was indeed created in 1995 by Brendan Eich while he was working at Netscape Communications Corporation. It was initially developed in just 10 days and has since become one of the most popular programming languages in the world.",
  },
];

const disable = (buttons) => {
  buttons.setAttribute("disabled", "");
};
const enable = (buttons) => {
  buttons.removeAttribute("disabled");
};

statement.textContent = fact[0].statement;

let i = 0;

const isCorrect = (guess) => {
  if (guess === fact[i].answer) {
    return true;
  } else {
    return false;
  }
};

for (let i = 0; i < optionButtons.length; i++) {
  optionButtons[i].addEventListener("click", () => {
    explanation.textContent = fact[i].explanation;
    for (let i = 0; i < optionButtons.length; i++) {
      disable(optionButtons[i]);

      const guessed = optionButtons[i].value;

      if (isCorrect(guessed)) {
        optionButtons[i].classList.add("correct");
      } else {
        optionButtons[i].classList.add("incorrect");
      }
    }
  });
}

// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
// TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element
