const button = document.querySelector('#principal-button');
const RGB_h1 = document.querySelector('#RGB');
const answerButtons = document.querySelectorAll('.square');
const Nums = document.querySelectorAll('.square span');
const color = document.querySelector('#color');
const message = document.querySelector('#message')


let colors = { red: 0, green: 0, blue: 0 };
let minNumMargin = 25;
let maxNumMargin = 35;
let answer;

button.addEventListener('click', () => {
    newColor = randomColor();
    buttonToHide = randomIn3();
    color.style.backgroundColor = newColor;
    RGB_h1.innerText = hideRGBNum(buttonToHide);
    button.innerText = 'Boa sorte!'
    message.innerText = 'Qual número está mais próximo??'
    button.disabled = true;

    defineBtnEffect();
    button.addEventListener('mouseover', defineBtnEffect)

    const answer = CorrectNum(buttonToHide);
    const buttonToAnswer = randomIn3();
    for (let i = 0; i < 3; i++) {
        answerButtons[i].addEventListener('mouseover', () => {
            answerButtons[i].style.borderColor = newColor;
            answerButtons[i].style.boxShadow = `0 0.8em 0.8em -0.4em ${newColor}`;
        })
        if (i === buttonToAnswer)
            answerButtons[i].textContent = answer;
        else
            /* temporario */
            answerButtons[i].textContent = Math.floor(Math.random() * 255);

        answerButtons[i].addEventListener('click', function () {
            console.log(this);
            if (this.textContent == answer) {
                RGB_h1.innerText = 'Jogar novamente?';
                button.innerText = 'Claro!'
                message.innerText = 'Parabéns, você acertou!'
                let i = 0
                for (let i = 0; i < 3; i++) {
                    answerButtons[i].disabled = true;
                    answerButtons[i].innerHTML = '<i class="fas fa-check"></i>'
                }
                button.disabled = false;
            }
            else {
                message.innerText = 'Quase! Tente de novo'
                this.innerHTML = '<i class="fas fa-times"></i>';
                errors++;

            }
        })
    }
})

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

/* EFEITOS DE COR DOS BOTÕES */
function defineBtnEffect() {
    button.style.borderColor = newColor;
    button.style.boxShadow = `0 0.8em 0.8em -0.4em ${newColor}`;
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


