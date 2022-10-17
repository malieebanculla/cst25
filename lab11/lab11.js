document.addEventListener('DOMContentLoaded', () => {

let allBoxes = document.querySelectorAll('.box');


allBoxes.forEach((box) => {
    box.style.backgroundColor = '#F8E024';
    box.style.color = 'black';

let outlineBox = (e) => {
    e.currentTarget.style.border = 'solid black'
}

box.addEventListener('click', outlineBox)


})
});