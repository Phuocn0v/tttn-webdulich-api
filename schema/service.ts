import mongoose from "mongoose";

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: mongoose.Schema.Types.String,
    price: mongoose.Schema.Types.Number,
    unitType: mongoose.Schema.Types.String,
    description: mongoose.Schema.Types.String,
});

const serviceSchema = mongoose.model("Service", schema);

export default serviceSchema;