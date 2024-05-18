import Order from "../models/order.js"

const add_order = async (req, res, next) => {
    try {
        let order = new Order({ user_id: req.user.user_id, products: req.body.products })
        await order.save()
        res.send(order)
    } catch (error) {
        next()
    }
}


const get_order = async (req, res, next) => {
    try {
        const order = await Order.find({ user_id: req.user.user_id })
        res.send(order)
    } catch (error) {
        console.log(error);
        next()
    }
}

export { add_order, get_order };