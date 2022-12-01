const gamePickCategory = "pick_category";
const gameFinished = "finished";
const gameInProgress = "in_progress";

const game = {
  starsScore: 0,
  counterCorrectAnswer: 0,
  totalQuestion: 10,
  currentQuestion: undefined,
  //status: gamePickCategory, // or "finished"
  currentCategory: "IT",
};

answer1.addEventListener("click", console.log("Anna it is your first step"));

function updateScreen() {
  counterCorrectAnswer.innerText = game.counterCorrectAnswer;
  titleQuestion.innerText = game.totalQuestion;
}

//START game

function randomQuestion(questions) {
  const index = Math.floor(Math.random() * gameQuestionsSet.length);
  console.log(gameQuestionsSet[index]);
  return gameQuestionsSet[index];
}

function startGameBtnEventListener(event) {
  game.starsScore = 0;
  game.counterCorrectAnswer = 0;
  game.totalQuestion = 10;
  game.currentQuestion = randomQuestion(game.currentCategory);
  game.status = gameInProgress;
  updateScreen();
}
