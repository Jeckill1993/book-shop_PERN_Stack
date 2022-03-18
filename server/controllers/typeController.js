const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {
        const { name } = req.body;
        await Type.create({ name });

        const types = await Type.findAll();
        return res.json(types);
    }

    async edit(req, res) {
        const { name, id } = req.body;
        await Type.update({ name }, { where: {id: id} });

        const types = await Type.findAll();
        return res.json(types);
    }

    async delete(req, res) {
        const { id } = req.params;
        await Type.destroy( { where: {id: id} });

        const types = await Type.findAll();
        return res.json(types);
    }

    async getAll(req, res) {
        const types = await Type.findAll();
        return res.json(types);
    }
}

module.exports = new TypeController();