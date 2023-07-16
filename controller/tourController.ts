import tourSchema from "../schema/tour";
import driverSchema from "../schema/driver";
import tourguideSchema from "../schema/tourguide";
import serviceSchema from "../schema/service";
import mongoose from "mongoose";
import { ICreateTour } from "../interface/tour";

async function getAllTours() {
    return await tourSchema.find();
}

async function getTourById(id: string) {
    return await tourSchema.findById(id);   
}

async function createTour(tour: ICreateTour) {
    // find driver
    const driver = await driverSchema.findById(tour.driverId);
    if (!driver) { throw new Error('Driver not found'); }
    // find tourguide
    const tourguide = await tourguideSchema.findById(tour.tourguideId);
    if (!tourguide) { throw new Error('Tourguide not found'); }
    // find services
    const services = await serviceSchema.find({ _id: { $in: tour.serviceIds } });
    if (services.length !== tour.serviceIds.length) { throw new Error('Service not found'); }
    // create tour
    const newTour = new tourSchema({
        _id: tour._id? tour._id : new mongoose.Types.ObjectId(), 
        name: tour.name,
        startingPlace: tour.startingPlace,
        duration: tour.duration,
        price: tour.price,
        description: tour.description,
        regulation: tour.regulation,
        imageUrls: tour.imageUrls,
        services: services.map(service => service._id),
        tourguide: tourguide._id,
        driver: driver._id,
        status: 'Planing',
    })

    return await newTour.save();
}

async function updateTour(id: string, tour: ICreateTour) {
    const currentTour = await tourSchema.findById(id);
    if(!currentTour) { throw new Error('Tour not found'); }
    // find driver
    const driver = await driverSchema.findById(tour.driverId);
    if (!driver) { throw new Error('Driver not found'); }
    // find tourguide
    const tourguide = await tourguideSchema.findById(tour.tourguideId);
    if (!tourguide) { throw new Error('Tourguide not found'); }
    // find services
    const services = await serviceSchema.find({ _id: { $in: tour.serviceIds } });
    if (services.length !== tour.serviceIds.length) { throw new Error('Service not found'); }
    // update tour
    currentTour.name = tour.name;
    currentTour.startingPlace = tour.startingPlace;
    currentTour.duration = tour.duration;
    currentTour.price = tour.price;
    currentTour.description = tour.description;
    currentTour.regulation = tour.regulation;
    currentTour.imageUrls = tour.imageUrls;
    currentTour.services = services.map(service => service._id);
    currentTour.tourguide = tourguide._id;
    currentTour.driver = driver._id;
    currentTour.status = tour.status;
    
    return await currentTour.save();
}

async function updateTourStatus(id: string, status: string) {
    const tour = await tourSchema.findById(id);
    if(!tour) { throw new Error('Tour not found'); }
    tour.status = status;
    return await tour.save();
}

async function deleteTour(id: string) {
    return await tourSchema.findByIdAndDelete(id);
}

export default {getAllTours, getTourById, createTour, updateTour, updateTourStatus, deleteTour};
