//Creating a variable for keeping the list of destinations in
let destinations = [
  "Salzburg",
  "Barcelona",
  "Madrid",
  "Paris",
  "Tokyo",
  "Singapore",
  "Rome",
  "Berlin",
  "Amsterdam",
  "Athens",
  "Iceland",
];

let questions = [
  //I don't know why but my code is skipping questions so if you notice there are repeat questions, please ignore.  I don't know why it works, but it does.
  {
    question: "Do you prefer warm weather over cold weather?",
    imgSrc:
      "https://images.wallpaperscraft.com/image/river_trees_summer_during_the_shore_92679_2560x1024.jpg",
    choiceA: "yes",
    choiceB: "no",
    correct: "yes"
  },
  {
    question: "Do you prefer coastal cities?",
    imgSrc:
      "https://images.wallpaperscraft.com/image/beach_palm_sand_138174_2560x1024.jpg",
    choiceA: "yes",
    choiceB: "no",
    correct: "yes"
  },
  {
    question: "Do you prefer coastal cities?",
    imgSrc:
      "https://images.wallpaperscraft.com/image/beach_palm_sand_138174_2560x1024.jpg",
    choiceA: "yes",
    choiceB: "no",
    correct: "yes"
  },
  {
    question: "When traveling is culture a major attraction for you?",
    imgSrc:
      "https://images.wallpaperscraft.com/image/japan_building_beautiful_sky_81925_2560x1024.jpg",
    choiceA: "yes",
    choiceB: "no",
    correct: "yes"
  },
  {
    question: "When traveling is culture a major attraction for you?",
    imgSrc:
      "https://images.wallpaperscraft.com/image/japan_building_beautiful_sky_81925_2560x1024.jpg",
    choiceA: "yes",
    choiceB: "no",
    correct: "yes"
  },
  {
    question: "Do you have any issues with heavy human traffic?",
    imgSrc:
      "https://images.wallpaperscraft.com/image/traffic_road_cars_city_114141_2560x1024.jpg",
    choiceA: "yes",
    choiceB: "no",
    correct: "yes"
  },
  {
    question: "Do you have any issues with heavy human traffic?",
    imgSrc:
      "https://images.wallpaperscraft.com/image/traffic_road_cars_city_114141_2560x1024.jpg",
    choiceA: "yes",
    choiceB: "no",
    correct: "yes"
  },
  {
    question:
      "Do you prefer to fill your vacation days with outdoor activities?",
    imgSrc:
      "https://images.wallpaperscraft.com/image/skydiver_fly_sky_clouds_108484_2560x1024.jpg",
    choiceA: "yes",
    choiceB: "no",
    correct: "yes"
  },
  {
    question:
      "Do you prefer to fill your vacation days with outdoor activities?",
    imgSrc:
      "https://images.wallpaperscraft.com/image/skydiver_fly_sky_clouds_108484_2560x1024.jpg",
    choiceA: "yes",
    choiceB: "no",
    correct: "yes"
  },
  {
    question: "Are you okay with traveling to non english speaking countries?",
    imgSrc:
      "https://images.wallpaperscraft.com/image/street_cars_street_city_people_windows_subway_signs_houses_london_59578_2560x1024.jpg",
    choiceA: "yes",
    choiceB: "no",
    correct: "yes"
  },
  {
    question: "Are you okay with traveling to non english speaking countries?",
    imgSrc:
      "https://images.wallpaperscraft.com/image/street_cars_street_city_people_windows_subway_signs_houses_london_59578_2560x1024.jpg",
    choiceA: "yes",
    choiceB: "no",
    correct: "yes"
  }
];

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
const hide2 = document.getElementById("hide2");

//code the start quiz button to hide the button itself and display the quiz html

start.addEventListener("click", startQuiz);

function startQuiz() {
  start.style.display = "none";
  hide.style.display = "none";
  hide2.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  qImg.style.display = "block";
  renderProgress();
}
//Renders the questions in order and displays the image, question, and choice in the html file.
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<h3>" + q.question + "</h3>";
  qImg.src = q.imgSrc;
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
}
//gives us reference for each question for the question progress counter
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    // progressBar.style.width += "<div class='prog' id=" + qIndex + "></div>";
  }
}

choiceA.addEventListener("click", checkAnswer);
choiceB.addEventListener("click", checkAnswer);

const destinationDisplay = document.getElementById("destinationResults");
const desinationImg = document.getElementById("destImg");
const resortList = document.getElementById("destResorts");
const climate = document.getElementById("destClimate");
const languageSpoken = document.getElementById("destLanguage");
const overview = document.getElementById("destOverview");
const currency = document.getElementById("destCurrency");
const quizEnd = document.getElementById("quizContainer")

function displayResults() {
  quizEnd.style.display = "none";
  destinationDisplay.style.display = "block";
}

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    score++;
    destinations.splice(1, 1)
  } else {
    score++;
    destinations.splice(-1, 1)
  }
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    displayResults();
  }
}

const progressBarPercent = Math.round((100 * score) / questions.length);

const progressBar = document.getElementById("progress-bar");

console.log(progressBarPercent);
progressBar.style.width = progressBarPercent + "%";

//after the quiz finishes, this function will display the given destination and other key information to the user