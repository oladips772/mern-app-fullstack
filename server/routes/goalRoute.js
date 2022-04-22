/** @format */
const express = require("express");
const goalRouter = express.Router();
const { protect } = require("../middlewares/authMiddleWare");

const {
  deleteGoals,
  updateGoals,
  setGoals,
  getGoals,
} = require("../controllers/goalController");

goalRouter.get("/", protect, getGoals);
goalRouter.post("/", protect, setGoals);
goalRouter.put("/:id", protect, updateGoals);
goalRouter.delete("/:id", protect, deleteGoals);

module.exports = goalRouter;
