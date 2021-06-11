import express from 'express';
const router = express.Router();
import {
    getProducts,
    // getProductsByFilter,
    // postProducts,
    // deleteProdcts,
} from '../controllers/products.js';

router.get('/', getProducts); //get all products
// router.get('/filter', getProductsByFilter); //get products by filter
// router.post('/', postProducts);
// router.delete('/', deleteProdcts);

export default router;
