const FuncionalidadeService = require('../services/funcionalidadeService')
const funcionalidadeService = new FuncionalidadeService()

class FuncionalidadeController {
    static async cadastrarFuncionalidade(req, res) {
        const { nome } = req.body
        try {
            const novaFuncionalidade = await funcionalidadeService.cadastrar({ nome })
            return res.status(201).json(novaFuncionalidade)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    static async buscarTodasFuncionalidades(req, res) {
        try {
            const funcionalidades = await funcionalidadeService.buscarTodas()
            return res.status(200).json(funcionalidades)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    static async buscarFuncionalidadePorId(req, res) {
        const { id } = req.params
        try {
            const funcionalidade = await funcionalidadeService.buscarPorId(id)
            return res.status(200).json(funcionalidade)
        } catch (error) {
            return res.status(404).json({ error: error.message })
        }
    }

    static async deletarFuncionalidadePorId(req, res) {
        const { id } = req.params
        try {
            await funcionalidadeService.deletarPorId(id)
            return res.status(200).json({ message: 'Funcionalidade deletada com sucesso' })
        } catch (error) {
            return res.status(404).json({ error: error.message })
        }
    }

    static async editarFuncionalidade(req, res) {
        const { id } = req.params
        const { nome } = req.body
        try {
            const funcionalidadeAtualizada = await funcionalidadeService.editarPorId(id, { nome })
            return res.status(200).json(funcionalidadeAtualizada)
        } catch (error) {
            return res.status(404).json({ error: error.message })
        }
    }
}

module.exports = FuncionalidadeController
