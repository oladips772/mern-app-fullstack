/** @format */
import express from "express";
import dotenv from "dotenv";
import goalRouter from "./routes/goalRoute.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import { connectDatabase } from "./config/db.js";

connectDatabase();
const app = express();
dotenv.config();
const PORT = process.env.PORT || 2000;

app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", goalRouter);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
