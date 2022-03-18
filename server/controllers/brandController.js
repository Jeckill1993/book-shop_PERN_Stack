const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
    async create(req, res) {
        const { name } = req.body;
        const brand = await Brand.create({ name });
        return res.json(brand);
    }

    async edit(req, res) {
        const { name, id } = req.body;
        const brand = await Brand.update({ name },  { where: {id: id} });
        return res.json(brand);
    }

    async delete(req, res) {
        const { id } = req.params;
        const brand = await Brand.destroy({ where: {id: id} });
        return res.json(brand);
    }

    async getAll(req, res) {
        const brands = await Brand.findAll();
        return res.json(brands);
    }
}

module.exports = new BrandController();