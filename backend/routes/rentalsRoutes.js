import express from 'express'
import {
    getRentals,
    createRental,
    deleteRental,
} from "../controllers/rentalsController.js"

const rentalsRouter = express.Router();

rentalsRouter.get('/rentals', getRentals);

rentalsRouter.post('/rentals', createRental);

rentalsRouter.delete('/rentals/:id', deleteRental);

export default rentalsRouter;