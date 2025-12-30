import jwt from "jsonwebtoken"
import { ENV } from "../config/env"
import { UserRepository } from "./User.repository"
import type { Email, ServiceContract } from "./User.types"

export const UserService: ServiceContract = {
    registration: async (UserData) => {
        const user = await UserRepository.registration(UserData)

        if (typeof user === "string"){
            return user
        }

        return jwt.sign({email: user.email}, ENV.SECRET_KEY, {
            expiresIn: "7d"
        })
    },
    login: async (UserData) => {
        const user = await UserRepository.login(UserData)
        if (!user){
            return "user not found"
        }
        if (typeof user === "string"){
            return user
        }

        
        
        return user
    },
    me: async (JWT) => {
        console.log(JWT)

        const email = jwt.verify(JWT, ENV.SECRET_KEY) as Email;


        const user = await UserRepository.me(email.email);

        if (typeof user === "string"){
            return user
        }

        const { password, ...userWithoutPassword } = user;

        return userWithoutPassword
    },
    updateUser: async (userData, id) => {
        const response = await UserRepository.updateUser(userData, id)

        return response
    },
    createAdress: async (JWT, adressData) => {
        const user = jwt.verify(JWT, ENV.SECRET_KEY) as Email;


        const response = await UserRepository.createAdress(user.email, adressData);

        if (typeof response === "string"){
            return response
        }

        return response
    },
    updateDataAdress: async (AdressId, AdressData) => {
        const Adress = await UserRepository.updateDataAdress(AdressId, AdressData)
        return Adress
    } ,
    deleteAdress: async (AdressId) => {
        const Adress = await UserRepository.deleteAdress(AdressId)
        return Adress
    }
}
