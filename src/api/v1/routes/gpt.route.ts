import {Router} from "express";
import GptController from "../controllers/gpt.controller";

const gptRoute: Router = Router();
const controller = new GptController();

gptRoute.post('/', controller.createRequest);

export default gptRoute;
