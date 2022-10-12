document.addEventListener('DOMContentLoaded', () => { 

//1. one of the course boxes 
//2. mouseover
//3. the color of the box changes
let button = document.querySelector(".itembox");

let highlightBox = (e) => {
    button.style.border = "thick solid grey";
};
let off = (e) => {
    button.style.border = "thin solid grey";
};

button.addEventListener("mouseover", highlightBox);


//1. one of the course boxes
//2. mouseout
//3. the box goes back to the way it was before 

button.addEventListener('mouseout', off);

//1. the course box 
//2. click
//3. info panel shows up 
///update course name, description, and picture


let showPanel = (e) => {
    console.log(e);

    let panel = document.querySelector("#infopanel");
    console.log(panel);
    panel.style.display = "block";
    

    let courseName = document.querySelector('#courseName');
    console.log(courseName);
    courseName.textContent = "CST 252";

    let courseDescription = document.querySelector('#courseDescription');
    console.log(courseDescription);
    courseDescription.textContent = "Javascript Class";
}

button.addEventListener('click', showPanel); 



//1. the exit button 
//2. click 
//3. info panel disappears 

let exitButton = document.querySelector('#exitbutton').onclick
function myFunction () {
    document.getElementById("myDropdown").classList.toggle("show");
}
   

let closePanel = (e) => {
    infopanel.style.display = "none";  
}

exitButton.addEventListener("click", closePanel);
});