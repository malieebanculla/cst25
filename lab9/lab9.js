// 1. what is the event? 
//// click 
// 2. what is the event happening to? 
//// the click here button
// 3. what happens when the event happens? 
//// the button turns pink 

let button1 = document.querySelector("#btn1");

let handler1 = (e) => {
  console.log("you clicked!"); 
  console.log(e);
  e.target.style.backgroundColor = "pink";
}

button1.addEventListener("click", handler1); 


// 1. what is the event? 
//// mouseover 
// 2. what is the event happening to? 
//// the don't click here button
// 3. what happens when the event happens? 
//// the button turns green 

let button2 = document.querySelector("#btn2");

let handler2 = (e) => {
    console.log("you clicked again!"); 
    console.log(e);
    e.target.style.backgroundColor = "lightgreen";
}

button2.addEventListener("mouseover", handler2); 



