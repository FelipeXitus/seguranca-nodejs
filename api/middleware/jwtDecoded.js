const jwt = require("jsonwebtoken");

function jwtDecoded(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ mensagem: "Token não informado" });
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const usuarioId = decoded.id
        req.idUsuario = usuarioId;
        next();
    } catch (error) {
        return res.status(401).json({ mensagem: "Token inválido" });
    }
}