// Assigning variables by getting the ID from the html
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// Quiz questions
// Set answers using LOWER CASE LETTERS!
var quizQuestions = [
  {
    // Question 1
    question: "What is Abewd's Fav Color",
    choiceA: "Green",
    choiceB: "Blue",
    choiceC: "Teal",
    choiceD: "Purple",
    correctAnswer: "a",
  },
  {
    // Question 2
    question: "What is Abewd's Fav Food",
    choiceA: "Bamya",
    choiceB: "Spaghetti",
    choiceC: "Fairy Bread",
    choiceD: "Biscoff Cheesecake",
    correctAnswer: "d",
  },
  {
    // Question 3
    question: "What is Abewd's Next Car",
    choiceA: "R35 GTR",
    choiceB: "R32 GTR",
    choiceC: "R33 GTR",
    choiceD: "R34 GTR",
    correctAnswer: "d",
  },
  {
    // Question 4
    question: "What is Abewd's next purchase?",
    choiceA: "Engagement Ring",
    choiceB: "Helicopter",
    choiceC: "Military Tank",
    choiceD: "10 BTC coins",
    correctAnswer: "a",
  },
  {
    // Question 5
    question: "How long did it take Abewd to make this quiz",
    choiceA: "1 week",
    choiceB: "A few hours",
    choiceC: "A few days (under 7 days)",
    choiceD: "A few minutes",
    correctAnswer: "a",
  },
  {
    // Question 6
    question: "What car is Abewd making plastic parts for, mainly?",
    choiceA: "Nissan S15 Silvia",
    choiceB: "Nissan S14 Silvia",
    choiceC: "Toyota Supra",
    choiceD: "Nissan R34 GTR",
    correctAnswer: "a",
  },
  {
    // Question 7
    question: "How much does Abewd love Iyat",
    choiceA: "Meh, kinda",
    choiceB: "Loves her",
    choiceC: "Loves her so much",
    choiceD:
      "Loves her so much that he had to recode 20 lines of CSS and 10 lines of JS just to express how much he loves her in a text bubble",
    correctAnswer: "d",
  },
];
// These variable is used for shifting through questions and is also used to end the quiz using an if statement later
var finalQuestionIndex = quizQuestions.length;
// This is the current question var which shows different questions and will be used for an if statement later to end the quiz
var currentQuestionIndex = 0;
// This var is used to denote the time for the quiz
var timeLeft = 70;
var timerInterval;
// Initial score, an if statement will be used to ++i if the answer is correct to then show a final score for the leaderboard
var score = 0;
var correct;

// This function shifts through the questions in the quiz to display the questions and answers.
function generateQuizQuestion() {
  gameoverDiv.style.display = "none";
  if (currentQuestionIndex === finalQuestionIndex) {
    return showScore();
  }

  // Assigning the question to the correct answer
  var currentQuestion = quizQuestions[currentQuestionIndex];
  questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
  buttonA.innerHTML = currentQuestion.choiceA;
  buttonB.innerHTML = currentQuestion.choiceB;
  buttonC.innerHTML = currentQuestion.choiceC;
  buttonD.innerHTML = currentQuestion.choiceD;
}

// Start Quiz function starts the timer, the (Start!) button will disappear and the first question will be displayed
function startQuiz() {
  gameoverDiv.style.display = "none";
  // Remove the start button
  startQuizDiv.style.display = "none";
  // Display first question in sequence
  generateQuizQuestion();

  //Timer function
  timerInterval = setInterval(function () {
    timeLeft--;
    // Time Remaining text displayed on top of the page
    quizTimer.textContent = "Time Remaining: " + timeLeft;

    // When the timer gets to "1" the timer will be removed and the quiz will end
    if (timeLeft === 1) {
      clearInterval(timerInterval);
      // Your score will also be displayed after the quiz ends
      showScore();
    }
    //1000 milliseconds progression in reverse, etc. 5 4 3 2 1 ...
  }, 1000);
  quizBody.style.display = "block";
}
// The showScore function is what happens when the quiz ends (runs out of time) or the questions are completed
function showScore() {
  quizBody.style.display = "none";
  // When you complete the questions
  gameoverDiv.style.display = "flex";
  // When the time runs out
  clearInterval(timerInterval);
  // Enter your name to register it to the leaderboard
  highscoreInputName.value = "";
  finalScoreEl.innerHTML =
    // Display message about your final score
    "You scored " + score + " out of " + quizQuestions.length + " correct!";
}

// When the submit button is lcicked the highscore function will save the array of high scores
// This is saved in a local storage
submitScoreBtn.addEventListener("click", function highscore() {
  if (highscoreInputName.value === "") {
    alert("Please insert your name!");
    return false;
  } else {
    var savedHighscores =
      JSON.parse(localStorage.getItem("savedHighscores")) || [];
    var currentUser = highscoreInputName.value.trim();
    var currentHighscore = {
      name: currentUser,
      score: score,
    };

    // Center and flex the leaderboard
    gameoverDiv.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";

    // Upload the high scores to the local storage
    savedHighscores.push(currentHighscore);
    localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
    generateHighscores();
  }
});

// This function formats the high scores on the local storage
function generateHighscores() {
  highscoreDisplayName.innerHTML = "";
  highscoreDisplayScore.innerHTML = "";
  var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
  for (i = 0; i < highscores.length; i++) {
    var newNameSpan = document.createElement("li");
    var newScoreSpan = document.createElement("li");
    newNameSpan.textContent = highscores[i].name;
    newScoreSpan.textContent = highscores[i].score;
    highscoreDisplayName.appendChild(newNameSpan);
    highscoreDisplayScore.appendChild(newScoreSpan);
  }
}

// This function displays the high scores page
// This is activated when the (Leader Board) button is clicked
function showHighscore() {
  startQuizDiv.style.display = "none";
  gameoverDiv.style.display = "none";
  highscoreContainer.style.display = "flex";
  highscoreDiv.style.display = "block";
  endGameBtns.style.display = "flex";

  generateHighscores();
}

// This function formats the local storage and the text as well equation them both to ""
function clearScore() {
  window.localStorage.clear();
  highscoreDisplayName.textContent = "";
  highscoreDisplayScore.textContent = "";
}

// This function resets all variables back to "none" and "0" like the scores and high score numbers
function replayQuiz() {
  highscoreContainer.style.display = "none";
  gameoverDiv.style.display = "none";
  startQuizDiv.style.display = "flex";
  timeLeft = 75;
  score = 0;
  currentQuestionIndex = 0;
}

// This function checks each answer to see if its correct or not
function checkAnswer(answer) {
  correct = quizQuestions[currentQuestionIndex].correctAnswer;

  if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
    score++;
    alert("Well done, Correct!");
    currentQuestionIndex++;
    generateQuizQuestion();
    //display the results div that the answer is correct.
  } else if (
    answer !== correct &&
    currentQuestionIndex !== finalQuestionIndex
  ) {
    alert("Incorrect!");
    currentQuestionIndex++;
    generateQuizQuestion();
    //display in the results div that the answer is wrong.
  } else {
    showScore();
  }
}

// This button starts the quiz
startQuizButton.addEventListener("click", startQuiz);
