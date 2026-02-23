const { Router } = require('express')
const UsuarioController = require('../controllers/usuarioController')
const autenticado = require('../middleware/autenticado')

const router = Router()

router.use(autenticado)

router
  .post('/usuarios', UsuarioController.cadastrarUsuario)
  .get('/usuarios', UsuarioController.buscarTodosUsuarios)
  .get('/usuarios/id/:id', UsuarioController.buscarUsuarioPorId)
  .delete('/usuarios/id/:id', UsuarioController.deletarUsuarioPorId)
  .put('/usuarios/id/:id', UsuarioController.editarUsuario)
  .put('/usuarios/id/:id/senha', UsuarioController.trocaSenhaUsuario)

module.exports = router