import * as React from 'react';
import { Button } from '@blueprintjs/core';
import { useTodosStore } from '~store/todos.store';
import { useTodoViewModalStore } from '~store/todo-view-modal.store';
import TodoViewModal from '~shared/components/todo-view-modal/todo-view-modal.component';
import TodoModal from '~shared/components/todo-modal/todo-modal.component';
import { appStyles } from './app.styles';
import { useTodoModalStore } from '~store/todo-modal.store';
import TodoContainer from '~modules/components/todo-container/todo-container.component';

const App = (): React.ReactNode => {
	const { getTodos } = useTodosStore();
	const { todoModalInfo, open } = useTodoModalStore();
	const { todoModalData, close } = useTodoViewModalStore();

	React.useEffect(() => {
		getTodos();
	}, []);

	return (
		<div className={appStyles}>
			<h1>Todo project</h1>
			<Button onClick={() => open(null, 'Add')}>Add</Button>

			<TodoContainer />

			{todoModalInfo.show && <TodoModal />}

			{todoModalData.show && (
				<TodoViewModal todo={todoModalData.todo} close={close} />
			)}
		</div>
	);
};

export default App;
