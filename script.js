// Setting global variables for elements of quiz
var beginQuiz = document.querySelector(".jumbotron");
var quizSection = document.querySelector(".question-container");
var quizQuestion = document.querySelector("#quiz-question");
var initialsForScore = document.querySelector(".initial-container");
var highScoresList = document.querySelector(".highscore-container");
var highScores = document.querySelector(".navbar-brand");
var timerEl = document.querySelector("#timer");
var beginQuizBtn = document.querySelector("#begin");
var choiceABtn = document.querySelector("#choiceA");
var choiceBBtn = document.querySelector("#choiceB");
var choiceCBtn = document.querySelector("#choiceC");
var choiceDBtn = document.querySelector("#choiceD");
var secondsLeft = 75;
var currentIndex = 0;
var timerInterval = 0;
var initials = "";
var listOfHighscores = []

// Array with multiple objects to hold all quiz questions and answers
var questionArr = [{
    question: "What is JavaScripts role in programming?",
    answers: ["a: To define content", "b: To format content", "c: To create dynamic web applications", "d: Where you write your code"],
    correctAnswer: "C"
},
{
    question: "What symbol is used for the termination in JavaScript syntax?",
    answers: ["a: &gt;", "b: &quot", "c: &semi;", "d: &amp"],
    correctAnswer: "C"
},
{
    question: "What element is NOT a part of JavaScript?",
    answers: ["a: Variable", "b: h1", "c: Array", "d: Object"],
    correctAnswer: "B"
},
{
    question: "Which element is useful for debugging your code?",
    answers: ["a: console.log", "b: function", "c: event listener", "d: click event"],
    correctAnswer: "A"
},
{
    question: "Which element does NOT creat a popup in your browser?",
    answers: ["a: Alert", "b: Confirm", "c: Prompt", "d: console.log"],
    correctAnswer: "D"
}];

// Set the timer
function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.innerHTML = secondsLeft + " seconds left";
        // console.log(secondsLeft);
        if (secondsLeft <= 0) {
            setTimeout(function () {
                alert("Game is over.")
            }, 100);
            clearInterval(timerInterval);
        }

    }, 1000);
}

// Set the questions and answer choices for the quiz
function setQuestion() {
    if (currentIndex <= 4) {
        quizQuestion.textContent = questionArr[currentIndex].question;
        choiceABtn.innerHTML = questionArr[currentIndex].answers[0];
        choiceBBtn.innerHTML = questionArr[currentIndex].answers[1];
        choiceCBtn.innerHTML = questionArr[currentIndex].answers[2];
        choiceDBtn.innerHTML = questionArr[currentIndex].answers[3];
    } else {
        clearInterval(timerInterval);
        initials = prompt("Please input your initials to register your score.")
        logInitials();
    }
};

// Get and check the user's answer againt the correct answer from array
function checkAnswer(event) {
    console.log(event);
    var userClicked = event.target.dataset.value
    console.log("User clicked: " + userClicked);
    if (userClicked === questionArr[currentIndex].correctAnswer) {
        currentIndex++;
        setQuestion();
    } else {
        secondsLeft = secondsLeft - 10;
        currentIndex++;
        setQuestion();
    }
};

// Log the initials and score into local storage
function logInitials() {
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", secondsLeft);
}

// TODO:
    // When all questions are answered or timer reaches 0, allow for saving name and score
        // function storeHighscores() {
        // }
    // View highscores page
    // localStorage.getItem()
    // Add button to return back to the start of the quiz
    // Add button to clear all highscores
    // Highscores saved in local storage
    // localStorage.clear()

// Add event listener to the button to begin the quiz as well as the timer
beginQuizBtn.addEventListener("click", function () {
    setTime();
    beginQuiz.setAttribute("style", "display: none");
    quizSection.setAttribute("style", "display: block !important");
    setQuestion();
});

// Add event listener to each answer choice button
choiceABtn.addEventListener("click", checkAnswer);
choiceBBtn.addEventListener("click", checkAnswer);
choiceCBtn.addEventListener("click", checkAnswer);
choiceDBtn.addEventListener("click", checkAnswer);