const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'), deviceController.create);
router.put('/', checkRole('ADMIN'), deviceController.edit);
router.post('/review', deviceController.addReview);
router.delete('/:id', checkRole('ADMIN'), deviceController.delete);
router.get('/', deviceController.getAll);
router.get('/sale', deviceController.getSaleAll);
router.get('/:id', deviceController.getOne);

module.exports = router;