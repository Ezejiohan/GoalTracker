const Goal = require("../models/goalModel");

exports.createGoal = async (req, res) => {
  try {
    const { title, deadline } = req.body;

    // Validate input
    if (!title || !deadline) {
      return res.status(400).json({
        message: "Title and deadline are required"
      });
    }

    // Create goal
    const goal = await Goal.create({
      user: req.user.id,
      title,
      deadline
    });

    // Response
    res.status(201).json({
      message: "Goal created successfully",
      data: goal
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

exports.getGoals = async (req, res) => {
  try {
    // Check if user exists (extra safety)
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        message: "Not authorized"
      });
    }

    // Fetch goals for logged-in user
    const goals = await Goal.find({ user: req.user.id });

    res.status(200).json({
      message: "Goals fetched successfully",
      count: goals.length,
      data: goals
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

exports.updateProgress = async (req, res) => {
  try {
    const { progress } = req.body;

    // Validate input
    if (progress === undefined) {
      return res.status(400).json({
        message: "Progress is required"
      });
    }

    // Find goal and ensure it belongs to user
    const goal = await Goal.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!goal) {
      return res.status(404).json({
        message: "Goal not found"
      });
    }

    // Update progress
    goal.progress = progress;

    if (progress === 100) {
      goal.completed = true;
    }

    await goal.save();

    res.status(200).json({
      message: "Progress updated successfully",
      data: goal
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

exports.deleteGoal = async (req, res) => {
  try {
    // Ensure goal belongs to user
    const goal = await Goal.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });

    if (!goal) {
      return res.status(404).json({
        message: "Goal not found"
      });
    }

    res.status(200).json({
      message: "Goal deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};
