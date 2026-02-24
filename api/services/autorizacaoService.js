const uuid = require('uuid')
const database = require('../models')

class AutorizacaoService {
    async buscarPorUsuario(usuarioId) {
            try {
                const usuario = await database.usuarios.findOne({ 
                    attributes: ['id', 'nome', 'email'],
                    include: [
                        { 
                            model: database.permissoes, 
                            as: 'permissoesUsuario',
                            attributes: ['id'],
                            include: [
                                { model: database.regras, 
                                     as: 'permissoesRegra',
                                     attributes: ['id', 'nome', 'ler', 'escrever', 'deletar']
                                },
                                { model: database.areas, 
                                     as: 'permissoesArea',
                                     attributes: ['id', 'nome', 'path']
                                }
                            ]
                        }
                    ],
                    where: { 
                        id: usuarioId
                    }
                }); 
                return usuario
            } catch (error) {
                throw new Error('Erro ao buscar permissões do usuário')
            }
        }

}

module.exports = AutorizacaoService