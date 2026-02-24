const { Router } = require('express')
const FuncionalidadeController = require('../controllers/funcionalidadeController')
const autenticado = require('../middleware/autenticado')

const router = Router()

router.use(autenticado)

router
  .post('/funcionalidades', FuncionalidadeController.cadastrarFuncionalidade)
  .get('/funcionalidades', FuncionalidadeController.buscarTodasFuncionalidades)
  .get('/funcionalidades/id/:id', FuncionalidadeController.buscarFuncionalidadePorId)
  .delete('/funcionalidades/id/:id', FuncionalidadeController.deletarFuncionalidadePorId)
  .put('/funcionalidades/id/:id', FuncionalidadeController.editarFuncionalidade)

module.exports = router