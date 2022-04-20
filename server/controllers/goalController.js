/** @format */
//* @get goals
//* @route GET api/goals
//* @access private
export const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

//* @set goals
//* @route POST api/goals
//* @access private
export const setGoals = (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("No goal text provided");
  }
  res.status(200).json({ message: "Set Goals" });
};

//* @update goals
//* @route PUT api/goals
// *@access private
export const updateGoals = (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
};

//* @delete goals
//* @route DELETE api/goals
//* @access private
export const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
};