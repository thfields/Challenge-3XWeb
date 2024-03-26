import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function dbConnect(){
    try {
       await mongoose.connect(process.env.URL_DATABASE)
        .then(() => console.log("Autenticação com o MongoDB realizada com sucesso!"))
        .catch((error) => console.error("Erro ao conectar ao banco de dados:", error));
    } catch (error) {
        console.error("Erro interno ao tentar conectar ao banco", error);
    }
}

export default dbConnect;
