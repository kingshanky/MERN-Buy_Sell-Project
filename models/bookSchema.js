
const mongoose = require('mongoose');

//User Schema Or Document Structure
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },



    country: {
        type: String,
        required: true,

    },
    indianState: {
        type: String,
        required: true,

    },
    city: {
        type: String,
        required: true,

    },
    pincode: {
        type: Number,
        required: true,

    },
    address: {
        type: String,
        required: true,

    },
    phoneNo: {
        type: Number,
        required: true,

    },
    bookName: {
        type: String,
        required: true,

    },
    bookPrice: {
        type: Number,
        required: true,

    },
    pages: {
        type: Number,
        required: true,

    },
    priceNegotiable: {
        type: String,
        required: true,

    },
    bookCondition: {
        type: String,
        required: true,

    },




    message: {
        type: String,
        required: true
    }
})



// Create Model
const Book = new mongoose.model("BOOK", bookSchema);

module.exports = Book;



