import { Router } from "express";
import roleSchema from "../../schema/role";

const roleRouter = Router();

roleRouter.get("/", async (req, res) => {
    const roles = await roleSchema.find();
    res.status(200).json(roles);
});

export default roleRouter;
