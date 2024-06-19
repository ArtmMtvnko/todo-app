import { create } from 'zustand';
import { Todo } from '~shared/types/todo.type';

interface TodoModalStore {
	todoModalInfo: {
		show: boolean;
		mode: 'Add' | 'Edit';
		todo: Todo | null;
	};
	open: (todo: Todo | null, mode: 'Add' | 'Edit') => void;
	close: () => void;
}

export const useTodoModalStore = create<TodoModalStore>((set) => {
	return {
		todoModalInfo: {
			show: false,
			mode: 'Add',
			todo: null,
		},
		open: (todo: Todo | null = null, mode = 'Add'): void => {
			set({
				todoModalInfo: {
					show: true,
					mode: mode,
					todo: todo,
				},
			});
		},
		close: (): void => {
			set({
				todoModalInfo: {
					show: false,
					mode: 'Add',
					todo: null,
				},
			});
		},
	};
});
