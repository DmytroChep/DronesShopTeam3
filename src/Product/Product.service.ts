import type {Request} from "express"
import type { ServiceContract } from "./Product.types"
import { writeFile } from "fs/promises"
import { ProductRepository } from "./Product.repository"
import { client } from "../config"



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
    },
    getProductsSuggestions: async (skip, take, newFilter, popularFilter, sameAsFilter) => {
		let numberSkip = Number(skip);
		let numberTake = Number(take);
		let boolNewFilter = Boolean(newFilter);
        let boolPopularFilter = Boolean(popularFilter)
		let objSameAsFilter = Object(sameAsFilter)

		if (!skip) {
			numberSkip = 0;
		}
		if (!take) {
			numberTake = (await client.product.findMany()).length;
		}
		if (!boolNewFilter) {
			boolNewFilter = false;
		}

        if (!boolPopularFilter) {
            boolPopularFilter = false
        }

		if (!objSameAsFilter) {
			objSameAsFilter = null
		}

		if (isNaN(numberSkip)) {
			return "error";
		}
		if (isNaN(numberTake)) {
			return "error";
		}
		if (!(typeof boolNewFilter === "boolean")) {
			return "error";
		}

        if (!(typeof boolPopularFilter === "boolean")) {
			return "error";
		}

		if (!(typeof objSameAsFilter === "object")) {
			return "error";
		}

		const rawString = objSameAsFilter;

		const jsonLike = rawString.match(/\{.*\}/)[0];

		const fixedJson = jsonLike.replace(/([{,])\s*([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');

		const data = JSON.parse(fixedJson);

		const filteredPosts = await ProductRepository.getProductsSuggestions(
			numberSkip,
			numberTake,
			boolNewFilter,
            boolPopularFilter,
			data
		);
		return filteredPosts;
	},
}

