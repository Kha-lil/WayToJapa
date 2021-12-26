"use strict";

const rating = document.querySelector(".ratings");

let icon = document.getElementById("nav-icon");
let nav = document.getElementById("nav");
icon.addEventListener("click", function () {
  nav.classList.toggle("open");
});

// let changeBG = false;

// function changeBackgroundColor(color){
//     document.body.style.background = color;
//     if (!changeBG){
//         if (color !== '#0392BF'){
//             document.body.style.color = "rgba(0,0,0,0.7)";
//             size.classList.add("dark");
//         } changeBG = true;
//     } else if(color === '#0392BF'){
//         document.body.style.color = "#f7e2e2";
//         size.classList.remove("dark");
//         changeBG = false;
//     }
// }

// IMPLMENTING THE COLOR CHANGE
document
  .querySelector(".color--span__1")
  .addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#0392BF";
    document.querySelector("body").style.color = "rgb(247, 216, 216);";
  });

document
  .querySelector(".color--span__2")
  .addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#ED48BA";
    document.querySelector("body").style.color = "rgba(0,0,0,0.7)";
  });

document
  .querySelector(".color--span__3")
  .addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#FBEC06";
    document.querySelector("body").style.color = "rgba(0,0,0,0.7)";
  });

document
  .querySelector(".color--span__4")
  .addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#B3D4E0";
    document.querySelector("body").style.color = "rgba(0,0,0,0.7)";
  });

// IMPLEMEMNTING THE MODAL
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".show-modal");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
