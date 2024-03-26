import { Router } from "express";
import { getTask, createTask, deleteTask } from "../controllers/TaskController.js";

const routes = Router();

routes.get('/tasks', getTask);

routes.post('/tasks', createTask);

routes.delete('/tasks/:id', deleteTask);

export default routes;