const { Router } = require('express')
const ProdutoController = require('../controllers/produtoController')
const permissao = require('../middleware/autorizado')
const autenticado = require('../middleware/autenticado')

const router = Router()
router.use(autenticado)

router
  .post("/produtos",permissao("/produtos", "escrever"),ProdutoController.cadastrarProduto)
  .get('/produtos',permissao("/produtos", "ler"), ProdutoController.buscarTodosProdutos)
  .get('/produtos/id/:id',permissao("/produtos", "ler"), ProdutoController.buscarProdutoPorId)
  .delete('/produtos/id/:id',permissao("/produtos", "deletar"), ProdutoController.deletarProdutoPorId)
  .put('/produtos/id/:id',permissao("/produtos", "escrever"), ProdutoController.editarProduto)

module.exports = router