import React from 'react';
import { tableHeadStyles } from './todo-table.styles';

const TodoTableHead: React.FC = () => {
	return (
		<thead className={tableHeadStyles}>
			<tr>
				<th>Todo Title</th>
				<th>Description</th>
				<th style={{ textAlign: 'center' }}>Actions</th>
			</tr>
		</thead>
	);
};

export default TodoTableHead;
