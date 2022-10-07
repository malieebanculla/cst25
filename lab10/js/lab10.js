//1. one of the course boxes 
//2. mouseover
//3. the color of the box changes


//1. one of the course boxes
//2. mouseout
//3. the box goes back to the way it was before 

//1. the course box 
//2. click
//3. info panel shows up 
///update course name, description, and picture
let showPanel = (e) => {
    console.log(e);

let panel = document.querySelector("#infopanel");
    console.log(panel)
    panel.style.display = "block";

let courseName = document.querySelector('#courseName');
    console.log(courseName);
    courseName.textContent = "CST 252";

let courseDescription = document.querySelector('#courseDescription');
    console.log(courseDescription);
    courseDescription.textContent = "Javascript Class"
}

//1. the exit button 
//2. click 
//3. info panel disappears 

