import * as React from 'react';
import { Dialog, DialogBody, Checkbox, Button } from '@blueprintjs/core';

import Btn from '~shared/components/button/button.component';
import todosService from '~shared/services/todos.service'; // to delete
import { useTodosStore } from '~store/counter.store';
import TodoTable from '~modules/components/todo-table/todo-table.component';
import { useTodoModalStore } from '~store/todo-modal.store';
import TodoViewModal from '~shared/components/todo-view-modal/todo-view-modal.component';
import TodoModal from '~shared/components/todo-modal/todo-modal.component';
// todosService.deleteTodo(6);
todosService.getAllTodos().then((data) => console.log(data)); // to delete
// todosService
// 	.createTodo({
// 		title: 'test',
// 		content: 'test',
// 		authorId: 1,
// 		completed: false,
// 		private: false,
// 	})
// 	.then((data) => console.log(data)); // to delete
const App = (): React.ReactNode => {
	const [count, setCount] = React.useState(0);
	const { getTodos, addTodo } = useTodosStore();
	const [showTodoModal, setShowTodoModal] = React.useState(false);
	const { todoModalData, close } = useTodoModalStore();

	const onIncrease = (): void => {
		setCount((prev) => {
			return prev + 1;
		});
	};

	React.useEffect(() => {
		getTodos();
	}, []);

	return (
		<div style={{ maxWidth: 1240, margin: '0 auto' }}>
			<h1>Todo project</h1>
			<p>{count}</p>
			<Btn text="Increase" onClick={onIncrease} />
			<Dialog onClose={() => console.log('asdf')} isOpen={false}>
				<DialogBody>
					<h1>Dialog</h1>
					<Checkbox />
				</DialogBody>
			</Dialog>
			<Button onClick={() => setShowTodoModal(true)}>Add</Button>
			<TodoTable />
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
