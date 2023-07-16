import mongoose from "mongoose";

export interface ITourguide {
    _id: mongoose.Schema.Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    gender: 'male' | 'female';
}