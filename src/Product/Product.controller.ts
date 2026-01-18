import type {Request, Response} from "express"
import {ProductService} from "./Product.service"
import type { ControllerContract } from "./Product.types.ts"

export const ProductController: ControllerContract = {
    getAllProducts: async (req, res) => {
        const response = await ProductService.getAllProducts()
        
        res.status(200).json(response)
    },
    getProductById: async (req, res) => {
        const ProductId = Number(req.params.id)

        const response = await ProductService.getProductById(ProductId)

        res.status(200).json(response)
    },
    addProductToJson: async (req, res) => {
        const requestBody = req.body

        const response = await ProductService.addProductToJson(requestBody)


        res.status(200).json(response)
    },
    updateDataProduct: async (req, res) => {
        const requestBody = req.body
        const ProductId = Number(req.params.id)
        
        const response = await ProductService.updateDataProduct(ProductId, requestBody)

        res.status(200).json(response)
    },
    deleteProduct: async (req, res) => {
        const ProductId = Number(req.params.id)
        
        const response = await ProductService.deleteProduct(ProductId)

        res.status(200).json(response)
    },
    getProductsSuggestions: async (req, res) => {
		const skip = Number(req.query.skip);
		const take = Number(req.query.take);
		const newFilter = Boolean(req.query.new);
        const popularFilter = Boolean(req.query.popular)

		const response = await ProductService.getProductsSuggestions(skip, take, newFilter, popularFilter);
        
		res.status(200).json(response);
	},
}

