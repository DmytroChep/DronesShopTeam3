import { CategoryRepository } from "./Category.repository";
import type { ServiceContract } from "./category.types";

export const CategoryService: ServiceContract = {
	getAllCategorys: async () => {
		const filteredCategorys = await CategoryRepository.getAllCategorys();
		return filteredCategorys;
	},

	getCategoryById: async (CategoryId) => {
		const Category = await CategoryRepository.getCategoryById(CategoryId);

		return Category;
	},
	addCategoryToJson: async (requestBody) => {
		const Category = await CategoryRepository.addCategoryToJson(requestBody);
		return Category;
	},
	updateDataCategory: async (CategoryId, CategoryData) => {
		const Category = await CategoryRepository.updateDataCategory(
			CategoryId,
			CategoryData,
		);
		return Category;
	},
	deleteCategory: async (CategoryId) => {
		const Category = await CategoryRepository.deleteCategory(CategoryId);
		return Category;
	},
};
