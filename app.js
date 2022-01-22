"use strict";

const options = document.querySelector("#options");
const seconds = document.querySelector("#seconds");
const fraction = document.querySelector("#fraction");
const minute = document.querySelector("#minute");

const btns = document.querySelectorAll(".option");

function increse() {
  
fraction.textContent++
if(fraction.textContent==='100'){
  fraction.textContent=0
  seconds.textContent++
}
if(seconds.textContent==='60'){
  seconds.textContent=0;
  minute.textContent++
}

}

function events(e) {
fraction.textContent++;
const int2 = setInterval(increse, 10);
  document.getElementById("start").disabled = true;

  document.querySelector("#stop").addEventListener("click", function () {
    clearInterval(int2);
    document.getElementById("start").disabled = false;

    
  });
  document.querySelector("#reset").addEventListener("click", function () {
    document.getElementById("start").disabled = false;
    clearInterval(int2);
    seconds.textContent = "0";
    fraction.textContent = "0";
    minute.textContent = "0";
  
  });
}

document.querySelector("#start").addEventListener("click", events);
