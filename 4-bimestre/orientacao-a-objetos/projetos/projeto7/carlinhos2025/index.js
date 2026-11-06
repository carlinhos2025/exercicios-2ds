
const express = require("express")

const app = express()

app.use(express.json())

const ordens = [
    { id: 1, cliente: "Ana", servico: "Lavagem Simples", pecas: 5, situacao: "pronta" },
    { id: 2, cliente: "Bruno", servico: "Lavagem a Seco", pecas: 2, situacao: "lavando" },
    { id: 3, cliente: "Carla", servico: "Passadoria", pecas: 8, situacao: "lavando" }
]

app.get("/ordens", (req, res) => {
    if (req.query.situacao) {
        return res.json(
            ordens.filter(o => o.situacao === req.query.situacao)
        )
    }

    res.json(ordens)
})

app.post("/ordens", (req, res) => {
    if (!req.body.cliente) {
        return res.status(400).json({
            erro: "O campo cliente e obrigatorio"
        })
    }

    res.status(201).json({
        mensagem: "Registro de ordem criado"
    })
})

module.exports = app
