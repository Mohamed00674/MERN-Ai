import { Router } from "express";
import { verifyToken } from "../utilis/token.js";

const chatRoutes = Router();

 chatRoutes.post("/new" , verifyToken )

 export default chatRoutes
