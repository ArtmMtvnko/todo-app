import React from 'react';
import { actionStyles } from './todo-action.styles';
import { Todo } from '~shared/types/todo.type';
import { Button, Switch } from '@blueprintjs/core';
import { useTodoModalStore } from '~store/todo-modal.store';

type TodoActionProps = {
	todo: Todo;
};

const TodoAction: React.FC<TodoActionProps> = ({ todo }) => {
	const { open } = useTodoModalStore();

	return (
		<div className={actionStyles}>
			<Button onClick={() => open(todo)}>View</Button>
			<Button>Delete</Button>
			<Switch large={true} style={{ margin: 0 }} />
		</div>
	);
};

export default TodoAction;
