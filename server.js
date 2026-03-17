require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/database")

const PORT = process.env.PORT || 5001

connectDB();

//app.use("/api/auth", require("./routes/authRoutes"))
//app.use("/api/goals", require("./routes/goalRoutes"))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
