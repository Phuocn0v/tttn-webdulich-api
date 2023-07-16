import mongoose from "mongoose";

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    gender: String,
});

const tourguideSchema =  mongoose.model("Tourguide", schema);

export default tourguideSchema;
