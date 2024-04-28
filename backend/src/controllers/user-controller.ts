import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../utilis/token.js";
import { COOKIE_NAME } from "../utilis/constants.js";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();
    return res.status(200).json({ message: "ok", users });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "error" });
  }
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const exitingUser = await User.findOne({ email });
    if (exitingUser) {
      return res.status(401).send("User with email already exist");
    }
    const hashedPassword = await hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    // create a token and store in the cookie
    res.clearCookie(COOKIE_NAME, {
      httpOnly: true,
      domain: "localhost",
      signed: true,
      path: "/",
    });

    const token = createToken(user._id.toString(), user.email, "7d");
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    res.cookie(COOKIE_NAME, token, {
      path: "/",
      domain: "localhost",
      expires,
      httpOnly: true,
      signed: true,
    });
    return res
      .status(201)
      .json({ message: "ok", name: user.name, email: user.email });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "error" });
  }
};

export const logIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).send("User not registered");
    }
    const passwordIsCorrect = await compare(password, user.password);
    if (!passwordIsCorrect) {
      return res.status(403).send("Password is incorrect ");
    }

    res.clearCookie(COOKIE_NAME, {
      httpOnly: true,
      domain: "localhost",
      signed: true,
      path: "/",
    });

    const token = createToken(user._id.toString(), user.email, "7d");
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    res.cookie(COOKIE_NAME, token, {
      path: "/",
      domain: "localhost",
      expires,
      httpOnly: true,
      signed: true,
    });
    return res
      .status(200)
      .json({ message: "ok", name: user.name, email: user.email });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "error" });
  }
};

export const checkAuth = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      res.status(401).send("User not registered");
    }
    console.log(user._id.toString() , res.locals.jwtData.id );
    
    if (user._id.toString() !== res.locals.jwtData.id) {
      res.status(401).send("Permissions didn't match");
    }
    return res
      .status(200)
      .json({ message: "ok", name: user.name, email: user.email });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "error" });
  }
};
