import path from "path"
import {readFileSync} from "fs"
import {writeFile} from "fs/promises"
import { client } from "../config/client"
import { Prisma } from "../generated/prisma/client";
import type { RepositoryContract } from "./Product.types";

export const jsonPathProducts = path.join(__dirname, "..", "..","Products.json")

export const  ProductRepository:RepositoryContract = {
    getAllProducts: async () => {
        try{
    
            const Products = await client.product.findMany()
            

            return Products
        }catch(error){
            // if (error instanceof Prisma.PrismaClientKnownRequestError){
            //     if (error.code === "P2024"){
            //         return "error code P2024"
            //     }
            // }
            throw error
        }
    },
    getProductById: async (ProductId) => { 
    try{ 
        const Product =  client.product.findUnique({
            where: {id: ProductId}
        })

        return Product
    }catch(error){
            // if (error instanceof Prisma.PrismaClientKnownRequestError){
            //     if (error.code === "P2024"){
            //         return "error code P2024"
            //     }
            // }
            throw error
        }
    },
    addProductToJson: async (requestBody) => {
        try{
            console.log(requestBody)
    
            const Product = client.product.create({
                data: requestBody
            })
    
            return Product
        }catch(error){
            // if (error instanceof Prisma.PrismaClientKnownRequestError){
            //     if (error.code === "P2024"){
            //         return "error code P2024"
            //     }
            // }
            throw error
        }
    },

    updateDataProduct: async (ProductId, ProductData) => {
        try{
            const Product = await client.product.update({
                where: {
                    id: ProductId, 
                },
                data: ProductData
            })
    
            
            return Product
        }catch(error){
            // if (error instanceof Prisma.PrismaClientKnownRequestError){
            //     if (error.code === "P2024"){
            //         return "error code P2024"
            //     }
            // }
            throw error
        }
        
    },
    deleteProduct: async (ProductId) => {
        try{
            const Product = await client.product.delete(
                {
                    where: {id: ProductId}
                }
            )
            console.log(Product)
            return Product
        }catch(error){
            // if (error instanceof Prisma.PrismaClientKnownRequestError){
            //     if (error.code === "P2024"){
            //         return "error code P2024"
            //     }
            // }
            throw error
        }
    },
}
