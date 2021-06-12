import mongoose from 'mongoose';
import Product from '../models/ProductSchema.js';

//Get all products
export const getAllProducts = async (req, res) => {
    const { data } = req.body;
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//Get productById
export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne({ _id: id });
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//creates new product
export const createProduct = async (req, res) => {
    const { name, description, ownerId, image, rentalPrice, category } =
        req.body;
    try {
        let product = new Product({
            name,
            description,
            image,
            rentalPrice,
            category,
            ownerId,
        });
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//deletes a product
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No product with id: ${id}`);

    await Product.findByIdAndRemove(id);

    res.json({ message: 'Product Deleted Successfully' });
};

//Updates a product
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const {
        name,
        description,
        ownerId,
        image,
        rentalPrice,
        category,
        rentedByUser,
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No product with id: ${id}`);

    try {
        const updatedOne = await Product.findByIdAndUpdate(
            id,
            {
                name,
                description,
                image,
                rentalPrice,
                category,
                ownerId,
                rentedByUser,
                _id: id,
            },
            {
                new: true,
            }
        );

        res.status(200).json(updatedOne);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
