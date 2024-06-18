import React from 'react';
import { Todo } from '~shared/types/todo.type';
import TodoAction from '~shared/components/todo-action/todo-action.component';
import { tableRowStyles } from './todo-table.styles';

type TodoRowProps = {
	todo: Todo;
};

const TodoTableRow: React.FC<TodoRowProps> = ({ todo }) => {
	return (
		<tr className={tableRowStyles}>
			<td>
				<span>{todo.title}</span>
			</td>
			<td>
				<span>{todo.content}</span>
			</td>
			<td>
				<TodoAction todo={todo} />
			</td>
		</tr>
	);
};

export default TodoTableRow;
