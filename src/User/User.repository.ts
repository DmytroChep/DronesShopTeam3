import { client } from "../config/client";
import { compare, hash } from "bcrypt";
import type { RepositoryContract } from "./User.types";
import { Prisma } from "../generated/prisma";

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
}