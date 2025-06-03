import express from 'express'; 
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    throw error
  }  
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});

app.get('/users', (req, res) => {
    res.send('Hello World!');
})
 
app.listen(8000, () => {
    connect();
    console.log('Server is running on port 8000');
})