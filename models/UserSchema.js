import mongoose from 'mongoose';
// import Schema

const userSchema = mongoose.postSchema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    rented: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
    toRent: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
}, { timestamps: true });


export default mongoose.model('User', userSchema);