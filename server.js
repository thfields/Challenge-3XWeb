import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor online em http://localhost:${PORT}`);
});