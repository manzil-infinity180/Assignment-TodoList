const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");

router.get('/all-task',taskController.getAllTask)
      .post('/create-task',taskController.createtask)
      .patch('/update-task/:id',taskController.updateTask)
      .delete('/delete-task/:id',taskController.deleteTask)

module.exports = router;      