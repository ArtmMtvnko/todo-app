import { create } from 'zustand';
import todosService from '~shared/services/todos.service';
import { Todo, TodoDto } from '~shared/types/todo.type';

interface CounterStore {
	counter: number;
	updateCounter: (offset: number) => () => void;
	resetCounter: () => void;
}

export const useCounterStore = create<CounterStore>((set) => {
	return {
		counter: 0,
		updateCounter: (offset: number) => {
			return (): void => {
				set((state) => {
					return {
						counter: state.counter + offset,
					};
				});
			};
		},
		resetCounter: (): void => {
			set({
				counter: 0,
			});
		},
	};
});

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
			const fetchedTodos = await todosService.getAllTodos();
			set({
				todos: fetchedTodos,
			});
		},
		addTodo: async (todo: TodoDto): Promise<void> => {
			const createdTodo = await todosService.createTodo(todo);
			set((state) => {
				return {
					todos: [...state.todos, createdTodo],
				};
			});
		},
		deleteTodo: async (id: number): Promise<void> => {
			await todosService.deleteTodo(id);
			set((state) => {
				return {
					todos: state.todos.filter((todo) => todo.id !== id),
				};
			});
		},
		updateTodo: async (id: number, todo: TodoDto): Promise<void> => {
			const updatedTodo = await todosService.updateTodo(id, todo);
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
