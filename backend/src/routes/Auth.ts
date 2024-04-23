import { Router } from "express";
import { getAllUsers, logIn, register } from "../controllers/user-controller.js";
import { validate, registerValidator, loginValidator } from "../utilis/validator.js";

const userRoutes = Router();

userRoutes.get("/users", getAllUsers);
userRoutes.post("/register", validate(registerValidator), register);
userRoutes.post("/login", validate(loginValidator), logIn)
userRoutes.get("/auth-status", logIn);






export default userRoutes;
