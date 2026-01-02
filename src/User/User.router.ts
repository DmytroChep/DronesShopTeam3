import { Router } from "express"
import { UserController } from "./User.controller"
import { authMiddleware } from "../middlewares/auth-middleware"


export const userRouter = Router()

userRouter.post("/user/registration", UserController.registration)
userRouter.post("/user/login", UserController.login)
userRouter.get("/user/me", authMiddleware, UserController.me)
userRouter.patch("/user/:id", authMiddleware, UserController.updateUser)

userRouter.post("/user/adress", authMiddleware, UserController.createAdress)
userRouter.patch("/user/adress/:id", authMiddleware, UserController.updateDataAdress)
userRouter.delete("/user/adress/:id", authMiddleware, UserController.deleteAdress)
userRouter.get("/user/adress/:id", authMiddleware, UserController.getAdressById)

userRouter.post("/user/order", authMiddleware, UserController.createOrder)
userRouter.patch("/user/order/:id", authMiddleware, UserController.updateDataOrder)
userRouter.delete("/user/order/:id", authMiddleware, UserController.deleteOrder)
userRouter.get("/user/order/:id", authMiddleware, UserController.getOrderById)
