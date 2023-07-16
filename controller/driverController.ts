import { IDriver } from './../interface/driver';
import driverSchema from './../schema/driver';
import mongoose from "mongoose";

async function getAllDrivers() {
    return await driverSchema.find();
}

async function getDriver(id: string) {
    return await driverSchema.findById(id);
}

async function createDriver(driver: IDriver) {
    const newDriver = new driverSchema({
        _id: new mongoose.Types.ObjectId,
        firstName: driver.firstName,
        lastName: driver.lastName,
        vehicle: driver.vehicle,
        vehicleNumber: driver.vehicleNumber,
        email: driver.email,
        phoneNumber: driver.phoneNumber
    })
    return newDriver.save();
}


export default {getAllDrivers, getDriver, createDriver}