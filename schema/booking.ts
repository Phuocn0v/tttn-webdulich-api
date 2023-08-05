import mongoose from "mongoose";

const schema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    customerId: mongoose.Types.ObjectId,
    tourId: mongoose.Types.ObjectId,
    bookingDate: Date,
    totalCost: Number,
    status: String,
    paymentMethod: String,
    paymentStatus: String,
    number: Number,
});

const bookingSchema = mongoose.model("booking", schema);
export default bookingSchema;
