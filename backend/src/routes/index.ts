import { Router } from "express";
import userRoutes from "./Auth.js";
import chatRoutes from "./chat-routes.js";

const appRouter = Router();

appRouter.use("/user", userRoutes);
appRouter.use('/chat' , chatRoutes)

export default appRouter;
