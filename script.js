// Setting global variables for elements of quiz
var beginQuiz = document.querySelector(".jumbotron");
var quizSection = document.querySelector(".question-container")
var highScores = document.querySelector(".navbar-brand");
var timerEl = document.querySelector("#timer");
var buttonEl = document.querySelector(".btn");
var secondsLeft = 50;
var currentIndex = 0;

// Array with multiple objects to hold all quiz questions and answers
var questionArr = [{
    question: "Question #1",
    answers: ["a", "b", "c", "d"],
    correctAnswer: ""
},
{
    question: "Question #2",
    answers: ["a", "b", "c", "d"],
    correctAnswer: ""
},
{
    question: "Question #3",
    answers: ["a", "b", "c", "d"],
    correctAnswer: ""
},
{
    question: "Question #4",
    answers: ["a", "b", "c", "d"],
    correctAnswer: ""
},
{
    question: "Question #5",
    answers: ["a", "b", "c", "d"],
    correctAnswer: ""
}];

// Set the timer
function setTime() {
    secondsLeft = 10
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.innerHTML = secondsLeft + " seconds left";
        console.log(secondsLeft);
        if (secondsLeft <= 0) {
            setTimeout(function () {
                alert("Game is over.")
            }, 100);
            clearInterval(timerInterval);
        }

    }, 1000);
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
buttonEl.addEventListener("click", function () {
    setTime();
    beginQuiz.setAttribute("style", "display: none");
    quizSection.setAttribute("style","display: block");
});