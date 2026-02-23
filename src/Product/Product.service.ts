import { ProductRepository } from "./Product.repository";
import type { ServiceContract } from "./Product.types";

export const ProductService: ServiceContract = {
	getAllProducts: async () => {
		const filteredProducts = await ProductRepository.getAllProducts();
		return filteredProducts;
	},

	getProductById: async (ProductId) => {
		const Product = await ProductRepository.getProductById(ProductId);

		return Product;
	},
	addProductToJson: async (requestBody) => {
		const Product = await ProductRepository.addProductToJson(requestBody);
		return Product;
	},
	updateDataProduct: async (ProductId, ProductData) => {
		const Product = await ProductRepository.updateDataProduct(
			ProductId,
			ProductData,
		);
		return Product;
	},
	deleteProduct: async (ProductId) => {
		const Product = await ProductRepository.deleteProduct(ProductId);
		return Product;
	},
	getProductsSuggestions: async (
		skip,
		take,
		newFilter,
		popularFilter,
		sameAsFilter,
	) => {
		const numberSkip = Number(skip) || 0;
		const numberTake = Number(take) || 100;

		const boolNewFilter = String(newFilter) === "true";
		const boolPopularFilter = String(popularFilter) === "true";

		if (Number.isNaN(numberSkip) || Number.isNaN(numberTake)) {
			return "error";
		}

		let data = {};

		const filterCandidate = sameAsFilter ? String(sameAsFilter) : null;
		
		if (filterCandidate && typeof filterCandidate === "string") {
			try {
				const jsonMatch = filterCandidate.match(/\{.*\}/);
				
				if (jsonMatch) {
					let jsonString = jsonMatch[0];
					

					jsonString = jsonString.replace(/([{,])\s*([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');
					
					data = JSON.parse(jsonString);
				}
			} catch (e) {
				console.error("Ошибка парсинга фильтра:", e);
			}
		} else if (typeof sameAsFilter === "object" && sameAsFilter !== null) {
			data = sameAsFilter;
		}

		const filteredPosts = await ProductRepository.getProductsSuggestions(
			numberSkip,
			numberTake,
			boolNewFilter,
			boolPopularFilter,
			data,
		);

		return filteredPosts;
	},
};
