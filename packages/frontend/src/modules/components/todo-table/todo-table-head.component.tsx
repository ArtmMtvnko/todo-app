import React from 'react';
import { tableHeadStyles } from './todo-table.styles';

const TodoTableHead: React.FC = () => {
	return (
		<thead className={tableHeadStyles}>
			<tr>
				<th>Todo Title</th>
				<th>Description</th>
				<th className="actions">Actions</th>
			</tr>
		</thead>
	);
};

export default TodoTableHead;
