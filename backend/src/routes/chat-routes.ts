import { Router } from "express";
import { verifyToken } from "../utilis/token.js";
import { chatValidator, validate } from "../utilis/validator.js";
import { chatComplete } from "../controllers/chat-controller.js";

const chatRoutes = Router();

chatRoutes.post("/new", validate(chatValidator), verifyToken, chatComplete);

export default chatRoutes;
