import Express from 'express';
import bodyParser from 'body-parser';
import authRouter from './routes/auth';
import serviceRouter from './routes/service';
import roleRouter from './routes/role';
const app = Express();

app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/service", serviceRouter);
app.use("/role", roleRouter);

export default app;