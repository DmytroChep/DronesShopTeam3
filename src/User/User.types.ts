import { Adress, Prisma } from "../generated/prisma/client";
import type { Request, Response } from "express";


export type User = Prisma.UserGetPayload<{}>;
export type UserWithoutPassword = Omit<Prisma.UserGetPayload<{}>, "password">;
export type LoginUser = Omit<Prisma.UserGetPayload<{}>, "firstname" | "secondName" | "avatar" | "isAdmin">;
export type UpdateUser = Prisma.UserUncheckedUpdateInput
export type UserWithRelations = Partial<Prisma.UserGetPayload<{include: {
    userAdress?: true,
    order?: true
}}>>

export type createAdress = Prisma.AdressCreateInput
export type UpdateAdress = Prisma.AdressUncheckedCreateInput

export type Order = Prisma.OrderGetPayload<{}>
export type createOrder = Prisma.OrderCreateInput
export type UpdateOrder = Prisma.OrderUncheckedCreateInput

export type Email = {email: string}

export type CreateUser = Prisma.UserUncheckedCreateInput;

export interface RepositoryContract {
    registration: (UserData: CreateUser) => Promise<CreateUser | string >,
    login: (UserData: LoginUser) => Promise<LoginUser | string | null >,
    me: (UserEmail: string) => Promise<User|string>,
    updateUser: (userData: UpdateUser, id: number) => Promise<UpdateUser| string>,

    createAdress: (email: string, adressData: Adress) => Promise<UserWithRelations|string>,
    updateDataAdress: (AdressId:number, AdressData: UpdateAdress) => Promise<UpdateAdress|string>,
    deleteAdress: (AdressId:number) => Promise<Adress|string>,
    getAdressById: (adressId:number) => Promise<Adress| string>,

    createOrder: (email: string, OrderData: Order) => Promise<UserWithRelations|string>,
    updateDataOrder: (OrderId:number, OrderData: UpdateOrder) => Promise<UpdateOrder|string>,
    deleteOrder: (OrderId:number) => Promise<Order|string>,
    getOrderById: (OrderId:number) => Promise<Order| string>
}

export interface ServiceContract {
    registration: (UserData: CreateUser) => Promise<string>,
    login: (UserData: LoginUser) => Promise<LoginUser | string>,
    me: (JWT: string) => Promise<UserWithoutPassword|string|null>,
    updateUser: (userData: UpdateUser, id:number) => Promise<UpdateUser| string>,
    createAdress: (JWT: string, adressData: Adress) => Promise<UserWithRelations|string>,
    updateDataAdress: (AdressId:number, AdressData: UpdateAdress) => Promise<UpdateAdress|string>,
    deleteAdress: (AdressId:number) => Promise<Adress|string>,
    getAdressById: (adressId:number) => Promise<Adress| string>,
    createOrder: (JWT: string, OrderData: Order) => Promise<UserWithRelations|string>,
    updateDataOrder: (OrderId:number, OrderData: UpdateOrder) => Promise<UpdateOrder|string>,
    deleteOrder: (OrderId:number) => Promise<Order|string>,
    getOrderById: (OrderId:number) => Promise<Order| string>
}

export interface ControllerContract {
    registration: (req: Request<object, CreateUser | string, CreateUser, object>, res: Response<CreateUser|string>) => Promise<void>,
    login: (req: Request<object, LoginUser | string, LoginUser>, res: Response<LoginUser|string>) => Promise<void>,
    me: (req: Request<object, UserWithoutPassword, string, object, {token: string}>, res: Response<UserWithoutPassword|string, {token: string}>) => Promise<void>,
    updateUser: (req: Request<{id: number}, UpdateUser| string, User, object>, res: Response<UpdateUser| string>) => Promise<void>,
   
    createAdress: (req: Request<object, UserWithRelations|string, Adress, {token: string}>, res: Response<UserWithRelations|string>) => Promise<void>,
    updateDataAdress: (req: Request<{id:number}, UpdateAdress|string, UpdateAdress>, res: Response<UpdateAdress|string>)=> Promise<void>;
    deleteAdress: (req: Request<{id:number}, Adress|string, Adress>, res: Response<Adress|string>)=> Promise<void>,
    getAdressById: (req: Request<{id:number}, Adress|string, Adress>, res: Response<Adress|string>)=> Promise<void>,
    
    createOrder: (req: Request<object, UserWithRelations|string, Order, {token: string}>, res: Response<UserWithRelations|string>) => Promise<void>,
    updateDataOrder: (req: Request<{id:number}, UpdateOrder|string, UpdateOrder>, res: Response<UpdateOrder|string>)=> Promise<void>;
    deleteOrder: (req: Request<{id:number}, Order|string, Order>, res: Response<Order|string>)=> Promise<void>,
    getOrderById: (req: Request<{id:number}, Order|string, Order>, res: Response<Order|string>)=> Promise<void>,
}


