import React from 'react';
import TodoActionRow from './todo-table-action/todo-table-action.component';
import { Button, Switch } from '@blueprintjs/core';

type TodoRowProps = {
	title: string;
	description: string;
};

const TodoTableRow: React.FC<TodoRowProps> = ({ title, description }) => {
	return (
		<tr>
			<td style={{ width: '15%' }}>{title}</td>
			<td style={{ width: '60%' }}>{description}</td>
			<td style={{ width: '25%' }}>
				<TodoActionRow>
					<Button>View</Button>
					<Button>Delete</Button>
					<Switch large={true} inline={true} />
				</TodoActionRow>
			</td>
		</tr>
	);
};

export default TodoTableRow;
