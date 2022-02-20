const { Device } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');  //npm i uuid, this generates random id
const path = require('path');

class DeviceController {
    async create(req, res, next) {
        try {

            const { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files; // install package express-fileupload and register it in index.js - (app.use(fileUpload({})))
            let fileName = uuid.v4() + ".jpg";

            img.mv(path.resolve(__dirname, '..' ,'static', fileName));

            const device = await Device.create({ name, price, brandId, typeId, img: fileName });
            return res.json(device);

        } catch (err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getAll(req, res) {
        return res.json(__dirname);
    }

    async getOne(req, res) {

    }
}

module.exports = new DeviceController();