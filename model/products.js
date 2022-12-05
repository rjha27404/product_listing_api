const mongoose = require('mongoose');

// Schema 
const dataSchema = new mongoose.Schema({
    product_id: {
        required: true,
        type: Number
    },
    sku: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    color: {
        required: true,
        type: String
    },
    product_type: {
        required: true,
        type: String
    },
    product_image: {
        required: true,
        type: String
    }
},{timestamps: true});

// export model
module.exports = mongoose.model('products', dataSchema);