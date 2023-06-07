"use strict";

/* ******************** CONSTANTES ******************** */

const slides = [
  {
    "image":"slide1.jpg",
    "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image":"slide2.jpg",
    "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image":"slide3.jpg",
    "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image":"slide4.png",
    "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
  }
]

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

const bulletPoints = document.querySelector(".dots");
const getDot = document.getElementsByClassName("dot");

const image = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

/* ******************** VARIABLES ******************** */

for(let element of slides) {
  const addDot = document.createElement("span");
  addDot.classList = "dot";
  bulletPoints.appendChild(addDot);
}

let selectedDot = 0;

/* ******************** FUNCTIONS ******************** */

/**
 * CHANGE CURSOR
 */
function changeCursor() {
  leftArrow.style.cursor = "pointer";
  rightArrow.style.cursor = "pointer";
}

/**
 * PLAY PREVIOUS
 */

function playPrevious() {
  getDot[selectedDot].classList.remove("dot_selected");
  selectedDot --;
  getDot[selectedDot].classList.add("dot_selected");
  image.setAttribute("src", `./assets/images/slideshow/${slides[selectedDot].image}`);
  tagLine.innerHTML = slides[selectedDot].tagLine;
  console.log(typeof leftArrow, leftArrow);
}

/**
 * PLAY NEXT
 */

function playNext() {
  getDot[selectedDot].classList.remove("dot_selected");
  selectedDot ++;
  getDot[selectedDot].classList.add("dot_selected");
  image.setAttribute("src", `./assets/images/slideshow/${slides[selectedDot].image}`);
  tagLine.innerHTML = slides[selectedDot].tagLine;
  console.log(typeof rightArrow, rightArrow);
}

/* ******************** CODE PRINCIPAL ******************** */

leftArrow.addEventListener("mouseover", changeCursor);
rightArrow.addEventListener("mouseover", changeCursor);

leftArrow.addEventListener("click", playPrevious);
rightArrow.addEventListener("click", playNext);

getDot[selectedDot].classList.add("dot_selected");