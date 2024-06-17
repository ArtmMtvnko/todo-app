import React from 'react';
import { actionStyles } from './todo-action.styles';
import { Todo } from '~shared/types/todo.type';
import { Button, Switch } from '@blueprintjs/core';
import { useTodoModalStore } from '~store/todo-modal.store';
import { useTodosStore } from '~store/todos.store';

type TodoActionProps = {
	todo: Todo;
};

const TodoAction: React.FC<TodoActionProps> = ({ todo }) => {
	const { open } = useTodoModalStore();
	const { deleteTodo, updateTodo } = useTodosStore();

	const changeCompletion = (): void => {
		updateTodo(todo.id, {
			title: todo.title,
			content: todo.content,
			completed: !todo.completed,
			private: todo.private,
			authorId: todo.authorId,
		});
	};

	return (
		<div className={actionStyles}>
			<Button onClick={() => open(todo)}>View</Button>
			<Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
			<Switch
				onChange={changeCompletion}
				checked={todo.completed}
				large={true}
				style={{ margin: 0 }}
			/>
		</div>
	);
};

export default TodoAction;
