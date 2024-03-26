import express from 'express';
import Task from './models/TaskModel.js';

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Testando API");
});

app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();

    return res.status(200).json(tasks);
});

app.post('/tasks', async (req, res) => {
    const task = req.body;

    const novaTask = await Task.create(task);

    return res.json(novaTask);
});


export default app;
