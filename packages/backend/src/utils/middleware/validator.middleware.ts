import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

const validator = <T>(schema: Schema) => {
	return async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		const body: T = req.body;

		const { error } = schema.validate(body, {
			abortEarly: false,
		});

		if (error) {
			const errorMessage = error.details
				.map((detail) => detail.message)
				.join(', ');
			res.status(400).send({ error: errorMessage });
			return;
		}
		next();
	};
};

export default validator;
