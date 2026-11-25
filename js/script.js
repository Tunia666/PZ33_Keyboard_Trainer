const keyboardInput = document.querySelector("#keyboard-input");
const lastKey = document.querySelector("#last-key");
const keyCode = document.querySelector("#key-code");
const keyState = document.querySelector("#key-state");
const keyCount = document.querySelector("#key-count");

let count = 0;

keyboardInput.addEventListener("keydown", (event) => {
  lastKey.textContent = event.key === " " ? "Space" : event.key;
  keyCode.textContent = `Код: ${event.code}`;
  keyState.textContent = "Клавиша нажата";

  if (!event.repeat) {
    count++;
    keyCount.textContent = count;
  }

  if (event.key === "Escape") {
    keyboardInput.value = "";
    keyState.textContent = "Поле очищено";
  }
});

keyboardInput.addEventListener("keyup", () => {
  keyState.textContent = "Клавиша отпущена";
});

keyboardInput.addEventListener("keypress", (event) => {
  console.log("keypress:", event.key);
});


