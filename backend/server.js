import express from "express";
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import connectDB from "./config/data.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();


connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/api/users', userRoutes);

app.get('/', (res, req) => res.setEncoding('Server is ready'));
app.use(errorHandler);
app.use(notFound);
app.listen(port, () => console.log(`Server started on port ${port}`));

// Create routes
// 1 - POST - Register an user
// 1 - POST - Authenticate a user and get token
// 1 - POST - Logout user and clear cookie
// 1 - GET - Get user profile
// 1 - PUT - Edit/update user profile