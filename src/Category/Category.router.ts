import { Router } from "express";
import { authMiddleware } from "../middlewares/auth-middleware";
import { CategoryController } from "./Category.controller";

export const categoryRouter = Router();

categoryRouter.get("/category", CategoryController.getAllCategorys);
categoryRouter.get("/category/:id", CategoryController.getCategoryById);
categoryRouter.post(
	"/category",
	authMiddleware,
	CategoryController.addCategoryToJson,
);
categoryRouter.patch(
	"/category/:id",
	authMiddleware,
	CategoryController.updateDataCategory,
);
categoryRouter.delete(
	"/category/:id",
	authMiddleware,
	CategoryController.deleteCategory,
);
