//https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
const view = {
  //top,buttuns
  counterCorrectAnswer: document.getElementById("counterCorrectAnswer"),
  totalQuestion: document.getElementById("total-question"),
  titleQuestion: document.getElementById("question"),
  category: document.getElementsByClassName("category"),
  starScore: document.getElementsByClassName("stars-score"),

  //Answers
  answer1: document.getElementById("answer1"),
  answer2: document.getElementById("answer2"),
  answer3: document.getElementById("answer3"),
  answer4: document.getElementById("answer4"),
};

//List of questions
const gameQuestionsSet = [
  {
    titleQuestion:
      "What does AD stand for in relation to Windows Operating Systems? ",
    correct_answer: "Active Directory",
    incorrect_answers: [
      "Alternative Drive",
      "Automated Database",
      "Active Department",
    ],
  },
  {
    titleQuestion:
      "Moore&#039;s law originally stated that the number of transistors on a microprocessor chip would double every...",
    correct_answer: "Year",
    incorrect_answers: ["Four Years", "Two Years", "Eight Years"],
  },
  {
    titleQuestion:
      "On which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    incorrect_answers: [
      "Hard Disk Drive",
      "Central Processing Unit",
      "Graphics Processing Unit",
    ],
  },
];

class Game {
  constructor(questions) {
    this.questions = questions;
    console.log("New game started");
  }
  displayQuiz(index) {
    console.log(`display quiz ${index}`);
    console.log(this.questions[index]);

    view.titleQuestion.innerText = this.questions[index].titleQuestion;
    view.answer1.innerText = this.questions[index].correct_answer;
    view.answer2.innerText = this.questions[index].incorrect_answers[0];
    view.answer3.innerText = this.questions[index].incorrect_answers[1];
    view.answer4.innerText = this.questions[index].incorrect_answers[2];
  }
  chooseAnswer(activeAnswer) {
    this.activeAnswer = activeAnswer;
  }
}
const game = new Game(gameQuestionsSet);
game.displayQuiz(0);

function chooseAnswerClick(event) {
  let targetElement = event.srcElement || event.target;
  console.log(targetElement);
  view.answer1.classList.remove("selected");
  view.answer2.classList.remove("selected");
  view.answer3.classList.remove("selected");
  view.answer4.classList.remove("selected");
  targetElement.classList.add("selected");

  game.chooseAnswer(targetElement.innerText);
  console.log(game.activeAnswer);
}
view.answer1.addEventListener("click", chooseAnswerClick);
view.answer2.addEventListener("click", chooseAnswerClick);
view.answer3.addEventListener("click", chooseAnswerClick);
view.answer4.addEventListener("click", chooseAnswerClick);
