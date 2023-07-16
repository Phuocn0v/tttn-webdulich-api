import tourController from "../controller/tourController";
import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {
    const tours = await tourController.getAllTours();
    res.status(200).json(tours);
})

router.get('/:id', async (req, res) => {
    const tour = await tourController.getTourById(req.params.id);
    res.status(200).json(tour);
})

export default router;
