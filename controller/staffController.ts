import IStaff from "../interface/staff";
import staffSchema from "../schema/staff";
import mongoose from "mongoose";

async function getAllStaff() {
    return await staffSchema.find();
}

async function getStaffById(id: string) {
    return await staffSchema.findById(id);
}

async function createStaff(staff: IStaff) {
    const newStaff = new staffSchema({
        _id: new mongoose.Types.ObjectId,
        firstName: staff.firstName,
        lastName: staff.lastName,
        email: staff.email,
        phoneNumber: staff.phoneNumber,
        username: staff.username,
        password: staff.password,
        dateJoined: Date.now(),
    })
    newStaff.save();
}

async function updateStaff(id: string) {
    return await staffSchema.findById(id)
}

export default {getAllStaff, getStaffById, createStaff, updateStaff}
