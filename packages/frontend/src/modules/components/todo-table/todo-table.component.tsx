import React from 'react';
import TodoTableHead from './todo-table-head.component';
import { tableStyles } from './todo-table.styles';
import TodoTableBody from './todo-table-body.component';

const TodoTable: React.FC = () => {
	return (
		<table className={tableStyles}>
			<TodoTableHead />
			<TodoTableBody />
		</table>
	);
};

export default TodoTable;
