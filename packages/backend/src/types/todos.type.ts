// TODO: Put a real types here
// import { Todo } from "@prisma/client";

export type TodoType = {
	id: number;
	title: string;
	content: string;
};

export type UserType = {
	id: number;
	email: string;
	name: string | null;
};

// TODO: Make separate type for Omit<TodoType, 'id'>
// TODO: You can grab type from prisma client import Todo from @prisma/client, type TodoType = Todo
