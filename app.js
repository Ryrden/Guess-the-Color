const button = document.querySelector('button');
const h1 = document.querySelector('#RGB');
const answerButtons = document.querySelectorAll('.square');
const Nums = document.querySelectorAll('.square span');


let colors = { red: 0, green: 0, blue: 0 };

button.addEventListener('click', () => {
    newColor = randomColor();
    ButtonToHide = numButtonToHide();
    const color = document.querySelector('#color');
    button.style.boxShadow = `0 0.8em 0.8em -0.4em ${newColor}`;
    color.style.backgroundColor = newColor;
    h1.innerText = hideRGBNum(ButtonToHide);
    button.style.borderColor = newColor;

    button.addEventListener('mouseover', () => {
        button.style.borderColor = newColor;
        button.style.boxShadow = `0 0.8em 0.8em -0.4em ${newColor}`;
    })

    for (let i = 0; i < 3; i++) {
        answerButtons[i].addEventListener('mouseover', () => {
            answerButtons[i].style.borderColor = newColor;
            answerButtons[i].style.boxShadow = `0 0.8em 0.8em -0.4em ${newColor}`;
        })
        if (i === ButtonToHide) {
            Nums[i].innerText = CorrectNum(ButtonToHide);
        }
    }
})

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

