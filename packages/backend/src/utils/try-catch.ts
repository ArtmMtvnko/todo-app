import { NextFunction, Request, Response } from 'express';

type EndPointFunction = (req: Request, res: Response) => Promise<void>;

const tryCatch = (endPointFn: EndPointFunction) => {
	return async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		try {
			await endPointFn(req, res);
		} catch (error) {
			next(error);
		}
	};
};

export default tryCatch;
