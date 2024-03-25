import { Router } from "express";
import { getAllUsers, register } from "../controllers/user-controller.js";

const userRoutes = Router();

userRoutes.get("/users", getAllUsers);
userRoutes.post("/register",register );
export default userRoutes;
