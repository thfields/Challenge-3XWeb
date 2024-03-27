import Task from '../models/TaskModel.js';
import UpdateTaskMiddleware from '../Middlewares/UpdateTaskMiddleware.js';

async function getTask(_, res) {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
}

async function getTaskByID(req, res) {
    const taskId = req.params.taskId;
    try {
        const task = await Task.findOne({taskId: taskId});
        if (!task) {
            return res.status(404).json({ error: 'Task não encontrada' });
        }
        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar a task' });
    }
}

async function createTask(req, res) {
    const task = req.body;

    if (!task.titulo || !task.descricao || !task.prioridade || !task.status) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    if(task.prioridade !== 'baixa' && task.prioridade !== 'média' && task.prioridade !== 'alta') {
        return res.status(400).json({ error: 'Prioridade indefinida! Utilize apenas "baixa", "média" ou "alta' });
    }

    if(task.status !== 'aberto' && task.status !== 'em andamento') {
        return res.status(400).json({ error: 'Status indefinido! Utilize apenas "aberto" ou "em andamento"' });
    }

    const novaTask = await Task.create(task);
    return res.status(201).json(novaTask);
}

async function updateTask(req, res) {
    UpdateTaskMiddleware(req, res, async function(err) {
        if (err) {
            return res.status(500).json({ error: 'Erro interno na atualização.', details: err });
        }
        
        try {
            const task = req.task;
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({ error: 'Erro interno no controller.', details: error });
        }
    });
}

async function deleteTask(req, res) {
    const taskId = req.params.taskId;
    try {
        const task = await Task.findOne({taskId: taskId});
        if (!task) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }       
        if (task.status === 'finalizado') {
            await task.deleteOne({taskId: taskId});
            return res.status(200).json({ message: 'Tarefa deletada com sucesso!' });
        } else {
            return res.status(403).json({ error: 'A tarefa não pode ser deletada pois não está finalizada' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao deletar a tarefa' });
    }
}

export { getTask, getTaskByID, createTask, updateTask, deleteTask };