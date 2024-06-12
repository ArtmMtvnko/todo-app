import { Router } from 'express';

import todoController from '../../controllers/todo.controller';
import isExist from '@/utils/middleware/isExist.middleware';
import { prisma } from '@/services/prisma.service';
import { TodoType } from '@/types/todos.type';

const todosRouter: Router = Router();

todosRouter.get('/all', todoController.getAllTodo.bind(todoController));

todosRouter.get(
	'/:id',
	isExist<TodoType>(prisma.todo),
	todoController.getTodoById.bind(todoController),
);

todosRouter.post('/', todoController.createTodo.bind(todoController));

todosRouter.delete(
	'/:id',
	isExist<TodoType>(prisma.todo),
	todoController.deleteTodo.bind(todoController),
);

todosRouter.put(
	'/:id',
	isExist<TodoType>(prisma.todo),
	todoController.updateTodo.bind(todoController),
);

export default todosRouter;
