const bodyBg = " #232323";
const container = document.querySelector(".container");
const message = document.querySelector("#message");
const win = document.createTextNode("¡Correcto!");
const loose = document.createTextNode("Intenta de nuevo");
const colorDisplay = document.querySelector("#colorDisplay");
const title = document.querySelector(".title");
let pickedColor;
let dificultad;

function picColor() {
  let rgb = [];
  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 255));
  }
  let color = "rgb(" + rgb.join(", ") + ")";
  return color;
}

function generateRandomColors(argumento = 3) {
  title.style.color = "#fff";
  message.innerText = "";
  let colors = [];
  dificultad = argumento;
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  for (let i = 0; i < dificultad; i++) {
    colors.push(picColor());
  }

  for (let i = 0; i < dificultad; i++) {
    const square = document.createElement("div");
    square.style.background = colors[i];
    square.classList.add("square");
    square.setAttribute("onclick","colorElegido(this.style.background)")
    container.appendChild(square);
  }

  pickedColor = colors[Math.floor(Math.random() * colors.length)];
  colorDisplay.style.color = pickedColor;
  colorDisplay.innerText = pickedColor;
}

function colorElegido(color) {
  let squares = document.querySelectorAll(".square");

  if (color === pickedColor) {
    title.style.color = pickedColor;
    squares.forEach((s) => (s.style.background = pickedColor));
    squares.forEach((s) => s.removeAttribute("click"));

    message.innerText = "Correcto";
  } else {
    message.innerText = "Incorrecto";
    squares.forEach((s) => {
      if (s.style.background === color) {
        s.style.background = bodyBg;
      }
    });
  }
}

function reset() {
  generateRandomColors(dificultad);
}

generateRandomColors();
