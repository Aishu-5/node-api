const express = require('express');
const { getProducts, createProduct, getproduct, updatedProduct, deleteProduct } = require('../controllers/product.controllers');
const router = express.Router();

router.get('/',getProducts);
router.post('/',createProduct);
router.get('/:id',getproduct);
router.put('/:id',updatedProduct);
router.delete('/:id',deleteProduct);

module.exports = router;
