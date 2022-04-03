//an array of questions to be asked, the choices given, and the answers
var questions = [
    {
        question: "What allstar gym has teams that are types of felines?",
        choices: ["Cheer Athletics", "Cali Allstars", "Top Gun", "Cheer Sport"],
        answer: "Cheer Athletics",
    },
    {
        question: "What color is the Rebel Star?",
        choices: ["Red", "Blue", "Green", "Purple"],
        answer: "Purple",
    },
    {
        question: "Where has Rebel not gone for a photoshoot?",
        choices: ["Santorini", "Paris", "Milan", "Barcelona"],
        answer: "Milan",
    },
    {
        question: "What is the fully crystaled shoe called?",
        choices: ["Ruthless", "Reign", "Revolt", "Renegade"],
        answer: "Reign",
    },
];

var quizBtn = document.getElementById("quizbtn");
var quizContains = document.querySelector("#quiz-contain");
var timer = document.querySelector("#timer");
var countdown = questions.length * 15; 
var countdownInt;
var questionIndex = 0;
var initialsInput = document.querySelector("#initial")
var initialButton = document.querySelector("#initial-submit");
var initials = localStorage.getItem("#initial");
var score = localStorage.getItem("#final-score");

//startTime begins countdown on timer
function startTime(){
    countdown--;
    timer.textContent = countdown;
}

//generateQuestion -- makes the questions show up
function generateQuestion(){

    if(questionIndex === questions.length){
        endGame();
    }

    var quizQuestion = document.createElement("p");
    quizQuestion.textContent = questions[questionIndex].question;
    var answerList = document.createElement("ol");

    for (var i = 0; i < questions[questionIndex].choices.length; i++){
        var currentChoice = document.createElement("li");
        currentChoice.textContent = questions[questionIndex].choices[i];
        answerList.append(currentChoice);
    }

    quizContains.append(quizQuestion);
    quizContains.append(answerList);

    return;
}

//checkAnswer -- checks to see if the question is correct, shows "You're Right", or You're Wrong
function checkAnswer(event){
    var currentAnswer = event.target.textContent;
    var goodAnswer = document.createElement("p");

    if(currentAnswer === questions[questionIndex].answer){
        goodAnswer.textContent = "You're right!";
        timer.append(goodAnswer);
    } else {
        goodAnswer.textContent = "You're wrong!";
        countdown -=5;
        timer.append(goodAnswer);
    }
    
    quizContains.innerHTML ="";
    questionIndex++;
    generateQuestion();

    return;
}

//startQuiz -- starts the quiz
function startQuiz(){
    generateQuestion();
    countdownInt = setInterval(startTime, 1000);
}

//endGame function, shows "Game Over!" when all questions are answered
function endGame(){
    quizContains.innerHTML = "Game Over!";
    clearInterval(countdownInt);
    $("form").show();

    var endScore = textContent();
    endScore.textContent = countdown;
    localStorage.setItem("#final-score", endScore);
    return;
}

//initialButton function, when submitting initials, creates an alert
initialButton.addEventListener("click", function(event){
    event.preventDefault();

    var initial = document.querySelector("#initial").value;

    if (initial === "") {
        alert("Cannot be blank");
    } else {
        alert("Thanks for playing");
    }

    localStorage.setItem("#initial", initial);
    clearInterval(interval);

    return;
});

//Listener events that start with a click
quizBtn.addEventListener("click", startQuiz);
quizContains.addEventListener("click", checkAnswer);