const button = document.querySelector('#principal-button');
const h1 = document.querySelector('#RGB');
const answerButtons = document.querySelectorAll('.square');
const Nums = document.querySelectorAll('.square span');
const color = document.querySelector('#color');

let colors = { red: 0, green: 0, blue: 0 };
let minNumMargin = 25;
let maxNumMargin = 35;
let answer;

button.addEventListener('click', startGame);

function startGame() {
    newColor = randomColor();
    ButtonToHide = numButtonToHide();
    changeColor(newColor);
    changeTextButton(newColor, ButtonToHide);

    button.addEventListener('mouseover', () => {
        button.style.borderColor = newColor;
        button.style.boxShadow = `0 0.8em 0.8em -0.4em ${newColor}`;
    })
    generateAnswerNumbers();
}

for (let i = 0; i < 3; i++) {
    if (i === answer)
        answerButtons[i].classList.toggle('correct');
    else
        answerButtons[i].classList.toggle('wrong');
}

function generateAnswerNumbers() {
    let canSum = 0;
    answer = Math.floor(Math.random() * 3);
    for (let i = 0; i < 3; i++) {
        answerButtons[i].addEventListener('mouseover', () => {
            answerButtons[i].style.borderColor = newColor;
            answerButtons[i].style.boxShadow = `0 0.8em 0.8em -0.4em ${newColor}`;
        })
        if (i === answer) {
            Nums[i].innerText = correctNum(ButtonToHide);
        }
        else {
            Nums[i].innerText = wrongNum(correctNum(ButtonToHide), canSum);
            canSum++;
        }
    }
}

function generateDisplayColor() {
    newColor = randomColor();
    ButtonToHide = numButtonToHide();
    changeColor(newColor);
    changeTextButton(newColor, ButtonToHide);
}

function changeColor() {
    color.style.backgroundColor = newColor;
}

function changeTextButton(newColor, ButtonToHide) {
    button.style.boxShadow = `0 0.8em 0.8em -0.4em ${newColor}`;
    button.textContent = 'Clique para mudar'
    h1.innerText = hideRGBNum(ButtonToHide);
    button.style.borderColor = newColor;
}

button.addEventListener('mouseover', () => {
    button.style.borderColor = 'gray';
    button.style.boxShadow = `0 0.8em 0.8em -0.4em black`;
})

button.addEventListener('mouseleave', () => {
    button.style.borderColor = 'black';
    button.style.boxShadow = `none`;
})

for (let i = 0; i < 3; i++) {
    answerButtons[i].addEventListener('mouseover', () => {
        answerButtons[i].style.borderColor = 'gray';
        answerButtons[i].style.boxShadow = `0 0.8em 0.8em -0.4em black`;
    })

    answerButtons[i].addEventListener('mouseleave', () => {
        answerButtons[i].style.borderColor = 'black';
        answerButtons[i].style.boxShadow = `none`;
    })
}

function hideRGBNum(buttonNum) {
    if (buttonNum === 0)
        return `RGB(???, ${colors.green}, ${colors.blue})`
    else if (buttonNum === 1)
        return `RGB(${colors.red}, ???, ${colors.blue})`
    else
        return `RGB(${colors.red}, ${colors.green}, ???)`
}

function correctNum(buttonNum) {
    if (buttonNum === 0)
        return colors.red;
    else if (buttonNum === 1)
        return colors.green
    else
        return colors.blue
}

function wrongNum(buttonNum, isSum) {
    const random = Math.floor(Math.random() * maxNumMargin + minNumMargin);
    const answerSubtract = buttonNum - random;
    const answerSum = buttonNum + random;

    if ((!isSum && answerSubtract >= 0) || (isSum && answerSum > 255))
        return answerSubtract;
    else if ((isSum && answerSum <= 255) || (!isSum && answerSubtract < 0))
        return answerSum;
}

const numButtonToHide = () => (Math.floor(Math.random() * 3))

const randomColor = () => {
    colors.red = Math.floor(Math.random() * 255);
    colors.green = Math.floor(Math.random() * 255);
    colors.blue = Math.floor(Math.random() * 255);
    return `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
}

