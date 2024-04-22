import express from "express";

import { addVentaController} from "../dependencies/dependencies";

export const ventaRouter= express.Router();

ventaRouter.post("/", addVentaController.run.bind(addVentaController))