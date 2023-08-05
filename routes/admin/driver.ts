import { IDriver } from '../../interface/driver';
import { Router, NextFunction } from "express";
import driverController from "../../controller/driverController";
import driverSchema from "../../schema/driver";
import roleRequire from '../../middleware/roleRequire';

const driverRouter = Router();

driverRouter.get("/", async (req, res) => {
    const drivers = await driverController.getAllDrivers();
    res.status(200).json({ drivers: drivers });
});

driverRouter.get("/:id", async (req, res) => {
    const driver = await driverController.getDriver(req.params.id);
    if (driver == null) { res.status(404).json({ message: "Driver not found" }); return; }
    res.status(200).json({ driver: driver });
    return;
});

driverRouter.post("/", async (req, res) => {
    const driver: IDriver = req.body;
    await driverController.createDriver(driver);
    res.status(201).json({ message: "Driver created" });
}, (req, res, next) => {
    roleRequire.adminRequire();
    next();
});

driverRouter.put("/:id", async (req, res) => {
    const driver: IDriver = req.body;
    const dr = await driverSchema.findByIdAndUpdate(req.params.id, driver);
    if (dr == null) { res.status(404).json({ message: "Driver not found" }); return; }
    res.status(200).json({ message: "Driver updated" });
});

driverRouter.delete("/:id", async (req, res) => {
    const dr = await driverSchema.findByIdAndDelete(req.params.id);
    if (dr == null) { res.status(404).json({ message: "Driver not found" }); return; }
    res.status(200).json({ message: "Driver deleted" });
});

export default driverRouter;
