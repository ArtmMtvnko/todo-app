import * as React from 'react';
import { Button } from '@blueprintjs/core';
import { todoService } from '~shared/services/todo.service'; // to delete
import { useTodosStore } from '~store/todos.store';
import TodoTable from '~modules/components/todo-table/todo-table.component';
import { useTodoViewModalStore } from '~store/todo-view-modal.store';
import TodoViewModal from '~shared/components/todo-view-modal/todo-view-modal.component';
import TodoModal from '~shared/components/todo-modal/todo-modal.component';
import { useMediaQuery } from 'react-responsive';
import { appStyles } from './app.styles';
import TodoList from '~modules/components/todo-list/todo-list.component';
import TodoCarousel from '~modules/components/todo-carousel/todo-carousel.component';
import { useTodoModalStore } from '~store/todo-modal.store';
// todosService.deleteTodo(6);
todoService.getAllTodos().then((data) => console.log(data)); // to delete
// todosService.updateTodo(10, {
// 	title: 'test updated',
// 	content: 'test updated',
// 	authorId: 1,
// 	completed: true,
// 	private: false,
// });
// todosService
// 	.createTodo({
// 		title: 'test',
// 		content: 'test',
// 		authorId: 1,
// 		completed: false,
// 		private: false,
// 	})
// 	.then((data) => console.log(data)); // to delete
// TODO: remove inline styles!!! <div style={{ width: 10, ... }}></div>
const App = (): React.ReactNode => {
	const { getTodos } = useTodosStore();
	const { todoModalInfo, open } = useTodoModalStore();
	const { todoModalData, close } = useTodoViewModalStore();

	const isDesktop = useMediaQuery({
		minWidth: 768,
	});

	const isMobile = useMediaQuery({
		maxWidth: 425,
	});

	const isTablet = useMediaQuery({
		minWidth: 425,
		maxWidth: 768,
	});

	React.useEffect(() => {
		getTodos();
	}, []);

	return (
		<div className={appStyles}>
			<h1>Todo project</h1>
			<Button onClick={() => open(null, 'Add')}>Add</Button>
			{isMobile && <TodoList />}
			{isTablet && <TodoCarousel />}
			{isDesktop && <TodoTable />}
			{todoModalInfo.show && <TodoModal />}
			{todoModalData.show && (
				<TodoViewModal todo={todoModalData.todo} close={close} />
			)}
		</div>
	);
};

export default App;
