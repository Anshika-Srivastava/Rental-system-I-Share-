import express from 'express';
const router = express.Router();
import {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct,
} from '../controllers/products.js';

import auth from '../middleware/auth.js';

router.get('/', getAllProducts); //get all products
router.get('/:id', auth, getProductById); //gets a product by Id
router.post('/', auth, createProduct); //creates new products
router.patch('/:id', auth, updateProduct); //updates a product
router.delete('/:id', auth, deleteProduct); //deletes a product

export default router;
