"use strict";

const input = document.querySelector("#keyboard-input");
const lastKey = document.querySelector("#last-key");
const keyCode = document.querySelector("#key-code");
const keyState = document.querySelector("#key-state");
const keyCount = document.querySelector("#key-count");
let count = 0;
input.addEventListener("keydown", (event) => {
    if (lastKey) {
        lastKey.textContent = event.key === " " ? "Пробел" : event.key;
    }
    if (keyCode) {
        keyCode.textContent = event.code;
    }
    if (keyState) {
        keyState.textContent = "Клавиша зажата";
    }
    if (!event.repeat) {
        count++;
        if (keyCount) {
            keyCount.textContent = count;
        }
    }
    if (event.key === "Escape") {
        input.value = ""; 
        if (keyState) {
            keyState.textContent = "Поле очищено";
        }
    }
});

input.addEventListener("keyup", () => {
    if (keyState) {
        keyState.textContent = "Клавиша отпущена";
    }
});
input.addEventListener("keypress", (event) => {
    console.log("Событие keypress:", event.key);
});