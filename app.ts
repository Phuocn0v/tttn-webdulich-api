import Express from 'express';
import bodyParser from 'body-parser';
import authRouter from './routes/auth';
import serviceRouter from './routes/service';
import roleRouter from './routes/admin/role';
import staffRouter from './routes/admin/staff';
import tourguideRouter from './routes/tourguide';
import driverRouter from './routes/admin/driver';
import adminRouter from './routes/admin/admin';
const app = Express();

app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/admin", adminRouter);

export default app;