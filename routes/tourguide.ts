import tourguideController from "../controller/tourguideController";
import { Router } from "express";
import { ITourguide } from "../interface/tourguide";
import tourSchema from "../schema/tour";

const tourguideRouter = Router();

tourguideRouter.get("/", async (req, res) => {
    const tourguides = await tourguideController.getAllTourguides();
    res.status(200).json({tourguides: tourguides});
})

tourguideRouter.get("/:id", async (req, res) => {
    const tourguide = await tourguideController.getTourguide(req.params.id);
    if(tourguide == null) {res.status(404).json({message: "Tourguide not found"}); return;}
    res.status(200).json({tourguide: tourguide});
    return;
});

tourguideRouter.post("/", async (req, res) => {
    const tourguide:ITourguide = req.body;
    await tourguideController.createTourguide(tourguide);
    res.status(201).json({message: "Tourguide created"});
})

tourguideRouter.put("/:id", async (req, res) => {
    const tourguide:ITourguide = req.body;
    const tg = await tourSchema.findByIdAndUpdate(req.params.id, tourguide);
    if(tg == null) {res.status(404).json({message: "Tourguide not found"}); return;}
    res.status(200).json({message: "Tourguide updated"});
});

tourguideRouter.delete("/:id", async (req, res) => {
    const tg = await tourSchema.findByIdAndDelete(req.params.id);
    if(tg == null) {res.status(404).json({message: "Tourguide not found"}); return;}
    res.status(200).json({message: "Tourguide deleted"});
});

export default tourguideRouter;
