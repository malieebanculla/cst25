//Malie Ebanculla 
//September 28, 2022

function ready(){

let outputEl = document.querySelector("#output");

let oneEl = document.createElement("button");

let twoEl = document.createElement("button"); 

let parent = document.querySelector("#output");
parent.appendChild(oneEl) 
oneEl.textContent = "this is a button";
oneEl.style.color = "purple";


parent.appendChild(twoEl) 
twoEl.textContent = "this is also a button";
twoEl.style.backgroundColor = "purple";
twoEl.style.color = "white"; 

}