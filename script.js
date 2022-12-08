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
