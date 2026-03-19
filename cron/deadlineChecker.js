const cron = require("node-cron");
const Goal = require("../models/goalModel");

cron.schedule("0 9 * * *", async () => {

  const today = new Date();

  const goals = await Goal.find({ deadline: today })

  goals.forEach(goal => {
    console.log(`Reminder: Goal "${goal.title}" deadline today`)
  })

});
