import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    description: String,
});

const roleSchema = mongoose.model("role", schema);
export default roleSchema;