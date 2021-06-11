const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();
const Server = require('http').createServer(app);

// const productRoutes = require('./routes/products.js');
// const userRoutes = require('./routes/user.js');


app.use(cors());
app.use(express.json({ extended: false }));


// app.use('/products', productRoutes);
// app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Server Started!');
})

Server.listen(PORT, () => console.log(`on port ${PORT}`));