import Product from "../models/product.js"

const add_product = async (req, res, next) => {
    try {
        let product = new Product(req.body)
        await product.save()
        res.send(product)
    } catch (error) {
        next()
    }
}

const update_product = async (req, res, next) => {
    try {
        let product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(product)
    } catch (error) {
        next()
    }
}

const delete_product = async (req, res, next) => {
    try {
        let product = await Product.findByIdAndDelete(req.params.id)
        res.send(product)
    } catch (error) {
        next()
    }
}

const get_all_products = async (req, res, next) => {
    try {
        if (req.query.cat && req.query.limit) {
            const products = await Product.find({ category: req.query.cat }).where("price").lte(parseInt(req.query.limit)).select("name price breif url")
            res.send(products)
        }
        else if (req.query.brand && req.query.limit) {
            const products = await Product.find({ brand: req.query.brand }).where("price").lte(parseInt(req.query.limit)).select("name price breif url")
            res.send(products)
        }
        else if (req.query.cat) {
            const products = await Product.find({ category: req.query.cat }).select("name price breif url")
            res.send(products)
        }
        else if (req.query.brand) {
            const products = await Product.find({ brand: req.query.brand }).select("name price breif url")
            res.send(products)
        }
        else if (req.query.limit) {
            const products = await Product.find().where("price").lte(parseInt(req.query.limit)).select("name price breif url")
            res.send(products)
        }
        else {
            const products = await Product.find().select("name price breif url")
            res.send(products)
        }
    } catch (error) {
        next()
    }
}

const get_all_products_of_name = async (req, res, next) => {
    try {
        if (req.query.cat && req.query.limit) {
            const products = await Product.find({ name: req.params.title, category: req.query.cat }).where("price").lte(parseInt(req.query.limit)).select("name price breif url")
            res.send(products)
        }
        else if (req.query.brand && req.query.limit) {
            const products = await Product.find({ name: req.params.title, brand: req.query.brand }).where("price").lte(parseInt(req.query.limit)).select("name price breif url")
            res.send(products)
        }
        else if (req.query.cat) {
            const products = await Product.find({ name: req.params.title, category: req.query.cat }).select("name price breif url")
            res.send(products)
        }
        else if (req.query.brand) {
            const products = await Product.find({ name: req.params.title, brand: req.query.brand }).select("name price breif url")
            res.send(products)
        }
        else if (req.query.limit) {
            const products = await Product.find({ name: req.params.title }).where("price").lte(parseInt(req.query.limit)).select("name price breif url")
            res.send(products)
        }
        else {
            const products = await Product.find({ name: req.params.title }).select("name price breif url")
            res.send(products)
        }
    } catch (error) {
        next()
    }
}

const get_product = async (req, res, next) => {
    try {
        const products = await Product.findOne({ _id: req.params.id })
        res.send(products)
    } catch (error) {
        console.log(error);
        next()
    }
}

export { add_product, update_product, delete_product, get_all_products, get_all_products_of_name, get_product }