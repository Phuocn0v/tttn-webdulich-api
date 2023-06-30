import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: Schema.Types.String,
    startingPlace: Schema.Types.String,
    duration: Schema.Types.Number,
    vehicle: Schema.Types.String,
    price: Schema.Types.Number,
    description: Schema.Types.String,
    regulation: Schema.Types.String,
    imageUrls: [Schema.Types.String],
    services: [Schema.Types.Subdocument]
});
const tourSchema = mongoose.model("Tour", schema);
export default tourSchema;
