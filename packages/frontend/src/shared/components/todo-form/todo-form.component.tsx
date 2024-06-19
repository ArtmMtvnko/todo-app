import { Button } from '@blueprintjs/core';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { TodoDto } from '~shared/types/todo.type';
import { formStyles } from './todo-form.styles';
import todoSchema from '~shared/joi-schemas/todo.schema';
import { useTodosStore } from '~store/todos.store';
import { useTodoModalStore } from '~store/todo-modal.store';

const TodoForm: React.FC = () => {
	const { addTodo, updateTodo } = useTodosStore();
	const {
		todoModalInfo: { todo, mode },
		close,
	} = useTodoModalStore();

	const initialValue: TodoDto = {
		title: todo === null ? '' : todo.title,
		content: todo === null ? '' : todo.content,
		completed: todo === null ? false : todo.completed,
		private: todo === null ? false : todo.private,
		authorId: 1,
	};

	const submit = (values: TodoDto): void => {
		const { error } = todoSchema.validate(values, { abortEarly: true });

		if (error) {
			alert(error.message);
			return;
		}

		if (todo === null) {
			addTodo(values);
			close();
			return;
		}

		updateTodo(todo.id, values);
		close();
	};

	return (
		<Form
			onSubmit={submit}
			initialValues={initialValue}
			render={({ handleSubmit }) => {
				return (
					<form className={formStyles} onSubmit={handleSubmit}>
						<div>
							<label>Title</label>
							<Field
								name="title"
								component="input"
								placeholder="Enter title name"
							/>
						</div>
						<div className="description">
							<label>Description</label>
							<Field
								name="content"
								component="textarea"
								placeholder="Enter description here"
							/>
						</div>
						<div>
							<label>Completed</label>
							<Field
								name="completed"
								component="input"
								type="checkbox"
							/>
						</div>
						<div>
							<label>Private</label>
							<Field
								name="private"
								component="input"
								type="checkbox"
							/>
						</div>
						<Button type="submit">{mode}</Button>
					</form>
				);
			}}
		/>
	);
};

export default TodoForm;
