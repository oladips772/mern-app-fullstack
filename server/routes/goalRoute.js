/** @format */
import express from "express";
import { deleteGoals } from "../controllers/goalController.js";
import { updateGoals } from "../controllers/goalController.js";
import { setGoals } from "../controllers/goalController.js";
const goalRouter = express.Router();
import { getGoals } from "../controllers/goalController.js";

goalRouter.get("/", getGoals);
goalRouter.post("/", setGoals);
goalRouter.put("/:id", updateGoals);
goalRouter.delete("/:id", deleteGoals);

export default goalRouter;
