import TaskService from '../services/TaskService.js';

async function getTask(_, res) {
    const tasks = await TaskService.find();
    return res.status(200).json(tasks);
}

async function getTaskByID(req, res) {
    const taskId = req.params.taskId;

    try {
        const task = await TaskService.findOne(taskId);
        return res.status(200).json(task);
    } catch (error) {
        if (error.message === 'Task não encontrada') {
            return res.status(404).json({ error: error.message });
        }
        return res.status(500).json({ error: 'Erro ao buscar a task' });
    }
}

async function createTask(req, res) {
    const { titulo, descricao, prioridade, status } = req.body;

    try {
        const task = await TaskService.create({ titulo, descricao, prioridade, status });
        return res.status(201).json(task);
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno no controller.', details: error });
    }
}

async function updateTask(req, res) {
    const taskId = req.params.taskId;
    const task = req.body; // Use req.body instead of req.task

    try {
        const updatedTask = await TaskService.update(taskId, task);
        return res.status(200).json(updatedTask);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao atualizar a task' });
    }
}

async function deleteTask(req, res) {
    const taskId = req.params.taskId;
    try {
        const task = await TaskService.delete(taskId);
        return res.status(200).json({ message: 'Task deletada com sucesso!'});
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export { getTask, getTaskByID, createTask, updateTask, deleteTask };