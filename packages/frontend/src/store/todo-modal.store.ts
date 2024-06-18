import { create } from 'zustand';
import { Todo } from '~shared/types/todo.type';

type todoModalData = {
	show: boolean;
	todo: Todo | null;
};

interface TodoModalStore {
	todoModalData: todoModalData;
	open: (todo: Todo) => void;
	close: () => void;
}

export const useTodoModalStore = create<TodoModalStore>((set) => {
	return {
		todoModalData: {
			show: false,
			todo: null,
		},
		open: (todo: Todo): void => {
			set({
				todoModalData: {
					show: true,
					todo: todo,
				},
			});
		},
		close: (): void => {
			set({
				todoModalData: {
					show: false,
					todo: null,
				},
			});
		},
	};
});
