import Task from '../models/TaskModel.js';
import UpdateTaskMiddleware from '../Middlewares/UpdateTaskMiddleware.js';

async function getTask(_, res) {
    const tasks = await Task.find();

    return res.status(200).json(tasks);
}

async function getTaskByID(req, res) {
    const id = req.params.id;
    try {
        const task = await Task.findById({_id: id});
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

    const novaTask = await Task.create(task);

    return res.status(201).json(novaTask);
}

async function updateTask(req, res) {
    UpdateTaskMiddleware(req, res, async function(err) {
        if (err) {
            // Tratar erros do middleware, se houver
            return res.status(500).json({ error: 'Erro interno na atualização', details: error });
        }
        
        try {
            const task = req.task;
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({ error: 'Erro interno no controller', details: error });
        }
    });
}

async function deleteTask(req, res) {
    const id = req.params.id;

    await Task.findByIdAndDelete({_id: id});

    return res.status(200).json( {res: "Task deletada com sucesso"});
}




export { getTask, getTaskByID, createTask, updateTask, deleteTask };