import React from 'react';

type TodoRowProps = {
	title: string;
	description: string;
};

const TodoTableRow: React.FC<TodoRowProps> = ({ title, description }) => {
	return (
		<tr>
			<td>{title}</td>
			<td>{description}</td>
			<td>Test 3</td>
		</tr>
	);
};

export default TodoTableRow;
