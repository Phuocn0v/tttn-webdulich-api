import { Router } from "express";
import IRole from "../interface/role";
import roleController from "../controller/roleController";
import mongoose, { Schema, mongo } from "mongoose";
import schema from "../schema";

const roleRouter = Router();

roleRouter.get("/", async(req, res) => {
    const roles = await roleController.getAllRoles();
    res.status(200).json(roles);
})

roleRouter.post("/", async(req, res) => {
    const role: IRole = req.body;
    const newRole = await roleController.createRole(role);
    res.status(200).json(newRole);
});

roleRouter.get("/:id", async(req, res) => {
    const id = req.params.id;
    const role = await roleController.getRoleById(id);
    if (role) {
        res.status(200).json(role);
    } else {
        res.status(404).json({ message: "Role not found!" });
    }
});

export default roleRouter;
