import express from 'express';    //const express = require('express')
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import router from './routes/route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express()

dotenv.config();

const PORT = process.env.PORT || 5000;

//Connect to MongoDB
mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDB'); 
}).catch((err) => {
  console.log(err);
});
  
//allow JSON as the input to our backend
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

//defining routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/question",router);
app.get("/",(req,res)=>{res.send("welcome....")})
//middleware to handle errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
