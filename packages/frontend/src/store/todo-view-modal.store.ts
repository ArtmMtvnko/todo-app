import { create } from 'zustand';
import { Todo } from '~shared/types/todo.type';

type todoViewModalData = {
	show: boolean;
	todo: Todo | null;
};

interface TodoViewModalStore {
	todoModalData: todoViewModalData;
	open: (todo: Todo) => void;
	close: () => void;
}

export const useTodoViewModalStore = create<TodoViewModalStore>((set) => {
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
