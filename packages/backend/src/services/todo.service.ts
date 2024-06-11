import { TodoType } from '../types/todos.type';
import { PrismaClient } from '@prisma/client';

export default class TodoService {
	private prisma = new PrismaClient();

	async findAll(): Promise<TodoType[]> {
		const todos: TodoType[] = await this.prisma.todo.findMany();
		return todos;
	}

	async createTodo(todo: Omit<TodoType, 'id'>): Promise<TodoType> {
		const newTodo = await this.prisma.todo.create({
			data: todo,
		});

		return newTodo;
	}
}
