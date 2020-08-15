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

// Array with multiple objects to hold all quiz questions and answers
var questionArr = [{
    question: "What is JavaScripts role in programming?",
    answers: ["a: To define content", "b: To format content", "c: To create dynamic web applications", "d: Where you write your code"],
    correctAnswer: "C"
},
{
    question: "Question 2",
    answers: ["a: this is answer a", "b: this is answer b", "c: this is answer c", "d: this is answer d"],
    correctAnswer: ""
},
{
    question: "Question 3",
    answers: ["a: this is answer a", "b: this is answer b", "c: this is answer c", "d: this is answer d"],
    correctAnswer: ""
},
{
    question: "Question 4",
    answers: ["a: this is answer a", "b: this is answer b", "c: this is answer c", "d: this is answer d"],
    correctAnswer: ""
},
{
    question: "Question 5",
    answers: ["a: this is answer a", "b: this is answer b", "c: this is answer c", "d: this is answer d"],
    correctAnswer: ""
}];

// Set the timer
function setTime() {
    var timerInterval = setInterval(function () {
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
    quizQuestion.textContent = questionArr[currentIndex].question;
    choiceABtn.innerHTML = questionArr[currentIndex].answers[0];
    choiceBBtn.innerHTML = questionArr[currentIndex].answers[1];
    choiceCBtn.innerHTML = questionArr[currentIndex].answers[2];
    choiceDBtn.innerHTML = questionArr[currentIndex].answers[3];
}

// Get and check the user's answer againt the correct answer from array
function checkAnswer(event) {
    var userClicked = event.target.dataset.value;
    console.log("User clicked: " + userClicked);
}

// Set quiz questions and answers
    // How is this set up? Arrays?
        // One main array with multiple objects
        //var questionArr =[
            //{question: "abcd"
            //choices:["a","b","c","d"]
            //answer:"a"
            //},
            //{object2}
        //]
            // each object will contain the question, the choices, and the answer
    // All done on one page, so show/hide properties?
        // use styling to display: none and display: block
        // create buttons dynamically using javascript by looping through the array
            // var currentIndex = 0 global var
            // questionArr[0].question
            // questionArr[0].choices.forEach() or using another for loop

        //when user clicks the answer: currentIndex++, compare answer to choices, decrease time, scoring.
        //when time <= 0: game is over, move to initial container
    // Need text field for question and buttons for answers

// Show first question when button is clicked (along with starting the timer)
    // Make necessary adjustments to setTime() as needed

// Show next question when answer is chosen for prior question

// Compare user inputed answer and correct answer
    // If user clicked = correct answer then continue to next question

// If answer selected is wrong, take away time from the timer
    // Else subtract __ seconds from secondsLeft and continue to next question

// When all questions are answered or timer reaches 0, allow for saving name and score
    // Is score based on points or time?
    // localStorage.setItem()

// View highscores page
    // localStorage.getItem()
    // Add button to return back to the start of the quiz
    // Add button to clear all highscores
        // Highscores saved in local storage
        // localStorage.clear()

// Will have multiple buttons all with .addEventListener("click") to them

// Add event listener to the button to begin the quiz as well as the timer
beginQuizBtn.addEventListener("click", function () {
    setTime();
    beginQuiz.setAttribute("style", "display: none");
    quizSection.setAttribute("style","display: block !important");
    setQuestion();
});
// Add event listener to each answer choice button
choiceABtn.addEventListener("click", checkAnswer());
choiceBBtn.addEventListener("click", checkAnswer());
choiceCBtn.addEventListener("click", checkAnswer());
choiceDBtn.addEventListener("click", checkAnswer());