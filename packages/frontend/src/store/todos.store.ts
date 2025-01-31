import { create } from 'zustand';
import { todoService } from '~shared/services/todo.service';
import { Todo, TodoDto } from '~shared/types/todo.type';

interface ITodosStore {
	todos: Todo[];
	getTodos: () => void;
	addTodo: (todo: TodoDto) => void;
	deleteTodo: (id: number) => void;
	updateTodo: (id: number, todo: TodoDto) => void;
}

export const useTodosStore = create<ITodosStore>((set) => {
	return {
		todos: [],
		getTodos: async (): Promise<void> => {
			const fetchedTodos = await todoService.getAllTodos();
			set({
				todos: fetchedTodos,
			});
		},
		addTodo: async (todo: TodoDto): Promise<void> => {
			const createdTodo = await todoService.createTodo(todo);
			set((state) => {
				return {
					todos: [...state.todos, createdTodo],
				};
			});
		},
		deleteTodo: async (id: number): Promise<void> => {
			await todoService.deleteTodo(id);
			set((state) => {
				return {
					todos: state.todos.filter((todo) => todo.id !== id),
				};
			});
		},
		updateTodo: async (id: number, todo: TodoDto): Promise<void> => {
			const updatedTodo = await todoService.updateTodo(id, todo);
			set((state) => {
				return {
					todos: state.todos.map((todo) => {
						return todo.id === id ? updatedTodo : todo;
					}),
				};
			});
		},
	};
});
