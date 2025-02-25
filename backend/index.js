const express = require('express');
const mongoose = require('mongoose');
const UserRouter = require('./login');
const cors = require("cors");

const app = express();
app.use(express.json());  
app.use(cors());
app.use("/api/user", UserRouter);  

async function main() {
    try {
        await mongoose.connect("mongodb+srv://admin:M8Ka9GxEjWaNb9kl@cluster0.lphgo.mongodb.net/aadhya");
        console.log('Connected to MongoDB');

        app.listen(3000, () => {
            console.log('Server running on http://localhost:3000');
        });
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); 
    }
}
main();
