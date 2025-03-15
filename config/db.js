const { default: mongoose } = require("mongoose");

function dbConfig() {
  mongoose
    .connect(
      "mongodb+srv://Todo_App:Todo_App@cluster0.2li7n.mongodb.net/Todo_App?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("MongoDB is connected");
    });
}

module.exports = { dbConfig };
