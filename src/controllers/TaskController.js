import Task from '../models/TaskModel.js';

async function getTask(req, res) {
    const tasks = await Task.find();

    return res.status(200).json(tasks);
}

async function createTask(req, res) {
    const task = req.body;

    const novaTask = await Task.create(task);

    return res.status(201).json(novaTask);
}

async function deleteTask(req, res) {
    const id = req.params.id;

    await Task.findByIdAndDelete({_id: id});

    return res.status(200).json( {res: "Task deletada com sucesso"});
}

// async function getTaskById(req, res) {
//     res.send('getTaskById');
    
// }

// async function updateTask(req, res) {
//   res.send('updateTask');
// }



export { getTask, createTask, deleteTask };