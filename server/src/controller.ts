import express from "express";
import tasks from "./modules/task/task.controller";

const router = express.Router();
router.use("/v1/tasks", tasks);

export default router;
