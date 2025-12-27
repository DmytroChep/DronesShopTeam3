import type {Request} from "express"
import type { ServiceContract } from "./Product.types"
import { writeFile } from "fs/promises"
import { ProductRepository } from "./Product.repository"



export const ProductService:ServiceContract = {
    getAllProducts: async () => {
        const filteredProducts = await ProductRepository.getAllProducts()
        return filteredProducts
    },

    getProductById: async (ProductId) => {
        const Product = await ProductRepository.getProductById(ProductId)

        return Product
    },
    addProductToJson: async (requestBody) => {
        const Product = await ProductRepository.addProductToJson(requestBody)
        return Product
    },
    updateDataProduct: async (ProductId, ProductData) => {
        const Product = await ProductRepository.updateDataProduct(ProductId, ProductData)
        return Product
    } ,
    deleteProduct: async (ProductId) => {
        const Product = await ProductRepository.deleteProduct(ProductId)
        return Product
    }
}

