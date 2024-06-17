import React from 'react';
import TodoTableRow from './todo-table-row.component';
import { useTodosStore } from '~store/todos.store';
import { tableBodyStyles } from './todo-table.styles';

const TodoTableBody: React.FC = () => {
	const { todos } = useTodosStore();

	return (
		<tbody className={tableBodyStyles}>
			{todos.map((todo) => (
				<TodoTableRow key={todo.id} todo={todo} />
			))}
		</tbody>
	);
};

export default TodoTableBody;
