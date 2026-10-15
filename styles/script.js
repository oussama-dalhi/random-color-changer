
const container = document.querySelector('.container');
const alertText = document.getElementById('alerttext');
const currentContColor = document.getElementById('containercolor');
const currentBodyColor = document.getElementById('bodycolor');
const btn = document.getElementById('btn');
// get random number 0=>255
const rndColor = () => Math.floor(Math.random() * 256);

// set rgb in a helper function
const getRandomColor = () => `rgb(${rndColor()}, ${rndColor()}, ${rndColor()})`;

// change body backgroundcolor
const bodyColor = () => {
    document.body.style.backgroundColor = getRandomColor();
    currentBodyColor.textContent = `Body backgroundColor is : 
                                    ${document.body.style.backgroundColor}`;
}
btn.addEventListener('click', bodyColor);
// change container backgroundcolor
const containerColor = () => {
    container.style.backgroundColor = getRandomColor();
    currentContColor.textContent = `Container backgroundColor is:
                                    ${container.style.backgroundColor}`;
}
btn.addEventListener('click', containerColor);

const showAlret = () => {
    alertText.textContent = 'Lets Goooo!!!';
}
btn.addEventListener('click', () => {
    bodyColor();
    containerColor();
    showAlret();
});

const init = () => {
    bodyColor();
    containerColor();
}

document.addEventListener('DOMContentLoaded', init);


