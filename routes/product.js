import express from 'express';
import verify_token from "../utils/verify_token.js"

import { add_product, update_product, delete_product, get_all_products, get_all_products_of_name, get_product } from "../controllers/product.js"

const router = express.Router()

// CREATE
router.post("/", verify_token, add_product)

// UPDATE
router.put("/:id", verify_token, update_product)

// DELETE
router.delete("/:id", verify_token, delete_product)

// GET ALL
router.get("/", verify_token, get_all_products)
router.get("/name/:title", verify_token, get_all_products_of_name)

// GET
router.get("/:id", verify_token, get_product)

export default router;