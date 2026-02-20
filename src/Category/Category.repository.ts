import { client } from "../config";
import { Prisma } from "../generated/prisma";
import type { RepositoryContract } from "./category.types";

export const CategoryRepository: RepositoryContract = {
	getAllCategorys: async () => {
		try {
			const Category = await client.category.findMany();

			return Category;
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2024") {
					return "error code P2024";
				}
			}
			throw error;
		}
	},
	getCategoryById: async (categoryId) => {
		try {
			const Category = client.category.findUnique({
				where: { id: categoryId },
			});

			return Category;
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2024") {
					return "error code P2024";
				}
			}
			throw error;
		}
	},
	addCategoryToJson: async (requestBody) => {
		try {
			console.log(requestBody);

			const Category = client.category.create({
				data: requestBody,
			});

			return Category;
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2024") {
					return "error code P2024";
				}
			}
			throw error;
		}
	},

	updateDataCategory: async (CategoryId, CategoryData) => {
		try {
			const Category = await client.category.update({
				where: {
					id: CategoryId,
				},
				data: CategoryData,
			});

			return Category;
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2024") {
					return "error code P2024";
				}
			}
			throw error;
		}
	},
	deleteCategory: async (CategoryId) => {
		try {
			const Category = await client.category.delete({
				where: { id: CategoryId },
			});
			console.log(Category);
			return Category;
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2024") {
					return "error code P2024";
				}
			}
			throw error;
		}
	},
};
