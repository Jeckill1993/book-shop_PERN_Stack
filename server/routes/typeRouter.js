const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');

router.post('/', typeController.create);
router.get('/', typeController.getAll);
//router.delete('/');      add later the router

module.exports = router;