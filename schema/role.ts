import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: Schema.Types.String,
    description: Schema.Types.String,
});
const roleSchema = mongoose.model("Role", schema);
export default roleSchema;
