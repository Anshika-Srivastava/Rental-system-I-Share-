import express from 'express';
const router = express.Router();
import {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct,
} from '../controllers/products.js';

router.get('/', getAllProducts); //get all products
router.get('/:id', getProductById); //gets a product by Id
router.post('/', createProduct); //creates new products
router.patch('/:id', updateProduct); //updates a product
router.delete('/:id', deleteProduct); //deletes a product

export default router;
