import { Router } from 'express';

import todoController from '../../controllers/todo.controller';
import isExist from '@/utils/middleware/isExist.middleware';
import { prisma } from '@/services/prisma.service';
import { TodoDtoType, TodoType } from '@/types/todos.type';
import validator from '@/utils/middleware/validator.middleware';
import todoSchema from '@/utils/joi-schemas/todo.schema';

const todosRouter: Router = Router();

todosRouter.get('/all', todoController.getAllTodo.bind(todoController));

todosRouter.get(
	'/:id',
	isExist<TodoType>(prisma.todo),
	todoController.getTodoById.bind(todoController),
);

todosRouter.post(
	'/',
	validator<TodoDtoType>(todoSchema),
	todoController.createTodo.bind(todoController),
);

todosRouter.delete(
	'/:id',
	isExist<TodoType>(prisma.todo),
	todoController.deleteTodo.bind(todoController),
);

todosRouter.put(
	'/:id',
	isExist<TodoType>(prisma.todo),
	validator<TodoDtoType>(todoSchema),
	todoController.updateTodo.bind(todoController),
);

export default todosRouter;
