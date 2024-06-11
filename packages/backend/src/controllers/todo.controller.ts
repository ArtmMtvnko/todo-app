import { Response, Request } from 'express';
import TodoService from '@/services/todo.service';
import { TodoType, TodoDtoType } from './../types/todos.type';
import { prisma } from '@/services/prisma.service';

export class TodoController {
	constructor(private todoService: TodoService) {}

	async getAllTodo(_: Request, res: Response): Promise<void> {
		// TODO: Write your implementation here
		// const todos = await this.todoService.findAll();
		// res.send(todos);

		const todos: TodoType[] = await this.todoService.findAll();
		res.send(todos);
	}

	async getTodoById(_: Request, res: Response): Promise<void> {
		const id = Number(_.params.id);

		const todo = await this.todoService.findById(id);
		res.send(todo);
	}

	async createTodo(_: Request, res: Response): Promise<void> {
		const todo: TodoDtoType = {
			title: _.body.title,
			content: _.body.content,
		};

		const newTodo = await this.todoService.createTodo(todo);
		res.send(newTodo);
	}

	async deleteTodo(_: Request, res: Response): Promise<void> {
		const id = Number(_.params.id);

		await this.todoService.deleteTodoById(id);

		res.status(204).send('Todo has been deleted');
	}

	async updateTodo(_: Request, res: Response): Promise<void> {
		const id = Number(_.params.id);
		const newTodo: TodoType = _.body;

		const updatedTodo = await this.todoService.updateTodo(id, newTodo);
		res.send(updatedTodo);
	}
}

const todoController = new TodoController(new TodoService(prisma));
export default todoController;
