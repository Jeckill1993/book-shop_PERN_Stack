const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
    async create(req, res) {
        const { name } = req.body;
        await Brand.create({ name });

        const brands = await Brand.findAll();
        return res.json(brands);
    }

    async edit(req, res) {
        const { name, id } = req.body;
        await Brand.update({ name },  { where: {id: id} });

        const brands = await Brand.findAll();
        return res.json(brands);
    }

    async delete(req, res) {
        const { id } = req.params;
        await Brand.destroy({ where: {id: id} });

        const brands = await Brand.findAll();
        return res.json(brands);
    }

    async getAll(req, res) {
        const brands = await Brand.findAll();
        return res.json(brands);
    }
}

module.exports = new BrandController();