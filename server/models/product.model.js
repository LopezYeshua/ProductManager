const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long."]
    },
    price: { 
        type: Number,
        required: [true, "Price is required."],
        min: [0.5, "Price must be at least 50 cents."]
    },
    description: { 
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Description must be at least 10 characters required."]
    }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);