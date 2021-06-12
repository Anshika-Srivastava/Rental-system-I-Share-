import mongoose from 'mongoose';
const Schema = mongoose.Schema

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    rented: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
    toRent: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);