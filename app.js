const button = document.querySelector('button');
const h1 = document.querySelector('h1');

let colors = { red: 0, green: 0, blue: 0 };

button.addEventListener('click', () => {
    newColor = randomColor();
    const color = document.querySelector('#color');
    color.style.backgroundColor = newColor;
    h1.innerText = `RGB(${colors.red}, ${colors.green}, ${colors.blue})`;;
})

button.addEventListener('click', () => {
    button.style.borderColor = newColor;
    button.style.boxShadow = `0 0.8em 0.8em -0.4em ${newColor}`;
    button.addEventListener('mouseleave', () => {
        button.style.borderColor = 'black';
        button.style.boxShadow = `none`;
    })
})

button.addEventListener('mouseover', () => {
    button.style.borderColor = newColor;
    button.style.boxShadow = `0 0.8em 0.8em -0.4em ${newColor}`;
})

const randomColor = () => {
    colors.red = Math.floor(Math.random() * 255);
    colors.green = Math.floor(Math.random() * 255);
    colors.blue = Math.floor(Math.random() * 255);
    return `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
}

