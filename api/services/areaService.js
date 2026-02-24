const uuid = require('uuid')
const database = require('../models')

class areaService {
    async cadastrar(dto) {
        const areaExistente = await database.areas.findOne({
                where: {
                    nome: dto.nome
                }
            })
        
        if (areaExistente) {
                throw new Error('Área já existe')
            }

        try {
            const novaArea = await database.areas.create({
            id: uuid.v4(),
            nome: dto.nome,
            path: dto.path
        });
        return novaArea
        } catch (error) {
            throw new Error('Erro ao cadastrar área')
        }
    }

    async buscarTodas() {
        try {
            const areas = await database.areas.findAll()
            return areas
        } catch (error) {
            throw new Error('Erro ao buscar áreas')
        }
    }

    async buscarPorId(id) {
        try {
            const area = await database.areas.findByPk(id)
            if (!area) {
                throw new Error('Área não encontrada')
            }
            return area
        } catch (error) {
            throw new Error('Erro ao buscar área')
        }
    }

    async deletarPorId(id) {
        try {
            const area = await database.areas.findByPk(id)
            if (!area) {
                throw new Error('Área não encontrada')
            }
            await area.destroy()
        } catch (error) {
            throw new Error('Erro ao deletar área')
        }
    }

    async editarPorId(id, dto) {
        try {
            const area = await database.areas.findByPk(id)
            if (!area) {
                throw new Error('Área não encontrada')
            }
            area.nome = dto.nome || area.nome
            area.path = dto.path || area.path
            await area.save()
            return area
        } catch (error) {
            throw new Error('Erro ao editar área')
        }
    }
}

module.exports = areaService