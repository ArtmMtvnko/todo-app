import { Button } from '@blueprintjs/core';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { TodoDto } from '~shared/types/todo.type';
import { formStyles } from './todo-form.styles';
import { useTodosStore } from '~store/counter.store';

type TodoFormProps = {
	actionName: string;
	setShownState: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodoForm: React.FC<TodoFormProps> = ({ actionName, setShownState }) => {
	const { addTodo } = useTodosStore();

	const initialValue: TodoDto = {
		title: '',
		content: '',
		completed: false,
		private: false,
		authorId: 1,
	};

	const submit = (values: TodoDto): void => {
		console.log(values);
		addTodo(values);
		setShownState(false);
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
						<div>
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
						<Button type="submit">{actionName}</Button>
					</form>
				);
			}}
		/>
	);
};

export default TodoForm;
