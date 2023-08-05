import mongoose from "mongoose";

export interface IBooking {
    _id?: mongoose.Types.ObjectId,
    customerId: mongoose.Types.ObjectId,
    tourId: mongoose.Types.ObjectId,
    bookingDate: Date,
    totalCost: Number,
    status: 'quotation' | 'confirmed' | 'cancelled' | 'completed',
    paymentMethod: String,
    paymentStatus: String,
    number: Number,
}