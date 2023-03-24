const router = require('express').Router();
const controller = require('../controller/product.controller');

router.post('/',controller.createProduct);
router.get('/',controller.getALl);

router.delete('/:id',controller.deleteProduct);
router.get('/:id',controller.getOneById)
router.put('/:id',controller.updateProduct)

module.exports=router;