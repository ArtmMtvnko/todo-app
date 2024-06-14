import * as React from 'react';
import { Dialog, DialogBody, Spinner } from '@blueprintjs/core';

import Button from '~shared/components/button/button.component';
import todosService from '~shared/services/todos.service'; // to delete
todosService.getAllTodos().then((data) => console.log(data)); // to delete
todosService
	.createTodo({
		title: 'test',
		content: 'test',
		authorId: 1,
		completed: false,
		private: false,
	})
	.then((data) => console.log(data)); // to delete
const App = (): React.ReactNode => {
	const [count, setCount] = React.useState(0);

	const onIncrease = (): void => {
		setCount((prev) => {
			return prev + 1;
		});
	};

	return (
		<>
			<h1>Todo project</h1>
			<p>{count}</p>
			<Button text="Increase" onClick={onIncrease} />
			<Spinner intent="success" />
			<Dialog onClose={() => console.log('asdf')} isOpen={true}>
				<DialogBody>
					<h1>Dialog</h1>
				</DialogBody>
			</Dialog>
		</>
	);
};

export default App;
