const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const connectDB = require("./config/database")

dotenv.config()

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

//app.use("/api/auth", require("./routes/authRoutes"))
//app.use("/api/goals", require("./routes/goalRoutes"))

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})