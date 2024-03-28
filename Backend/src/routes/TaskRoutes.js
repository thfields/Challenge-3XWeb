import { Router } from "express";
import { getTask, getTaskByID, createTask, updateTask, deleteTask } from "../controllers/TaskController.js";
import UpdateTaskMiddleware from '../Middlewares/UpdateTaskMiddleware.js';
import CreateTaskMiddleware from '../Middlewares/CreateTaskMiddleware.js';


const routes = Router();

routes.get('/tasks', getTask);

routes.get('/tasks/:taskId', getTaskByID);

routes.post('/tasks', CreateTaskMiddleware, createTask);

routes.put('/tasks/:taskId', UpdateTaskMiddleware, updateTask);

routes.delete('/tasks/:taskId', deleteTask);

export default routes;