//Creating a variable for keeping the list of destinations in
let destinations = [
    'Paris',
    'Rome',
    'Barcelona',
    'Madrid',
    'Iceland',
    'Tokyo',
    'Singapore',
    'Salzburg',
    'Berlin',
    'Amsterdam',
    'Athens'
];

let questions = [
    {
        question: "Do you prefer warm weather over cold weather?",
        imgSrc: "https://images.wallpaperscraft.com/image/river_trees_summer_during_the_shore_92679_2560x1024.jpg",
        choiceA: "Yes",
        choiceB: "No",
        correct: "Yes",
    },
    {
        question: "",
        imgSrc: "https://images.wallpaperscraft.com/image/river_trees_summer_during_the_shore_92679_2560x1024.jpg",
        choiceA: "Yes",
        choiceB: "No",
        correct: "Yes",
    },
    {
        question: "",
        imgSrc: "",
        choiceA: "Yes",
        choiceB: "No",
        correct: "Yes",
    },
    {
        question: "",
        imgSrc: "",
        choiceA: "Yes",
        choiceB: "No",
        correct: "Yes",
    },
    {
        question: "",
        imgSrc: "",
        choiceA: "Yes",
        choiceB: "No",
        correct: "Yes",
    },
    {
        question: "",
        imgSrc: "",
        choiceA: "Yes",
        choiceB: "No",
        correct: "Yes",
    },
]

//creating some globals to use throughout the process with some tags to connect to the html file
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("yes");
const choiceB = document.getElementById("no");
const progress = document.getElementById("progress");
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 1;
const scoreDiv = document.getElementById("scoreContainer");
const hide = document.getElementById("hide1");
const hide2 = document.getElementById("hide2")



//a variable to hold the questions in.  Each question is has values stored for referencing below

//code the start quiz button to hide the button itself and display the quiz html

start.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    hide.style.display = "none";
    hide2.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}
//Renders the questions in order and displays the image, question, and choice in the html file.
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<h3>" + q.question + "</h3>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
}
//gives us reference for each question for the question progress counter
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progressBar.style.width += "<div class='prog' id=" + qIndex + "></div>";
    }
}

//honestly no idea, tyler did this piece and it seems to in theory ping up or down the value of the destination after the quiz
let newArr = [...destinations]

choiceA.addEventListener("click", checkAnswer);
choiceB.addEventListener("click", checkAnswer);

function checkAnswer(answer, countryIndex) {
    score++
    if (answer == questions[runningQuestion].correct) {
        newArr[countryIndex + 1] = destinations[countryIndex]
        newArr[countryIndex] = destinations[countryIndex + 1]
    } else {
        newArr[countryIndex - 1] = destinations[countryIndex]
        newArr[countryIndex] = destinations[countryIndex - 1]
    }

    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // displayDestination();
    }
}
console.log(score, questions.length)
const progressBarPercent = Math.round(100 * score / questions.length);

const progressBar = document.getElementById("progress-bar");

console.log(progressBarPercent)
progressBar.style.width = progressBarPercent + "%"

//after the quiz finishes, this function will display the given destination and other key information to the user

