const { Router } = require('express')
const PermissaoController = require('../controllers/permissaoController')
const autenticado = require('../middleware/autenticado')

const router = Router()

router.use(autenticado)

router
  .post('/permissoes', PermissaoController.cadastrarPermissao)
  .get('/permissoes', PermissaoController.buscarTodasPermissoes)
  .get('/permissoes/id/:id', PermissaoController.buscarPermissaoPorId)
  .get('/permissoes/usuario/:idUsuario', PermissaoController.buscarPermissaoPorUsuario)
  .delete('/permissoes/id/:id', PermissaoController.deletarPermissaoPorId)
  .put('/permissoes/id/:id', PermissaoController.editarPermissao)

module.exports = router