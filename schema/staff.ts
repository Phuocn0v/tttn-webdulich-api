import mongoose from "mongoose";

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    dateJoined: Date,
    username: String,
    password: String,
    roles: [String],
});

const staffSchema =  mongoose.model("Staff", schema);

export default staffSchema;
