import { Todo, TodoDto } from '~shared/types/todo.type';
import { HttpService } from './http.service';

class TodoService extends HttpService {
	constructor() {
		super();
	}

	public getAllTodos = async (): Promise<Todo[]> => {
		const response = await this.get<Todo[]>({
			url: 'todos/all',
		});
		return response.data;
	};

	public createTodo = async (todo: TodoDto): Promise<Todo> => {
		const response = await this.post<Todo>({
			url: 'todos',
			data: todo,
		});
		return response.data;
	};

	public updateTodo = async (id: number, todo: TodoDto): Promise<Todo> => {
		const response = await this.put<Todo>({
			url: `todos/${id}`,
			data: todo,
		});
		return response.data;
	};

	public deleteTodo = async (id: number): Promise<void> => {
		await this.delete({
			url: `todos/${id}`,
		});
	};
}

export const todoService = new TodoService();
