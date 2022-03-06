const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/create', checkRole('ADMIN'), brandController.create);
router.post('/edit', brandController.create);
router.get('/', brandController.getAll);
router.delete('/');

module.exports = router;