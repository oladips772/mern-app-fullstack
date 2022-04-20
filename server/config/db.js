/** @format */
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGO_db connected `);
  } catch (err) {
    console.log(err);
  }
};
