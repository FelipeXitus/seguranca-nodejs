const { Router } = require('express')
const RegraController = require('../controllers/regraController')
const autenticado = require('../middleware/autenticado')

const router = Router()

router.use(autenticado)

router
  .post('/regras', RegraController.cadastrarRegra)
  .get('/regras', RegraController.buscarTodasRegras)
  .get('/regras/id/:id', RegraController.buscarRegraPorId)
  .delete('/regras/id/:id', RegraController.deletarRegraPorId)
  .put('/regras/id/:id', RegraController.editarRegra)

module.exports = router