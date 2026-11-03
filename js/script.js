"use strict";

const input = document.querySelector("#keyboard-input");
const lastKey = document.querySelector("#last-key");
const keyCode = document.querySelector("#key-code");
const keyState = document.querySelector("#key-state");
const keyCount = document.querySelector("#key-count");
let count = 0;

// Задание 1 и Задание 2
input.addEventListener('keydown', function(event) {
  lastKey.textContent = event.key;
  keyCode.textContent = event.code;
  keyState.textContent = 'Клавиша нажата';

  if (!event.repeat) {
    count++;
    keyCount.textContent = count;
  }
});

input.addEventListener('keyup', function(event) {
  keyState.textContent = 'Клавиша отпущена';
});

input.addEventListener('keypress', function(event) {
  console.log(event.key);
});
