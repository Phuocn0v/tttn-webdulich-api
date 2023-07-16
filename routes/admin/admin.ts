import { Router } from "express";
import authAdminRouter from "./auth";
import roleRouter from "./role";
import driverRouter from "./driver";
import tourAdminRouter from "./tour";
import staffRouter from "./staff";
import serviceRouter from "../service";

const adminRouter = Router();

adminRouter.use("/auth", authAdminRouter);
adminRouter.get("/role", roleRouter);
adminRouter.use("/driver", driverRouter);
adminRouter.use("/tour", tourAdminRouter);
adminRouter.use("/staff", staffRouter);
adminRouter.use("/service", serviceRouter);

export default adminRouter;
