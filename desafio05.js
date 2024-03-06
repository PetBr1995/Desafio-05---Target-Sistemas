function inverter() {
  const palavra = document.getElementById("palavra").value;

  let palavraInvertida = [];

  let aux = palavra.length - 1;

  for (let i = aux; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }
  document.getElementById("resp").textContent = `${palavraInvertida}`;
  console.log(palavraInvertida);
}
