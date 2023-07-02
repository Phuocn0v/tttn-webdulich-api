import mongoose, { mongo } from "mongoose";
import IService from "../interface/service";
import serviceSchema from "../schema/service";

async function createService(params:IService) {
    const service = new serviceSchema({_id: new mongoose.Types.ObjectId(), ...params})
    await service.save()
    return service
}

async function findServiceById(id:string) {
    try {
        const service = await serviceSchema.findById(id)
        return service
    } catch (error) {
        return null
    }
}

export default {createService, findServiceById}