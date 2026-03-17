const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const userRoute = require("./routes/userRoute");

app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to GoalTracker App" });
});

module.exports = app;
