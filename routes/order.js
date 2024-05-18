import express from 'express';
import verify_token from "../utils/verify_token.js"
import { add_order, get_order } from "../controllers/order.js"

const router = express.Router()

// CREATE
router.post("/", verify_token, add_order)

// GET
router.get("/", verify_token, get_order)

export default router;