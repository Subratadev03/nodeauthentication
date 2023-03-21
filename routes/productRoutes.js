const productCntrl  = require('../controllers/productController.js')

const router   = require('express').Router()

router.post('/add-product',productCntrl.addProduct)
router.get('/get-product',productCntrl.getallProducts)
router.get('/:id',productCntrl.getoneProduct)
router.put('/:id',productCntrl.updateProduct)
router.delete('/:id',productCntrl.deleteProduct)

module.exports = router