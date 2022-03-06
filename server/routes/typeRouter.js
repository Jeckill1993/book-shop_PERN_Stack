const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/create', checkRole('ADMIN'), typeController.create);
router.post('/edit');
router.delete('/');
router.get('/', typeController.getAll);

module.exports = router;