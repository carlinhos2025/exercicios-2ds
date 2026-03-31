// Seleciona o parágrafo
const paragrafo = document.getElementById("mensagem");

// Seleciona o botão
const botao = document.getElementById("alterar");

// Evento de clique
botao.addEventListener("click", () => {
  paragrafo.textContent = "Mensagem alterada com JavaScript";
});