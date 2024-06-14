export type Todo = {
	id: number;
	title: string;
	content: string;
	private: boolean;
	completed: boolean;
	createdAt: Date;
	authorId: number;
};

export type TodoDto = Omit<Todo, 'id' | 'createdAt'>;
