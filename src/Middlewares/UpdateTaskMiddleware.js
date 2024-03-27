import Task from '../models/TaskModel.js';

async function UpdateTaskMiddleware(req, res, next) {
    const taskId = req.params.taskId;
    const { titulo, descricao, prioridade, status } = req.body;

    try {
        let task = await Task.findOne({taskId: taskId});
        if (!task) {
            return res.status(404).json({ error: 'Task não encontrada' });
        }
        if (titulo) {
            task.titulo = titulo;
        }
        if (descricao) {
            task.descricao = descricao;
        }
        if (prioridade) {
            task.prioridade = prioridade;
        }
        if (status) {
            task.status = status;

            if (status === 'finalizado') {
                task.finalData = new Date();
            }
        }
        await task.save();
        req.task = task;
        next();
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao atualizar a task' });
    }
}

export default UpdateTaskMiddleware;