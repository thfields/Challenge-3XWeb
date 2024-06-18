import express from 'express';
import routes from './routes/TaskRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173' // substitua por seu próprio domínio
}));
app.use(routes);

export default app;