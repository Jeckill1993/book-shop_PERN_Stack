const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basketController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', basketController.addBasketDevice);
router.delete('/:id', basketController.deleteBasketDevice);
router.get('/:id', basketController.getBasket); //add authMiddleware later, decide problem with auth

module.exports = router;