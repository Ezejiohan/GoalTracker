const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const userRoute = require("./routes/userRoute");
const goalRoute = require("./routes/goalRoute");

app.use("/api/users", userRoute);
app.use("/api/goals", goalRoute);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to GoalTracker App" });
});

module.exports = app;
