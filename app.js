// Variables
const word = document.getElementById('word');
const text = document.getElementById('text');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const endgameEl = document.getElementById('end-game');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words
const words = [
    'high',
    'heavy',
    'dollar',
    'notorious',
    'swing',
    'reluctance',
    'deputy',
    'champion',
    'agency',
    'ceremony',
    'similar',
    'difficult',
    'art',
    'cook',
    'walk',
    'minority',
    'consumption',
    'impound',
    'aisle',
    'hover',
    'incapable',
    'detail',
    'piece',
    'bloodshed',
    'social',
    'stem',
    'achieve',
    'clique',
    'aware',
    'rainbow'
]

// Init word

let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Function to get random word from list
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

// Add word to DOM
function addWordtoDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

// Update Score
function upDateScore() {
    score++;
    scoreEl.innerHTML = score;
}

addWordtoDOM()

// Add Event-listener
text.addEventListener('input', e => {
    const insertedText = e.target.value
    if (insertedText === randomWord) {
        addWordtoDOM();
        // Update Score
        upDateScore();
        //   Clear
        e.target.value = ' ';
    }
})