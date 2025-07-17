const {Router} = require('express');
const controllers = require('../controllers/auth.controller');

const router = Router();



router.post('/signup',controllers.signUp);
router.post('/login',controllers.logIn);
router.get('/users',controllers.getUser);


module.exports = router;