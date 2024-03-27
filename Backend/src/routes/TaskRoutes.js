import { Router } from "express";
import { getTask, getTaskByID, createTask, updateTask, deleteTask } from "../controllers/TaskController.js";

const routes = Router();

routes.get('/tasks', getTask);

routes.get('/tasks/:taskId', getTaskByID);

routes.post('/tasks', createTask);

routes.put('/tasks/:taskId', updateTask);

routes.delete('/tasks/:taskId', deleteTask);

export default routes;