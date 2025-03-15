const express = require("express");
const { taskSchema } = require("../module/todoSchema");
const router = express.Router();

// addtask Post Method
router.post("/addtask", (req, res) => {
  let { task } = req.body;
  let { email } = req.body;
  let { id } = req.body;
  const addtask = new taskSchema({
    task,
    email,
    id,
  });
  addtask.save();
  res.send(addtask);
});

// fetch data GET Method
router.get("/fetchtask", async (req, res) => {
  let fetchData = await taskSchema.find({});
  res.send(fetchData);
});

// delete date Delete Method
router.delete("/deletetask/:id", async (req, res) => {
  let deleteTask = await taskSchema.findOneAndDelete({
    _id: req.params.id,
  });
  res.send({ msg: "Task deleted successfull", data: deleteTask });
});

// update data something Patch Method
router.patch("/updatedtask/:id", async (req, res) => {
  let { id } = req.params;
  let { task } = req.body;
  let updateData = await taskSchema.findOneAndUpdate(
    { _id: id },
    { task },
    { new: true }
  );
  res.send(updateData);
});

// fetch data individually GET Method
router.get("/singletask/:id", async (req, res) => {
  let { id } = req.params;
  let singleData = await taskSchema.findOne({ _id: id });
  res.send({ msg: "Single taks fetch successfull", data: singleData });
});

module.exports = router;
