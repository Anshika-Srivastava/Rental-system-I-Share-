import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    rentalPrice: { type: String, required: true },
    category: { type: String, required: true },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema);