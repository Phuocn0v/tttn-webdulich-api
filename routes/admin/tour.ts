import tourController from "../../controller/tourController";
import { Router } from "express";
import { ICreateTour } from "../../interface/tour";

const tourAdminRouter = Router();

tourAdminRouter.get('/', async (req, res) => {
    const tours = await tourController.getAllTours();
    res.status(200).json(tours);
})

tourAdminRouter.get('/:id', async (req, res) => {
    const tour = await tourController.getTourById(req.params.id);
    res.status(200).json(tour);
})

tourAdminRouter.post('/', async (req, res) => {
    const tourData: ICreateTour = req.body;
    const tour = await tourController.createTour(tourData);
    res.status(200).json(tour);
})

tourAdminRouter.put('/:id', async (req, res) => {
    const tour = await tourController.updateTour(req.params.id, req.body);
    res.status(200).json(tour);
})

tourAdminRouter.delete('/:id', async (req, res) => {
    const tour = await tourController.deleteTour(req.params.id);
    res.status(200).json(tour);
})

tourAdminRouter.put('/:id/update_status', async (req, res) => {
    const tour = await tourController.updateTourStatus(req.params.id, req.body.status);
    res.status(200).json(tour);    
})

export default tourAdminRouter;
