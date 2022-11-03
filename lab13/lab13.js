document.addEventListener('DOMContentLoaded', () => {

    //making text float across the screen 

    let text = document.querySelector('.text')

    let offset = 0;

    let animationFrame = () => {
        offset = offset + 2;
        text.style.left = offset + 'px';
    }

    let textHover = (e) => {
        text.classList.add('heading-end-frame', 'fadeInAnimation');
    }

    text.addEventListener('mouseover', textHover);

    setInterval(animationFrame, 30);

    
    //clicking on a box to make it change color

    let changeBox = document.querySelector(".box");

    let turnPink = (e) => {
    e.target.style.backgroundColor = "pink";
    }

    changeBox.addEventListener("click", turnPink); 




});