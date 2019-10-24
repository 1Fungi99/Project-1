var question = true
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


const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("yes");
const choiceB = document.getElementById("no");
const progress = document.getElementById("progress");
var destinationScore = destinations[5]
const lastQuestion = questions.length - 1;

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

function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    renderProgress();
    quiz.style.display = "block";
}

function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<h2>" + q.question + "</h2>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
}

function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

function checkAnswer(answer, countryIndex) {
    if (answer == questions[runningQuestion].correct) {
        let newArr = [...destinations]
        newArr[countryIndex + 1] = destinations[countryIndex]
        newArr[countryIndex] = destinations[countryIndex + 1]

    } else {

    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        scoreRender();
    }
}
