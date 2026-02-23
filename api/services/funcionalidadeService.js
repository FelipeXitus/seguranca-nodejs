const uuid = require('uuid')
const database = require('../models')

class FuncionalidadeService {
    async cadastrar(dto) {
        const funcionalidadeExistente = await database.funcionalidades.findOne({
                where: {
                    nome: dto.nome
                }
            })
        
        if (funcionalidadeExistente) {
                throw new Error('Funcionalidade já existe')
            }

        try {
            const novaFuncionalidade = await database.funcionalidades.create({
            id: uuid.v4(),
            nome: dto.nome
        });
        return novaFuncionalidade
        } catch (error) {
            throw new Error('Erro ao cadastrar funcionalidade')
        }
    }

    async buscarTodas() {
        try {
            const funcionalidades = await database.funcionalidades.findAll()
            return funcionalidades
        } catch (error) {
            throw new Error('Erro ao buscar funcionalidades')
        }
    }

    async buscarPorId(id) {
        try {
            const funcionalidade = await database.funcionalidades.findByPk(id)
            if (!funcionalidade) {
                throw new Error('Funcionalidade não encontrada')
            }
            return funcionalidade
        } catch (error) {
            throw new Error('Erro ao buscar funcionalidade')
        }
    }

    async deletarPorId(id) {
        try {
            const funcionalidade = await database.funcionalidades.findByPk(id)
            if (!funcionalidade) {
                throw new Error('Funcionalidade não encontrada')
            }
            await funcionalidade.destroy()
        } catch (error) {
            throw new Error('Erro ao deletar funcionalidade')
        }
    }

    async editarPorId(id, dto) {
        try {
            const funcionalidade = await database.funcionalidades.findByPk(id)
            if (!funcionalidade) {
                throw new Error('Funcionalidade não encontrada')
            }
            funcionalidade.nome = dto.nome || funcionalidade.nome
            await funcionalidade.save()
            return funcionalidade
        } catch (error) {
            throw new Error('Erro ao editar funcionalidade')
        }
    }
}

module.exports = FuncionalidadeService