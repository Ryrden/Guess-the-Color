const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    newColor = randomColor();
    const color = document.querySelector('#color');
    color.style.backgroundColor = newColor;
    h1.innerText = newColor;
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
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

