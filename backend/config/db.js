const mongoose = require('mongoose');
const createAdmin = require("../utils/DbInit");

const connectDB = async () => {
    try{
        if(!process.env.MONGO_URL) throw new Error('MongoDB connection required');
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
        await createAdmin();
    }catch(error){
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}
module.exports = connectDB;