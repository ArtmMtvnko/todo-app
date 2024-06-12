import { PrismaModel } from '@/types/prismaModel.type';
import { Request, Response, NextFunction } from 'express';

const isExist = <T>(model: PrismaModel<T>) => {
	return async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		const id = Number(req.params.id);
		// Todo: maybe it is not a good idea to check is id number, mb it can be as string
		if (isNaN(id)) {
			res.status(404).send({ error: 'malformatted id' });
			return;
		}

		const entrie = await model.findFirst({
			where: {
				id: id,
			},
		});

		if (!entrie) {
			res.status(404).send({
				message: 'No entrie with such id was found',
			});
			return;
		}

		next();
	};
};

export default isExist;
