import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationsController } from "../modules/cars/useCases/createSpecification/CreateSpecificationsController";

const specificationRoutes = Router();

const createSpecificationsController = new CreateSpecificationsController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/", createSpecificationsController.handle);

export { specificationRoutes };