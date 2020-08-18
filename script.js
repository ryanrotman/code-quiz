// Setting global variables for elements of quiz
var beginQuiz = document.querySelector(".jumbotron");
var quizSection = document.querySelector(".question-container");
var quizQuestion = document.querySelector("#quiz-question");
var initialsForScore = document.querySelector(".initial-container");
var highScoreSection = document.querySelector(".highscore-container");
var highScoresList = document.querySelector("#scorelist");
var highScores = document.querySelector(".navbar-brand");
var timerEl = document.querySelector("#timer");
var beginQuizBtn = document.querySelector("#begin");
var choiceABtn = document.querySelector("#choiceA");
var choiceBBtn = document.querySelector("#choiceB");
var choiceCBtn = document.querySelector("#choiceC");
var choiceDBtn = document.querySelector("#choiceD");
var initials = document.querySelector("#initials");
var initialsInputBtn = document.querySelector("#initialssubmitBtn");
var restartQuizBtn =document.querySelector("#restartQuiz");
var secondsLeft = 75;
var currentIndex = 0;
var timerInterval = 0;
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
        setTimeout(function () {
            clearInterval(timerInterval);
            // initials = prompt("Please input your initials to register your score.")
            quizSection.setAttribute("style", "display: none");
            initialsForScore.setAttribute("style", "display: block !important");
        }, 500);
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

// Log the initials and score into local storage then view highscore page with list
function logInitials(event) {
    event.preventDefault();
    var userInitials = initials.value;
    var userInput = {
        "initials": userInitials,
        "score": secondsLeft,
    };
    console.log("User Initials: " + userInitials);
    console.log("User score: " + secondsLeft);
    if (userInitials) {
        var existingEntries = JSON.parse(localStorage.getItem("allInput"));
        if (existingEntries == null) {
            existingEntries = [];
        }
        localStorage.setItem("userInput", JSON.stringify(userInput));
        existingEntries.push(userInput);
        localStorage.setItem("allInput", JSON.stringify(existingEntries));
        // initials.value = "";
        initialsForScore.setAttribute("style", "display: none");
        highScoreSection.setAttribute("style", "display: block !important");
        timerEl.innerHTML = "";
    } else {
        alert("Please enter your initials.");
    }
};

function restartQuiz() {
    location.reload();
};

// TODO:
    // View highscores page
    // localStorage.getItem()
    // Add button to return back to the start of the quiz - location.reload();
    // Add button to clear all highscores localstorage.clear();
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

// Event listener for submit button to add initials and score to local storage
initialsInputBtn.addEventListener("click", logInitials);

// Event listener for button to restart the quiz
restartQuizBtn.addEventListener("click", restartQuiz);