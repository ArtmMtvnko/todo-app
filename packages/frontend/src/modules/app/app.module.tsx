import * as React from 'react';
import { Dialog, DialogBody, Checkbox } from '@blueprintjs/core';

import Button from '~shared/components/button/button.component';
import todosService from '~shared/services/todos.service'; // to delete
import { useTodosStore } from '~store/counter.store';
import TodoTable from '~modules/components/todo-table/todo-table.component';
import { useTodoModalStore } from '~store/todo-modal.store';
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
	const { todos, getTodos } = useTodosStore();
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
		<>
			<h1>Todo project</h1>
			<p>{count}</p>
			<Button text="Increase" onClick={onIncrease} />
			<Dialog onClose={() => console.log('asdf')} isOpen={false}>
				<DialogBody>
					<h1>Dialog</h1>
					<Checkbox />
				</DialogBody>
			</Dialog>
			<TodoTable />
			{todos.map((todo) => (
				<h1 key={todo.id}>{todo.title}</h1>
			))}
			{todoModalData.show && (
				<TodoModal todo={todoModalData.todo} close={close} />
			)}
		</>
	);
};

export default App;
