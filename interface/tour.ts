import { IDriver } from "./driver";
import IService from "./service";
import { ITourguide } from "./tourguide";

export interface ICreateTour {
    _id?: string;
    name: string;
    startingPlace: string;
    duration: number;
    price: number;
    description: string;
    regulation: string;
    imageUrls: string[];
    serviceIds: string[];
    tourguideId: string;
    driverId: string;
    status: 'Planing' | 'Happening' | 'Canceled';
}