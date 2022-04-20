/** @format */
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGO_db connected `);
  } catch (err) {
    console.log(err);
  }
};

module.exports =  connectDatabase 