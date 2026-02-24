const dotenv = require('dotenv')
const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')
const usuario = require('./usuarioRoute')
const auth = require('./authRoute')
const regra = require('./regraRoute')
const funcionalidade = require('./funcionalidadeRoute')
const permissao = require('./permissaoRoute')
const area = require('./areaRoute')
const autorizacao = require('./autorizacaoRoute')

dotenv.config()

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    autorizacao,
    area,
    produto,
    usuario,
    regra,
    funcionalidade,
    permissao
  )
}
