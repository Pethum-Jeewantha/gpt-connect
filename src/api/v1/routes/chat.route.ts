import {Router} from "express";
import ChatController from "../controllers/chat.controller";

const chatRoute: Router = Router();
const controller = new ChatController();

chatRoute.post('/', controller.createRequest);

export default chatRoute;
