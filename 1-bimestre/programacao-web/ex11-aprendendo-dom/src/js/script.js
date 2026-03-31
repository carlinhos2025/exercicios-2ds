// Seleciona o título pelo ID
const titulo = document.getElementById("titulo");

// Seleciona o botão pelo ID
const botao = document.getElementById("botao");

// Adiciona um evento de clique no botão
botao.addEventListener("click", () => {
    titulo.textContent = "Texto Alterado com JavaScript";
});