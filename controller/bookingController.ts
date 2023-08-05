import { IBooking } from './../interface/booking';
import bookingSchema from './../schema/booking';
import mongoose from 'mongoose';

async function getAllBooking() {
    return await bookingSchema.find();
}

async function getBookingById(id: string) {
    return await bookingSchema.findById(id);
}

async function createBooking(booking: IBooking) {
    const newBooking = new bookingSchema({
        _id: new mongoose.Types.ObjectId,
        customerId: booking.customerId,
        tourId: booking.tourId,
        bookingDate: booking.bookingDate,
        totalCost: booking.totalCost,
        status: booking.status,
        paymentMethod: booking.paymentMethod,
        paymentStatus: booking.paymentStatus,
        number: booking.number,
    })
    newBooking.save();
}

async function updateStatusBooking(id: string, status: string) {
    const booking =  await bookingSchema.findById(id)
    if (booking === null) return false
    booking.status = status
    booking.save()
    
    return true
}

export default {getAllBooking, getBookingById, createBooking}
