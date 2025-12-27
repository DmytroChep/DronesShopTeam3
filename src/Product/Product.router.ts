import { Router } from "express"
import { ProductController } from "./Product.controller"
import { authMiddleware } from "../middlewares/auth-middleware"

export const productRouter = Router()

productRouter.get("/products", ProductController.getAllProducts)
productRouter.get("/products/:id", ProductController.getProductById)
productRouter.post("/products", authMiddleware, ProductController.addProductToJson)
productRouter.patch("/products/:id", authMiddleware, ProductController.updateDataProduct)
productRouter.delete("/products/:id", authMiddleware, ProductController.deleteProduct)