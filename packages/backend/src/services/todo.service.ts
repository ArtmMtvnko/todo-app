import { TodoType, TodoDtoType } from '../types/todos.type';
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

	async createTodo(todo: TodoDtoType): Promise<TodoType> {
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

	async updateTodo(id: number, todo: TodoDtoType): Promise<TodoType> {
		const updatedTodo = await this.prisma.todo.update({
			where: {
				id: id,
			},
			data: {
				...todo,
			},
		});

		return updatedTodo;
	}
}
