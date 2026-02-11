import path from "path"
import {readFileSync} from "fs"
import {writeFile} from "fs/promises"
import { client } from "../config/client"
import { Prisma } from "../generated/prisma/client";
import type { ProductWithTags, ProductWithTagsAndOrders, RepositoryContract } from "./Product.types";
import { getSimilarity } from "../utils";

export const jsonPathProducts = path.join(__dirname, "..", "..","Products.json")

export const  ProductRepository:RepositoryContract = {
    getAllProducts: async () => {
        try{
    
            const Products = await client.product.findMany()
            

            return Products
        }catch(error){
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code === "P2024"){
                    return "error code P2024"
                }
            }
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
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code === "P2024"){
                    return "error code P2024"
                }
            }
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
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code === "P2024"){
                    return "error code P2024"
                }
            }
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
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code === "P2024"){
                    return "error code P2024"
                }
            }
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
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code === "P2024"){
                    return "error code P2024"
                }
            }
            throw error
        }
    },
    getProductsSuggestions: async (skip, take, newFilter, popularFilter, sameAsFilter) => {
        console.log(newFilter, popularFilter)
		try {
			const products = await client.product.findMany({
				take: take,
				include: { category: true ,
                    _count: {
                        select: { orderProduct: true },
                    },
                },
			});

            

			let filteredPosts: ProductWithTagsAndOrders[] = products.slice(skip, take + skip);


			if (newFilter) {
				filteredPosts = filteredPosts.sort((product1, product2) => product1.creationDate.getDate() - product2.creationDate.getDate())

			}

            if (popularFilter){
                filteredPosts = filteredPosts.sort((product1, product2) => product1._count.orderProduct - product2._count.orderProduct)
            }

            if (sameAsFilter){
                const {name, categories, price, limit} = sameAsFilter

                const postsWithoutMain = filteredPosts.filter((currentProduct) => {
                    return name != currentProduct.title
                })

                if (name) {
                    filteredPosts = postsWithoutMain.sort((drone1, drone2) => getSimilarity(drone2.title, name) - getSimilarity(drone1.title, name));
                }

                if (price){
                    filteredPosts = postsWithoutMain.filter((product) => {
                        return product.price >= price.price - price.deviation && product.price <= price.price + price.deviation
                    })
                }
                console.log("weniwepinweb", categories)
                if (categories){
                    filteredPosts = postsWithoutMain.filter((product) => {
                        console.log(product.category)
                        return categories.some(category => {
                            return product.category.some(item => item.id === category.id)
                        }); 
                    })
                }

                if (limit) {
                    filteredPosts = filteredPosts.slice(0, limit)
                }
            }

			return filteredPosts;
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2024") {
					return "error code P2024";
				}
			}
			throw error;
		}
	},
}
