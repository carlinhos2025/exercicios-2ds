
const fs = require("fs/promises");

const ARQUIVO = process.env.ARQUIVO_INGRESSOS || "ingressos.json"

async function listar() {
    try {
        return JSON.parse(await fs.readFile(ARQUIVO, "utf-8"))
    } catch (erro) {
        if (erro.code === "ENOENT") {
            return []
        }
        throw erro
    }
}

async function salvar(registro) {
    const lista = await listar()

    lista.push(registro)

    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(lista, null, 2),
        "utf-8"
    )

    return registro
}

async function atualizar(id, dados) {
    const lista = await listar()

    const indice = lista.findIndex(registro => registro.id === id)

    if (indice === -1) {
        return null;
    }

    lista[indice] = {
        ...lista[indice],
        ...dados
    }

    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(lista, null, 2),
        "utf-8"
    )

    return lista[indice]
}

async function remover(id) {
    const lista = await listar()

    const indice = lista.findIndex(registro => registro.id === id)

    if (indice === -1) {
        return false
    }

    lista.splice(indice, 1)

    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(lista, null, 2),
        "utf-8"
    )

    return true
}

module.exports = { listar, salvar, atualizar, remover }
