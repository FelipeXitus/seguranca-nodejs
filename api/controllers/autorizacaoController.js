const AutorizacaoService = require('../services/autorizacaoService')
const autorizacaoService = new AutorizacaoService()

class AutorizacaoController {

    async buscarPorUsuario(req, res) {
        const { usuarioId } = req.params
        try {
            const usuario = await autorizacaoService.buscarPorUsuario(usuarioId)
            res.json(usuario)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

}

module.exports = new AutorizacaoController()