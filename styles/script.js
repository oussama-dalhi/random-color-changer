
const container = document.querySelector('.container');
const alertText = document.getElementById('alrettext');
const currentContColor = document.getElementById('containercolor');
const currentbodyColor = document.getElementById('bodycolor');
const btn = document.getElementById('btn');
// get random number 0=>255
const rndColor = () => {
    let randomNum = Math.floor(Math.random() * 256);
        return randomNum;
}
// set rgb in a helper function
const getRandomColor = () => {
    return `rgb(${rndColor()}, ${rndColor()}, ${rndColor()})`;
};
// change body backgroundcolor
const bodyColor = () => {
    document.body.style.backgroundColor = getRandomColor();
    currentbodyColor.textContent = `Body backgroundColor is : 
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
btn.addEventListener('click', showAlret);
const init = () => {
    bodyColor();
    containerColor();
}
document.addEventListener('DOMContentLoaded', init);


