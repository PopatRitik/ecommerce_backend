import mongoose from 'mongoose';

const order_schema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    products: [{
        product_id: String,
        name: String,
        price: Number,
        quantity: Number,
        brand: String
    }]
}, { timestamps: true })

const Order = mongoose.model("Order", order_schema);

export default Order;