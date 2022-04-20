/** @format */
const express = require("express");
const goalRouter = express.Router();
const {
  deleteGoals,
  updateGoals,
  setGoals,
  getGoals,
} = require("../controllers/goalController");

goalRouter.get("/", getGoals);
goalRouter.post("/", setGoals);
goalRouter.put("/:id", updateGoals);
goalRouter.delete("/:id", deleteGoals);

module.exports = goalRouter;
