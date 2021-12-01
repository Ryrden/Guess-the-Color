const button = document.querySelector('#principal-button');
const RGB_h1 = document.querySelector('#RGB');
const answerButtons = document.querySelectorAll('.square');
const Nums = document.querySelectorAll('.square span');
const background = document.querySelector('#color');
const message = document.querySelector('#message');

//Game variables
let answer;
let tries = 0;
let playColor;
let hiddenColorIndex = -1;

const dark_mode = document.querySelector(".checkbox")
dark_mode.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

let colors = { red: 0, green: 0, blue: 0 };

const gamePromise = new Promise(r => r());

button.addEventListener('click', () => {
    gamePromise.then(() => startGame());
})

function startGame() {
    console.log("Game is on",);
    setInitialValue();
    startGameVisual();
    setButtonsValues();
    setButtonsEvents();
    console.log("DEBUG: ");
    console.log("playColor", playColor);
    console.log("tries",tries);
}

function setButtonsEvents() {
    answerButtons.forEach(b => {

        b.addEventListener('mouseover', () => {
            b.style.borderColor = this.playColor;
            b.style.boxShadow = `0 0.8em 0.8em -0.4em ${this.playColor}`;
        })

        b.onclick = () => {
            if (b.textContent == this.answer) {
                gamePromise.then(() => endGame());
            }
            else {
                this.tries++;
                if (this.tries == 2) {
                    message.innerText = 'Agora ficou fácil, né!?'
                } else {
                    message.innerText = 'Quase! Tente de novo'
                }
                b.style.visibility = 'hidden';
            }
            console.log("After play",this.tries);
        }
    })
}

function setInitialValue() {
    this.tries = 0;
    this.playColor = getRandomColor();
    this.hiddenColorIndex = random3();
    this.answer = getCorrectNum();
    console.log("Index", this.hiddenColorIndex);
}

function endGame() {
    RGB_h1.innerText = 'Jogar novamente?';
    button.innerText = 'Claro!'
    message.innerText = 'Parabéns, você acertou!'
    answerButtons.forEach(b => {
        b.style.visibility = 'visible';
        b.borderColor = 'black';
        b.boxShadow = `none`;
        b.disabled = true;
        b.innerHTML = '<i class="fas fa-check"></i>';
        b.onclick = null;
    })
    button.disabled = false;
    console.log("Game is over!");
}


function startGameVisual() {
    background.style.backgroundColor = playColor;
    RGB_h1.innerText = getRGBText();
    message.innerText = 'Qual número está mais próximo??';

    button.innerText = 'Boa sorte!'
    button.disabled = true;
    button.style.borderColor = playColor;
    button.style.boxShadow = `0 0.8em 0.8em -0.4em ${playColor}`;

    answerButtons.forEach(b => {
        b.style.borderColor = 'black';
        b.style.boxShadow = `none`;
        b.style.visibility = 'visible';
    });
}

function setButtonsValues() {
    console.log("Hidden after", this.hiddenColorIndex);
    answerButtons.forEach((b, i) => {
        b.disabled = false;
        if (i === this.hiddenColorIndex)
            b.textContent = this.answer;
        else
            b.textContent = Math.floor(Math.random() * 255);
    })
}

function random3() {
    console.log("Random called!")
    return Math.round(Math.random() * 2);
}

function getRGBText() {
    if (hiddenColorIndex === 0)
        return `RGB(???, ${colors.green}, ${colors.blue})`
    else if (hiddenColorIndex === 1)
        return `RGB(${colors.red}, ???, ${colors.blue})`
    else
        return `RGB(${colors.red}, ${colors.green}, ???)`
}

function getCorrectNum() {
    if (hiddenColorIndex === 0)
        return colors.red;
    else if (hiddenColorIndex === 1)
        return colors.green
    else
        return colors.blue
}

function getRandomColor() {
    colors.red = Math.floor(Math.random() * 255);
    colors.green = Math.floor(Math.random() * 255);
    colors.blue = Math.floor(Math.random() * 255);
    playColor = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
}

for (let btn of [button, ...answerButtons]) {
    btn.addEventListener('mouseover', () => {
        btn.style.borderColor = 'gray';
        btn.style.boxShadow = `0 0.8em 0.8em -0.4em black`;
    })
    btn.addEventListener('mouseleave', () => {
        btn.style.borderColor = 'black';
        btn.style.boxShadow = `none`;
    })
}


