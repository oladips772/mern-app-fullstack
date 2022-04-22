/** @format */
const express = require("express");
const userRouter = express.Router();


const {
  getUsers,
  registerUser,
  loginUser,
} = require("../controllers/userController");


userRouter.get("/", getUsers);
userRouter.put("/register", registerUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
