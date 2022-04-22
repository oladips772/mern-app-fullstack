/** @format */
const asyncHandler = require("express-async-handler");
const Goal = require("../Models/goalModel");
const User = require("../Models/userModel");

//* @get goals
//* @route GET api/goals
//* @access private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
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
    user: req.user.id,
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

  // get user
  const user = await User.findById(req.user.id);

  // check if user exists
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }

  // check if user is owner of goal
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

//* @delete goals
//* @route DELETE api/goals
//* @access private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findByIdAndDelete(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("a goal id needed !!");
  }

  // get user
  const user = await User.findById(req.user.id);

  // check if user exists
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }

  // check if user is owner of goal
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User authorized");
  }

  res
    .status(200)
    .json({ message: `Deleted Goal ${req.params.id} succesfully` });
});

module.exports = { getGoals, setGoals, deleteGoals, updateGoals };
