const dotenv = require('dotenv')
const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')
const usuario = require('./usuariosRoute')
const auth = require('./authRoute')
const regra = require('./regraRoute')
const funcionalidade = require('./funcionalidadeRoute')
const permissao = require('./permissaoRoute')
const area = require('./areaRoute')

dotenv.config()

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    area,
    produto,
    usuario,
    regra,
    funcionalidade,
    permissao
  )
}
