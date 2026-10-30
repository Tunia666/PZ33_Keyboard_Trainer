"use strict";

const input = document.querySelector("#keyboard-input");
const lastKey = document.querySelector("#last-key");
const keyCode = document.querySelector("#key-code");
const keyState = document.querySelector("#key-state");
const keyCount = document.querySelector("#key-count");
let count = 0;

// Задание 1. Подключите событие keydown к input.
// Покажите event.key и event.code. Обновите состояние на «Клавиша нажата».

// Задание 2. В том же обработчике увеличивайте счётчик только когда !event.repeat.

// Задание 3. Подключите keyup. Выведите «Клавиша отпущена».

// Задание 4. Для учебного наблюдения подключите keypress и console.log(event.key).
// Помните: keypress устарел и не подходит для нового функционала.
// Получаем поле ввода
const inputElement = document.getElementById('keyboard-input');
inputElement.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const outputElement = document.getElementById('last-key');
    outputElement.textContent = inputElement.value;
  }
});
const inputElement2 = document.getElementById('keyboard-input');
inputElement.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const outputElement = document.getElementById('key-state');
    outputElement.textContent = ('клавиша нажата')
  }
});
let number = 0; 
document.getElementById('increment').addEventListener('click', function() {
  number++;
  document.getElementById('result').textContent = number;
});