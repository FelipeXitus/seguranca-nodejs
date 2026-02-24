const { Router } = require('express')
const AreaController = require('../controllers/areaController')
const autenticado = require('../middleware/autenticado')

const router = Router()

router.use(autenticado)

router
  .post('/areas', AreaController.cadastrarArea)
  .get('/areas', AreaController.buscarTodasAreas)
  .get('/areas/id/:id', AreaController.buscarAreaPorId)
  .delete('/areas/id/:id', AreaController.deletarAreaPorId)
  .put('/areas/id/:id', AreaController.editarArea)

module.exports = router