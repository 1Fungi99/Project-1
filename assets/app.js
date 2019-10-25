//Creating a variable for keeping the list of destinations in
var destinations = [
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

//creating some globals to use throughout the process with some tags to connect to the html file
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("yes");
const choiceB = document.getElementById("no");
const progress = document.getElementById("progress");
var destinationScore = destinations[5]
const lastQuestion = questions.length - 1;

//a variable to hold the questions in.  Each question is has values stored for referencing below
let questions = [
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
//code the start quiz button to hide the button itself and display the quiz html
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    renderProgress();
    quiz.style.display = "block";
}
//Renders the questions in order and displays the image, question, and choice in the html file.
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<h2>" + q.question + "</h2>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
}
//gives us reference for each question for the question progress counter
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

//honestly no idea, tyler did this piece and it seems to in theory ping up or down the value of the destination after the quiz
let newArr = [...destinations]
function checkAnswer(answer, countryIndex) {
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
        displayDestination();
    }
}
//after the quiz finishes, this function will display the given destination and other key information to the user
function displayDestination();

