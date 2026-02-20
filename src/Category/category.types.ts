import type { Request, Response } from "express";
import type { Prisma } from "../generated/prisma";

export type Category = Prisma.CategoryGetPayload<{}>;

export type CreateCategory = Prisma.CategoryUncheckedCreateInput;
export type CreateCategoryChecked = Prisma.CategoryCreateInput;

export type UpdateCategory = Prisma.CategoryUncheckedUpdateInput;
export type UpdateCategoryChecked = Prisma.CategoryUpdateInput;

export interface ControllerContract {
	getAllCategorys: (
		req: Request<object, Category[] | string, object>,
		res: Response<Category[] | string>,
	) => Promise<void>;
	getCategoryById: (
		req: Request<{ id: number }, Category | string | null, object>,
		res: Response<Category | string | null>,
	) => Promise<void>;
	addCategoryToJson: (
		req: Request<object, Category | string, Category>,
		res: Response<Category | string>,
	) => Promise<void>;
	updateDataCategory: (
		req: Request<{ id: number }, UpdateCategory | string, UpdateCategory>,
		res: Response<UpdateCategory | string>,
	) => Promise<void>;
	deleteCategory: (
		req: Request<{ id: number }, Category | string, Category>,
		res: Response<Category | string>,
	) => Promise<void>;
}

export interface ServiceContract {
	getAllCategorys: () => Promise<Category[] | string>;
	getCategoryById: (CategoryId: number) => Promise<Category | string | null>;
	addCategoryToJson: (
		requestBody: CreateCategory,
	) => Promise<Category | string>;
	updateDataCategory: (
		CategoryId: number,
		CategoryData: UpdateCategory,
	) => Promise<UpdateCategory | string>;
	deleteCategory: (CategoryId: number) => Promise<Category | string>;
}

export interface RepositoryContract {
	getAllCategorys: () => Promise<Category[] | string>;
	getCategoryById: (CategoryId: number) => Promise<Category | string | null>;
	addCategoryToJson: (
		requestBody: CreateCategory,
	) => Promise<Category | string>;
	updateDataCategory: (
		CategoryId: number,
		CategoryData: UpdateCategory,
	) => Promise<UpdateCategory | string>;
	deleteCategory: (CategoryId: number) => Promise<Category | string>;
}
