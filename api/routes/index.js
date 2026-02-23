const dotenv = require('dotenv')
const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')
const usuario = require('./usuariosRoute')
const auth = require('./authRoute')
const regra = require('./regraRoute')
const funcionalidade = require('./funcionalidadeRouter')
const permissao = require('./permissaoRoute')

dotenv.config()

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    produto,
    usuario,
    regra,
    funcionalidade,
    permissao
  )
}
