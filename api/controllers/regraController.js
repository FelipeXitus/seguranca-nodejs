const RegraService = require('../services/regraService')
const regraService = new RegraService()

class RegraController {
    static async cadastrarRegra(req, res) {
        const { nome, descricao, idFuncionalidade, ler, escrever, deletar  } = req.body
        try {
            const novaRegra = await regraService.cadastrar({ nome, descricao, idFuncionalidade, ler, escrever, deletar })
            return res.status(201).json(novaRegra)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async buscarTodasRegras(req, res) {
        try {
            const regras = await regraService.buscarTodas()
            return res.status(200).json(regras)
        } catch (error) {
            return res.status(400).json({ error: 'Erro ao buscar regras' })
        }
    }

    static async buscarRegraPorId(req, res) {
        const { id } = req.params
        try {
            const regra = await regraService.buscarPorId(id)
            return res.status(200).json(regra)
        } catch (error) {
            return res.status(404).json({ error: error.message })
        }
    }

    static async deletarRegraPorId(req, res) {
        const { id } = req.params
        try {
            await regraService.deletarPorId(id)
            return res.status(200).json({ message: 'Regra deletada com sucesso' })
        } catch (error) {
            return res.status(404).json({ error: error.message })
        }
    }

    static async editarRegra(req, res) {
        const { id } = req.params
        const { nome, descricao, idFuncionalidade, ler, escrever, deletar } = req.body
        try {
            const regraAtualizada = await regraService.editarPorId(id, { nome, descricao, idFuncionalidade, ler, escrever, deletar })
            return res.status(200).json(regraAtualizada)
        } catch (error) {
            return res.status(404).json({ error: error.message })
        }
    }
}

module.exports = RegraController
