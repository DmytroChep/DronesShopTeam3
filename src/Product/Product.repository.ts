import path from "path";
import { client } from "../config/client";
import { Prisma } from "../generated/prisma/client";
import { getSimilarity } from "../utils";
import type {
	ProductWithTagsAndOrders,
	RepositoryContract,
} from "./Product.types";

export const jsonPathProducts = path.join(
	__dirname,
	"..",
	"..",
	"Products.json",
);

export const ProductRepository: RepositoryContract = {
	getAllProducts: async () => {
		try {
			const Products = await client.product.findMany();

			return Products;
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2024") {
					return "error code P2024";
				}
			}
			throw error;
		}
	},
	getProductById: async (ProductId) => {
		try {
			const product = await client.product.findUnique({
				where: { id: ProductId },
				include: { category: true }
			});

			if (!product) return "product Not Found";

			const categoryConfig = {
				drone: { descIds: [0, 2, 3], charId: 1, mapFirstId: false },
				monocular: { descIds: [4, 5, 6], charId: 2, mapFirstId: true }
			};

			const category = product.category[0]?.name === "monocular" ?  "monocular" : "drone"

			const config = categoryConfig[category];

			if (!config) return product;

			const [rawDescriptions, characteristic] = await Promise.all([
				client.productDescription.findMany({ where: { id: { in: config.descIds } } }),
				client.productCharacteristic.findMany({ where: { id: config.charId } })
			]);

			return {
				...product,
				productDescription: config.mapFirstId 
					? rawDescriptions.map((d, i) => i === 0 ? { ...d, id: 0 } : d)
					: rawDescriptions,
				ProductCharacteristic: characteristic
			};
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2024") {
					return "error code P2024";
				}
			}
			throw error;
		}
	},
	addProductToJson: async (requestBody) => {
		try {
			console.log(requestBody);

			const Product = client.product.create({
				data: requestBody,
			});

			return Product;
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2024") {
					return "error code P2024";
				}
			}
			throw error;
		}
	},

	updateDataProduct: async (ProductId, ProductData) => {
		try {
			const Product = await client.product.update({
				where: {
					id: ProductId,
				},
				data: ProductData,
			});

			return Product;
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2024") {
					return "error code P2024";
				}
			}
			throw error;
		}
	},
	deleteProduct: async (ProductId) => {
		try {
			const Product = await client.product.delete({
				where: { id: ProductId },
			});
			console.log(Product);
			return Product;
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2024") {
					return "error code P2024";
				}
			}
			throw error;
		}
	},
	getProductsSuggestions: async (
		skip,
		take,
		newFilter,
		popularFilter,
		sameAsFilter,
	) => {
		console.log(newFilter, popularFilter);
		try {
			const products = await client.product.findMany({
				take: take,
				include: {
					category: true,
					_count: {
						select: { orderProduct: true },
					},
				},
			});

			let filteredPosts: ProductWithTagsAndOrders[] = products.slice(
				skip,
				take + skip,
			);

			if (newFilter) {
				filteredPosts = filteredPosts.sort(
					(product1, product2) =>
						product1.creationDate.getDate() - product2.creationDate.getDate(),
				);
			}

			if (popularFilter) {
				filteredPosts = filteredPosts.sort(
					(product1, product2) =>
						product1._count.orderProduct - product2._count.orderProduct,
				);
			}

			if (sameAsFilter) {
				console.log(sameAsFilter);
				const { name, categories, price, limit } = sameAsFilter;

				const postsWithoutMain = filteredPosts.filter((currentProduct) => {
					return name !== currentProduct.title;
				});

				if (name) {
					console.log("wcqkipvw");
					filteredPosts = postsWithoutMain.sort(
						(drone1, drone2) =>
							getSimilarity(drone2.title, name) -
							getSimilarity(drone1.title, name),
					);
					console.log(filteredPosts);
				}

				if (price) {
					filteredPosts = postsWithoutMain.filter((product) => {
						return (
							product.price >= price.price - price.deviation &&
							product.price <= price.price + price.deviation
						);
					});
				}
				if (categories) {
					filteredPosts = postsWithoutMain.filter((product) => {
						return categories.some((category) => {
							return product.category.some((item) => item.id === category.id);
						});
					});
				}

				if (limit) {
					filteredPosts = filteredPosts.slice(0, limit);
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
};
