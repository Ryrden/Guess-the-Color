const button = document.querySelector('#principal-button');
const RGB_h1 = document.querySelector('#RGB');
const answerButtons = document.querySelectorAll('.square');
const Nums = document.querySelectorAll('.square span');
const background = document.querySelector('#color');
const message = document.querySelector('#message');
const collapse = document.querySelectorAll(".collapse");

//Game variables
let answer;
let tries = 0;
let playColor;
let hiddenColorIndex = -1;
let hiddenRgbIndex = -1;

//The Game
let colors = { red: 0, green: 0, blue: 0 };

const gamePromise = new Promise(start => start());

button.addEventListener('click', () => {
    gamePromise.then(startGame);
})

function startGame() {
    setInitialValue();
    startGameVisual();
    setButtonsValues();
    setButtonsEvents();
}

function setButtonsEvents() {
    answerButtons.forEach(btn => {
        btn.onclick = () => {
            if (btn.textContent == this.answer) {
                gamePromise.then(endGame);
            }
            else {
                this.tries++;
                if (this.tries == 2) {
                    message.innerHTML = 'Agora ficou fácil, né!?'
                } else {
                    message.innerText = 'Quase! Tente de novo'
                }
                btn.style.visibility = 'hidden';
            }
        }
    })
}

function setInitialValue() {
    this.tries = 0;
    this.playColor = getRandomColor();
    this.hiddenRgbIndex = random3();
    this.hiddenColorIndex = random3();
    this.answer = getCorrectNum();
}

function endGame() {
    RGB_h1.innerText = 'Jogar novamente?';
    button.innerText = 'Claro!'
    message.innerText = 'Parabéns, você acertou!'
    answerButtons.forEach(btn => {
        btn.style.visibility = 'visible';
        btn.borderColor = 'black';
        btn.boxShadow = `none`;
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.onclick = null;
    })
    button.disabled = false;
}

function startGameVisual() {
    background.style.backgroundColor = this.playColor;
    RGB_h1.innerHTML = getRGBText();
    message.innerText = 'Qual número está mais próximo??';

    button.innerText = 'Boa sorte!'
    button.disabled = true;
    button.style.borderColor = this.playColor;
    button.style.boxShadow = `0 0.8em 0.8em -0.4em ${this.playColor}`;
    for (let btn of [button, ...answerButtons]) {
        btn.addEventListener('mouseover', () => {
            btn.style.borderColor = this.playColor;
            btn.style.boxShadow = `0 0.8em 0.8em -0.4em ${this.playColor}`;
        });
    };
}

function setButtonsValues() {
    answerButtons.forEach((btn, i) => {
        btn.disabled = false;
        if (i === this.hiddenColorIndex)
            btn.textContent = this.answer;
        else
            btn.textContent = Math.floor(Math.random() * 255);
    })
}

function random3() {
    return Math.round(Math.random() * 2);
}

function getRGBText() {
    if (this.hiddenRgbIndex === 0)
        return `RGB(<span>???</span>, ${colors.green}, ${colors.blue})`
    else if (this.hiddenRgbIndex === 1)
        return `RGB(${colors.red}, <span>???</span>, ${colors.blue})`
    else
        return `RGB(${colors.red}, ${colors.green}, <span>???</span>)`
}

function getCorrectNum() {
    if (this.hiddenRgbIndex === 0)
        return colors.red;
    else if (this.hiddenRgbIndex === 1)
        return colors.green
    else
        return colors.blue
}

function getRandomColor() {
    colors.red = Math.floor(Math.random() * 255);
    colors.green = Math.floor(Math.random() * 255);
    colors.blue = Math.floor(Math.random() * 255);
    return `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
}
//Game not start


//Effects 
const dark_mode = document.querySelector(".checkbox")
dark_mode.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    collapse.forEach(icon => {
        icon.classList.toggle("collapse-dark-mode");
    })
})

collapse.forEach(question => {
    question.addEventListener("click", () => {
        question.classList.toggle("collapse-clicked");
    })
})


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
