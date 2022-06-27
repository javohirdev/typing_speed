// elements
const word = document.getElementById('word'); //h3
const text = document.getElementById('input_area'); // input
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end_game');

const words = [
  "npm cache",
  "vue",
  "hacking world",
  "end",
  "I",
  "all",
  "number",
  "oil",
  "within",
  "now",
  "right",
  "feet",
  "leave",
  "what",
  "now",
  "facebook",
  "came",
  "live",
  "test",
  "about",
  "netflix",
  "came",
  "set",
  "were",
  "follow",
  "study",
  "day",
  "structure",
  "over",
  "why",
  "why",
  "talk",
  "soon",
  "because",
  "random",
  "watch",
  "year",
  "her",
  "any",
  "snapchat",
  "I",
  "both",
  "around",
  "book",
  "line",
  "mother",
  "open",
  "now",
  "defend",
  "mile",
  "go",
  "by",
  "found",
  "said",
  "eye",
  "come",
  "so",
  "place",
  "food",
  "got",
  "city",
  "always",
  "these",
  "any",
  "use",
  "been",
  "was",
  "read",
  "their",
  "without",
  "as",
  "change",
  "leave",
  "can",
  "they",
  "those",
  "eat",
  "never",
  "no",
  "eat",
  "story",
]

let randomWord;

let score = 0;

let time = 60;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

function addToDom() {
    randomWord = getRandomWord()
    word.innerHTML = randomWord;
}

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

function updateTime() {
    time--;
    timeEl.innerHTML = time + "s";

    if(time === 0) {
        clearInterval(timeInterval)
        gameOver();
    }
}
const timeInterval = setInterval(updateTime, 1000);

function gameOver() {
    endGameEl.innerHTML = `
        <h1>Vaqting tugadiii!</h1>
        <h3>Sening ochkoing: ${score}</h3>
        <button onclick="location.reload()">Yangilash</button>
    `
    endGameEl.style.display = "flex";
}

addToDom();

text.addEventListener("input", (e) => {
    const typedText = e.target.value;

    if(typedText === randomWord){
        updateScore(); // ++1
        addToDom();
        e.target.value = "";
        updateTime();
    }
})