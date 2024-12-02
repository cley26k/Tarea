// script.js
function calcularValorAbsoluto() {
  const numero = document.getElementById("inputNumber").value;
  const valorAbsoluto = Math.abs(numero);
  document.getElementById("resultado").innerText = `El valor absoluto es: ${valorAbsoluto}`;
}
