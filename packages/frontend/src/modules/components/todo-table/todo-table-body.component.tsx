import React from 'react';
import TodoTableRow from './todo-table-row.component';
import { useTodosStore } from '~store/counter.store';
import { tableBodyStyles } from './todo-table.styles';

const TodoTableBody: React.FC = () => {
	const { todos } = useTodosStore();

	return (
		<tbody className={tableBodyStyles}>
			{todos.map((todo) => (
				<TodoTableRow
					key={todo.id}
					title={todo.title}
					description={todo.content}
				/>
			))}
		</tbody>
	);
};

export default TodoTableBody;
