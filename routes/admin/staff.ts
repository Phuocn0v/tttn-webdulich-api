import { NextFunction, Router } from 'express';
import staffSchema from '../../schema/staff';
import staffController from '../../controller/staffController';
import IStaff from '../../interface/staff';
import serviceController from '../../controller/serviceController';


const staffRouter = Router();

staffRouter.get('/', async(req,res)=> {
    res.status(200).json({staff: await staffController.getAllStaff()})
})

staffRouter.get('/:id', async (req, res)=> {
    const staff = await staffSchema.findById(req.params.id)
    res.status(200).json({staff: staff})
})

staffRouter.post('/', async (req, res)=> {
    const staffData: IStaff = req.body
    await staffController.createStaff(staffData)
    res.status(200).json({message: "Creaete staff successfully!"})
})

staffRouter.put('/:id', async (req, res)=> {
    const staffData: IStaff = req.body
    const staff = await staffSchema.findById(req.params.id)
    if(staff === null) res.status(400).json({message: 'Staff is not existed!'})
    await staffSchema.findByIdAndUpdate(req.params.id, staffData)
    res.status(200).json({message: 'Update staff successfully!'})
})

staffRouter.delete('/:id', async (req, res)=> {
    const staff = await staffSchema.findById(req.params.id)
    if(staff === null) res.status(400).json({message: 'Staff is not existed!'})
    await staffSchema.findByIdAndDelete(req.params.id)
    res.status(200).json({message: 'Delete staff successfully!'})
})

export default staffRouter
