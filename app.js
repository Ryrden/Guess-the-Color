const button = document.querySelector('button');
const h1 = document.querySelector('#RGB');
const answerButtons = document.querySelectorAll('.square');
const Nums = document.querySelectorAll('.square span');
const color = document.querySelector('#color');


let colors = { red: 0, green: 0, blue: 0 };
let minNumMargin = 25;
let maxNumMargin = 35;
let answer;

button.addEventListener('click', () => {
    newColor = randomColor();
    ButtonToHide = numButtonToHide();
    color.style.backgroundColor = newColor;
    h1.innerText = hideRGBNum(ButtonToHide);
    
    defineBtnEffect();
    button.addEventListener('mouseover', defineBtnEffect)

    for (let i = 0; i < 3; i++) {
        answerButtons[i].addEventListener('mouseover', () => {
            answerButtons[i].style.borderColor = newColor;
            answerButtons[i].style.boxShadow = `0 0.8em 0.8em -0.4em ${newColor}`;
        })
    }
})

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

const numButtonToHide = () => (Math.floor(Math.random() * 3))

const randomColor = () => {
    colors.red = Math.floor(Math.random() * 255);
    colors.green = Math.floor(Math.random() * 255);
    colors.blue = Math.floor(Math.random() * 255);
    return `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
}

