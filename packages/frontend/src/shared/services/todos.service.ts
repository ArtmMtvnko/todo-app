import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Todo } from '~shared/types/todo.type';

class TodosService {
	private axiosInstance: AxiosInstance;

	constructor(baseURL: string) {
		this.axiosInstance = axios.create({ baseURL });
	}

	public getAllTodos = (): Promise<AxiosResponse<Todo[]>> => {
		return this.axiosInstance.get('/todos/all');
	};
}

const todosService = new TodosService('http://127.0.0.1:3030/api');
export default todosService;
