import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: Schema.Types.String,
    startingPlace: Schema.Types.String,
    duration: Schema.Types.Number,
    price: Schema.Types.Number,
    description: Schema.Types.String,
    regulation: Schema.Types.String,
    imageUrls: [Schema.Types.String],
    services: [Schema.Types.ObjectId],
    tourguide: Schema.Types.ObjectId,
    driver: Schema.Types.ObjectId,
    status: Schema.Types.String,
});
const tourSchema = mongoose.model("Tour", schema);
export default tourSchema;
