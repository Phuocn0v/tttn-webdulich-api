import Express from 'express';
import bodyParser from 'body-parser';
import authRouter from './routes/auth';
const app = Express();

app.use(bodyParser.json());

app.use("/auth", authRouter);

export default app;