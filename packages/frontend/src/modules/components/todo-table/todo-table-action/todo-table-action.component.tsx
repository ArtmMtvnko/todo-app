import React from 'react';
import { actionStyles } from './todo-table-action.styles';

type TodoActionProps = {
	children: React.ReactNode;
};

const TodoActionRow: React.FC<TodoActionProps> = ({ children }) => {
	return <div className={actionStyles}>{children}</div>;
};

export default TodoActionRow;
