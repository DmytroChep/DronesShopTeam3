import { Router } from "express";
import { authMiddleware } from "../middlewares/auth-middleware";
import { suggestionsQueryMiddleware } from "../middlewares/suggestion-query-middleware";
import { ProductController } from "./Product.controller";

export const productRouter = Router();

productRouter.get("/products", ProductController.getAllProducts);
productRouter.get(
	"/products/suggestions",
	suggestionsQueryMiddleware,
	ProductController.getProductsSuggestions,
);
productRouter.get("/products/:id", ProductController.getProductById);
productRouter.post(
	"/products",
	authMiddleware,
	ProductController.addProductToJson,
);
productRouter.patch(
	"/products/:id",
	authMiddleware,
	ProductController.updateDataProduct,
);
productRouter.delete(
	"/products/:id",
	authMiddleware,
	ProductController.deleteProduct,
);
