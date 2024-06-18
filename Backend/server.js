import app from "./src/app.js";
import dbConnect from './src/config/db.js';

const PORT = 'https://tasklist-nodejs.onrender.com/';

dbConnect()
    .then(() => console.log("Conectado ao MongoDB!"))
    .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Servidor online em https://tasklist-nodejs.onrender.com/`);
});