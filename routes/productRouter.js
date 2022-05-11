const router = require('express').Router()

const productController = require('../controllers/productController');

router.post('/addProduct', productController.addProduct);

router.get('/allProducts', productController.getAllProducts);

router.get('/publishedProducts', productController.getPublishedProducts);

router.get('/unpublishedProducts', productController.getUnpublishedProducts);

router.get('/:id', productController.getProductById);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;
