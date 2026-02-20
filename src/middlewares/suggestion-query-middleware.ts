import type { NextFunction, Request, Response } from "express";

// Типизируем Query (4-й аргумент в Request)
export function suggestionsQueryMiddleware(
	req: Request<{ new?: string; popular?: string }>,
	res: Response,
	next: NextFunction,
) {
	const newFilter = req.query.new;
	const popularFilter = req.query.popular;

	if (newFilter && popularFilter) {
		res
			.status(400)
			.send("Request must have only one of these params: popular OR new");
		return;
	}

	next();
}
