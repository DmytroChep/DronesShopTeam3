import { client } from "../config/client";
import { compare, hash } from "bcrypt";
import type { RepositoryContract } from "./User.types";
import { Prisma } from "../generated/prisma";
import { sendEmail } from "../config";

export const UserRepository: RepositoryContract = {
    registration: async (UserData) => {
        UserData.password = await hash(UserData.password, 10)
        const user = client.user.create({
            data: UserData
        })

        if (!(client.user.findUnique({
            where: {email: UserData.email}
        }))){
            return "user already exists!"
        }

        return user
    },
    login: async (UserData) => {
        const user = await client.user.findUnique({where: {email: UserData.email}})
        if (user == null){
            return "user doesn't exists"
        }
        if (!await compare(UserData.password, user.password)){
            return "password not correct"
        }
        sendEmail("hi! Here is your auth code:", `
                <div style="display: block; text-align: center; font-family: sans-serif;">
                    <p>your code is:</p>
                    <h1 style="font-size: 32px; color: #333;">123321</h1>
                    <hr style="width: 50%; margin: 20px auto;">
                    <h4 style="color: #666;">have a good day!</h4>
                </div>`, "shahblet1234@gmail.com")
        return user
    },
    me: async (UserEmail) => {
        const user = await client.user.findUnique({where: {email: UserEmail}})
        if (user === null){
            return "user not found"
        }
        return user
    },
    updateUser: async (userData, id) => {
        const user = await client.user.update({
                where: {
                    id: Number(id), 
                },
                data: userData
            })
        
        if (!user){
            return "user not found"
        }

        return user
    },
    createAdress: async (email, adressData) => {
        const user = await client.user.update({
            where: { email: email },
            data: {
            userAdress: {
                create: adressData
            }
            },
            include: {
                userAdress: true
            }
        })
        return user;
    },
    
    updateDataAdress: async (AdressId, AdressData) => {
        try{
            const Adress = await client.adress.update({
                where: {
                    id: AdressId, 
                },
                data: AdressData
            })
    
            
            return Adress
        }catch(error){
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code === "P2024"){
                    return "error code P2024"
                }
            }
            throw error
        }
        
    },
    deleteAdress: async (AdressId) => {
        try{
            const Adress = await client.adress.delete(
                {
                    where: {id: AdressId}
                }
            )
            console.log(Adress)
            return Adress
        }catch(error){
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code === "P2024"){
                    return "error code P2024"
                }
            }
            throw error
        }
    },
    getAdressById: async (id) => {
        try{
            const Adress = await client.adress.findUnique(
                {
                    where: {id: id}
                }
            )
            if (!Adress){
                return "incorrect id"
            }
            return Adress
        }catch(error){
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code === "P2024"){
                    return "error code P2024"
                }
            }
            throw error
        }
    },
    createOrder: async (email, OrderData) => {
        const user = await client.user.update({
            where: { email: email },
            data: {
                order: {
                    create: OrderData
                }
            },
            include: {
                order: true
            }
        })
        return user;
    },
    
    updateDataOrder: async (OrderId, OrderData) => {
        try{
            const Order = await client.order.update({
                where: {
                    id: OrderId, 
                },
                data: OrderData
            })
    
            
            return Order
        }catch(error){
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code === "P2024"){
                    return "error code P2024"
                }
            }
            throw error
        }
        
    },
    deleteOrder: async (OrderId) => {
        try{
            const Order = await client.order.delete(
                {
                    where: {id: OrderId}
                }
            )
            console.log(Order)
            return Order
        }catch(error){
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code === "P2024"){
                    return "error code P2024"
                }
            }
            throw error
        }
    },
    getOrderById: async (id) => {
        try{
            const Order = await client.order.findUnique(
                {
                    where: {id: id}
                }
            )
            if (!Order){
                return "incorrect id"
            }
            return Order
        }catch(error){
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code === "P2024"){
                    return "error code P2024"
                }
            }
            throw error
        }
    }
}