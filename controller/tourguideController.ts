import { ITourguide } from "../interface/tourguide";
import tourguideSchema from "../schema/tourguide";
import mongoose from "mongoose";

async function getAllTourguides() {
    return await tourguideSchema.find();
}

async function getTourguide(id: string) {
    return await tourguideSchema.findById(id);
}

async function createTourguide(tourguide: ITourguide) {
    const newTourguide = new tourguideSchema({
        _id: new mongoose.Types.ObjectId,
        firstName: tourguide.firstName,
        lastName: tourguide.lastName,
        email: tourguide.email,
        phoneNumber: tourguide.phoneNumber,
        gender : tourguide.gender
    })
    
    newTourguide.save();
}

export default {getAllTourguides, getTourguide, createTourguide}
