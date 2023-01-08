const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    brand: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: String
    },
    year: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)