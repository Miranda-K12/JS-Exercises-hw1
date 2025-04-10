"use strict";
const body = document.querySelector("body");

const button = document.querySelector(".click-button");
const message = document.querySelector(".message");
const modeBtn = document.querySelector(".change-mode-button");
const hideBtn = document.querySelector(".hide-box");
const box = document.querySelector(".box");

button.addEventListener("click", () => {
    message.textContent = "JavaScript Fundamentals";
});

modeBtn.addEventListener("click", () => {
    body.style.backgroundColor = "black";
});

const hideBox = () => {
    hideBtn.addEventListener("click", () => {
        box.classList.toggle("visible");
        box.classList.toggle("hidden");

        box.classList.contains("visible")
            ? (hideBtn.textContent = "Display box")
            : (hideBtn.textContent = "Hide Box");
    });
};
hideBox();
