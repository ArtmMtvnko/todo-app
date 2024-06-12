import { PrismaPromise } from '@prisma/client';

export interface PrismaModel<T> {
	findFirst: (args: { where: { id: number } }) => PrismaPromise<T | null>;
}
