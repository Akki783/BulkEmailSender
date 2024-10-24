require("dotenv").config();
const mongoose = require('mongoose');
const URL = process.env.MONGO_URL;

// Connect to MongoDB using Mongoose
const connectDB = async () => {
    try {
        await mongoose.connect(URL, {
            // Removed deprecated options
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error: ', err);
        process.exit(1); // Exit process with failure
    }
};

const closeDB = async () => {
    try {
        await mongoose.disconnect();
        console.log('MongoDB connection closed');
    } catch (err) {
        console.error('Error closing MongoDB connection: ', err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = { connectDB, closeDB };