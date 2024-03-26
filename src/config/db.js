import mongoose from "mongoose";

async function dbConnect(){
    try {
       await mongoose.connect("mongodb+srv://admin:admin@cluster0.6f3i2ax.mongodb.net/task?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => console.log("Autenticação com o MongoDB realizada com sucesso!"))
        .catch((error) => console.error("Erro ao conectar ao banco de dados:", error));
    } catch (error) {
        console.error("Erro interno ao tentar conectar ao banco", error);
    }
}

export default dbConnect;
