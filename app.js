// Variables
const word = document.getElementById('word');
const text = document.getElementById('text');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('btn-settings');
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


//Set difficulty to value of local storage
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'easy';

// Set difficulty select value
difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'easy';

// Focus text
text.focus()

//Start countdown
const timeInterval = setInterval(updateTime, 1000)

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

//Update Time
function updateTime() {
    time--;
    timeEl.innerHTML = time + 's';
    if (time === 0) {
        clearInterval(timeInterval)
        // game is over
        gameOver()
    }
}

// Game Over
function gameOver() {
    endgameEl.innerHTML = `
    <h1>Time is up</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Play Again</button>`;
    endgameEl.style.display = "flex"
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
        if (difficulty === 'hard') {
            time += 2;
        } else if (difficulty === 'medium') {
            time += 3;
        } else {
            time += 5;
        }
        updateTime()
    }
})


// Settings

settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'))


//Settings Select
settingsForm.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty)
})