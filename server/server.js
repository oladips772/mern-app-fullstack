/** @format */
import express from "express";
import dotenv from "dotenv";
import goalRouter from "./routes/goalRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", goalRouter);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
