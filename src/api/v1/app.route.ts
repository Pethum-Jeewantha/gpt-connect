import {Router} from "express";
import chatRoute from "./routes/chat.route";

const appRouter: Router = Router();

appRouter.use("/chat", chatRoute);

export default appRouter;
