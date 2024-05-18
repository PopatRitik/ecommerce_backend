import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoute from './routes/auth.js'
import productRoute from './routes/product.js'
import orderRoute from './routes/order.js'

const PORT = 3000;

const app = express()

// function to connect with database
const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb://0.0.0.0:27017/ecom")
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

connectDB();

//  middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use("/auth",authRoute)
app.use("/products", productRoute)
app.use("/orders", orderRoute)

// starting server to listen
app.listen(PORT,()=>{console.log(`Server started at http://localhost:${PORT}`)});