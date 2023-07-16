import mongoose from "mongoose";

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    vehicle: String,
    vehicleNumber: String,
    email: String,
    phoneNumber: String
});

const driverSchema = mongoose.model("driver", schema);
export default driverSchema;
