import mongoose from "mongoose";

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
    email: mongoose.Schema.Types.String,
    firstName: mongoose.Schema.Types.String,
    lastnNme: mongoose.Schema.Types.String,
    role: [mongoose.Schema.Types.String],
});

const accountSchema = mongoose.model("Account", schema);

export default accountSchema;
