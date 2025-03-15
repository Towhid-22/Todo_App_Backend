const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { dbConfig } = require("./config/db");
const router = require("./route");
const app = express();
app.use(express.json());
app.use(cors());
dbConfig();
app.use(router)
// server localhost:9000
app.listen(9000, () => {
  console.log("Server is running");
});
