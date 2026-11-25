
const repositorio = require("./repositorio");

async function listar() {
    return await repositorio.listar();
}

async function cadastrar(dados) {
    return await repositorio.salvar(dados);
}

async function atualizar(id, dados) {
    return await repositorio.atualizar(id, dados);
}

async function remover(id) {
    return await repositorio.remover(id);
}

module.exports = {
    listar,
    cadastrar,
    atualizar,
    remover
};
