"use strict";

const input = document.querySelector("#keyboard-input");
const lastKey = document.querySelector("#last-key");
const keyCode = document.querySelector("#key-code");
const keyState = document.querySelector("#key-state");
const keyCount = document.querySelector("#key-count");
let count = 0;

// 1. Обработка нажатия клавиши (keydown)
input.addEventListener("keydown", (event) => {
    // Выводим название клавиши (если пробел — заменяем для наглядности)
    if (lastKey) {
        lastKey.textContent = event.key === " " ? "Пробел" : event.key;
    }
    
    // Выводим физический код клавиши
    if (keyCode) {
        keyCode.textContent = event.code;
    }
    
    // Меняем состояние на "Нажата"
    if (keyState) {
        keyState.textContent = "Клавиша зажата";
    }

    // Увеличиваем счётчик только при новом физическом нажатии (игнорируем удержание/автоповтор)
    if (!event.repeat) {
        count++;
        if (keyCount) {
            keyCount.textContent = count;
        }
    }

    // ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ: Обработка клавиши Escape
    if (event.key === "Escape") {
        input.value = ""; // Очищаем поле ввода
        if (keyState) {
            keyState.textContent = "Поле очищено";
        }
    }
});

// 2. Обработка отпускания клавиши (keyup)
input.addEventListener("keyup", () => {
    // Меняем состояние на "Отпущена"
    if (keyState) {
        keyState.textContent = "Клавиша отпущена";
    }
});

// 3. Демонстрация устаревшего события keypress для наблюдения в Console
input.addEventListener("keypress", (event) => {
    console.log("Событие keypress:", event.key);
});