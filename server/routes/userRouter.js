const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.checkAuth);
//router.delete('/');      add later the router

module.exports = router;


// (req, res) => {
//     res.json({message: 'ALL WORKING!!!'})
// }