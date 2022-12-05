const mongoose = require('mongoose');

// for local mongdb
const mongoURL = "mongodb://localhost:27017/product_listing";
// for mongodb Atlas
// const mongoURL = process.env.MONOGO_URL;
mongoose.connect(mongoURL);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})