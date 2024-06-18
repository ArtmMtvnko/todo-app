import React from 'react';
import TodoAction from '~shared/components/todo-action/todo-action.component';
import { Todo } from '~shared/types/todo.type';
import { descriptionStyles, todoListItemStyles } from './todo-list.styles';

type TodoListItemProps = {
	todo: Todo;
};

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
	return (
		<div className={todoListItemStyles}>
			<h2>{todo.title}</h2>
			<pre className={descriptionStyles}>{todo.content}</pre>
			<TodoAction todo={todo} />
		</div>
	);
};

export default TodoListItem;
