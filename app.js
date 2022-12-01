//https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple

//Get access to elements
const view = {
  //top,buttuns
  counterCorrectAnswer: document.getElementById("counterCorrectAnswer"),
  totalQuestion: document.getElementById("total-question"),
  titleQuestion: document.getElementById("question"),
  category: document.getElementsByClassName("category"),
  starScore: document.querySelector(".stars-score"),
  checkAnswer: document.getElementById("check_answer"),
  maxQuestions: document.getSelection(".total-question"),

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
    answers: [
      "Active Directory",
      "Alternative Drive",
      "Automated Database",
      "Active Department",
    ],
  },
  {
    titleQuestion:
      "Moore&#039;s law originally stated that the number of transistors on a microprocessor chip would double every...",
    correct_answer: "Year",
    answers: ["Four Years", "Two Years", "Eight Years", "Year"],
  },
  {
    titleQuestion:
      "On which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    answers: [
      "Hard Disk Drive",
      "Central Processing Unit",
      "Motherboard",
      "Graphics Processing Unit",
    ],
  },
  {
    titleQuestion:
      "2_On which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    answers: [
      "Hard Disk Drive",
      "Central Processing Unit",
      "Motherboard",
      "Graphics Processing Unit",
    ],
  },
];

const gamePickCategory = "pick_category";
const gameFinished = "finished";
const gameInProgress = "in_progress";

//Start game
function randomQuestion(questions) {
  const index = Math.floor(Math.random() * questions.length);
  //console.log(questions[index]);
  return questions[index];
}

randomQuestion(gameQuestionsSet);

const gameState = {
  //infdex of question
  index: 0,
  currentQuestion: undefined,
  currentAnswer: "",
  starScore: 0,
  counterCorrectAnswer: 0,
  status: gameInProgress,
  maxQuestions: 4,
};
console.log("!!!!!!!!counterCorrectAnswer " + gameState.counterCorrectAnswer);
//I can see currentsquiz and answers on webpage
function displayQuiz() {
  let index = gameState.index;
  console.log("NEXT index " + index);
  console.log(`display quiz ${index}`);
  //console.log(gameQuestionsSet[index]);

  //gameState.index = index;
  view.titleQuestion.innerText = gameQuestionsSet[index].titleQuestion;
  view.answer1.innerText = gameQuestionsSet[index].answers[0];
  view.answer2.innerText = gameQuestionsSet[index].answers[1];
  view.answer3.innerText = gameQuestionsSet[index].answers[2];
  view.answer4.innerText = gameQuestionsSet[index].answers[3];
}

function checkAnswer(event) {
  //let targetElement = event.srcElement || event.target;
  if (gameState.counterCorrectAnswer === gameState.maxQuestions) {
    alert("Hello! I am an alert box!!");
  }

  if (
    gameState.currentAnswer === gameQuestionsSet[gameState.index].correct_answer
  ) {
    console.log("CheckAnswer");

    gameState.counterCorrectAnswer += 1;
    view.counterCorrectAnswer.innerText = gameState.counterCorrectAnswer;
    gameState.starScore += 5;
    view.starScore.innerText = gameState.starScore;
    gameState.index += 1;
    console.log("my new index " + gameState.index);
    gameState.currentQuestion = randomQuestion(gameQuestionsSet);
    console.log(
      "2gameState.counterCorrectAnswer " + gameState.counterCorrectAnswer
    );
    view.answer1.classList.remove("selected");
    view.answer2.classList.remove("selected");
    view.answer3.classList.remove("selected");
    view.answer4.classList.remove("selected");
    //console.log(gameState.currentQuestion);
    //displayQuiz();
  }
  displayQuiz();
}
view.checkAnswer.addEventListener("click", checkAnswer);

// -------------------------------------------------------------------
//Add or Remove class 'selected' on answers
function chooseAnswer1Click(event) {
  console.log("chooseAnswer1Click");
  view.answer1.classList.add("selected");
  view.answer2.classList.remove("selected");
  view.answer3.classList.remove("selected");
  view.answer4.classList.remove("selected");

  gameState.currentAnswer = view.answer1.innerText;
  console.log(gameState.currentAnswer);
}

function chooseAnswer2Click(event) {
  console.log("chooseAnswer2Click");
  view.answer1.classList.remove("selected");
  view.answer2.classList.add("selected");
  view.answer3.classList.remove("selected");
  view.answer4.classList.remove("selected");

  gameState.currentAnswer = view.answer2.innerText;
  console.log(gameState.currentAnswer);
}

function chooseAnswer3Click(event) {
  console.log("chooseAnswer3Click");
  view.answer1.classList.remove("selected");
  view.answer2.classList.remove("selected");
  view.answer3.classList.add("selected");
  view.answer4.classList.remove("selected");

  gameState.currentAnswer = view.answer3.innerText;
  console.log(gameState.currentAnswer);
}

function chooseAnswer4Click(event) {
  console.log("chooseAnswer4Click");
  view.answer1.classList.remove("selected");
  view.answer2.classList.remove("selected");
  view.answer3.classList.remove("selected");
  view.answer4.classList.add("selected");

  gameState.currentAnswer = view.answer4.innerText;
  console.log(gameState.currentAnswer);
}
// -------------------------------------------------------------------

view.answer1.addEventListener("click", chooseAnswer1Click);
view.answer2.addEventListener("click", chooseAnswer2Click);
view.answer3.addEventListener("click", chooseAnswer3Click);
view.answer4.addEventListener("click", chooseAnswer4Click);

displayQuiz();
