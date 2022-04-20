/** @format */
const asyncHandler = require("express-async-handler");
const Goal = require("../Models/goalModel");

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
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

//* @update goals
//* @route PUT api/goals
// *@access private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("goal id not avaiable");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedGoal);
});


//* @delete goals
//* @route DELETE api/goals
//* @access private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findByIdAndDelete(req.params.id);
  if (!goal) { 
    res.status(400)
    throw new Error("a goal id needed !!")
  }
  res.status(200).json({ message: `Deleted Goal ${req.params.id} succesfully` });
});

module.exports = { getGoals, setGoals, deleteGoals, updateGoals };
