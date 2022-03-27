const { BasketDevice, Basket, DeviceInfo} = require('../models/models');
const ApiError = require('../error/ApiError');

class BasketController {
    async addBasketDevice(req, res, next) {
        try {
            let { name, price, deviceId, basketId } = req.body;

            await BasketDevice.create({ name, price, deviceId, basketId });
            const basketDevices = BasketDevice.findAll();
            return res.json(basketDevices);

        } catch (err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async deleteBasketDevice(req, res, next) {
        try {
            let { id } = req.params;

            await BasketDevice.destroy({ where: {id: id} });
            const basketDevices = BasketDevice.findAll();
            return res.json(basketDevices);

        } catch (err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getBasket(req, res,) {
        const { id } = req.params;
        const basket = await Basket.findOne({
            where: {id: id},
            include: [{ model: BasketDevice, as: 'item' }],
    });

        return res.json(basket);
    }
}

module.exports = new BasketController();