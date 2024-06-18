import React from 'react';
import { useTodosStore } from '~store/todos.store';
import TodoListItem from './todo-list-item.component';

const TodoList: React.FC = () => {
	const { todos } = useTodosStore();

	return (
		<div>
			{todos.map((todo) => (
				<TodoListItem key={todo.id} todo={todo} />
			))}
		</div>
	);
};

export default TodoList;
