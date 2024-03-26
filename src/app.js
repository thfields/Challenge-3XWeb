import express from 'express';
import router from './routes/TaskRoute.js';

const app = express();

app.use(router);



export default app;