// import mongoose from 'mongoose';
// import Product from '../models/ProductSchema'

export const getProducts = async (req, res) => {
    const { data } = req.body;
    try {
        const products = await Product.find({ name: data });
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const postProducts = async (req, res) => {
    const { name, description, rentalPrice, category } = req.body;
    try {
        let product = await Product.findOne({ name });
        if (product) return res.status(203).json({ message: "Product Exists." });
        product = new Product({
            name,
            description,
            rentalPrice,
            category
        });
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const getProductsByFilter = async (req, res) => {
    const category = req.body;
    try {
        let products = await Product.find({ category });
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteProducts = async (req, res) => {
    const name = req.body;
    try {
        let products = await Product.findOneandRemove({ name });
        res.status(200).json({ message: "Product Removed Successfully!" });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

