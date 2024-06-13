import { Router } from 'express';

import todoController from '../../controllers/todo.controller';
import isExist from '@/utils/middleware/is-exist.middleware';
import { prisma } from '@/services/prisma.service';
import { TodoDtoType, TodoType } from '@/types/todos.type';
import validator from '@/utils/middleware/validator.middleware';
import todoSchema from '@/utils/joi-schemas/todo.schema';
import errorHandler from '@/utils/middleware/error-handler.middleware';
import tryCatch from '@/utils/try-catch';

const todosRouter: Router = Router();

todosRouter.get(
	'/all',
	tryCatch(todoController.getAllTodo.bind(todoController)),
);

todosRouter.get(
	'/:id',
	isExist<TodoType>(prisma.todo),
	tryCatch(todoController.getTodoById.bind(todoController)),
);

todosRouter.post(
	'/',
	validator<TodoDtoType>(todoSchema),
	tryCatch(todoController.createTodo.bind(todoController)),
);

todosRouter.delete(
	'/:id',
	isExist<TodoType>(prisma.todo),
	tryCatch(todoController.deleteTodo.bind(todoController)),
);

todosRouter.put(
	'/:id',
	isExist<TodoType>(prisma.todo),
	validator<TodoDtoType>(todoSchema),
	tryCatch(todoController.updateTodo.bind(todoController)),
);

todosRouter.use(errorHandler);

export default todosRouter;
