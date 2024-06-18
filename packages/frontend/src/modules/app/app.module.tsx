import * as React from 'react';
import { Button } from '@blueprintjs/core';
import Btn from '~shared/components/button/button.component';
import { todoService } from '~shared/services/todo.service'; // to delete
import { useTodosStore } from '~store/todos.store';
import TodoTable from '~modules/components/todo-table/todo-table.component';
import { useTodoModalStore } from '~store/todo-modal.store';
import TodoViewModal from '~shared/components/todo-view-modal/todo-view-modal.component';
import TodoModal from '~shared/components/todo-modal/todo-modal.component';
import { useMediaQuery } from 'react-responsive';
import { appStyles } from './app.styles';
import TodoList from '~modules/components/todo-list/todo-list.component';
import TodoCarousel from '~modules/components/todo-carousel/todo-carousel.component';
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
	const [count, setCount] = React.useState(0);
	const { getTodos, addTodo } = useTodosStore();
	const [showTodoModal, setShowTodoModal] = React.useState(false);
	const { todoModalData, close } = useTodoModalStore();

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

	const onIncrease = (): void => {
		setCount((prev) => {
			return prev + 1;
		});
	};

	React.useEffect(() => {
		getTodos();
	}, []);

	return (
		<div className={appStyles}>
			<h1>Todo project</h1>
			<p>{count}</p>
			<Btn text="Increase" onClick={onIncrease} />
			<Button onClick={() => setShowTodoModal(true)}>Add</Button>
			{isMobile && <TodoList />}
			{isTablet && <TodoCarousel />}
			{isDesktop && <TodoTable />}
			{showTodoModal && (
				<TodoModal
					actionName="Add"
					action={addTodo}
					isOpen={showTodoModal}
					setShownState={setShowTodoModal}
				/>
			)}
			{todoModalData.show && (
				<TodoViewModal todo={todoModalData.todo} close={close} />
			)}
		</div>
	);
};

export default App;
