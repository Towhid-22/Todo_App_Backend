const { default: mongoose } = require("mongoose");

const taskSchema = mongoose.model("Task", {
  task: String,
  id: Number,
  email: String,
});

module.exports = { taskSchema };
