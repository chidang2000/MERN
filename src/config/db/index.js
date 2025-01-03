import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGODB_URL).then(() => console.log('DB to connected....'));
};

export default { connectDB };
