window.addEventListener("load", init);
//Levels
const levels = { easy: 5, medium: 3, hard: 1 };
//Global
const currentLevel = levels.hard;
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "Naruto",
  "Goku",
  "Light",
  "Sasuke",
  "Luffy",
  "Zoro",
  "Sanji",
  "Nami",
  "Boruto",
  "Itachi",
  "Madara",
  "Kira",
  "Natsu",
  "Shanks",
  "Vegeta",
  "Beerus",
  "Kirito",
];

// Initialize Game
function init() {
  //Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  //Load Word From Array
  showWord(words);
  //Start Matching on word input
  wordInput.addEventListener("input", startMatch);
  //Call Countdown Every Seconds
  setInterval(countdown, 1000);
  //Check Game Status
  setInterval(checkStatus, 50);
}
//Start Match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    wordInput.value = "";
    score++;
    showWord(words);
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}
//Match current Word to Input Word
function matchWords() {
  if (currentWord.innerHTML === wordInput.value) {
    message.innerHTML = "Correct !!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}
//Pick & Show Random Word
function showWord(words) {
  //Generate Random Array Index
  const randIndex = Math.floor(Math.random() * words.length);
  //Output Random Word
  currentWord.innerHTML = words[randIndex];
  console.log(randIndex);
}

//Countdown Timer
function countdown() {
  //Make Sure time is not run out
  if (time > 0) {
    //Decrement
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  //Show Time
  timeDisplay.innerHTML = time;
}

//Check Game Status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game is Over";
    score = -1;
  }
}
