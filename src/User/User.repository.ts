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
    getUserWithRelations: async (id) => {
        const user = await client.user.findUnique({
            where: { id: Number(id) },
            include: {
                userAdress: true,
                order: true
            }
        })
        if (!user){
            return "incorrect id"
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
    cancelOrder: async (OrderId) => {
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
    },
    sendCodeVerify: async (code) => {
        try{
            const gmailCode = await client.gmailCode.create({data: {code: code}})
            if (!gmailCode){
                return "error"
            }
            return "status success"
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