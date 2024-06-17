import React from 'react';
import { Todo } from '~shared/types/todo.type';
import TodoAction from '~shared/components/todo-action/todo-action.component';

type TodoRowProps = {
	todo: Todo;
};

const TodoTableRow: React.FC<TodoRowProps> = ({ todo }) => {
	return (
		<tr>
			<td style={{ width: '15%' }}>
				<span style={{ display: 'block', width: 150 }}>
					{todo.title}
				</span>
			</td>
			<td style={{ width: '60%' }}>
				<span style={{ display: 'block', width: 600 }}>
					{todo.content}
				</span>
			</td>
			<td style={{ width: '25%' }}>
				<TodoAction todo={todo} />
			</td>
		</tr>
	);
};

export default TodoTableRow;
