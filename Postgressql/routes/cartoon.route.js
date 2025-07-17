const {Router} = require('express');
const controllers = require('../controllers/cartoon.controller');

const router = Router();



router.post('/addCartoon',controllers.addCartoon);
router.delete('/:id',controllers.deleteCartoon);
router.get('/getCartoon',controllers.getAllCartoons);


module.exports = router;