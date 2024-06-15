import React from 'react';
import TodoTableHead from './todo-table-head.component';

const TodoTable: React.FC = () => {
	return (
		<table>
			<TodoTableHead />
			<tbody>
				<tr>
					<td>Test 1</td>
					<td>Test 2</td>
					<td>Test 3</td>
				</tr>
			</tbody>
		</table>
	);
};

export default TodoTable;
