const { Router } = require('express')
const AutorizacaoController = require('../controllers/autorizacaoController')
const autenticado = require('../middleware/autenticado')

const router = Router()

router.use(autenticado)

router
    .get('/autorizacao/:usuarioId', AutorizacaoController.buscarPorUsuario)

module.exports = router