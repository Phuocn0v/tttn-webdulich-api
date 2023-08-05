import { NextFunction, Router } from 'express';
import IService from '../../interface/service';
import serviceSchema from '../../schema/service';
import serviceController from '../../controller/serviceController';
import roleRequire from '../../middleware/roleRequire';

const serviceRouter = Router()

serviceRouter.use(roleRequire(["admin"]))

serviceRouter.get('/', async (req, res) => {
    res.status(200).json({ services: await serviceSchema.find()})
})

serviceRouter.get('/:id', async (req, res) => {
    const sv = await serviceController.findServiceById(req.params.id)
    res.status(200).json({ service: sv })
})

serviceRouter.post('/', async (req, res) => {
    const serviceData: IService = req.body
    await serviceController.createService(serviceData)
    res.status(200).json({ message: "Create service successfully!" })
});

serviceRouter.put('/:id', async (req, res) => {
    const serviceData: IService = req.body
    const service = await serviceController.findServiceById(req.params.id)
    if (service === null) {
        res.status(400).json({ message: "Service is not existed!" })
        return
    }
    await serviceSchema.findByIdAndUpdate(req.params.id, serviceData)
    res.status(200).json({ message: "Update service successfully!" })
})

serviceRouter.delete('/:id', async (req, res) => {
    const service = await serviceController.findServiceById(req.params.id)
    if (service === null) {
        res.status(400).json({ message: "Service is not existed!" })
        return
    }
    await serviceSchema.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "Delete service successfully!" })
})

export default serviceRouter
