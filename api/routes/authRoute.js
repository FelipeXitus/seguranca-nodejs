const { Router } = require('express')
const AuthController = require('../controllers/authController')

const router = Router()

router
  .post('/auth/login', AuthController.login)
  //.get('/usuarios', UsuarioController.buscarTodosUsuarios)
  //.get('/usuarios/id/:id', UsuarioController.buscarUsuarioPorId)
  //.delete('/usuarios/id/:id', UsuarioController.deletarUsuarioPorId)
  //.put('/usuarios/id/:id', UsuarioController.editarUsuario)
  //.put('/usuarios/id/:id/senha', UsuarioController.trocaSenhaUsuario)

module.exports = router