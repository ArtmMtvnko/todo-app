import React from 'react';
import TodoActionRow from './todo-table-action/todo-table-action.component';
import { Button, Switch } from '@blueprintjs/core';
import { Todo } from '~shared/types/todo.type';
import { useTodoModalStore } from '~store/todo-modal.store';

type TodoRowProps = {
	todo: Todo;
};

const TodoTableRow: React.FC<TodoRowProps> = ({ todo }) => {
	const { open } = useTodoModalStore();

	return (
		<tr>
			<td style={{ width: '15%' }}>{todo.title}</td>
			<td style={{ width: '60%' }}>{todo.content}</td>
			<td style={{ width: '25%' }}>
				<TodoActionRow>
					<Button onClick={() => open(todo)}>View</Button>
					<Button>Delete</Button>
					<Switch large={true} style={{ margin: 0 }} />
				</TodoActionRow>
			</td>
		</tr>
	);
};

export default TodoTableRow;
