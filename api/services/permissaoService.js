const uuid = require('uuid')
const database = require('../models')

class PermissaoService {
    async cadastrar(dto) {
        const permissaoExistente = await database.permissoes.findOne({
                where: {
                    idUsuario: dto.idUsuario,
                    idRegra: dto.idRegra
                }
            })

        if (permissaoExistente) {
            throw new Error('Permissão já cadastrada para este usuário')
        }
        try {
            const novaPermissao = await database.permissoes.create({
                id: uuid.v4(),
                idUsuario: dto.idUsuario,
                idRegra: dto.idRegra,
            });
            return novaPermissao
        } catch (error) {
            throw new Error('Erro ao cadastrar permissão')
        }
    }

    async buscarTodas() {
        try {
            const permissoes = await database.permissoes.findAll()
            return permissoes
        } catch (error) {
            throw new Error('Erro ao buscar permissões')
        }
    }

    async buscarPorId(id) {
        try {
            const permissao = await database.permissoes.findByPk(id)
            if (!permissao) {
                throw new Error('Permissão não encontrada')
            }
            return permissao
        } catch (error) {
            throw new Error('Erro ao buscar permissão')
        }
    }

    async buscarPorUsuario(idUsuario) {
        try {
            const permissoes = await database.permissoes.findAll({
                where: {
                    idUsuario: idUsuario
                }
            });
            if (permissoes.length === 0) {
                throw new Error('Permissões não encontradas para este usuário')
            }
            return permissoes
        } catch (error) {
            throw new Error('Erro ao buscar permissões')
        }
    }

    async deletarPorId(id) {
        try {
            const permissao = await database.permissoes.findByPk(id)
            if (!permissao) {
                throw new Error('Permissão não encontrada')
            }
            await permissao.destroy()
        } catch (error) {
            throw new Error('Erro ao deletar permissão')
        }
    }

    async editarPorId(id, dto) {
        try {
            const permissao = await database.permissoes.findByPk(id)
            if (!permissao) {
                throw new Error('Permissão não encontrada')
            }
            await permissao.update(dto)
            return permissao
        } catch (error) {
            throw new Error('Erro ao editar permissão')
        }
    }
}

module.exports = PermissaoService