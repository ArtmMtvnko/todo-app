import { Response, Request } from 'express';
import TodoService from '@/services/todo.service';
import { TodoType } from './../types/todos.type';

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
		const todo: Omit<TodoType, 'id'> = {
			title: _.body.title,
			content: _.body.content,
		};

		const newTodo = await this.todoService.createTodo(todo);
		res.send(newTodo);
	}
}

const todoController = new TodoController(new TodoService());
export default todoController;
