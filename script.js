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

function endGame(){
    quizContains.innerHTML = "Game Over!";
    clearInterval(countdownInt);
}

function startTime(){
    countdown--;
    timer.textContent = countdown;
}

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
}

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
}

function startquiz(){
    generateQuestion();
    countdownInt = setInterval(startTime, 1000);
}

quizBtn.addEventListener("click", startquiz);
quizContains.addEventListener("click", checkAnswer);