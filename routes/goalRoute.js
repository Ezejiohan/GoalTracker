const express = require("express");
const goalRouter = express.Router();

const protect = require("../middleware/userMiddleware");

const {
  createGoal,
  getGoals,
  updateProgress,
  deleteGoal
} = require("../controller/goalController");

goalRouter.post("/", protect, createGoal);

goalRouter.get("/", protect, getGoals);

goalRouter.put("/:id", protect, updateProgress);

goalRouter.delete("/:id", protect, deleteGoal);

module.exports = goalRouter;
