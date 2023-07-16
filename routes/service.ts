import { NextFunction, Router } from 'express';
import IService from '../interface/service';
import serviceSchema from '../schema/service';
import serviceController from '../controller/serviceController';
import roleRequire from '../middleware/roleRequire';

const serviceRouter = Router()

serviceRouter.get('/', async (req, res) => {
    res.status(200).json({ services: await serviceSchema.find()})
})

serviceRouter.get('/:id', async (req, res) => {
    const sv = await serviceController.findServiceById(req.params.id)
    res.status(200).json({ service: sv })
})

export default serviceRouter
