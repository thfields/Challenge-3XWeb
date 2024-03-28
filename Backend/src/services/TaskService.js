import Task from '../models/TaskModel.js';

class TaskService {
    async find() {
        return await Task.find();
    }

    async findOne(taskId) {
        const task = await Task.findOne({taskId: taskId});
        if (!task) {
            throw new Error('Task não encontrada');
        }
        return task;
    }

    async create(task) {
        return await Task.create(task);
    }

    async update(taskId, task) {
        if (task.status === 'finalizado') {
            task.finalData = new Date();
        }
        return await Task.findOneAndUpdate({taskId: taskId}, task, { new: true });
    }

    async delete(taskId) {
        const task = await Task.findOne({ taskId: taskId });
        if (!task) {
            throw new Error('Tarefa não encontrada');
        }
        if (task.status !== 'finalizado') {
            throw new Error('A tarefa não pode ser deletada pois não está finalizada');
        }
        await Task.deleteOne({ taskId: taskId });
        return task;
    }
}

export default new TaskService();