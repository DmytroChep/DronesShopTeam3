import { response } from "express"
import { UserService } from "./User.service"
import type { ControllerContract } from "./User.types"

export const UserController: ControllerContract = {
    registration: async (req, res) => {
        const body = req.body
        
        const response = await UserService.registration(body)

        if (typeof response === "string"){
            res.status(400).json(response)
            return
        }

        res.status(200).json(response)
    },
    login: async (req, res) => {
        const body = req.body
        
        const response = await UserService.login(body)

        if (typeof response === "string"){
            res.status(400).json(response)
            return
        }

        res.status(200).json(response)
    },
    me: async (req, res) => {
        
        const response = await UserService.me(res.locals.token);

        if (typeof response === "string"){
            res.status(400).json(response)
            return
        }

        if (!response){
            res.status(404).json("user not found")
            return
        }

        res.status(200).json(response)
    },
    updateUser: async (req, res) => {
        const userData = req.body
        const id = req.params.id

        const response = await UserService.updateUser(userData, id)
        res.status(200).json(response)
    },
    createAdress: async (req, res) => {
        const adressData = req.body; 

        const response = await UserService.createAdress(res.locals.token, adressData);
        
        res.status(200).json(response);
    },
    updateDataAdress: async (req, res) => {
        const requestBody = req.body
        const AdressId = Number(req.params.id)
        
        const response = await UserService.updateDataAdress(AdressId, requestBody)

        res.status(200).json(response)
    },
    deleteAdress: async (req, res) => {
        const AdressId = Number(req.params.id)
        
        const response = await UserService.deleteAdress(AdressId)

        res.status(200).json(response)
    },
    getAdressById: async (req, res) => {
        const AdressId = Number(req.params.id)
        
        const response = await UserService.getAdressById(AdressId)

        res.status(200).json(response)
    },
    createOrder: async (req, res) => {
        const OrderData = req.body; 

        const response = await UserService.createOrder(res.locals.token, OrderData);
        
        res.status(200).json(response);
    },
    updateDataOrder: async (req, res) => {
        const requestBody = req.body
        const OrderId = Number(req.params.id)
        
        const response = await UserService.updateDataOrder(OrderId, requestBody)

        res.status(200).json(response)
    },
    deleteOrder: async (req, res) => {
        const OrderId = Number(req.params.id)
        
        const response = await UserService.deleteOrder(OrderId)

        res.status(200).json(response)
    },
    getOrderById: async (req, res) => {
        const OrderId = Number(req.params.id)
        
        const response = await UserService.getOrderById(OrderId)

        res.status(200).json(response)
    }
}