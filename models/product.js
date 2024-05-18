import mongoose from 'mongoose';

const product_schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    breif: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: [String],
        default: []
    },
    stock: {
        type: Number,
        min: 0,
        required: true
    }
})

const Product = mongoose.model("Product", product_schema);

export default Product;