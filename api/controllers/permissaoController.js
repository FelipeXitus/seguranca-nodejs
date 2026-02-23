const PermissaoService = require('../services/permissaoService')
const permissaoService = new PermissaoService()

class PermissaoController {
    static async cadastrarPermissao(req, res) {
        const { idUsuario, idRegra } = req.body
        try {
            const novaPermissao = await permissaoService.cadastrar({ idUsuario, idRegra })
            return res.status(201).json(novaPermissao)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async buscarTodasPermissoes(req, res) {
        try {
            const permissoes = await permissaoService.buscarTodas()
            return res.status(200).json(permissoes)
        } catch (error) {
            return res.status(400).json({ error: 'Erro ao buscar permissões' })
        }
    }

    static async buscarPermissaoPorId(req, res) {
        const { id } = req.params
        try {
            const permissao = await permissaoService.buscarPorId(id)
            return res.status(200).json(permissao)
        } catch (error) {
            return res.status(404).json({ error: error.message })
        }
    }

    static async buscarPermissaoPorUsuario(req, res) {
        const { idUsuario } = req.params
        try {
            const permissoes = await permissaoService.buscarPorUsuario(idUsuario)
            return res.status(200).json(permissoes)
        } catch (error) {
            return res.status(404).json({ error: error.message })
        }
    }

    static async deletarPermissaoPorId(req, res) {
        const { id } = req.params
        try {
            await permissaoService.deletarPorId(id)
            return res.status(200).json({ message: 'Permissão deletada com sucesso' })
        } catch (error) {
            return res.status(404).json({ error: error.message })
        }
    }

    static async editarPermissao(req, res) {
        const { id } = req.params
        const { idUsuario, idRegra } = req.body
        try {
            const permissaoAtualizada = await permissaoService.editarPorId(id, { idUsuario, idRegra })
            return res.status(200).json(permissaoAtualizada)
        } catch (error) {
            return res.status(404).json({ error: error.message })
        }
    }
}

module.exports = PermissaoController