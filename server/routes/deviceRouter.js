const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/create', checkRole('ADMIN'), deviceController.create);
router.post('/edit', deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);
router.delete('/');

module.exports = router;