const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    // image: {},
    rentalPrice: { type: String, required: true },
    category: { type: String, required: true },
}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema);

//image-to-base64