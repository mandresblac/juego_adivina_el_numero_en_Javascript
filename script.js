const numeroEntrada = document.querySelector("#numeroEntrada");
const botonComprobar = document.querySelector("#btnComprobar");
const botonReiniciar = document.querySelector("#btnReiniciar");
const mensaje = document.querySelector("#mensaje");
const totalNumerosIngresados = document.querySelector(
  "#totalNumerosIngresados"
);
const intento = document.querySelector("#intento");

// Número aleatorio
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// Número de intentos
let intentos = 0;

botonComprobar.addEventListener("click", chequearResultado);
botonReiniciar.addEventListener("click", reiniciarJuego);

function chequearResultado() {
  intentos++;
  intento.textContent = intentos;
  const numeroIngresado = parseInt(numeroEntrada.value);

  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    mensaje.textContent = "Por favor ingrese un número valido entre 1 y 100.";
    mensaje.style.color = "orangered";
    return; // Si se cumple la condicon termina el programa
  }

  if (numeroIngresado === numeroAleatorio) {
    mensaje.textContent = `��¡Felicitaciones! ¡Has adivinado! ¡El número es ${numeroAleatorio}!��`;
    mensaje.style.color = "green";
    numeroEntrada.disabled = true; // true deshabilita numeroEntrada una vez se gana el juego
  } else if (numeroIngresado < numeroAleatorio) {
    mensaje.textContent = "¡Mas alto! El número es mayor al que ingresaste";
    mensaje.style.color = "red";
    totalNumerosIngresados.textContent += `${numeroIngresado} `;
  } else {
    mensaje.textContent = "¡Mas bajo! El número es menor al que ingresaste";
    mensaje.style.color = "red";
    totalNumerosIngresados.textContent += `${numeroIngresado} `;
  }
}

function reiniciarJuego() {
  location.reload(); // location.reload() Recarga toda la página para que el numeroAleatorio cambie
  numeroEntrada.value = ``;
  numeroEntrada.disabled = false; // false habilita numeroEntrada una vez reiniciado el juego
  totalNumerosIngresados.textContent = "";
  mensaje.textContent = "";
  intentos = 0;
}
