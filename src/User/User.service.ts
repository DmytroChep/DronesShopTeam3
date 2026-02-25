import jwt, { sign } from "jsonwebtoken";
import { sendEmail } from "../config";
import { ENV } from "../config/env";
import { UserRepository } from "./User.repository";
import type { Email, ServiceContract } from "./User.types";

export const UserService: ServiceContract = {
	registration: async (UserData) => {
		const user = await UserRepository.registration(UserData);

		if (typeof user === "string") {
			return user;
		}

		return jwt.sign({ email: user.email }, ENV.SECRET_KEY, {
			expiresIn: "7d",
		});
	},
	login: async (UserData) => {
		const user = await UserRepository.login(UserData);
		if (!user) {
			return "user not found";
		}
		if (typeof user === "string") {
			return user;
		}

		return jwt.sign({ email: user.email }, ENV.SECRET_KEY, {
			expiresIn: "30d",
		});
	},
	me: async (JWT) => {
		console.log(JWT);

		const email = jwt.verify(JWT, ENV.SECRET_KEY) as Email;

		const user = await UserRepository.me(email.email);

		if (typeof user === "string") {
			return user;
		}

		const { password, ...userWithoutPassword } = user;

		return userWithoutPassword;
	},
	updateUser: async (userData, id) => {
		const response = await UserRepository.updateUser(userData, id);

		return response;
	},
	getUserWithRelations: async (id) => {
		const user = await UserRepository.getUserWithRelations(id);
		return user;
	},
	createAdress: async (JWT, adressData) => {
		const user = jwt.verify(JWT, ENV.SECRET_KEY) as Email;

		const response = await UserRepository.createAdress(user.email, adressData);

		if (typeof response === "string") {
			return response;
		}

		return response;
	},
	updateDataAdress: async (AdressId, AdressData) => {
		const Adress = await UserRepository.updateDataAdress(AdressId, AdressData);
		return Adress;
	},
	deleteAdress: async (AdressId) => {
		const Adress = await UserRepository.deleteAdress(AdressId);
		return Adress;
	},
	getAdressById: async (AdressId) => {
		const Adress = await UserRepository.getAdressById(AdressId);
		return Adress;
	},
	createOrder: async (JWT, OrderData) => {
		const user = jwt.verify(JWT, ENV.SECRET_KEY) as Email;

		const response = await UserRepository.createOrder(user.email, OrderData);

		if (typeof response === "string") {
			return response;
		}

		return response;
	},
	updateDataOrder: async (OrderId, OrderData) => {
		const Order = await UserRepository.updateDataOrder(OrderId, OrderData);
		return Order;
	},
	cancelOrder: async (OrderId) => {
		const Order = await UserRepository.cancelOrder(OrderId);
		return Order;
	},
	getOrderById: async (OrderId) => {
		const Order = await UserRepository.getOrderById(OrderId);
		return Order;
	},
	sendCodeVerify: async (gmail) => {
		const code = Math.floor(100000 + Math.random() * 900000);
		console.log(gmail);
		try {
			sendEmail(
				"hi! Here is your auth code:",
				`
                <div style="display: block; text-align: center; font-family: sans-serif;">
                    <p>your code is:</p>
                    <h1 style="font-size: 32px; color: #333; background-color: #6d6d6dff"><a href="http:
                    <hr style="width: 50%; margin: 20px auto;">
                </div>`,
				`${gmail}`,
			);
		} catch (error) {
			console.log(error);
			return String(error);
		}

		const status = await UserRepository.sendCodeVerify(code);
		return status;
	},
	checkIsCodeExists: async (code) => {
		const isCodeExists = await UserRepository.checkIsCodeExists(code);

		return isCodeExists
	},
	updatePassword: async (userData) => {
		const response = await UserRepository.updatePassword(userData);

		return response;
	},
};
