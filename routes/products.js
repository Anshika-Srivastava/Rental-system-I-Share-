import express from 'express';
const router = express.Router();
import {
    getProducts,
    getProductsByFilter,
    postProducts,
    deleteProducts,
} from '../controllers/products.js';

router.get('/', getProducts); //get all products
router.get('/filter', getProductsByFilter); //get products by filter
router.post('/', postProducts);
router.delete('/', deleteProducts);

export default router;
