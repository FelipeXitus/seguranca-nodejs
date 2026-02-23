const { verify, decode } = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({ message: 'Access Token não fornecido' })
    }
    
    const [, accessToken] = token.split(' ')
    try {
        verify(accessToken, process.env.TOKEN_SECRET_KEY)
        const {id, email } = await decode(accessToken)
        req.userId = id
        req.userEmail = email
        return next()
        
    } catch (error) {
        return res.status(401).json({ message: 'Access Token inválido' })
    }
}