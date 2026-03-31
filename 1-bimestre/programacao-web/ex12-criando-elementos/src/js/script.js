// Seleciona a lista pelo ID
const lista = document.getElementById("lista");

// Seleciona o botão pelo ID
const botao = document.getElementById("adicionar");

// Adiciona evento de clique ao botão
botao.addEventListener("click", () => {
    // Cria um novo elemento <li>
    const item = document.createElement("li");
    
    // Define o texto do item
    item.textContent = "Novo Item";
    
    // Adiciona o item à lista
    lista.appendChild(item);
});