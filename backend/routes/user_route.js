import { Router } from "express";
import {
  addDog,
  deleteDog,
  getHomePage,
} from "../controllers/user_controller.js";

export const userRouter = Router();

userRouter.get("/", getHomePage);

userRouter.get("/api/dogs");

userRouter.post("/api/dogs", addDog);

userRouter.delete("/api/dogs/:id", deleteDog);
