import { TodoType } from '../types/todos.type';
import { PrismaClient } from '@prisma/client';

export default class TodoService {
	private prisma;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async findAll(): Promise<TodoType[]> {
		const todos: TodoType[] = await this.prisma.todo.findMany();
		return todos;
	}

	async findById(id: number): Promise<TodoType | null> {
		const todo: TodoType | null = await this.prisma.todo.findFirst({
			where: {
				id: id,
			},
		});

		return todo;
	}

	async createTodo(todo: Omit<TodoType, 'id'>): Promise<TodoType> {
		const newTodo = await this.prisma.todo.create({
			data: todo,
		});

		return newTodo;
	}

	async deleteTodoById(id: number): Promise<void> {
		await this.prisma.todo.delete({
			where: {
				id: id,
			},
		});
	}

	async updateTodo(
		id: number,
		todo: Omit<TodoType, 'id'>,
	): Promise<TodoType> {
		const { title, content } = todo;

		const updatedTodo = await this.prisma.todo.update({
			where: {
				id: id,
			},
			data: {
				title,
				content,
			},
		});

		return updatedTodo;
	}
}
