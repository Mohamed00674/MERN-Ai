import { Router } from "express";
import {
  getAllUsers,
  logIn,
  register,
  checkAuth,
} from "../controllers/user-controller.js";
import { validate, registerValidator, loginValidator } from "../utilis/validator.js";
import { verifyToken } from "../utilis/token.js";

const userRoutes = Router();

userRoutes.get("/users", getAllUsers);
userRoutes.post("/register", validate(registerValidator), register);
userRoutes.post("/login", validate(loginValidator), logIn)
userRoutes.get("/auth-status", verifyToken, checkAuth);






export default userRoutes;
