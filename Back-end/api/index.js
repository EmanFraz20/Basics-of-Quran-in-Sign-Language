import express from 'express';    //const express = require('express')
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import router from './routes/route.js';
import cors from 'cors';
import lessonRoute from './routes/lesson.route.js';
import lessonRoute2 from './routes/lesson2.route.js';
import lessonRoute3 from './routes/lesson3.route.js';
import lessonRoute4 from './routes/lesson4.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

const __dirname = path.resolve();

const app = express()

app.use(express.static(path.join(__dirname, '/Front-end/dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front-end', 'dist', 'index.html'))
});

dotenv.config();

const PORT = process.env.PORT || 4000;


//Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });


//allow JSON as the input to our backend
app.use(express.json());


//app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


//defining routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/question",router);
app.get("/",(req,res)=>{res.send("welcome....")})
app.use("/api/lessons", lessonRoute);
app.use("/api/lesson2", lessonRoute2);
app.use("/api/lesson3", lessonRoute3);
app.use("/api/lesson4", lessonRoute4);


//middleware to handle errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
