// Setting variables for elements of quiz
var quizSection = document.querySelector(".jumbotron");
var highScores = document.querySelector(".navbar-brand");
var timerEl = document.querySelector("#timer");
var buttonEl = document.querySelector(".btn");
var secondsLeft = 10;

// Set the timer
function setTime() {
    secondsLeft = 10
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.innerHTML = secondsLeft + " seconds left";
        console.log(secondsLeft);
        if (secondsLeft === 0) {
            setTimeout(function () {
                alert("Game is over.")
            }, 100);
            clearInterval(timerInterval);
        }

    }, 1000);
}

// Set quiz questions and answers
    // How is this set up? Arrays?
    // All done on one page, so show/hide properties?
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

// Add button to return back to the start of the quiz

// Add button to clear all highscores
    // Highscores saved in local storage
    // localStorage.clear()

// Will have multiple buttons all with .addEventListener("click") to them

// Add event listener to the button to begin the quiz as well as the timer
buttonEl.addEventListener("click", function () {
    setTime();
});