import {Router} from "express";
import gptRoute from "./routes/gpt.route";

const appRouter: Router = Router();

appRouter.use("/gpt", gptRoute);

export default appRouter;
