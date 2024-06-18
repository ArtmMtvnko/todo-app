import { Button } from '@blueprintjs/core';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { TodoDto } from '~shared/types/todo.type';
import { formStyles } from './todo-form.styles';
import todoSchema from '~shared/joi-schemas/todo.schema';

type TodoFormProps = {
	actionName: string;
	action: (todo: TodoDto) => void;
	setShownState: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodoForm: React.FC<TodoFormProps> = ({
	actionName,
	setShownState,
	action,
}) => {
	const initialValue: TodoDto = {
		title: '',
		content: '',
		completed: false,
		private: false,
		authorId: 1,
	};

	const submit = (values: TodoDto): void => {
		const { error } = todoSchema.validate(values, { abortEarly: true });

		if (error) {
			alert(error.message);
			return;
		}

		console.log(values); // To delete
		action(values);
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
						<Button type="submit">{actionName}</Button>
					</form>
				);
			}}
		/>
	);
};

export default TodoForm;
