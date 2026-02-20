import { Router } from "express";
import { authMiddleware } from "../middlewares/auth-middleware";
import { UserController } from "./User.controller";

export const userRouter = Router();

userRouter.post("/user/registration", UserController.registration);
userRouter.post("/user/login", UserController.login);
userRouter.get("/user/me", authMiddleware, UserController.me);
userRouter.patch("/user/:id", authMiddleware, UserController.updateUser);
userRouter.get(
	"/user/getUser/:id",
	authMiddleware,
	UserController.getUserWithRelations,
);

userRouter.post("/user/adress", authMiddleware, UserController.createAdress);
userRouter.patch(
	"/user/adress/:id",
	authMiddleware,
	UserController.updateDataAdress,
);
userRouter.delete(
	"/user/adress/:id",
	authMiddleware,
	UserController.deleteAdress,
);
userRouter.get(
	"/user/adress/:id",
	authMiddleware,
	UserController.getAdressById,
);

userRouter.post("/user/order", authMiddleware, UserController.createOrder);
userRouter.patch(
	"/user/order/:id",
	authMiddleware,
	UserController.updateDataOrder,
);
userRouter.delete(
	"/user/order/:id",
	authMiddleware,
	UserController.cancelOrder,
);
userRouter.get("/user/order/:id", authMiddleware, UserController.getOrderById);

userRouter.get("/user/sendCode", UserController.sendCodeVerify);
