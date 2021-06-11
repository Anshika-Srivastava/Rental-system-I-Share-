// import Product from '../models/ProductSchema.js';
// import mongoose from 'mongoose';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    const productBody = req.body;

    const newProduct = new Produc

}