import { Button } from '@blueprintjs/core';
import React from 'react';
import { Form } from 'react-final-form';
import { TodoDto } from '~shared/types/todo.type';
import { formStyles } from './todo-form.styles';
import todoSchema from '~shared/joi-schemas/todo.schema';
import { useTodosStore } from '~store/todos.store';
import { useTodoModalStore } from '~store/todo-modal.store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../input/Input.component';
import TextArea from '../textarea/textarea.components';
import CheckBox from '../checkbox/checkbox.component';
import { errorMessageStyles } from '../error-message/error-message.styles';

const TodoForm: React.FC = () => {
	const { addTodo, updateTodo } = useTodosStore();
	const {
		todoModalInfo: { todo, mode },
		close,
	} = useTodoModalStore();

	const initialValue = React.useMemo<TodoDto>(() => {
		return {
			title: todo === null ? '' : todo.title,
			content: todo === null ? '' : todo.content,
			completed: todo === null ? false : todo.completed,
			private: todo === null ? false : todo.private,
			authorId: 1,
		};
	}, [todo]);

	const validate = (values: TodoDto): boolean => {
		const { error } = todoSchema.validate(values, { abortEarly: true });

		if (error) {
			toast(error.message, {
				autoClose: 3000,
			});
			return false;
		}

		return true;
	};

	const submit = (values: TodoDto): void => {
		if (!validate(values)) return;

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
							<Input
								name="title"
								placeholder="Enter title name"
							/>
						</div>
						<div className="description">
							<label>Description</label>
							<TextArea
								name="content"
								placeholder="Enter description here"
							/>
						</div>
						<div>
							<label>Completed</label>
							<CheckBox name="completed" />
						</div>
						<div>
							<label>Private</label>
							<CheckBox name="private" />
						</div>
						<Button type="submit">{mode}</Button>
						<ToastContainer className={errorMessageStyles} />
					</form>
				);
			}}
		/>
	);
};

export default TodoForm;
