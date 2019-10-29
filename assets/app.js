console.log("this is going to look like trash, im so sorry for anyone that has to read this, half our workforce is gone, and Jude and i are working as hard as we can to finish this and its currencly 3:00 in the morning and i need to go to bed, again i am so sorry... <3 JUSTIN :)                              ALSO HONORARY MEMBER: NICK")

//Creating a variable for keeping the list of destinations in
const destinations = [
  {
    location: "Salzburg",
    language: "Language Spoken : German",
    overview: "Salzburg has become somewhat of a mecca for classical music and you can feel Mozart's influence all around the city. The streets are alive with beautiful live music and there are talented musicians around every corner",
    travelGuide: "https://www.google.com/travel/guide?dest_mid=%2Fm%2F0b1mf&dest_src",
    destinationImgUrl: "https://images.wallpaperscraft.com/image/salzburg_austria_night_top_view_streets_buildings_102468_1920x1200.jpg",
  },
  {
    location: "Barcelona",
    language: "Language Spoken : Spanish",
    overview: "Barcelona has some of the most unique and inspiring architecture in the world, so a tour of the city's parks, museums and churches is a must. Start your days off with tours of Antoni Gaudí's whimsical architecture, including Casa Batlló, La Sagrada Familia and Park Güell.",
    travelGuide: "https://www.google.com/travel/guide?dest_mid=%2Fm%2F01f62&dest_src",
    destinationImgUrl: "https://images.wallpaperscraft.com/image/building_facade_bottom_view_123203_1920x1080.jpg",
  },
  {
    location: "Madrid",
    language: "Language Spoken : Spanish",
    overview: "Madrid is the largest city in Spain. It is the center of international business. If you walk through the streets of Madrid. You can hear the gentle melodies of the Spanish guitar, the swish of a flamenco dancer's skirt, and the happy laughter from a midday meal from the restaurants around.",
    travelGuide: "https://www.google.com/travel/guide?dest_mid=%2Fm%2F056_y&dest_src",
    destinationImgUrl: "https://images.wallpaperscraft.com/image/city_madrid_spain_sky_clouds_people_man_woman_sign_signs_58843_1920x1080.jpg",
  },
  {
    location: "Paris",
    language: "Language Spoken : French",
    overview: "The City of Light draws millions of visitors every year with its unforgettable ambiance. Of course, the divine cuisine and vast art collections deserve some of the credit as well. The gentle River Seine rambles through the city, flanked by stately museums, centuries-old churches, and blocks of Rococo- and Neoclassical-design architecture, further enhanced by cascading trees and glowing streetlamps.",
    travelGuide: "https://www.google.com/travel/guide?dest_mid=%2Fm%2F05qtj&dest_src",
    destinationImgUrl: "https://images.wallpaperscraft.com/image/paris_tower_city_79284_1920x1080.jpg",
  },
  {
    location: "Tokyo",
    language: "Language Spoken : Japanese",
    overview: "Animated is perhaps the best word to describe Tokyo. Crazy about its anime, Japan's mega city is constantly buzzing with movement – feet clacking down sidewalks, cars zooming along streets, subway trains humming below ground, ships cruising in and out.",
    travelGuide: "https://www.google.com/travel/guide?dest_mid=%2Fm%2F07dfk&dest_src",
    destinationImgUrl: "https://images.wallpaperscraft.com/image/night_city_city_lights_tokyo_122633_1920x1080.jpg",
  },
  {
    location: "Singapore",
    language: "Language Spoken : Malay",
    overview: "Singapore is a miraculous sight, particularly for travelers familiar with modern Asian metropolises. The city maintains a remarkable balance of green space and skyscrapers, in addition to sustaining substantial ethnic enclaves like Little India and Chinatown.",
    travelGuide: "https://www.google.com/destination?dest_mid=/m/06t2t&dest_src",
    destinationImgUrl: "https://images.wallpaperscraft.com/image/singapore_night_skyscrapers_115631_1920x1080.jpg",
  },
  {
    location: "Rome",
    language: "Language Spoken : Italian",
    overview: "Italy's capital city, Rome is also known for a history that dates back to the eras of Octavian, Julius Caesar and Hadrian, among others. Left behind are structures like the Pantheon, the Roman Forum and dozens of churches, among other historic gems.",
    travelGuide: "https://www.google.com/travel/guide?dest_mid=%2Fm%2F06c62&dest_src",
    destinationImgUrl: "https://images.wallpaperscraft.com/image/rome_italy_coliseum_landscape_city_59248_1920x1080.jpg",
  },
  {
    location: "Berlin",
    language: "Language Spoken : German",
    overview: "More than two decades since the fall of the Berlin Wall, the city basks in a cultural renaissance that boasts everything from museums and fashion to food and nightclubs. But that's not to say that this city has forgotten its dark past; in fact, attractions like The Memorial to the Murdered Jews of Europe, the Topography of Terror and the Checkpoint Charlie Museum are evidence of its steadfast reverence.",
    travelGuide: "https://www.google.com/destination?dest_mid=/m/0156q&dest_src",
    destinationImgUrl: "https://images.wallpaperscraft.com/image/germany_berlin_potsdamer_platz_morning_building_architecture_47743_1920x1200.jpg",
  },
  {
    location: "Amsterdam",
    language: "Language Spoken : Dutch",
    overview: "Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age. Its Museum District houses the Van Gogh Museum, works by Rembrandt and Vermeer at the Rijksmuseum, and modern art at the Stedelijk. Cycling is key to the city’s character, and there are numerous bike paths.",
    travelGuide: "https://www.google.com/destination?dest_mid=/m/0k3p&dest_src",
    destinationImgUrl: "https://images.wallpaperscraft.com/image/canal_sunrise_amsterdam_netherlands_59165_1920x1080.jpg",
  },
  {
    location: "Athens",
    language: "Language Spoken : Greek",
    overview: "Athens is the capital of Greece. It was also at the heart of Ancient Greece, a powerful civilization and empire. The city is still dominated by 5th-century BC landmarks, including the Acropolis, a hilltop citadel topped with ancient buildings like the colonnaded Parthenon temple. The Acropolis Museum, along with the National Archaeological Museum, preserves sculptures, vases, jewelry and more from Ancient Greece.",
    travelGuide: "https://www.google.com/destination?dest_mid=/m/0n2z&dest_src",
    destinationImgUrl: "https://images.wallpaperscraft.com/image/city_view_from_above_buildings_122339_1920x1080.jpg",
  },
  {
    location: "Iceland",
    language: "Language Spoken : Icelandic",
    overview: "Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavik, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland’s Viking history.",
    travelGuide: "https://www.google.com/destination?dest_mid=/m/03rj0&dest_src",
    destinationImgUrl: "https://images.wallpaperscraft.com/image/waterfall_seljalandsfoss_iceland_122969_1920x1080.jpg",
  },
];

let questions = [
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
    question: "Do you find yourself to be more of a morning person than a night person?",
    imgSrc:
      "https://images.wallpaperscraft.com/image/morning_ocean_surf_74099_2560x1024.jpg",
    choiceA: "yes",
    choiceB: "no",
    correct: "yes"
  },
  {
    question: "Is history a major interest when picking a destination?",
    imgSrc:
      "https://images.wallpaperscraft.com/image/acropolis_architecture_ancient_148575_2560x1024.jpg",
    choiceA: "yes",
    choiceB: "no",
    correct: "yes"
  },
  {
    question: "If you had the option to not work for the rest of your life, would you take it?",
    imgSrc:
      "https://images.wallpaperscraft.com/image/city_cityscape_bridge_797_2560x1024.jpg",
    choiceA: "yes",
    choiceB: "no",
    correct: "yes"
  },
  {
    question: "Would you move to another country next week if the right opportunity presented itself?",
    imgSrc:
      "https://images.wallpaperscraft.com/image/tokyo_night_city_skyscrapers_121628_2560x1024.jpg",
    choiceA: "yes",
    choiceB: "no",
    correct: "yes"
  },
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
  }
}

choiceA.addEventListener("click", checkAnswer);
choiceB.addEventListener("click", checkAnswer);

const destinationDisplay = document.getElementById("destinationResults");
const destinationHead = document.getElementById("destinationHead");
const destinationImg = document.getElementById("destImg");
const languageSpoken = document.getElementById("destLanguage");
const destOverview = document.getElementById("destOverview");
const quizEnd = document.getElementById("quizContainer");
const destinationGuide = document.getElementById("destGuide");

function displayResults() {
  quizEnd.style.display = "none";
  destinationDisplay.style.display = "block";
  destinationImg.style.display = "block"
  const destLinkVisual = "Checkout booking details here!";
  const destLink = destLinkVisual.link(destinations[0].travelGuide);

  destinationImg.src = destinations[0].destinationImgUrl;

  destinationHead.innerHTML = destinations[0].location;
  languageSpoken.innerHTML = destinations[0].language;
  destOverview.innerHTML = destinations[0].overview;
  destinationGuide.innerHTML = destLink;
}

function checkAnswer(answer) {
  if (answer.target.innerText == questions[runningQuestion].correct) {
    score++;
    destinations.shift()
    console.log(destinations)
  } else {
    score++;
    destinations.pop()
    console.log(destinations)
  }
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    displayResults();
  }
}
