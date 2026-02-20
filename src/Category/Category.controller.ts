import { CategoryService } from "./Category.service";
import type { ControllerContract } from "./category.types";

export const CategoryController: ControllerContract = {
	getAllCategorys: async (req, res) => {
		const response = await CategoryService.getAllCategorys();

		res.status(200).json(response);
	},
	getCategoryById: async (req, res) => {
		const CategoryId = Number(req.params.id);

		const response = await CategoryService.getCategoryById(CategoryId);

		res.status(200).json(response);
	},
	addCategoryToJson: async (req, res) => {
		const requestBody = req.body;

		const response = await CategoryService.addCategoryToJson(requestBody);

		res.status(200).json(response);
	},
	updateDataCategory: async (req, res) => {
		const requestBody = req.body;
		const CategoryId = Number(req.params.id);

		const response = await CategoryService.updateDataCategory(
			CategoryId,
			requestBody,
		);

		res.status(200).json(response);
	},
	deleteCategory: async (req, res) => {
		const CategoryId = Number(req.params.id);

		const response = await CategoryService.deleteCategory(CategoryId);

		res.status(200).json(response);
	},
};
