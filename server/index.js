import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import productRoutes from './routes/products.js';
import userRoutes from './routes/user.js';

dotenv.config();

const PORT = process.env.PORT || 5010;

mongoose
    .connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send('Server Started!');
});

app.use('/products', productRoutes);
app.use('/user', userRoutes);
