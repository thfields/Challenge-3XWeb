import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    
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

export default mongoose.model("Task", taskSchema);