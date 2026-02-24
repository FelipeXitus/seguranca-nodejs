const AreaService = require('../services/areaService')
const areaService = new AreaService()

class AreaController {
    static async cadastrarArea(req, res) {
        const { nome } = req.body
        try {
            const novaArea = await areaService.cadastrar({ nome })
            return res.status(201).json(novaArea)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    static async buscarTodasAreas(req, res) {
        try {
            const areas = await areaService.buscarTodas()
            return res.status(200).json(areas)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    static async buscarAreaPorId(req, res) {
        const { id } = req.params
        try {
            const area = await areaService.buscarPorId(id)
            return res.status(200).json(area)
        } catch (error) {
            return res.status(404).json({ error: error.message })
        }
    }

    static async deletarAreaPorId(req, res) {
        const { id } = req.params
        try {
            await areaService.deletarPorId(id)
            return res.status(200).json({ message: 'Área deletada com sucesso' })
        } catch (error) {
            return res.status(404).json({ error: error.message })
        }
    }

    static async editarArea(req, res) {
        const { id } = req.params
        const { nome } = req.body
        try {
            const areaAtualizada = await areaService.editarPorId(id, { nome })
            return res.status(200).json(areaAtualizada)
        } catch (error) {
            return res.status(404).json({ error: error.message })
        }
    }
}

module.exports = AreaController
