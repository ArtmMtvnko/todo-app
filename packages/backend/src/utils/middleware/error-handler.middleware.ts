import { Request, Response, NextFunction } from 'express';

const errorHandler = async (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	console.log('Error name: ', err.name);
	console.log('Error massage: ', err.message);
	next(err);
};

export default errorHandler;
