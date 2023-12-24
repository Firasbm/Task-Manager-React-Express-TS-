import { TaskDTO } from "./task.dto";
const Task = require("./task.model");

class TaskService {
  getTask = () => {
    return "Hello Task";
  };

  createTask = async (task: TaskDTO) => {
    const newTask = new Task(task);
    await newTask.save().catch((error: any) => {
      throw new Error();
    });
    return newTask;
  };
}

export default TaskService;
