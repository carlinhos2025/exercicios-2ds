const inputNome = document.getElementById("nome");
const botao = document.getElementById("mostrar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {
  const nomeDigitado = inputNome.value;
  resultado.textContent = `Olá, ${nomeDigitado}`;
});