const Goal = require("../models/goalModel");

exports.createGoal = async (req, res) => {

  const { title, deadline } = req.body

  const goal = await Goal.create({
    user: req.user.id,
    title,
    deadline
  })

  res.status(201).json(goal)
}

exports.getGoals = async (req, res) => {

  const goals = await Goal.find({ user: req.user.id })

  res.json(goals)
}

exports.updateProgress = async (req, res) => {

  const goal = await Goal.findById(req.params.id)

  goal.progress = req.body.progress

  if (goal.progress === 100) {
    goal.completed = true
  }

  await goal.save()

  res.json(goal)
}

exports.deleteGoal = async (req, res) => {

  await Goal.findByIdAndDelete(req.params.id)

  res.json({ message: "Goal deleted" })
}
