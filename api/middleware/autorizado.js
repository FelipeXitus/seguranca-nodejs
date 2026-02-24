const AutorizacaoService = require('../services/autorizacaoService');
const autorizacaoService = new AutorizacaoService();
const jwt = require("jsonwebtoken");


function permissao(pathNecessario, acaoNecessaria) {
    return async (req, res, next) => {
        try {
            const usuarioId = req.userId; 
            if (!usuarioId) {
                return res.status(401).json({ mensagem: "Usuário não autenticado" });
            }

            const usuario = await autorizacaoService.buscarPorUsuario(usuarioId);

            if (!usuario || !usuario.permissoesUsuario) {
                return res.status(403).json({ mensagem: "Permissões não encontradas" });
            }

            // Procura a permissão referente ao path
            const permissaoArea = usuario.permissoesUsuario.find(p => 
                p.permissoesArea?.path === pathNecessario
            );

            if (!permissaoArea) {
                return res.status(403).json({ mensagem: "Acesso negado ao recurso" });
            }

            const regra = permissaoArea.permissoesRegra;

            // Verifica a ação solicitada
            const pode = {
                ler: regra.ler,
                escrever: regra.escrever,
                deletar: regra.deletar
            }[acaoNecessaria];

            if (!pode) {
                return res.status(403).json({ mensagem: `Permissão '${acaoNecessaria}' negada` });
            }

            next();

        } catch (error) {
            console.error("Erro no middleware de permissão:", error);
            res.status(500).json({ mensagem: "Erro interno ao validar permissões" });
        }
    };
}

module.exports = permissao;
