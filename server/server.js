/** @format */
const express = require("express");
const dotenv = require("dotenv");
const goalRouter = require("./routes/goalRoute.js")
const  errorHandler  = require("./middlewares/errorMiddleware");
const  connectDatabase  = require("./config/db.js");


connectDatabase();
const app = express();
dotenv.config();
const PORT = process.env.PORT || 2000;

app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", goalRouter);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
