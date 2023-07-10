import IRole from "../interface/role";
import roleSchema from "../schema/role";
import mongoose, { Schema } from "mongoose";

async function getAllRoles() {
    return await roleSchema.find();
}

async function getRoleById(id: string) {
    return await roleSchema.findById(id);
}

async function createRole(role: IRole) {
    const newRole = new roleSchema({
        _id: new mongoose.Types.ObjectId(),
        name: role.name,
        description: role.description,
    });
    return await roleSchema.create(newRole);
}

async function updateRole(id: string, role: any) {
    const foundrole = await roleSchema.findById(id);
    if (foundrole) {
        return await roleSchema.findByIdAndUpdate(id, role);
    }
    return null;
}

async function deleteRole(id: Schema.Types.ObjectId) {
    const foundrole = await roleSchema.findById(id);
    if (foundrole) {
        return await roleSchema.findOneAndRemove(id);
    }
    return null;
}

export default {getAllRoles, getRoleById, createRole, updateRole, deleteRole}
