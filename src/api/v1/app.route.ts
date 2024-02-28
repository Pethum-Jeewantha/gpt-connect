import {Router} from "express";
import chatRoute from "./routes/chat.route";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../../swagger.json";

const appRouter: Router = Router();

appRouter.use("/app-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

appRouter.use("/chat", chatRoute);

export default appRouter;
