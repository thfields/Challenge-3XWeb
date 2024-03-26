import { Router } from "express";
import { getTask, getTaskByID, createTask, updateTask, deleteTask } from "../controllers/TaskController.js";

const routes = Router();

routes.get('/tasks', getTask);

routes.get('/tasks/:id', getTaskByID);

routes.post('/tasks', createTask);

routes.put('/tasks/:id', updateTask);

routes.delete('/tasks/:id', deleteTask);

export default routes;