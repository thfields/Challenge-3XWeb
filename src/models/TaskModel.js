import mongoose from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const taskSchema = new mongoose.Schema({
    taskId: Number,
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    prioridade: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    createData: {
        type: Date,
        default: Date.now()
    },
    finalData: {
        type: Date
    }
   
});

taskSchema.plugin(AutoIncrement, {inc_field: 'taskId'});

export default mongoose.model("Task", taskSchema);