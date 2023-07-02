import Express from 'express';
import bodyParser from 'body-parser';
import authRouter from './routes/auth';
import serviceRouter from './routes/service';
const app = Express();

app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/service", serviceRouter);

export default app;