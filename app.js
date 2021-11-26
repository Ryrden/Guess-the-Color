const button = document.querySelector('#principal-button');
const RGB_h1 = document.querySelector('#RGB');
const answerButtons = document.querySelectorAll('.square');
const Nums = document.querySelectorAll('.square span');
const color = document.querySelector('#color');
const message = document.querySelector('#message')

const dark_mode = document.querySelector(".checkbox")
dark_mode.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

let colors = { red: 0, green: 0, blue: 0 };

button.addEventListener('click', () => {
    newColor = randomColor();
    const buttonToHide = randomIn3();
    startVisualGame(newColor, buttonToHide);
    defineBtnEffect(newColor);
    button.addEventListener('mouseover', () => {
        defineBtnEffect(newColor);
    })

    let tries = 0;
    let answer = CorrectNum(buttonToHide);
    startLogicGame(answer);

    for (let i = 0; i < 3; i++) {
        answerButtons[i].addEventListener('mouseover', () => {
            answerButtons[i].style.borderColor = newColor;
            answerButtons[i].style.boxShadow = `0 0.8em 0.8em -0.4em ${newColor}`;
        })
        answerButtons[i].addEventListener('click', function () {
            if (this.textContent == answer) {
                RGB_h1.innerText = 'Jogar novamente?';
                button.innerText = 'Claro!'
                message.innerText = 'Parabéns, você acertou!'
                for (let i = 0; i < 3; i++) {
                    answerButtons[i].style.visibility = 'visible';
                    answerButtons[i].disabled = true;
                    answerButtons[i].innerHTML = '<i class="fas fa-check"></i>';
                }
                button.disabled = false;
            }
            else {
                tries += 1;
                if (tries >= 2) {
                    message.innerText = 'Agora ficou fácil, né!?'
                } else {
                    message.innerText = 'Quase! Tente de novo'
                }
                this.style.visibility = 'hidden';
            }
        })
    }
})

function defineBtnEffect(newColor) {
    button.style.borderColor = newColor;
    button.style.boxShadow = `0 0.8em 0.8em -0.4em ${newColor}`;
}

function startVisualGame(newColor, buttonToHide) {
    color.style.backgroundColor = newColor;
    RGB_h1.innerText = hideRGBNum(buttonToHide);
    button.innerText = 'Boa sorte!'
    message.innerText = 'Qual número está mais próximo??'
    button.disabled = true;
}

function startLogicGame(answer) {
    const buttonToAnswer = randomIn3();
    for (let i = 0; i < 3; i++) {
        answerButtons[i].disabled = false;
        if (i === buttonToAnswer)
            answerButtons[i].textContent = answer;
        else
            /* temporario */
            answerButtons[i].textContent = Math.floor(Math.random() * 255);
    }
}

const randomIn3 = () => (Math.floor(Math.random() * 3))

function hideRGBNum(buttonNum) {
    if (buttonNum === 0)
        return `RGB(???, ${colors.green}, ${colors.blue})`
    else if (buttonNum === 1)
        return `RGB(${colors.red}, ???, ${colors.blue})`
    else
        return `RGB(${colors.red}, ${colors.green}, ???)`
}

function CorrectNum(buttonNum) {
    if (buttonNum === 0)
        return colors.red;
    else if (buttonNum === 1)
        return colors.green
    else
        return colors.blue
}

const randomColor = () => {
    colors.red = Math.floor(Math.random() * 255);
    colors.green = Math.floor(Math.random() * 255);
    colors.blue = Math.floor(Math.random() * 255);
    return `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
}

for (let btn of [button, answerButtons[0], answerButtons[1], answerButtons[2]]) {
    btn.addEventListener('mouseover', () => {
        btn.style.borderColor = 'gray';
        btn.style.boxShadow = `0 0.8em 0.8em -0.4em black`;
    })
    btn.addEventListener('mouseleave', () => {
        btn.style.borderColor = 'black';
        btn.style.boxShadow = `none`;
    })
}


