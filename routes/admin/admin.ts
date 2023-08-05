import { Router } from "express";
import authAdminRouter from "./auth";
import driverRouter from "./driver";
import tourAdminRouter from "./tour";
import staffRouter from "./staff";
import serviceRouter from "../service";
import roleRouter from "./role";

const adminRouter = Router();

adminRouter.use("/auth", authAdminRouter);
adminRouter.use("/driver", driverRouter);
adminRouter.use("/tour", tourAdminRouter);
adminRouter.use("/staff", staffRouter);
adminRouter.use("/service", serviceRouter);
adminRouter.use("/role", roleRouter);


export default adminRouter;
