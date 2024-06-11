import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';

import AppRouter from './routes';

const port = 3030;
const app: Express = express();
const router = new AppRouter(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
	res.send('Hello Node!');
});

router.init();

// import { PrismaClient } from '@prisma/client';
// import { UserType } from './types/todos.type';
// const prisma = new PrismaClient();

// async function testPrisma(): Promise<UserType> {
// 	const newUser = await prisma.user.create({
// 		data: {
// 			name: 'test name',
// 			email: 'uniqueemail@gmail.com',
// 		},
// 	});

// 	return newUser;
// }

// console.log(testPrisma());

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
