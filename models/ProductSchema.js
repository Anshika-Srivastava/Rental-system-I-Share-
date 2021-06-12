import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String },
        category: { type: String },
        rentalPrice: { type: String, required: true },
        ownerId: { type: String, required: true },
        rentedByUser: {
            type: String,
            default: null,
        },
    },
    { timestamps: true }
);

var Product = mongoose.model('Product', productSchema);

export default Product;
