import express, { Request, Response } from "express";
const router = express.Router();
import TaskService from "./task.service";

import { taskSchema, TaskDTO } from "./task.dto";

const taskService = new TaskService();
router.get("/", (req: Request, res: Response) => {
  res.send(taskService.getTask());
});

router.post("/", async (req, res) => {
  const { error } = taskSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const task: TaskDTO = req.body;

  try {
    const newTask = await taskService.createTask(task);
    res.status(201).send(JSON.stringify(newTask));
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

export default router;
