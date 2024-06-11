import { Router } from 'express';

import todoController from '../../controllers/todo.controller';

const todosRouter: Router = Router();

todosRouter.get('/all', todoController.getAllTodo.bind(todoController));

todosRouter.get('/:id', todoController.getTodoById.bind(todoController));

todosRouter.post('/', todoController.createTodo.bind(todoController));

export default todosRouter;
