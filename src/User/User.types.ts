import { Adress, Prisma } from "../generated/prisma/client";
import type { Request, Response } from "express";


export type User = Prisma.UserGetPayload<{}>;
export type UserWithoutPassword = Omit<Prisma.UserGetPayload<{}>, "password">;
export type LoginUser = Omit<Prisma.UserGetPayload<{}>, "firstname" | "secondName" | "avatar" | "isAdmin">;
export type UpdateUser = Prisma.UserUncheckedUpdateInput
export type UserWithRelations = Prisma.UserGetPayload<{include: {
    userAdress: true
}}>

export type createAdress = Prisma.AdressCreateInput
export type UpdateAdress = Prisma.AdressUncheckedCreateInput

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
}

export interface ServiceContract {
    registration: (UserData: CreateUser) => Promise<string>,
    login: (UserData: LoginUser) => Promise<LoginUser | string>,
    me: (JWT: string) => Promise<UserWithoutPassword|string|null>,
    updateUser: (userData: UpdateUser, id:number) => Promise<UpdateUser| string>,
    createAdress: (JWT: string, adressData: Adress) => Promise<UserWithRelations|string>,
    updateDataAdress: (AdressId:number, AdressData: UpdateAdress) => Promise<UpdateAdress|string>,
    deleteAdress: (AdressId:number) => Promise<Adress|string>,
}

export interface ControllerContract {
    registration: (req: Request<object, CreateUser | string, CreateUser, object>, res: Response<CreateUser|string>) => Promise<void>,
    login: (req: Request<object, LoginUser | string, LoginUser>, res: Response<LoginUser|string>) => Promise<void>,
    me: (req: Request<object, UserWithoutPassword, string, object, {token: string}>, res: Response<UserWithoutPassword|string, {token: string}>) => Promise<void>,
    updateUser: (req: Request<{id: number}, UpdateUser| string, User, object>, res: Response<UpdateUser| string>) => Promise<void>,
    createAdress: (req: Request<object, UserWithRelations|string, Adress, {token: string}>, res: Response<UserWithRelations|string>) => Promise<void>,
    updateDataAdress: (req: Request<{id:number}, UpdateAdress|string, UpdateAdress>, res: Response<UpdateAdress|string>)=> Promise<void>;
    deleteAdress: (req: Request<{id:number}, Adress|string, Adress>, res: Response<Adress|string>)=> Promise<void>;
}
