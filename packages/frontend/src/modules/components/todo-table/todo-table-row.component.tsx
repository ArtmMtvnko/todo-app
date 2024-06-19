import React from 'react';
import { Todo } from '~shared/types/todo.type';
import TodoAction from '~shared/components/todo-action/todo-action.component';
import { tableRowStyles, titleStyles } from './todo-table.styles';
import { useTodoModalStore } from '~store/todo-modal.store';

type TodoRowProps = {
	todo: Todo;
};

const TodoTableRow: React.FC<TodoRowProps> = ({ todo }) => {
	const { open } = useTodoModalStore();

	return (
		<tr className={tableRowStyles}>
			<td
				className={titleStyles}
				onDoubleClick={() => open(todo, 'Edit')}
			>
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
