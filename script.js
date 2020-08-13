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

buttonEl.addEventListener("click", function () {
    setTime();
});