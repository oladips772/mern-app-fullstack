/** @format */
const express = require("express");
const userRouter = express.Router();
const { protect } = require("../middlewares/authMiddleWare");

const {
  getUser,
  registerUser,
  loginUser,
} = require("../controllers/userController");

userRouter.get("/", protect, getUser);
userRouter.put("/register", registerUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
