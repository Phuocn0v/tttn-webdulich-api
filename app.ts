import Express from 'express';
import bodyParser from 'body-parser';
import authRouter from './routes/auth';
import serviceRouter from './routes/service';
import roleRouter from './routes/role';
import staffRouter from './routes/staff';
import tourguideRouter from './routes/tourguide';
import driverRouter from './routes/driver';
const app = Express();

app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/service", serviceRouter);
app.use("/role", roleRouter);
app.use("/staff", staffRouter);
app.use("/tourguide", tourguideRouter);
app.use("/driver", driverRouter);


export default app;