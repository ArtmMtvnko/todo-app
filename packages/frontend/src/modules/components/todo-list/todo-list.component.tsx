import React from 'react';
import { useTodosStore } from '~store/todos.store';
import TodoListItem from './todo-list-item.component';
import { todoListStyles } from './todo-list.styles';

const TodoList: React.FC = () => {
	const { todos } = useTodosStore();

	return (
		<div className={todoListStyles}>
			{todos.map((todo) => (
				<TodoListItem key={todo.id} todo={todo} />
			))}
		</div>
	);
};

export default TodoList;
