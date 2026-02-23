
const UsuarioService = require('../services/usuarioService')
const usuarioService = new UsuarioService()

class UsuarioController {
    static async cadastrarUsuario(req, res) {
        const { nome, email, senha } = req.body
        try {
            const novoUsuario = await usuarioService.cadastrar({ nome, email, senha })
            return res.status(201).json(novoUsuario)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async buscarTodosUsuarios(req, res) {
        try {
            const usuarios = await usuarioService.buscar()
            return res.status(200).json(usuarios)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async buscarUsuarioPorId(req, res) {
        const { id } = req.params
        try {
            const usuario = await usuarioService.buscarPorId(id)
            if (usuario) {
                return res.status(200).json(usuario)
            } else {
                return res.status(404).json({ message: 'Usuário não encontrado' })
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = UsuarioController