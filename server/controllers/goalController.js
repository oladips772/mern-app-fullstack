/** @format */
const asyncHandler = require("express-async-handler")
const { Goal } = require("../Models/goalModel");


//* @get goals
//* @route GET api/goals
//* @access private
 const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

//* @set goals
//* @route POST api/goals
//* @access private
 const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("No goal text provided");
  }
  res.status(200).json({ message: "Set Goals" });
});

//* @update goals
//* @route PUT api/goals
// *@access private
 const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
});

//* @delete goals
//* @route DELETE api/goals
//* @access private
 const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
});

module.exports = { getGoals, setGoals, deleteGoals, updateGoals };