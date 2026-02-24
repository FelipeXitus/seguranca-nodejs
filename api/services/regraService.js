const uuid = require('uuid')
const database = require('../models')

class RegraService {
    async cadastrar(dto) {
        const regraExistente = await database.regras.findOne({
                where: {
                    nome: dto.nome
                }
            })
        
        if (regraExistente) {
                throw new Error('Regra já existe')
            }

        try {
            const novaRegra = await database.regras.create({
            id: uuid.v4(),
            nome: dto.nome,
            descricao: dto.descricao,
            idFuncionalidade: dto.idFuncionalidade,
            ler: dto.ler || false,
            escrever: dto.escrever || false,
            deletar: dto.deletar || false
        });
        return novaRegra
        } catch (error) {
            throw new Error('Erro ao cadastrar regra')
        }
    }

    async buscarTodas() {
        try {
            const regras = await database.regras.findAll()
            return regras
        } catch (error) {
            throw new Error('Erro ao buscar regras')
        }
    }

    async buscarPorId(id) {
        try {
            const regra = await database.regras.findByPk(id)
            if (!regra) {
                throw new Error('Regra não encontrada')
            }
            return regra
        } catch (error) {
            throw new Error('Erro ao buscar regra')
        }
    }

    async deletarPorId(id) {
        try {
            const regra = await database.regras.findByPk(id)
            if (!regra) {
                throw new Error('Regra não encontrada')
            }
            await regra.destroy()
        } catch (error) {
            throw new Error('Erro ao deletar regra')
        }
    }

    async editarPorId(id, dto) {
        try {
            const regra = await database.regras.findByPk(id)
            if (!regra) {
                throw new Error('Regra não encontrada')
            }
            regra.nome = dto.nome || regra.nome
            regra.descricao = dto.descricao || regra.descricao
            regra.idFuncionalidade = dto.idFuncionalidade || regra.idFuncionalidade
            regra.ler = dto.ler !== undefined ? dto.ler : regra.ler
            regra.escrever = dto.escrever !== undefined ? dto.escrever : regra.escrever
            regra.deletar = dto.deletar !== undefined ? dto.deletar : regra.deletar
            await regra.save()
            return regra
        } catch (error) {
            throw new Error('Erro ao editar regra')
        }
    }
}

module.exports = RegraService