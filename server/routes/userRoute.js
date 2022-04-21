/** @format */
const express = require("express");
const userRouter = express.Router();


const {
  getUsers,
  registerUser,
  loginUser,
} = require("../controllers/userController");


userRouter.get("/", getUsers);
userRouter.post("/register", registerUser);
userRouter.put("/login", loginUser);

module.exports = userRouter;
