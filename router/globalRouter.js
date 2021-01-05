import express from "express";
import routes from "../routes";
import { getHOME } from "../controller/homeController";
const globalRouter = express.Router();



globalRouter.get(routes.HOME, getHOME);

export default globalRouter;