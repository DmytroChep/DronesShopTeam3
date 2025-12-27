import type { Request, Response } from "express";
import { Prisma } from "../generated/prisma/client";


export type Product = Prisma.ProductGetPayload<{}>;
export type ProductWithTags = Prisma.ProductGetPayload<{include: {category: true}}>;

export type CreateProduct = Prisma.ProductUncheckedCreateInput;
export type CreateProductChecked = Prisma.ProductCreateInput;

export type UpdateProduct = Prisma.ProductUncheckedUpdateInput;
export type UpdateProductChecked = Prisma.ProductUpdateInput;


export type CreateProductData = Omit<Product, "id">

export type UpdateProductData = Partial<Omit<Product, "id">>    


export interface ControllerContract {
    getAllProducts: (req: Request<object, Product[]|string, object>, res: Response<Product[]|string>)=> Promise<void>;
    getProductById: (req: Request<{id:number}, Product|string|null, object>, res: Response<Product|string|null>)=> Promise<void>;
    addProductToJson: (req: Request<object, Product|string, Product>, res: Response<Product|string>)=> Promise<void>;
    updateDataProduct: (req: Request<{id:number}, UpdateProduct|string, UpdateProduct>, res: Response<UpdateProduct|string>)=> Promise<void>;
    deleteProduct: (req: Request<{id:number}, Product|string, Product>, res: Response<Product|string>)=> Promise<void>;
}

export interface ServiceContract {
    getAllProducts: () => Promise<Product[]|string>,
    getProductById: (ProductId: number) => Promise<Product|string|null>,
    addProductToJson: (requestBody: CreateProduct) => Promise<Product|string>,
    updateDataProduct: (ProductId:number, ProductData: UpdateProduct) => Promise<UpdateProduct|string>,
    deleteProduct: (ProductId:number) => Promise<Product|string>,
}

export interface RepositoryContract {
    getAllProducts: () => Promise<Product[]|string>,
    getProductById: (ProductId: number) => Promise<Product|string|null>,
    addProductToJson: (requestBody: CreateProduct) => Promise<Product|string>,
    updateDataProduct: (ProductId:number, ProductData: UpdateProduct) => Promise<UpdateProduct|string>,
    deleteProduct: (ProductId:number) => Promise<Product|string>,
}