import axios, { AxiosInstance } from 'axios';
import { Todo, TodoDto } from '~shared/types/todo.type';
import { HttpService } from './http.service';

class TodosService {
	private axiosInstance: AxiosInstance;

	constructor(baseURL: string) {
		this.axiosInstance = axios.create({ baseURL });
	}

	public getAllTodos = async (): Promise<Todo[]> => {
		const response = await this.axiosInstance.get<Todo[]>('/todos/all');
		return response.data;
	};

	public createTodo = async (todo: TodoDto): Promise<Todo> => {
		const response = await this.axiosInstance.post<Todo>('/todos', todo);
		return response.data;
	};

	public updateTodo = async (id: number, todo: TodoDto): Promise<Todo> => {
		const response = await this.axiosInstance.put<Todo>(
			`/todos/${id}`,
			todo,
		);
		return response.data;
	};

	public deleteTodo = async (id: number): Promise<void> => {
		await this.axiosInstance.delete(`/todos/${id}`);
	};
}

const todosService = new TodosService('http://127.0.0.1:3030/api');
export default todosService;

class TodoService extends HttpService {
	constructor() {
		super();
	}

	public getAllTodos = async (): Promise<Todo[]> => {
		const response = await this.get({
			url: 'todos/all',
		});
		return response.data;
	};

	public createTodo = async (todo: TodoDto): Promise<Todo> => {
		const response = await this.post({
			url: 'todos',
			data: todo,
		});
		return response.data;
	};

	public updateTodo = async (id: number, todo: TodoDto): Promise<Todo> => {
		const response = await this.put({
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
